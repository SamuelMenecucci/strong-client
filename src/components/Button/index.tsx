import { ButtonHTMLAttributes } from "react";
import { ButtonComponent } from "./styles";

export function Button({ ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <ButtonComponent {...props} />;
}
