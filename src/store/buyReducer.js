import {
    ADD_TO_BUY_ARR,
    AMOUNT_OF_BUY_PRODUCT,
    REMOVE_FROM_BUY_ARR,
    SAVE_BUY_ARR_TO_LOCALE_STORAGE,
    DELETE_PURCHASE_FROM_BUY_PAGE
} from "./types";

const localStorageBuyArr = JSON.parse(localStorage.getItem("purchases"));

const defaultState = {
    purchases: localStorageBuyArr === null ? [] : localStorageBuyArr,
    amountOfBuyProducts: 0
};

export default function buyReducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_TO_BUY_ARR:
            const itemBuyExists = state.purchases.some((obj) => {
                return obj.article === action.item.article;
            });
            if (itemBuyExists) {
                return {
                    ...state,
                    purchases: state.purchases.map((product) => {
                        if (product.article !== action.item.article) {
                            return product;
                        }
                        return {
                            ...product,
                            count: product.count + 1,
                        };
                    }),
                    amountOfBuyProducts: state.amountOfBuyProducts + 1
                };
            } else {
                return {
                    ...state,
                    purchases: [...state.purchases, { ...action.item, count: 1 }],
                    amountOfBuyProducts: state.amountOfBuyProducts + 1
                };
            }
        case REMOVE_FROM_BUY_ARR:
            const itemWhichIs = state.purchases.some((obj) => {
                return obj.article === action.item.article;
            });
            if (!itemWhichIs) {
                return state;
            } else {
                if (action.item.count === 1) {
                    return {
                        ...state,
                        purchases: state.purchases.filter((el) => el.article !== action.item.article),
                        amountOfBuyProducts: state.amountOfBuyProducts - 1
                    };
                } else if (action.item.count > 1) {
                    return {
                        ...state,
                        purchases: state.purchases.map((el) => {
                            if (el.article !== action.item.article) {
                                return el;
                            }
                            return {
                                ...el,
                                count: el.count - 1,
                            };
                        }),
                        amountOfBuyProducts: state.amountOfBuyProducts - 1
                    };
                }
            }
            return state;
        case SAVE_BUY_ARR_TO_LOCALE_STORAGE:
            return state;
        case AMOUNT_OF_BUY_PRODUCT:
            return { ...state, amountOfBuyProducts: state.purchases.reduce((acc, product) => acc + product.count, 0) };
        case DELETE_PURCHASE_FROM_BUY_PAGE:
            return { ...state, purchases: [] };
        default:
            return state;
    }
}