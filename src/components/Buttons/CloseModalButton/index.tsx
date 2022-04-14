import { ButtonHTMLAttributes } from "react";
import closeImg from "../../../assets/close.svg";
import { CloseButton } from "./styles";

export function CloseModalButton({
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <CloseButton {...props}>
      <img src={closeImg} alt="" />
    </CloseButton>
  );
}
