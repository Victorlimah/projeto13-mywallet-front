import GlobalStyle from "./../styles/GlobalStyle";
import Routes from "./../routes";
export const URL = "https://driven-mywallet-api.herokuapp.com";
//export const URL = "http://localhost:5000";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  );
}
