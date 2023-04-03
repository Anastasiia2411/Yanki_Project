import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import { LikedPage } from "./pages/Liked/LikedPage";
import { LIKED_MODAL_OPEN } from "./store/types";

describe("LikedPage", () => {
    const mockStore = configureStore();
    const store = mockStore({
        likedPageAddProductToBasket: {
            likedProductConfirmModalItem: null,
        },
        allProducts: {
            allProducts: [
                {
                    name: "Коричнева куртка",
                    price: "3150 грн",
                    photo: "https://static2.issaplus.com/wa-data/public/photos/96/45/4596/4596.970.jpg",
                    article: "209385",
                    color: "brown"
                },
            ],
        },
        like: {
            likedProducts: [
                {
                    name: "Коричнева куртка",
                    price: "3150 грн",
                    photo: "https://static2.issaplus.com/wa-data/public/photos/96/45/4596/4596.970.jpg",
                    article: "209385",
                    color: "brown"
                },
            ]
        }
    });

    it("opens the modal window with correct text when addToConfirmModal function is called", () => {
        render(
            <Provider store={store}>
                <LikedPage/>
            </Provider>
        );

        const addToCartButton = screen.getByText("Додати в корзину");
        fireEvent.click(addToCartButton);

        const actions = store.getActions().at(-1);

        expect(actions).toStrictEqual({
            type: LIKED_MODAL_OPEN,
            item: {
                name: "Коричнева куртка",
                price: "3150 грн",
                photo: "https://static2.issaplus.com/wa-data/public/photos/96/45/4596/4596.970.jpg",
                article: "209385",
                color: "brown"
            },
        });
    });

    it("matches the snapshot", () => {
        const { asFragment } = render(
            <Provider store={store}>
                <LikedPage/>
            </Provider>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});

describe("LikedPage modal test", () => {
    const mockStore = configureStore();
    const store = mockStore({
        likedPageAddProductToBasket: {
            likedProductConfirmModalItem: {
                name: "Коричнева куртка",
                price: "3150 грн",
                photo: "https://static2.issaplus.com/wa-data/public/photos/96/45/4596/4596.970.jpg",
                article: "209385",
                color: "brown"
            },
        },
        allProducts: {
            allProducts: [
                {
                    name: "Коричнева куртка",
                    price: "3150 грн",
                    photo: "https://static2.issaplus.com/wa-data/public/photos/96/45/4596/4596.970.jpg",
                    article: "209385",
                    color: "brown"
                },
            ],
        },
        like: {
            likedProducts: [
                {
                    name: "Коричнева куртка",
                    price: "3150 грн",
                    photo: "https://static2.issaplus.com/wa-data/public/photos/96/45/4596/4596.970.jpg",
                    article: "209385",
                    color: "brown"
                },
            ]
        }
    });

    it("close  liked modal when users has clicked 'Ні'", () => {
        render(
            <Provider store={store}>
                <LikedPage/>
            </Provider>
        );

        const addToCartButton = screen.getByText("Ні");
        fireEvent.click(addToCartButton);

        const actions = store.getActions().at(-1);

        expect(actions).toStrictEqual({
            type: LIKED_MODAL_OPEN,
            item: null,
        });
    });

    it("close  liked modal when users has clicked 'Так'", () => {
        render(
            <Provider store={store}>
                <LikedPage/>
            </Provider>
        );

        const addToCartButton = screen.getByText("Так");
        fireEvent.click(addToCartButton);

        const actions = store.getActions().at(-1);

        expect(actions).toStrictEqual({
            type: LIKED_MODAL_OPEN,
            item: null,
        });
    });
});
