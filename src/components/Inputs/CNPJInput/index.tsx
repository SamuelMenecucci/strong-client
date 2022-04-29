import { InputHTMLAttributes } from "react";

export function CNPJInput({ ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input typeof="text" id="cnpj" placeholder="CNPJ" {...props} />;
}
