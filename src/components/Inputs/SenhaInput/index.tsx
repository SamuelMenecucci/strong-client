import { InputHTMLAttributes } from "react";

export function SenhaInput({
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return <input type="password" placeholder="Digite a sua senha" />;
}
