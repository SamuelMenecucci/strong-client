import { InputHTMLAttributes } from "react";

export function CNPJInput({ ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      typeof="text"
      id="cnpj"
      placeholder="00.000.000/0000-00"
      {...props}
    />
  );
}
