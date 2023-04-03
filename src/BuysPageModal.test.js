import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { BuysPage } from "./pages/Buys/BuysPage";
import { BASKET_MODAL_OPEN } from "./store/types";

describe("BuysPage", () => {
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);

    const store = mockStore({
        deleteProductFromBasket: {
            removedCartItem: null,
        },
        buy: {
            purchases: [
                {
                    name: "Коричнева куртка",
                    price: "3150 грн",
                    photo:
                        "https://static2.issaplus.com/wa-data/public/photos/96/45/4596/4596.970.jpg",
                    article: "209385",
                    color: "brown",
                },
            ],
        },
        like: {
            likedProducts: [],
        },
        buyForm: {
            openForm: false,
            purchasesAreEmpty: false,
        },
    });

    it("opens the modal window with correct text when deleteConfirmModal function is called", async () => {
        render(
            <Provider store={store}>
                <BuysPage/>
            </Provider>
        );

        const deleteCardButton = screen.getByText("Видалити з корзини");
        fireEvent.click(deleteCardButton);

        const actions = store.getActions().at(-1);
        console.log(actions);

        expect(actions).toStrictEqual({
            type: BASKET_MODAL_OPEN,
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
                <BuysPage/>
            </Provider>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});

describe("BuysPage modal buttons test", () => {
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);

    const store = mockStore({
        deleteProductFromBasket: {
            removedCartItem: {
                name: "Коричнева куртка",
                price: "3150 грн",
                photo:
                    "https://static2.issaplus.com/wa-data/public/photos/96/45/4596/4596.970.jpg",
                article: "209385",
                color: "brown",
            },
        },
        buy: {
            purchases: [
                {
                    name: "Коричнева куртка",
                    price: "3150 грн",
                    photo:
                        "https://static2.issaplus.com/wa-data/public/photos/96/45/4596/4596.970.jpg",
                    article: "209385",
                    color: "brown",
                },
            ],
        },
        like: {
            likedProducts: [],
        },
        buyForm: {
            openForm: false,
            purchasesAreEmpty: false,
        },
    });

    it("closed modal when users has clicked on 'Так' button", async () => {
        render(
            <Provider store={store}>
                <BuysPage/>
            </Provider>
        );

        const deleteCardButton = screen.getByText("Так");
        fireEvent.click(deleteCardButton);

        const actions = store.getActions().at(-1);
        console.log(actions);

        expect(actions).toStrictEqual({
            type: BASKET_MODAL_OPEN,
            item: null,
        });
    });

    it("closed modal when users has clicked on 'Ні' button", async () => {
        render(
            <Provider store={store}>
                <BuysPage/>
            </Provider>
        );

        const deleteCardButton = screen.getByText("Ні");
        fireEvent.click(deleteCardButton);

        const actions = store.getActions().at(-1);
        console.log(actions);

        expect(actions).toStrictEqual({
            type: BASKET_MODAL_OPEN,
            item: null,
        });
    });
});
