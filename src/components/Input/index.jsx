import * as S from "./style";
import { useState } from "react";

export default function Input({ placeholder, type = "text" }) {
  const [inputValue, setInputValue] = useState("");
  return (
    <S.Input
      placeholder={placeholder}
      type={type}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
}
