import React, { useCallback, useEffect, useContext } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { ProductElement } from "../../components/Products/Product";
import { Modal } from "../../components/Modal/Modal";
import { ButtonsWrapper } from "../../components/Modal/Modal.style";
import { ButtonComponent } from "../../components/Modal/Button";
import { BuysHeader, BuysParagraph, BuysParagraphWrapper, BuyButtonContainer } from "./BuysPage.style";
import {
    removeProductFromPurchases,
    savePurchasesArrToLocalStorage,
    addProductToPurchases,
    addToLikedProducts,
    deleteConfirmModal,
    OpenFormModal,
    OpenModalWhichSaysAboutOfAbsenceProduct,
    CloseModalWhichSaysAboutOfAbsenceProduct
} from "../../store/actions";
import { BuysForm } from "./BuysForm";
import { ViewContext } from "../../components/Layout/Layout";
import { Table, Th, Tr,  TableWrapper } from "../../components/Products/Products.style";

const color = "#E0BEA2";

export function BuysPage() {
    const dispatch = useDispatch();

    const removedCartItem = useSelector(state => state.deleteProductFromBasket.removedCartItem);
    const likedProducts = useSelector(state => state.like.likedProducts, shallowEqual);
    const purchases = useSelector(state => state.buy.purchases, shallowEqual);
    const openFormModalFlag = useSelector(state => state.buyForm.openForm);
    const openModalWhichSaysAboutEmptyPurchases = useSelector(state => state.buyForm.purchasesAreEmpty);
    const { view } = useContext(ViewContext);

    const openDeleteConfirmModalForProduct = (product) => {
        console.log("hi", product);
        dispatch(deleteConfirmModal(product));
    };

    const addToPurchasesArr = useCallback((item) => {
        dispatch(addProductToPurchases(item));
    }, [dispatch]);

    const addToLikedProductsArr = useCallback((item) => {
        dispatch(addToLikedProducts(item));
    }, [dispatch]);

    const closeDeleteConfirmModalAndRemoveProductFromPurchases = useCallback(() => {
        dispatch(removeProductFromPurchases(removedCartItem));
        dispatch(deleteConfirmModal(null));
    }, [dispatch, removedCartItem]);

    useEffect(() => {
        dispatch(savePurchasesArrToLocalStorage());
    }, [purchases, dispatch]);

    const isLiked = (product) => {
        return likedProducts.some(likedItem => likedItem.article === product.article);
    };

    const handleOpenBuyFormModal = () => {
        if (purchases.length > 0) {
            dispatch(OpenFormModal());
        } else {
            dispatch(OpenModalWhichSaysAboutOfAbsenceProduct());
        }
    };

    const handleCloseModalWhichSaysAboutOfAbsenceProduct = () => {
        dispatch(CloseModalWhichSaysAboutOfAbsenceProduct());
    };

    return (
        <>
            <BuyButtonContainer>
                <BuysHeader>Хочу купити:</BuysHeader>
                <ButtonComponent text="Здійснити покупку" background={color} handleClick={handleOpenBuyFormModal}/>
            </BuyButtonContainer>
            {purchases.length > 0 ? (
                view === "list" ? (
                    <TableWrapper>
                    <Table>
                        <tbody>
                        <Tr>
                            <Th>Фото</Th>
                            <Th>Кількість</Th>
                            <Th>Назва</Th>
                            <Th>Ціна</Th>
                            <Th>Артикль</Th>
                            <Th>Колір</Th>
                            <Th>Кнопка</Th>
                        </Tr>
                        {purchases.map((product) => {
                            return (
                                <ProductElement
                                    view={view}
                                    product={product}
                                    key={product.article}
                                    buttonText={"Видалити з корзини"}
                                    onProductDeleteButtonClick={openDeleteConfirmModalForProduct}
                                    onAddToLikedButtonClick={addToLikedProductsArr}
                                    isLiked={isLiked(product)}
                                    type={"basketProduct"}
                                    onBuyButtonClick={addToPurchasesArr}
                                    handleButtonClick={openDeleteConfirmModalForProduct}
                                />
                            );
                        })}
                        </tbody>
                    </Table>
                        </TableWrapper>
                ) : (
                    <BuysParagraphWrapper view={view}>
                        {purchases.map((product) => {
                            return (
                                <ProductElement
                                    view={view}
                                    product={product}
                                    key={product.article}
                                    buttonText={"Видалити з корзини"}
                                    onProductDeleteButtonClick={openDeleteConfirmModalForProduct}
                                    onAddToLikedButtonClick={addToLikedProductsArr}
                                    isLiked={isLiked(product)}
                                    type={"basketProduct"}
                                    onBuyButtonClick={addToPurchasesArr}
                                    handleButtonClick={openDeleteConfirmModalForProduct}
                                />
                            );
                        })}
                    </BuysParagraphWrapper>
                )
            ) : (
                <BuysParagraphWrapper>
                    <BuysParagraph>Немає товарів до покупки</BuysParagraph>
                </BuysParagraphWrapper>
            )
            }
            {removedCartItem && (
                <Modal
                    headerBackgroundColor={color}
                    header="Ви хочете видалити цей товар з Вашого кошика?" closeButton={false}
                    text="Цей товар буде видалено з кошика"
                    onClose={() => {
                        dispatch(deleteConfirmModal(null));
                    }}
                    transitionName="modal"
                >
                    <ButtonsWrapper>
                        <ButtonComponent
                            text="Так"
                            handleClick={closeDeleteConfirmModalAndRemoveProductFromPurchases}
                            background={color}
                        />
                        <ButtonComponent
                            text="Ні"
                            handleClick={() => {
                                dispatch(deleteConfirmModal(null));
                            }}
                            background={color}
                        />
                    </ButtonsWrapper>
                </Modal>
            )}
            {openFormModalFlag ? <BuysForm/> : null}
            {openModalWhichSaysAboutEmptyPurchases ? <Modal
                headerBackgroundColor={color}
                header="Ви ще не додали ніяких товарів до кошика" closeButton={false}
                text="Оберіть товар та натисніть кнопку 'Додати до кошика' для того щоб мати змогу замовити товар"
                onClose={() => {
                    dispatch(handleCloseModalWhichSaysAboutOfAbsenceProduct);
                }}
                transitionName="modal"
            >
                <ButtonsWrapper>
                    <ButtonComponent
                        text="OK"
                        handleClick={handleCloseModalWhichSaysAboutOfAbsenceProduct}
                        background={color}
                    />
                </ButtonsWrapper>
            </Modal> : null}
        </>
    );
}