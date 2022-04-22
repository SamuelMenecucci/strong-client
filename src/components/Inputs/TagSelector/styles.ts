import styled from "styled-components";

export const TagSelectorStyle = styled.div`
  margin-bottom: 10px;

  fieldset {
    legend {
      font-size: 18px;
      font-weight: 600;
      background: -webkit-linear-gradient(
        var(--purple-color),
        var(--blue-color)
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 17px;
      margin-right: 10px;
      margin-left: 40px;
    }

    position: relative;

    width: 320px;
    height: 70px;
    border: 2px solid var(--purple-color);
    border-radius: 40px;

    input {
      position: absolute;
      top: -30px;
      border: none;
      background: transparent;
      outline: none;
    }
  }
`;
