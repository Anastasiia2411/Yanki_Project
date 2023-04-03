import styled from "styled-components";

export const Button = styled.button`
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
  margin-bottom: 20px;
  transition: 0.7s;
  cursor: pointer;

  &:hover {
    background: white;
    color:black;
    transition: 0.7s;
    box-shadow: 0 20px 16px -16px rgba(0, 0, 0, 0.6);
  }
`;
