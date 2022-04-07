import styled from "styled-components";
import searchImg from "../../assets/search.svg";

export const Container = styled.div`
  width: 1300px;
  margin: 0 auto;
`;

export const Search = styled.form`
  position: relative;
  margin-bottom: 20px;
  display: flex;
  align-items: center;

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

    width: 1300px;

    border: 2px solid var(--blue-color);
    border-radius: 26px;

    ::placeholder {
      font-size: 16px;
      color: rgba(27, 28, 55, 0.3);
    }
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px 90px;

  align-items: center;
`;

export const VacancyContent = styled.div`
  width: 375px;
  height: 190px;
  background-color: rgba(117, 121, 255, 0.2);
  border-radius: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px 20px;

  span {
    width: 109px;
    height: 109px;
    margin-right: 14px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
  }

  .info {
    h1 {
      font-size: 24px;
      background: -webkit-linear-gradient(
        var(--purple-color),
        var(--blue-color)
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      border-width: 0 0 1px 0;
      border-style: solid;
      border-image: linear-gradient(to right, #b224ef, #7579ff) 1;

      margin-bottom: 10px;
    }

    p {
      font-size: 14px;
    }
  }
`;
