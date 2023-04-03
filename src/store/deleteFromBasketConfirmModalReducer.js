import { BASKET_MODAL_OPEN } from "./types";

const defaultState = {
    removedCartItem: null,
};

export default function deleteFromBasketConfirmModalReducer(state = defaultState, action) {
    switch (action.type) {
        case BASKET_MODAL_OPEN:
            return {...state, removedCartItem: action.item}
        default:
            return state;
    }
}