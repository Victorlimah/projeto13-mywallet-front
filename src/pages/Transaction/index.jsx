import { useState, useContext } from "react";
import * as S from "./style";
import { useNavigate, useLocation } from "react-router-dom";
import UserContext from "../../provider/UserContext";
import axios from "axios";
import minus from "../../assets/minus.svg";
import plus from "../../assets/plus.svg";
import remove from "../../assets/delete.svg";

export default function Transaction() {
  const bool = useLocation().state.isEntry;
  const [isEntry, setIsEntry] = useState(bool);

  const [isActive, setIsActive] = useState(true);
  const { token } = useContext(UserContext);

  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Header>
        <span>{isEntry ? "Nova entrada" : "Nova saída"}</span>
        <span onClick={() => back()}>
          <img src={remove} alt="exit" />
        </span>
      </S.Header>

      <S.Buttons>
        <S.Button
          className={isEntry ? "selected" : ""}
          onClick={() => setIsEntry(true)}
        >
          <img src={plus} alt="plus" />
        </S.Button>

        <S.Button
          className={isEntry ? "" : "selected"}
          onClick={() => setIsEntry(false)}
        >
          <img src={minus} alt="minus" />
        </S.Button>
      </S.Buttons>

      <S.Form onSubmit={submit}>
        <S.Input
          required
          name="value"
          type="number"
          placeholder="Valor"
          disabled={!isActive}
        />

        <S.Input
          required
          type="text"
          name="description"
          placeholder="Descrição"
          disabled={!isActive}
        />

        <S.Button type="submit">
          Salvar {isEntry ? "entrada" : "saída"}
        </S.Button>
      </S.Form>
    </S.Container>
  );

  function back() {
    window.confirm("Você realmente deseja cancelar a operação?");
    navigate("/home");
  }

  function submit(e) {
    e.preventDefault();
    setIsActive(false);
    let { value, description } = e.target;
    value = Number(value.value);

    if (!isEntry) value *= -1;

    const data = {
      value,
      description: description.value,
      type: isEntry ? "cashIn" : "cashOut",
    };

    axios
      .post("http://localhost:5000/transactions", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
        setIsActive(true);
      });
  }
}
