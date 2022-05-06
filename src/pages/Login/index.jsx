import axios from "axios";
import * as S from "./style";
import { useContext } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "./../../provider/userContext";

export default function Login() {
  const navigate = useNavigate();
  const { setToken } = useContext(UserContext);

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

  async function singIn() {
    const email = document.querySelector("input[placeholder='E-mail']").value;
    const password = document.querySelector("input[placeholder='Senha']").value;

    const response = await axios.post("http://localhost:5000/sing-in", {
      email,
      password,
    });

    if (response.status === 200) {
      setToken(response.data.token);
      navigate("/home");
    } else {
      alert("Login ou senha incorretos!");
    }
  }
}
