import { LIKED_MODAL_OPEN } from "./types";

const defaultState = {
    likedProductConfirmModalItem: null,
};

export default function likedProductBuyConfirmModalReducer(state = defaultState, action) {
    switch (action.type) {
        case LIKED_MODAL_OPEN:
            return {...state, likedProductConfirmModalItem: action.item}
        default:
            return state;
    }
}