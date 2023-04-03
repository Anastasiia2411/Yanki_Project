import { ADD_TO_LIKE_ARR, SAVE_LIKE_ARR_TO_LOCALE_STORAGE } from "./types";

const localStorageLikeArr = JSON.parse(localStorage.getItem("likedProducts"));
const defaultState = {
    likedProducts: localStorageLikeArr === null ? [] : localStorageLikeArr,
};

export default function likeReducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_TO_LIKE_ARR:
            const itemLikeExists = state.likedProducts.some(({ article }) => article === action.item.article);
            return {
                ...state,
                likedProducts: itemLikeExists
                    ? state.likedProducts.filter(({ article }) => article !== action.item.article)
                    : [...state.likedProducts, action.item]
            };
        case SAVE_LIKE_ARR_TO_LOCALE_STORAGE:
            return state;
        default:
            return state;
    }
}
