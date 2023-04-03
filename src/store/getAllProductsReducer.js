import { PRODUCTS_LOAD, PRODUCTS_LOAD_FAILED } from "./types";

const defaultState = {
    allProducts: [],
};

export default function getAllProducts(state = defaultState, action) {
    switch (action.type) {
        case PRODUCTS_LOAD:
            return {
                ...state,
                allProducts: [...state.allProducts, ...action.data],
                isLoading: false,
                error: null,
            };
        case PRODUCTS_LOAD_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.error,
            };
        default:
            return state;
    }
}
