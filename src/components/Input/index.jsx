import * as S from "./style";
import { useState } from "react";

export default function Input({ placeholder }) {
  const [inputValue, setInputValue] = useState("");
  return (
    <S.Input
      placeholder={placeholder}
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
}
