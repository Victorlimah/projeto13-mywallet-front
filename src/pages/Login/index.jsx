import Input from "../../components/Input";
import Button from "../../components/Button";
import * as S from "./style";

export default function Login() {
  return (
    <S.Container>
      <S.Title>MyWallet</S.Title>
      <Input placeholder="E-mail" />
      <Input placeholder="Senha" />
      <Button text="Entrar" onClick={login} />
      <S.Link to="/register">Primeira vez? Cadastre-se</S.Link>
    </S.Container>
  );
}

function login() {
  console.log("Login");
}
