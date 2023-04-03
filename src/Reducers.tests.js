import React from "react";
import "@testing-library/jest-dom/extend-expect";

import  getAllProductsReducer  from "./store/getAllProductsReducer";
import buyReducer from "./store/buyReducer";
import likeReducer from "./store/likeReducer";

import {
    ADD_TO_BUY_ARR,
    REMOVE_FROM_BUY_ARR,
    ADD_TO_LIKE_ARR,
    PRODUCTS_LOAD,
    PRODUCTS_LOAD_FAILED
} from "./store/types";

describe("buyReducer", () => {
    it("should return the initial state", () => {
        const initialState = {
            purchases: [],
            amountOfBuyProducts: 0
        };
        expect(buyReducer(undefined, {})).toEqual(initialState);
    });

    it("should handle ADD_TO_BUY_ARR action", () => {
        const item = { article: "123", name: "Test item", price: 10 };
        const action = { type: ADD_TO_BUY_ARR, item };
        const currentState = {
            purchases: [],
            amountOfBuyProducts: 0
        };
        const expectedState = {
            purchases: [{ ...item, count: 1 }],
            amountOfBuyProducts: 1
        };
        expect(buyReducer(currentState, action)).toEqual(expectedState);
    });

    it("should handle REMOVE_FROM_BUY_ARR action", () => {
        const item = { article: "123", name: "Test item", price: 10, count: 1 };
        const action = { type: REMOVE_FROM_BUY_ARR, item };
        const currentState = {
            purchases: [item],
            amountOfBuyProducts: 1
        };
        const expectedState = {
            purchases: [],
            amountOfBuyProducts: 0
        };
        expect(buyReducer(currentState, action)).toMatchObject(expectedState);
    });

    it("should return initial state for product which is undefined in arr", () => {
        const item = { article: "124", name: "Test item", price: 10, };
        const action = { type: REMOVE_FROM_BUY_ARR, item };
        const currentState = {
            purchases: [{ article: "123", name: "Test item", price: 10, count: 1 }],
            amountOfBuyProducts: 1
        };
        const expectedState = {
            purchases: [{ article: "123", name: "Test item", price: 10, count: 1 }],
            amountOfBuyProducts: 1
        };
        expect(buyReducer(currentState, action)).toMatchObject(expectedState);
    });
});

describe("likeReducer", () => {
    it("should return the initial state", () => {
        const initialState = {
            likedProducts: [],
        };
        expect(likeReducer(undefined, {})).toEqual(initialState);
    });

    it("should handle  ADD_TO_LIKE_ARR action", () => {
        const item = { article: "123", name: "Test item", price: 10 };
        const action = { type: ADD_TO_LIKE_ARR, item };
        const currentState = {
            likedProducts: [],
        };
        const expectedState = {
            likedProducts: [item],
        };
        expect(likeReducer(currentState, action)).toEqual(expectedState);
    });

    it("should delete from like arr ADD_TO_LIKE_ARR action", () => {
        const item = { article: "123", name: "Test item", price: 10 };
        const action = { type: ADD_TO_LIKE_ARR, item };
        const currentState = {
            likedProducts: [item],
        };
        const expectedState = {
            likedProducts: [],
        };
        expect(likeReducer(currentState, action)).toEqual(expectedState);
    });
});

describe("getAllProductsReducer", () => {
    it("should return the initial state", () => {
        const initialState = {
            allProducts: [],
        };
        expect(getAllProductsReducer(undefined, {})).toEqual(initialState);
    });

    it("should add products to allProducts array", () => {
        const products = [{ article: "123", name: "Test item", price: 10 }, {
            article: "124",
            name: "Test item",
            price: 200
        }];
        const action = { type: PRODUCTS_LOAD, data: products };
        const initialState = {
            allProducts: [],
        };
        const expectedState = {
            allProducts: [...initialState.allProducts, ...products],
            isLoading: false,
            error: null,
        };
        expect(getAllProductsReducer(initialState, action)).toEqual(expectedState);
    });

    it("error of data loading", () => {
        const someError = "Failed to load data";
        const action = { type: PRODUCTS_LOAD_FAILED, error: someError };
        const initialState = {
            allProducts: [],
        };
        const expectedState = {
            allProducts: [],
            isLoading: false,
            error: someError,
        };
        expect(getAllProductsReducer(initialState, action)).toEqual(expectedState);
    });
});