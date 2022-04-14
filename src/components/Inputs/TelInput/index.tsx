import { InputHTMLAttributes } from "react";
import InputMask from "react-input-mask";

export function TelInput({ ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <InputMask
      mask="(99) 99999-9999"
      type="tel"
      placeholder="Seu telefone"
      {...props}
    />
  );
}
