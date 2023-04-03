import React, { useEffect, useMemo, useState } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { GlobalStyle, Wrapper } from "./Layout.style";
import {
    getAllProducts,
    savePurchasesArrToLocalStorage,
    saveLikedProductsArrToLocalStorage,
    amountOfBuyProduct
} from "../../store/actions";

export const ViewContext = React.createContext("");

export function Layout() {
    const dispatch = useDispatch();
    const products = useSelector(state => state.buy.purchases, shallowEqual);
    const likedProducts = useSelector(state => state.like.likedProducts, shallowEqual);
    const [view, setView] = useState(JSON.parse(localStorage.getItem("view")) === null ? "card" : JSON.parse(localStorage.getItem("view")));

    useEffect(() => {
        dispatch(getAllProducts());
    }, []);

    useEffect(()=>{
        localStorage.setItem("view", JSON.stringify(view));
    }, [view])

    useEffect(() => {
        dispatch(amountOfBuyProduct());
        dispatch(savePurchasesArrToLocalStorage());
    }, [products, dispatch]);

    useEffect(() => {
        dispatch(saveLikedProductsArrToLocalStorage());
    }, [likedProducts, dispatch]);

    const setStateOfProductList = () => {
        setView("list");
    };

    const setStateOfProductCard = () => {
        setView("card");
    };

    const context = {
            view,
            setStateOfProductList,
            setStateOfProductCard,
        };

    return (
        <Wrapper>
            <ViewContext.Provider value={context}>
                <GlobalStyle/>
                <Header/>
                <Outlet/>
                <Footer/>
            </ViewContext.Provider>
        </Wrapper>
    );
}