import styled from "styled-components";

export const TdCount = styled.td`
  border: 1px solid black;
  width: 200px;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  word-wrap: break-word;
`;

export const Th = styled.th`
  border: 1px solid white;
  padding: 10px;
  width: 150px;
  font-family: 'Raleway', sans-serif;
  position: relative;
  font-style: normal;
  text-wrap: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 19px;
  word-break: break-word;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  background-color: #E0BEA2;
  color: white;
  word-wrap: break-word;
`;
export const Td = styled.th`
  white-space: pre-wrap;
  overflow-wrap: break-word;
  line-height: 20px;
  word-break: break-word;
  border: 1px solid black;
  position: relative;
  padding: 0;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  & > div {
    cursor: pointer;
    border-radius: 0 0 0 20px;
    right: 0px;
    top: 0px;
    position: absolute;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    background: #E0BEA2;
    transition: 0.7s;

    & > svg {
      width: 20px;
      height: 25px;
      transition: 0.7s;
    }

    &:hover > svg {
      transition: 0.7s;
      width: 25px;
      height: 28px;
    }
  }
`;
export const Tr = styled.tr`
  max-height: 200px;
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 0px;
`;
export const Product = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 260px;
  justify-content: start;
  max-height: 600px;
  transition: 0.7s;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);
  position: relative;

  & > div {
    cursor: pointer;
    border-radius: 0 0 0 20px;
    right: 0;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    background: #E0BEA2;
    transition: 0.7s;

    &:hover > svg {
      width: 20px;
      height: 19px;
      transition: 0.7s;
    }

    & > svg {
      transition: 0.7s;
      width: 14px;
      height: 13px;
    }
  }
`;

export const ProductList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  ${({ view }) => view === "list" ? `
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  }
  ` : ``}
  & > li {
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    margin-top: 10px;

    &:nth-child(2) {
      font-weight: 700;
    }
  }
`;

export const CountButton = styled.button`
  border: 1px solid #E0BEA2;
  color: white;
  background: #E0BEA2;
  margin-left: 10px;
  margin-right: 10px;
  transition: 0.7s;

  &:hover {
    transition: 0.7s;
    background: white;
    color: #000000;
  }
`;

export const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 70px;
  margin-top: 30px;
`;