import styled from "styled-components";

export const RegisterForm = styled.form`
  text-align: center;

  input {
    /* border-radius: 16px;
    border-width: 2px;
    border-style: solid;
    border-image: linear-gradient(to right, #b224ef, #7579ff) 1;
    padding: 10px 10px; */

    border: 2px solid var(--purple-color);
    border-radius: 16px;

    padding: 10px 10px;

    width: 100%;

    margin-bottom: 33px;

    ::placeholder {
      color: rgba(0, 0, 0, 0.3);
      font-size: 18px;
    }

    & + input {
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 33px;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;

  .modalButtons {
    width: 260px;
    padding: 6px 10px;
  }
`;
