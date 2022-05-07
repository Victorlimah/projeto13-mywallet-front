import * as S from "./style";

export default function Button({ text, onClick, disabled }) {
  return (
    <S.Button disabled={disabled} onClick={() => onClick()}>
      <S.ButtonText>{text}</S.ButtonText>
    </S.Button>
  );
}
