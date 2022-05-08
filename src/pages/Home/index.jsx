import * as S from "./style";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import UserContext from "../../provider/UserContext";
import Logout from "./../../assets/logout.svg";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { token, setToken } = useContext(UserContext);
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [name, setName] = useState("");

  const navigate = useNavigate();

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
          <S.TransactionList>
            {transactions.map(({ id, date, description, value, type }) => (
              <S.Transaction key={`id${id}`}>
                <S.TransactionDate>{date}</S.TransactionDate>
                <S.TransactionTitle>{description}</S.TransactionTitle>
                <div>
                  <S.TransactionValue className={type}>
                    {value.toString().replace("-", "")}
                  </S.TransactionValue>
                  <span>X</span>
                </div>
              </S.Transaction>
            ))}
          </S.TransactionList>
        )}

        <S.Balance>
          <S.BalanceTitle>SALDO</S.BalanceTitle>
          <S.BalanceValue className={balance.inOut}>
            {balance.value !== 0 ? balance.value : ""}
          </S.BalanceValue>
        </S.Balance>
      </S.Content>
      <S.Buttons>
        {/* Quando clicar aqui ir pra tela de transactions
        com a props bool = true */}
        <S.NewTransaction onClick={() => newTransaction(true)}>
          Nova entrada
        </S.NewTransaction>

        <S.NewTransaction onClick={() => newTransaction(false)}>
          Nova saída
        </S.NewTransaction>
      </S.Buttons>
    </S.Container>
  );

  function newTransaction(bool) {
    navigate(
      "/transaction",
      bool ? { state: { isEntry: true } } : { state: { isEntry: false } }
    );
  }

  function logOut() {
    window.confirm("Você realmente deseja sair?");
    setToken("");
    navigate("/");
  }
}
