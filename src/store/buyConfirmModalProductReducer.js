import { PURCHASES_MODAL_OPEN } from "./types";

const defaultState = {
    addedCartItem: null,
};

export default function buyConfirmModalProductReducer(state = defaultState, action) {
    switch (action.type) {
        case PURCHASES_MODAL_OPEN:
            return {...state, addedCartItem: action.item}
        default:
            return state;
    }
}