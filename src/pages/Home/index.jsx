import * as S from "./style";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import UserContext from "../../provider/UserContext";
import Logout from "./../../assets/logout.svg";

export default function Home() {
  const { token } = useContext(UserContext);
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/transactions", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setTransactions(response.data.transactions);
        setBalance(response.data.balance);
        setName(response.data.name);
      })
      .catch((err) => {
        alert(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.Container>
      <S.Header>
        <S.Title>Bem vindo, {name}</S.Title>
        <S.Logout onClick={() => logOut()}>
          <img src={Logout} alt="Logout" />
        </S.Logout>
      </S.Header>
      <S.Content>
        {transactions.length === 0 ? (
          <S.TransactionEmpty>
            Não há registros de entrada ou saída
          </S.TransactionEmpty>
        ) : (
          <>
            {transactions.map(({ id, date, title, value, type }) => (
              <S.Transaction key={id}>
                (<S.TransactionDate>{date}</S.TransactionDate>
                <S.TransactionTitle>{title}</S.TransactionTitle>
                <S.TransactionValue className={type}>
                  {value}
                </S.TransactionValue>
              </S.Transaction>
            ))}
          </>
        )}

        <S.Balance>
          <S.BalanceTitle>SALDO</S.BalanceTitle>
          <S.BalanceValue className={balance.inOut}>
            {balance.value !== 0 ? balance.value : ""}
          </S.BalanceValue>
        </S.Balance>
      </S.Content>
      <S.Buttons>
        <S.NewTransaction>Nova entrada</S.NewTransaction>
        <S.NewTransaction>Nova saída</S.NewTransaction>
      </S.Buttons>
    </S.Container>
  );
}

function logOut() {}
