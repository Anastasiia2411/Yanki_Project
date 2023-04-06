import styled from "styled-components";

export const BuysHeader = styled.h2`
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 36px;
  line-height: 23px;
  color: #E0BEA2;
  text-align: start;

  @media screen and (max-width: 320px) {
    font-size: 32px;
    line-height: 23px;
    margin: 0;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
    line-height: 23px;
    margin: 0;
  }
`;

export const BuyButtonContainer = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;

  @media screen and (max-width: 320px) {
   flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
`;

export const BuysParagraph = styled.p`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 23px;
  color: #000000
`;

export const BuysParagraphWrapper = styled.div`
  ${({ view }) => view === "list" ? `
  margin-bottom: 40px;
    min-height: 65vh;
  ` : `
 position: relative;
  min-height: 65vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  padding-bottom: 10px;
  padding-top: 20px;
  padding-left: 10px;
  gap:30px;
    @media screen and (max-width: 320px) {
  grid-template-columns: 1fr;
   padding-left: 0px;
 padding-bottom: 0px;
  };
    @media screen and (max-width: 480px) {
  grid-template-columns: 1fr;
   padding-left: 0px;
 padding-bottom: 0px;
  justify-items: center;
  align-items: center;
  };
      @media (min-width: 768px) and (max-width: 1023px){
     grid-template-columns: 1fr 1fr;
  padding-left: 0px;
  padding-bottom: 0px;
  justify-items: center;
  align-items: start;
  };
      @media (min-width: 1024px) and (max-width: 1279px){
     grid-template-columns: 1fr 1fr 1fr;
  padding-left: 0px;
  padding-bottom: 0px;
  justify-items: center;
  align-items: start;
  }
  `} 
`;