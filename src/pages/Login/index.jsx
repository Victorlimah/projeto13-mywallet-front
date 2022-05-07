import axios from "axios";
import * as S from "./style";
import { useState, useContext } from "react";
import Input from "../../components/Input";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "./../../provider/UserContext";
import Loading from "../../components/Loading";

export default function Login() {
  const navigate = useNavigate();
  const { setToken } = useContext(UserContext);
  const [textInput, setTextInput] = useState("Entrar");
  const [isActive, setIsActive] = useState(true);

  return (
    <S.Container>
      <S.Title>MyWallet</S.Title>
      <S.Form onSubmit={singIn}>
        <Input
          required
          type="email"
          placeholder="E-mail"
          disabled={!isActive}
        />

        <Input
          required
          type="password"
          placeholder="Senha"
          disabled={!isActive}
        />

        <S.Button disabled={!isActive}>{textInput}</S.Button>
      </S.Form>
      <S.Link>
        <Link to="/sing-up">Primeira vez? Cadastre-se</Link>
      </S.Link>
    </S.Container>
  );

  async function singIn(event) {
    event.preventDefault();
    setTextInput(Loading());
    setIsActive(false);
    let elementEmail = document.querySelector("input[placeholder='E-mail']");
    let elementPassword = document.querySelector("input[placeholder='Senha']");

    let email = elementEmail.value;
    let password = elementPassword.value;

    try {
      const response = await axios.post("http://localhost:5000/sing-in", {
        email,
        password,
      });

      if (response.status === 200) {
        setToken(response.data);
        navigate("/home");
      }
    } catch (error) {
      email = "";
      password = "";
      setTextInput("Entrar");
      setIsActive(true);

      alert("Login ou senha incorretos!");
    }
  }
}
