import styled from "styled-components";

export const RegisterForm = styled.form`
  text-align: center;

  button {
    background: transparent;
    border: none;
    position: absolute;
    right: 15px;
    top: 15px;
  }

  h1 {
    font-size: 24px;
    font-weight: 600;
    background: -webkit-linear-gradient(var(--purple-color), var(--blue-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

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
  }

  textarea {
    height: 205px;

    border: 2px solid var(--purple-color);
    border-radius: 16px;

    resize: none;
  }
`;
