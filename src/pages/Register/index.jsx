import axios from "axios";
import * as S from "./style";
import { useState } from "react";
import Input from "../../components/Input";
import { URL } from "../../components/App";
import Loading from "../../components/Loading";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [textInput, setTextInput] = useState("Cadastrar");
  const [isActive, setIsActive] = useState(true);

  return (
    <S.Container>
      <S.Title>MyWallet</S.Title>
      <S.Form onSubmit={singUp}>
        <Input placeholder="Nome" disabled={!isActive} />
        <Input placeholder="E-mail" type="email" disabled={!isActive} />
        <Input placeholder="Senha" type="password" disabled={!isActive} />

        <Input
          placeholder="Confirmar senha"
          type="password"
          disabled={!isActive}
        />

        <S.Button>{textInput}</S.Button>
      </S.Form>
      <S.Link>
        <Link to="/">Já tem uma conta? Entre agora!</Link>
      </S.Link>
    </S.Container>
  );

  function singUp(event) {
    event.preventDefault();
    setTextInput(Loading());
    setIsActive(false);

    const name = document.querySelector("input[placeholder='Nome']").value;
    const email = document.querySelector("input[placeholder='E-mail']").value;
    const password = document.querySelector("input[placeholder='Senha']").value;
    const confirmPassword = document.querySelector(
      "input[placeholder='Confirmar senha']"
    ).value;

    const user = {
      name,
      email,
      password,
      confirmPassword,
    };

    axios
      .post(`${URL}/sing-up`, { user })

      .then((response) => {
        if (response.status === 201) {
          alert("Cadastro realizado com sucesso!");
          navigate("/");
        }
      })

      .catch((error) => {
        alert("Erro ao realizar o cadastro!");
        setTextInput("Cadastrar");
        setIsActive(true);
      });
  }
}
