import * as S from "./style";

export default function Button({ text, onClick }) {
  return (
    <S.Button onClick={() => onClick()}>
      <S.ButtonText>{text}</S.ButtonText>
    </S.Button>
  );
}
