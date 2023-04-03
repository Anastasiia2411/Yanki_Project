import React, { useCallback } from "react";

import { CountButton, Product, ProductList, Td, Tr, TdCount } from "./Products.style";
import { ButtonComponent } from "../Modal/Button";

export function ProductElement({
                                   product,
                                   handleButtonClick,
                                   onBuyButtonClick,
                                   onProductDeleteButtonClick,
                                   isLiked,
                                   buttonText,
                                   onAddToLikedButtonClick,
                                   type,
                                   view
                               }) {
    const onClickProductButton = useCallback(() => {
        handleButtonClick(product);
    }, [handleButtonClick, product]);

    const plusItemCount = useCallback(() => {
        onBuyButtonClick(product);
    }, [onBuyButtonClick, product]);

    const minusItemCount = useCallback(() => {
        onProductDeleteButtonClick(product);
    }, [onProductDeleteButtonClick, product]);

    return (
        view === "list" ? (
            <Tr>
                <Td>
                    <img src={product.photo || product.product.photo} alt="jacket" height="450"/>
                    <div
                        onClick={() => {
                            onAddToLikedButtonClick(product);
                        }}
                    >
                        <svg
                            viewBox="0 0 14 13"
                            fill="#FFFFFF"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke={isLiked ? "red" : "none"}
                        >
                            <path
                                d="M6.93804 1.15962C8.47954 -0.224381 10.8617 -0.178444 12.3467 1.30925C13.8312 2.79759 13.8823 5.16792 12.5016 6.71402L6.93672 12.2868L1.37314 6.71402C-0.00758263 5.16792 0.0442603 2.79366 1.52801 1.30925C3.01439 -0.176476 5.39194 -0.22635 6.93804 1.15962ZM11.4175 2.23651C10.4332 1.25084 8.84506 1.21081 7.81477 2.13611L6.93869 2.92228L6.06196 2.13676C5.02839 1.21015 3.44357 1.25084 2.45659 2.23782C1.4788 3.21562 1.42958 4.78074 2.33059 5.81497L6.93738 10.429L11.5442 5.81563C12.4458 4.78074 12.3966 3.21759 11.4175 2.23651Z"
                                fill="white"
                            />
                        </svg>
                    </div>
                </Td>
                {type && (
                    <TdCount>
                        <CountButton onClick={minusItemCount}>-</CountButton>
                        кількість: {product.count}
                        <CountButton onClick={plusItemCount}>+</CountButton>
                    </TdCount>
                )}
                <Td>{product.name || product.product.name}</Td>
                <Td>{product.price || product.product.price}</Td>
                <Td>article:{product.article || product.product.article}</Td>
                <Td>{product.color || product.product.color}</Td>
                <Td>
                    <ButtonComponent
                        text={buttonText}
                        background="#E0BEA2"
                        handleClick={onClickProductButton}
                    />
                </Td>
            </Tr>
        ) : (
            <Product view={view}>
                <img src={product.photo || product.product.photo} alt="jacket" height="350"/>
                <div
                    onClick={() => {
                        onAddToLikedButtonClick(product);
                    }}
                >
                    <svg
                        viewBox="0 0 14 13"
                        fill="#FFFFFF"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke={isLiked ? "red" : "none"}
                    >
                        <path
                            d="M6.93804 1.15962C8.47954 -0.224381 10.8617 -0.178444 12.3467 1.30925C13.8312 2.79759 13.8823 5.16792 12.5016 6.71402L6.93672 12.2868L1.37314 6.71402C-0.00758263 5.16792 0.0442603 2.79366 1.52801 1.30925C3.01439 -0.176476 5.39194 -0.22635 6.93804 1.15962ZM11.4175 2.23651C10.4332 1.25084 8.84506 1.21081 7.81477 2.13611L6.93869 2.92228L6.06196 2.13676C5.02839 1.21015 3.44357 1.25084 2.45659 2.23782C1.4788 3.21562 1.42958 4.78074 2.33059 5.81497L6.93738 10.429L11.5442 5.81563C12.4458 4.78074 12.3966 3.21759 11.4175 2.23651Z"
                            fill="white"
                        />
                    </svg>
                </div>
                <ProductList view={view}>
                    {type && (
                        <li>
                            <CountButton onClick={minusItemCount}>-</CountButton>
                            кількість: {product.count}
                            <CountButton onClick={plusItemCount}>+</CountButton>
                        </li>
                    )}
                    <li>{product.name || product.product.name}</li>
                    <li>{product.price || product.product.price}</li>
                    <li>article:{product.article || product.product.article}</li>
                    <li><ButtonComponent
                        text={buttonText}
                        background="#E0BEA2"
                        handleClick={onClickProductButton}
                    /></li>
                </ProductList>
            </Product>
        )
    );
}
