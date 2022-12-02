import { InputHTMLAttributes } from "react";

export function EmailInput({
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input id="email" type="email" placeholder="email@email.com" {...props} />
  );
}
