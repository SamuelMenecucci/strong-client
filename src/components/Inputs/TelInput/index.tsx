import { InputHTMLAttributes } from "react";
import InputMask from "react-input-mask";

export function TelInput({ ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <InputMask
      id="tel"
      mask="(99) 99999-9999"
      type="tel"
      placeholder="(99) 99999-9999"
      {...props}
    />
  );
}
