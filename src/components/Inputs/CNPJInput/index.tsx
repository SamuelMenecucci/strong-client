import { InputHTMLAttributes } from "react";
import InputMask from "react-input-mask";

export function CNPJInput({ ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <InputMask
      id="cnpj"
      mask="99.999.999./9999-99"
      type="text"
      placeholder="CNPJ"
      {...props}
    />
  );
}
