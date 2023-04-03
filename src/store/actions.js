import {
    PRODUCTS_LOAD,
    ADD_TO_BUY_ARR,
    SAVE_BUY_ARR_TO_LOCALE_STORAGE,
    REMOVE_FROM_BUY_ARR,
    ADD_TO_LIKE_ARR,
    SAVE_LIKE_ARR_TO_LOCALE_STORAGE,
    AMOUNT_OF_BUY_PRODUCT,
    PURCHASES_MODAL_OPEN,
    BASKET_MODAL_OPEN,
    LIKED_MODAL_OPEN,
    PRODUCTS_LOAD_FAILED,
    FORM_MODAL_OPEN,
    CLOSE_MODAL_FORM,
    MODAL_FORM_SEND_DATA_ABOUT_USERS,
    MODAL_FORM_SEND_DATA_FROM_BUY_PAGE,
    DELETE_PURCHASE_FROM_BUY_PAGE,
    OPEN_MODAL_WHEN_PURCHASES_ARE_EMPTY,
    CLOSE_MODAL_WHEN_PURCHASES_ARE_EMPTY,
} from "./types";

export function getAllProducts() {
    return async dispatch => {
        try {
            const informResponse = await fetch("./inform.json");
            const products = await informResponse.json();
            dispatch({
                type: PRODUCTS_LOAD,
                data: products,
            });
        } catch (error) {
            console.error("Error fetching products:", error);
            dispatch({
                type: PRODUCTS_LOAD_FAILED,
                error: error.message,
            });
        }
    };
}

export function addProductToPurchases(item) {
    if (!item || typeof item !== "object" || !item.name || !item.photo || !item.article) {
        console.error("Invalid item object:", item);
        return null;
    }
    return { type: ADD_TO_BUY_ARR, item };
}

export function BuyConfirmModalOpen(item) {
    return { type: PURCHASES_MODAL_OPEN, item };
}

export function deleteConfirmModal(item) {
    return { type: BASKET_MODAL_OPEN, item };
}

export function addProductToBasketFromLikedProductsConfirmModal(item) {
    return { type: LIKED_MODAL_OPEN, item };
}

export function addToLikedProducts(item) {
    if (!item || typeof item !== "object" || !item.name || !item.photo || !item.article) {
        console.error("Invalid item object:", item);
        return null;
    }
    return { type: ADD_TO_LIKE_ARR, item };
}

export function removeProductFromPurchases(item) {
    return { type: REMOVE_FROM_BUY_ARR, item };
}

export const savePurchasesArrToLocalStorage = () => {
    return (dispatch, getState) => {
        const purchases = getState().buy.purchases;
        localStorage.setItem("purchases", JSON.stringify(purchases));
        dispatch({ type: SAVE_BUY_ARR_TO_LOCALE_STORAGE });
    };
};

export const saveLikedProductsArrToLocalStorage = () => {
    return (dispatch, getState) => {
        const likedProducts = getState().like.likedProducts;
        localStorage.setItem("likedProducts", JSON.stringify(likedProducts));
        dispatch({ type: SAVE_LIKE_ARR_TO_LOCALE_STORAGE });
    };
};

export const amountOfBuyProduct = () => {
    return { type: AMOUNT_OF_BUY_PRODUCT };
};

export function OpenFormModal() {
    return { type: FORM_MODAL_OPEN };
}

export function CloseFormModal() {
    return { type: CLOSE_MODAL_FORM };
}

export function sendDataAboutUsers(usersInformObj) {
   return { type: MODAL_FORM_SEND_DATA_ABOUT_USERS, usersInformObj};

}

export function sendDataAboutBuyProduct(usersBuyProductsArr) {
    return { type: MODAL_FORM_SEND_DATA_FROM_BUY_PAGE, usersBuyProductsArr};
}

export function clearTheArrayOfBuyProducts(){
    return { type: DELETE_PURCHASE_FROM_BUY_PAGE};
}

export function OpenModalWhichSaysAboutOfAbsenceProduct(){
    return { type: OPEN_MODAL_WHEN_PURCHASES_ARE_EMPTY};
}

export function CloseModalWhichSaysAboutOfAbsenceProduct(){
    return { type: CLOSE_MODAL_WHEN_PURCHASES_ARE_EMPTY};
}