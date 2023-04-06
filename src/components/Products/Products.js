import React from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { ProductsWrapper, Th, Table, TableWrapper } from "./Products.style.js";
import { ProductElement } from "./Product";
import { addToLikedProducts, addProductToPurchases } from "../../store/actions";

export function Products({ buttonText, onProductBuyButtonClick, view }) {
    const allProducts = useSelector(state => state.allProducts.allProducts, shallowEqual);
    const likedProducts = useSelector(state => state.like.likedProducts, shallowEqual);
    const dispatch = useDispatch();

    const addToLikedProductsArr = item => {
        dispatch(addToLikedProducts(item));
    };

    const addToPurchasesArr = item => {
        dispatch(addProductToPurchases(item));
    };

    const isLiked = product => {
        return likedProducts.some(likedItem => likedItem.article === product.article);
    };

    return (
        view === "list" ? (
                <TableWrapper>
            <Table>
                <tbody>
                <tr>
                    <Th>Фото</Th>
                    <Th>Назва</Th>
                    <Th>Ціна</Th>
                    <Th>Артикль</Th>
                    <Th>Колір</Th>
                    <Th>Кнопка</Th>
                </tr>
                {allProducts.map((product) => {
                    return (
                        <ProductElement view ={view}
                                        buttonText={buttonText}
                                        key={String(product.article)}
                                        product={product}
                                        likeArr={likedProducts}
                                        onBuyButtonClick={addToPurchasesArr}
                                        isLiked={isLiked(product)}
                                        onAddToLikedButtonClick={addToLikedProductsArr}
                                        handleButtonClick={onProductBuyButtonClick}
                        />
                    );
                })}
                </tbody>
            </Table></TableWrapper>) : (
            <ProductsWrapper view={view}>
                {allProducts.map((product) => {
                    return (
                        <ProductElement view ={view}
                                        buttonText={buttonText}
                                        key={String(product.article)}
                                        product={product}
                                        likeArr={likedProducts}
                                        onBuyButtonClick={addToPurchasesArr}
                                        isLiked={isLiked(product)}
                                        onAddToLikedButtonClick={addToLikedProductsArr}
                                        handleButtonClick={onProductBuyButtonClick}
                        />
                    );
                })}
            </ProductsWrapper>


        )







    );
}