import { InputHTMLAttributes } from "react";
import { TagSelectorStyle } from "./styles";
import arrowDownImg from "../../../assets/arrowDown.svg";

export function TagSelector({
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <TagSelectorStyle {...props}>
      <details>
        <summary>
          Tag da Vaga
          <img src={arrowDownImg} alt="" />
        </summary>
        <div className="item">
          <label htmlFor="">
            <input type="checkbox" value="Javascript" id="Javascript" />
            Javascript
          </label>

          <label htmlFor="">
            <input type="checkbox" value="CSS" id="CSS" />
            CSS
          </label>

          <label htmlFor="">
            <input type="checkbox" value="HTML" id="HTML" />
            HTML
          </label>

          <label htmlFor="">
            <input type="checkbox" value="Python" id="Python" />
            Python
          </label>

          <label htmlFor="">
            <input type="checkbox" value="Social Mídia" id="Mídia" />
            Social Mídia
          </label>

          <label htmlFor="">
            <input type="checkbox" value="Banco de Dados" id="Banco" />
            Banco de Dados
          </label>

          <label htmlFor="">
            <input type="checkbox" value="Outro" id="Outro" />
            Outro
          </label>
        </div>
      </details>
    </TagSelectorStyle>
  );
}
