import { combineReducers } from 'redux';

import buyReducer from './buyReducer';
import likeReducer from './likeReducer';
import getAllProducts from './getAllProductsReducer';
import buyConfirmModalProductReducer from './buyConfirmModalProductReducer'
import deleteFromBasketConfirmModalReducer from './deleteFromBasketConfirmModalReducer'
import likedProductBuyConfirmModalReducer from "./likedProductBuyConfirmModalReducer";
import buyFormReducer from "./buyFormReducer";

const rootReducer = combineReducers({
    buy: buyReducer,
    like: likeReducer,
    allProducts:getAllProducts,
    buyConfirmModal: buyConfirmModalProductReducer,
    deleteProductFromBasket: deleteFromBasketConfirmModalReducer,
    likedPageAddProductToBasket:likedProductBuyConfirmModalReducer,
    buyForm:buyFormReducer,
});

export default rootReducer;