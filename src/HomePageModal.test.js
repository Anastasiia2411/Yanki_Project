import { HomePage } from "./pages/Home/HomePage";
import { PURCHASES_MODAL_OPEN } from "./store/types";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe("HomePage", () => {
    const mockStore = configureStore();
    const store = mockStore({
        buyConfirmModal: {
            addedCartItem: null,
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
            likedProducts: []
        }
    });

    it("opens the modal window with correct text when addToConfirmModal function is called", () => {
        render(
            <Provider store={store}>
                <HomePage/>
            </Provider>
        );

        const addToCartButton = screen.getByText("Додати в корзину");
        fireEvent.click(addToCartButton);

        const actions = store.getActions().at(-1);

        expect(actions).toStrictEqual({
            type: PURCHASES_MODAL_OPEN,
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
                <HomePage/>
            </Provider>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});

describe("HomePage modal test", () => {
    const mockStore = configureStore();
    const store = mockStore({
        buyConfirmModal: {
            addedCartItem: {
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
            likedProducts: []
        }
    });

    it("close modal when user has clicked on 'Так' button", () => {
        render(
            <Provider store={store}>
                <HomePage/>
            </Provider>
        );

        const addToCartButton = screen.getByText("Так");
        fireEvent.click(addToCartButton);

        const actions = store.getActions().at(-1);

        expect(actions).toStrictEqual({
            type: PURCHASES_MODAL_OPEN,
            item: null,
        });
    });

    it("close modal when user has clicked on 'Ні' button", () => {
        render(
            <Provider store={store}>
                <HomePage/>
            </Provider>
        );

        const addToCartButton = screen.getByText("Ні");
        fireEvent.click(addToCartButton);

        const actions = store.getActions().at(-1);

        expect(actions).toStrictEqual({
            type: PURCHASES_MODAL_OPEN,
            item: null,
        });
    });
});

