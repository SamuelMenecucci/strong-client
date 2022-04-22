import { InputHTMLAttributes } from "react";
import { TagSelectorStyle } from "./styles";

export function TagSelector({
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <TagSelectorStyle>
      <fieldset>
        <legend>Tag</legend>
        <input
          type="text"
          placeholder="Separe as tags por virgula"
          {...props}
        />
      </fieldset>
    </TagSelectorStyle>
  );
}
