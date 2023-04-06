import React, { useContext } from "react";
import { LikedHeader, LikedParagraph, ParagraphWrapper } from "./LikedPage.style";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { ProductElement } from "../../components/Products/Product";
import { Modal } from "../../components/Modal/Modal";
import { ButtonsWrapper } from "../../components/Modal/Modal.style";
import { ButtonComponent } from "../../components/Modal/Button";
import {
    addProductToPurchases,
    addToLikedProducts,
    addProductToBasketFromLikedProductsConfirmModal
} from "../../store/actions";
import { ViewContext } from "../../components/Layout/Layout";
import { Table, Th, Tr, TableWrapper } from "../../components/Products/Products.style";
import { BuysParagraph, BuysParagraphWrapper } from "../Buys/BuysPage.style";

const color = "#E0BEA2";

export function LikedPage() {
    const dispatch = useDispatch();
    const likedProducts = useSelector(state => state.like.likedProducts, shallowEqual);
    const likedProductConfirmModalItem = useSelector(state => state.likedPageAddProductToBasket.likedProductConfirmModalItem, shallowEqual);
    const { view } = useContext(ViewContext);

    function addToPurchasesArr(item) {
        dispatch(addProductToPurchases(item));
    }

    function addToLikedProductsArr(item) {
        dispatch(addToLikedProducts(item));
    }

    function addProductToBasketFromLikedProductsConfirmModalDispatch(item) {

        console.log(likedProductConfirmModalItem);
        dispatch(addProductToBasketFromLikedProductsConfirmModal(item));
    }

    const addLikedProductToPurchasesAndCloseConfirmModal = () => {
        addToPurchasesArr(likedProductConfirmModalItem);
        addProductToBasketFromLikedProductsConfirmModalDispatch(null);
    };

    const closeLikedProductConfirmModalWithoutAddingProduct = () => {
        addProductToBasketFromLikedProductsConfirmModalDispatch(null);
    };

    return (
        <>
            <LikedHeader>Вподобане:</LikedHeader>
            {likedProducts.length > 0 ? (
                view === "list" ? (
                <TableWrapper>
                    <Table>
                        <tbody>
                        <Tr>
                            <Th>Фото</Th>
                            <Th>Назва</Th>
                            <Th>Ціна</Th>
                            <Th>Артикль</Th>
                            <Th>Колір</Th>
                            <Th>Кнопка</Th>
                        </Tr>
                        {likedProducts.map((product) => {
                            return (
                                <ProductElement
                                    view={view}
                                    product={product}
                                    key={product.article}
                                    buttonText={"Додати в корзину"}
                                    isLiked={likedProducts.some(
                                        (likedItem) => likedItem.article === product.article
                                    )}
                                    onAddToLikedButtonClick={addToLikedProductsArr}
                                    handleButtonClick={
                                        addProductToBasketFromLikedProductsConfirmModalDispatch
                                    }
                                />
                            );
                        })}
                        </tbody>
                    </Table>
                </TableWrapper>
                ) : (
                    <ParagraphWrapper view={view}>
                        {likedProducts.length > 0 ? (
                            likedProducts.map((product) => {
                                return (
                                    <ProductElement
                                        view={view}
                                        product={product}
                                        key={product.article}
                                        buttonText={"Додати в корзину"}
                                        isLiked={likedProducts.some(
                                            (likedItem) => likedItem.article === product.article
                                        )}
                                        onAddToLikedButtonClick={addToLikedProductsArr}
                                        handleButtonClick={
                                            addProductToBasketFromLikedProductsConfirmModalDispatch
                                        }
                                    />
                                );
                            })
                        ) : null}
                    </ParagraphWrapper>
                )) : (
                <BuysParagraphWrapper>
                    <BuysParagraph>Немає товарів до покупки</BuysParagraph>
                </BuysParagraphWrapper>
            )
            }
            {likedProductConfirmModalItem && (
                <Modal
                    headerBackgroundColor={color}
                    header="Ви хочете додати цей товар до Вашого кошика?"
                    closeButton={false}
                    text="Ви зможете переглянути всі вибрані товари у вкладенні 'Кошик'"
                    onClose={closeLikedProductConfirmModalWithoutAddingProduct}
                >
                    <ButtonsWrapper>
                        <ButtonComponent
                            text="Так"
                            handleClick={addLikedProductToPurchasesAndCloseConfirmModal}
                            background={color}
                        />
                        <ButtonComponent
                            text="Ні"
                            handleClick={closeLikedProductConfirmModalWithoutAddingProduct}
                            background={color}
                        />
                    </ButtonsWrapper>
                </Modal>
            )}
        </>
    );
}