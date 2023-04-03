import styled from "styled-components";

export const ModalWrapper = styled.div`
  max-width: 600px;
  max-height: 400px;
  background-color: white;
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  overflow: hidden;
`;

export const ModalContainer = styled.div`
  height: 100%;
  width: 100%;
`;

export const ModalHeader = styled.h2`
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 40px;
  margin-top: 20px;
  color: white;
  margin-left: 20px;
`;

export const DeleteButton = styled.button`
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  background: none;
  border: none;
  cursor: pointer;
  width: 40px;
  height: 40px;
  color: white;
`;
export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.background};
`;

export const ModalParagraph = styled.p`
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  margin-top: 30px;
  margin-bottom: 30px;
  color: black;
  padding: 0 20px;
`;

export const BackgroundModal = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  overflow: hidden;
`;
export const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

`;