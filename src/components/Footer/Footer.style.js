import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-bottom: 60px;
  @media screen and (max-width: 320px) {
    grid-template-columns: 1fr ;
    margin-bottom: 10px;
  };
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr 1fr;
    margin-bottom: 10px;
  }
`;

export const FooterElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  row-gap: 10px;

  & > ul {
    display: flex;
    list-style: none;
    padding: 0;
    height: 5px;
    gap: 10px;

    & > li {
      align-self: start;
    }
  }
`;

export const FooterElementHeader = styled.h2`
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 23px;
`;

export const FooterElementLink = styled.a`
  font-family: 'Raleway', sans-serif;
  text-decoration: none;
  font-style: normal;
  font-weight: 200;
  font-size: 16px;
  line-height: 19px;
  color: #252525;
  cursor: pointer;
  transition: 0.7s;

  &:hover {
    transition: 0.7s;
    font-size: 18px;
  }

  @media screen and (max-width: 480px) {
    text-align: start;
  }

`;