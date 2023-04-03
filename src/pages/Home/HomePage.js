import React, { useContext } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { Products } from "../../components/Products/Products";
import { ButtonsWrapper } from "../../components/Modal/Modal.style";
import { ButtonComponent } from "../../components/Modal/Button";
import { Modal } from "../../components/Modal/Modal";
import {
    ImageWrapper,
    ImageWrapperParagraph,
    ImageWrapperText,
    SwitchWrapper,
    SwitchButtonWrapper,
    SwitchButton,
    SwitchParagraph
} from "../../components/Header/Header.style";
import { addProductToPurchases, BuyConfirmModalOpen } from "../../store/actions";
import { ViewContext } from "../../components/Layout/Layout";

const color = "#E0BEA2";

export function HomePage() {
    const { setStateOfProductList, setStateOfProductCard, view } = useContext(ViewContext);
    const dispatch = useDispatch();
    const addedCartItem = useSelector(state => state.buyConfirmModal.addedCartItem, shallowEqual);

    function addToPurchasesArr(item) {
        dispatch(addProductToPurchases(item));
    }

    const addToConfirmModal = item => {
        dispatch(BuyConfirmModalOpen(item));
    };

    const addProductAndCloseBuyConfirmModal = () => {
        addToPurchasesArr(addedCartItem);
        dispatch(BuyConfirmModalOpen(null));
    };

    const closeBuyConfirmModalWithoutAddingProduct = () => {
        dispatch(BuyConfirmModalOpen(null));
    };

    return (
        <>
            <ImageWrapper>
                <ImageWrapperText>Знижки</ImageWrapperText>
                <ImageWrapperParagraph>-10%</ImageWrapperParagraph>
            </ImageWrapper>
            <SwitchWrapper>
                <SwitchParagraph>Відображення продуктів на сторінці:</SwitchParagraph>
                <SwitchButtonWrapper>
                    <SwitchButton onClick={setStateOfProductList} active={view === "list"}>
                        Таблиця
                        <svg fill="#000000" width="20px" height="20px" viewBox="0 0 32 32"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M9,0H1A1,1,0,0,0,0,1V9a1,1,0,0,0,1,1H9a1,1,0,0,0,1-1V1A1,1,0,0,0,9,0ZM8,8H2V2H8Z"/>
                            <path
                                d="M20,0H12a1,1,0,0,0-1,1V9a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V1A1,1,0,0,0,20,0ZM19,8H13V2h6Z"/>
                            <path
                                d="M31,0H23a1,1,0,0,0-1,1V9a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V1A1,1,0,0,0,31,0ZM30,8H24V2h6Z"/>
                            <path
                                d="M9,11H1a1,1,0,0,0-1,1v8a1,1,0,0,0,1,1H9a1,1,0,0,0,1-1V12A1,1,0,0,0,9,11ZM8,19H2V13H8Z"/>
                            <path
                                d="M20,11H12a1,1,0,0,0-1,1v8a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V12A1,1,0,0,0,20,11Zm-1,8H13V13h6Z"/>
                            <path
                                d="M31,11H23a1,1,0,0,0-1,1v8a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V12A1,1,0,0,0,31,11Zm-1,8H24V13h6Z"/>
                            <path
                                d="M9,22H1a1,1,0,0,0-1,1v8a1,1,0,0,0,1,1H9a1,1,0,0,0,1-1V23A1,1,0,0,0,9,22ZM8,30H2V24H8Z"/>
                            <path
                                d="M20,22H12a1,1,0,0,0-1,1v8a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V23A1,1,0,0,0,20,22Zm-1,8H13V24h6Z"/>
                            <path
                                d="M31,22H23a1,1,0,0,0-1,1v8a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V23A1,1,0,0,0,31,22Zm-1,8H24V24h6Z"/>
                        </svg>
                    </SwitchButton>
                    <SwitchButton onClick={setStateOfProductCard} active={view === "card"}>
                        Карточки
                        <svg width="20px" height="20px" viewBox="0 0 16 16"
                             xmlns="http://www.w3.org/2000/svg" version="1.1" fill="none"
                             stroke="#000000" strokeLinecap="round" strokeLinejoin="round"
                             strokeWidth="1">
                            <rect height="11.5" width="8.25" y="2.75" x="1.75"/>
                            <path d="m10 3.75 4.25 2-4.25 7.5"/>
                        </svg></SwitchButton>
                </SwitchButtonWrapper>
            </SwitchWrapper>
            <Products view={view} buttonText={"Додати в корзину"} onProductBuyButtonClick={addToConfirmModal}/>
            {addedCartItem && (
                <Modal
                    headerBackgroundColor={color}
                    header="Ви хочете додати цей товар до Вашого кошика?"
                    closeButton={false}
                    text="Ви зможете переглянути всі вибрані товари у вкладенні 'Кошик'"
                    onClose={closeBuyConfirmModalWithoutAddingProduct}
                >
                    <ButtonsWrapper>
                        <ButtonComponent
                            text="Так"
                            handleClick={addProductAndCloseBuyConfirmModal}
                            background={color}
                        />
                        <ButtonComponent
                            text="Ні"
                            handleClick={closeBuyConfirmModalWithoutAddingProduct}
                            background={color}
                        />
                    </ButtonsWrapper>
                </Modal>
            )}
        </>
    );

}
