import styled from "styled-components";
import searchImg from "../../../assets/search.svg";

export const Container = styled.form`
  position: relative;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 60px;

  img {
    margin-left: 10px;
  }

  button {
    height: 50px;
    width: 50px;
    background: url(${searchImg}) center no-repeat;
    border: none;
    position: absolute;
    top: 3px;
    left: 5px;
    cursor: pointer;
  }

  input {
    height: 50px;
    border: none;
    outline: none;
    padding-left: 50px;
    top: 0;
    left: 0;
    background: none;

    border: 2px solid var(--blue-color);
    border-radius: 26px;

    margin-bottom: 0;

    ::placeholder {
      font-size: 16px;
      color: rgba(27, 28, 55, 0.3);
    }
  }
`;
