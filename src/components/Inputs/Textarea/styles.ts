import styled from "styled-components";

export const TextareaInput = styled.textarea`
  height: 205px;
  width: 100%;

  border: 2px solid var(--purple-color);
  border-radius: 16px;

  resize: none;

  margin-bottom: 32px;

  padding: 13px 23px;

  font-size: 22px;

  ::placeholder {
    color: rgba(0, 0, 0, 0.3);
    font-size: 18px;
  }
`;
