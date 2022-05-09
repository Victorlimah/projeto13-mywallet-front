/* eslint-disable react-hooks/rules-of-hooks */
import * as S from "./style";
import axios from "axios";
import { URL } from "../../components/App";
import plus from "./../../assets/plus.svg";
import minus from "./../../assets/minus.svg";
import remove from "./../../assets/delete.svg";
import Logout from "./../../assets/logout.svg";
import { useNavigate } from "react-router-dom";
import UserContext from "../../provider/UserContext";
import { useState, useEffect, useContext } from "react";

export default function Home() {
  const { token, setToken } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [name, setName] = useState("");

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
            {transactions.map(({ _id, date, description, value, type }) => (
              <S.Transaction key={_id}>
                <S.TransactionDate>{date}</S.TransactionDate>
                <S.TransactionTitle>{description}</S.TransactionTitle>
                <div>
                  <S.TransactionValue className={type}>
                    {value
                      .toString()
                      .replace("-", "")
                      .replace(".", ",")
                      .replace("R$", "")
                      .trim()}
                  </S.TransactionValue>
                  <span onClick={() => deleteTransact(_id)}>
                    <img src={remove} alt="Remove" />
                  </span>
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
        <S.NewTransaction onClick={() => newTransaction(true)}>
          <img src={plus} alt="Plus" />
          <span>Nova entrada</span>
        </S.NewTransaction>

        <S.NewTransaction onClick={() => newTransaction(false)}>
          <img src={minus} alt="Minus" />
          <span>Nova saída</span>
        </S.NewTransaction>
      </S.Buttons>
    </S.Container>
  );

  function getTransactions() {
    axios
      .get(`${URL}/transactions`, {
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
  }

  function deleteTransact(id) {
    if (window.confirm("Você realmente deseja excluir este registro?")) {
      axios
        .delete(`${URL}/transactions/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => {
          console.log("Deleted");
          getTransactions();
        })
        .catch((err) => {
          alert(err);
        });
    }
  }

  function newTransaction(bool) {
    navigate(
      "/transaction",
      bool ? { state: { isEntry: true } } : { state: { isEntry: false } }
    );
  }

  function logOut() {
    if (window.confirm("Você realmente deseja sair?")) {
      setToken("");
      navigate("/");
    }
  }
}
