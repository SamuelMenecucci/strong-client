import { InputHTMLAttributes } from "react";

export function EmailInput({
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return <input type="email" placeholder="E-mail" {...props} />;
}
