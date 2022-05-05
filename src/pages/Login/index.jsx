import axios from "axios";
import * as S from "./style";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.Title>MyWallet</S.Title>
      <Input placeholder="E-mail" />
      <Input placeholder="Senha" type="password" />
      <Button text="Entrar" onClick={() => singIn(navigate)} />
      <S.Link>
        <Link to="/sing-up">Primeira vez? Cadastre-se</Link>
      </S.Link>
    </S.Container>
  );
}

async function singIn(callback) {
  const email = document.querySelector("input[placeholder='E-mail']").value;
  const password = document.querySelector("input[placeholder='Senha']").value;

  const response = await axios.post("http://localhost:5000/sing-in", {
    email,
    password,
  });

  if (response.status === 200) {
    alert("Login realizado com sucesso!");
    callback("/home");
  } else {
    alert("Login ou senha incorretos!");
  }
}
