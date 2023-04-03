import { FORM_MODAL_OPEN, CLOSE_MODAL_FORM, MODAL_FORM_SEND_DATA_FROM_BUY_PAGE, MODAL_FORM_SEND_DATA_ABOUT_USERS, OPEN_MODAL_WHEN_PURCHASES_ARE_EMPTY, CLOSE_MODAL_WHEN_PURCHASES_ARE_EMPTY} from "./types";

const defaultState = {
    openForm: false,
    sendDataFromBuyPage: [],
    sendDataAboutUsers: {},
    purchasesAreEmpty:false,
};

export default function buyFormReducer(state = defaultState, action) {
    switch (action.type) {
        case FORM_MODAL_OPEN:
            return { ...state, openForm: true };
        case CLOSE_MODAL_FORM:
            return { ...state, openForm: false };
        case MODAL_FORM_SEND_DATA_FROM_BUY_PAGE:
            return { ...state, sendDataFromBuyPage: [...action.usersBuyProductsArr] };
        case MODAL_FORM_SEND_DATA_ABOUT_USERS:
            return { ...state, sendDataAboutUsers: action.usersInformObj };
        case OPEN_MODAL_WHEN_PURCHASES_ARE_EMPTY:
            return {...state, purchasesAreEmpty: true}
        case CLOSE_MODAL_WHEN_PURCHASES_ARE_EMPTY:
            return {...state, purchasesAreEmpty: false}
        default:
            return state;
    }
}