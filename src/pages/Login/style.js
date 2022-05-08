import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #8c11be;
`;

export const Title = styled.h1`
  font-family: "Saira Stencil One";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 50px;
  color: #ffffff;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  width: 85%;
  height: 58px;
  background: #a328d6;
  border: none;
  border-radius: 5px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  color: #ffffff;
`;

export const Link = styled.span`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  color: #ffffff;
  text-decoration: none;
  margin-top: 20px;

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  a:visited {
    text-decoration: none;
    color: #fff;
  }
`;
