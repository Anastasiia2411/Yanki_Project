import React from "react";

import {
    ModalWrapper,
    ModalHeader,
    DeleteButton,
    HeaderWrapper,
    ModalParagraph,
    BackgroundModal,
    ButtonsWrapper,
    ModalContainer
} from "./Modal.style";

export function Modal(props) {
    return (
        <ModalContainer>
            <BackgroundModal onClick={props.onClose}>
                <ModalWrapper onClick={(e) => {
                    e.stopPropagation();
                }}>
                    <HeaderWrapper background={props.headerBackgroundColor}>
                        <ModalHeader>{props.header}</ModalHeader>
                        {props.closeButton && (
                            <DeleteButton onClick={props.onClose}>
                                X
                            </DeleteButton>
                        )}
                    </HeaderWrapper>
                    <div>
                        <ModalParagraph>
                            {props.text}
                        </ModalParagraph>
                    </div>
                    <ButtonsWrapper>
                        {props.children}
                    </ButtonsWrapper>
                </ModalWrapper>
            </BackgroundModal>
        </ModalContainer>
    );
}



