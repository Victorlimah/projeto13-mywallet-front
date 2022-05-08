import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #8c11be;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 31px;
  color: #ffffff;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px auto;
  align-items: center;
  width: 90%;

  .selected {
    border: 1px solid #ffffff;
  }
`;

export const Button = styled.button`
  width: 45%;
  height: 60px;
  margin: 0 auto;
  border: none;
  border-radius: 5px;
  background-color: #a328d6;
  color: #fff;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 20px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #640d8a;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  background: #ffffff;
  border: none;
  border-radius: 5px;
  height: 58px;
  width: 85%;
  margin: 0 auto 15px;

  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: #000000;
  padding-left: 15px;
`;
