import { InputHTMLAttributes } from "react";

export function SenhaInput({
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input id="senha" type="password" placeholder="************" {...props} />
  );
}
