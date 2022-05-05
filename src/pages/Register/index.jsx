import axios from "axios";
import * as S from "./style";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.Title>MyWallet</S.Title>
      <Input placeholder="Nome" />
      <Input placeholder="E-mail" />
      <Input placeholder="Senha" type="password" />
      <Input placeholder="Confirmar senha" type="password" />
      <Button text="Cadastrar" onClick={() => singUp(navigate)} />
      <S.Link>
        <Link to="/">Já tem uma conta? Entre agora!</Link>
      </S.Link>
    </S.Container>
  );
}

function singUp(callback) {
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
    .post("http://localhost:5000/sing-up", { user })

    .then((response) => {
      if (response.status === 201) {
        alert("Cadastro realizado com sucesso!");
        callback("/");
      } else {
        alert("Cadastro não realizado!");
      }
    })

    .catch((error) => {
      alert("Cadastro não realizado catch!");
    });
}
