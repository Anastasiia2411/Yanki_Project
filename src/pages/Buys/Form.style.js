import styled from "styled-components";
import { Form, Field } from "formik";
import  { PatternFormat  } from "react-number-format";

export const PatternForm = styled(PatternFormat )`
  box-sizing: border-box;
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  font-size: 24px;
  width: 400px;
  height: 50px;
  padding: 0 15px;
  border: ${props => props.border};
`;

export const FormContainer = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 3;
  top: 0;
  left: 0;
  overflow-y: hidden;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const SubmitButton=styled.button`
  display: inline-block;
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  padding: 12px 30px 12px;
  text-transform: uppercase;
  border: 1px solid #E0BEA2;
  color: white;
  background: #E0BEA2;
  margin-top: 30px;
  transition: 0.7s;
  cursor: pointer;

  &:hover {
    background: white;
    color:black;
    transition: 0.7s;
    box-shadow: 0 20px 16px -16px rgba(0, 0, 0, 0.6);
  }
`

export const TextError = styled.p`
  font-family: 'Raleway', sans-serif;
  color: red;
  margin: 0;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 19px;
`

export const FormBackground = styled.div`
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  width: 500px;
  height: 700px;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  flex-direction: column;
`;

export const Input = styled(Field)`
  box-sizing: border-box;
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  font-size: 24px;
  width: 400px;
  height: 50px;
  padding: 0 15px;
  border: ${props => props.border};
`;

export const InputWrapper = styled(Form)`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 520px;
  max-height: 520px;
  justify-content: space-around;
  margin-bottom: 10px;
`;

export const FormHeader = styled.h2`
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 36px;
  max-width: 400px;
  line-height: 36px;
  color: #E0BEA2;
  text-align: center;
  margin: 0px auto;
`;

export const Label = styled.label`
  font-size: 20px;
  font-weight: 300;
  font-family: 'Raleway', sans-serif;
  text-align: start;
`;

export const CloseButtonWrapper = styled.div`
  width: 10px;
  align-self: end;
  margin-top: 20px;
`;

