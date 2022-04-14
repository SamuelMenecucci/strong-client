import { TextareaHTMLAttributes } from "react";
import { TextareaInput } from "./styles";

export function Textarea({
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <TextareaInput {...props} />;
}
