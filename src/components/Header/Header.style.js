import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  width: 300px;

  & > li {
    flex-grow: 1;
  }
`;

export const HeaderListLink = styled(Link)`
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  cursor: pointer;
  transition: 0.7s;
  text-decoration: none;
  color: #E0BEA2;

  &:hover {
    color: #E0BEA2;
    font-size: 22px;
    transition: 0.7s;
  }
`;

export const HeaderIconList = styled.ul`
  list-style: none;
  display: flex;
  width: 150px;
  padding: 0;

  & > li {
    flex-grow: 1;

    & > a {
      color: white;
      text-decoration: none;
      position: relative;
    }
  }
`;

export const HeaderElementWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  margin-top: 20px;
  background-image: url(https://img5.goodfon.ru/wallpaper/nbig/c/ac/ilya-baranov-model-shatenka-sidit-v-chernom-poza-dzhinsy-kur.jpg);
  width: 100%;
  height: 300px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  text-align: end;
`;

export const ImageWrapperText = styled.h1`
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 96px;
  line-height: 21px;
  color: white;
  padding-right: 70px;
`;

export const ImageWrapperParagraph = styled.p`
  display: inline-block;
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 70px;
  line-height: 21px;
  color: white;
  margin-top: 40px;
  padding-right: 90px;
`;

export const HeaderIcon = styled.svg`
  width: 25px;
  height: 24px;
`;

export const CountWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: #E0BEA2;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  top: 50%;
  left: 50%;

  & > h3 {
    margin: 0;
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
    font-size: 13px;
    line-height: 21px;
  }
`;

export const SwitchButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 250px;
  justify-content: space-between;
  margin-top: 10px;
`;

export const SwitchButton = styled.div`

  border: 1px solid #E0BEA2;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-family: 'Raleway', sans-serif;
  padding: 8px 15px;
  transition: 0.7s;

  ${({ active }) => active ? `
   transition: 0.7s;
    background-color: white;
    color: #E0BEA2;
  ` : `
  border: 1px solid #E0BEA2;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-family: 'Raleway', sans-serif;
  background-color: #E0BEA2;
  color: white;
  padding: 8px 15px;
  transition: 0.7s;
    &:hover {
    transition: 0.7s;
    background-color: white;
    color: #E0BEA2;
  }
  `}
  & > svg {
    margin-left: 10px;
    transition: 0.7s;
  }
`;

export const SwitchParagraph = styled.h3`
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 21px;
  line-height: 21px;
  color: #E0BEA2;
  margin: 0;
`;

export const SwitchWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
`;
