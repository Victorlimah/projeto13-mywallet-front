import styled from "styled-components";

export const Input = styled.input`
  background: #ffffff;
  border: none;
  border-radius: 5px;
  height: 58px;
  width: 85%;
  margin: 0 auto 15px;

  &::placeholder {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
    padding-left: 15px;
  }
`;
