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
`;

export const Title = styled.span`
  width: 100%;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 31px;
  color: #ffffff;
`;

export const Logo = styled.img`
  width: 100px;
  height: 100px;
`;

export const Logout = styled.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const Content = styled.div`
  width: 90%;
  height: 65%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  position: relative;
  border-radius: 10px;
`;

export const Buttons = styled.div`
  display: flex;
  margin-top: 15px;
`;

export const NewTransaction = styled.button`
  width: 40%;
  height: 100px;
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

export const TransactionEmpty = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #868686;
`;

export const Transaction = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0 20px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f5f5f5;
  }

  .cashIn {
    color: #03ac00;
  }

  .cashOut {
    color: #c70000;
  }
`;

export const TransactionDate = styled.span`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #c6c6c6;
`;

export const TransactionTitle = styled.span`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
`;

export const TransactionValue = styled.span`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: right;
`;

export const Balance = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;

  .positive {
    color: #03ac00;
  }

  .negative {
    color: #c70000;
  }
`;

export const BalanceTitle = styled.span`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 20px;
  color: #000000;
`;

export const BalanceValue = styled.span`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
`;
