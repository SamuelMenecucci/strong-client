import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: auto;

  margin-top: 55px;

  max-width: 1200px;

  .be-a-volunteer {
    /* width: 541px; */

    h1 {
      font-size: 96px;
      line-height: 96px;

      color: var(--primary-color);

      margin-bottom: 58px;
    }

    p {
      line-height: 24px;
      font-weight: 500;
    }

    button {
      width: 318px;
      padding: 16px 50px;
      border-radius: 16px;

      margin-top: 50px;

      background: linear-gradient(to right, #b224ef, #7579ff, #7579ff);
      border: none;

      font-size: 24px;
      color: #fff;

      display: flex;
      align-items: center;
      justify-content: center;

      img {
        margin-left: 10px;
      }
    }
  }

  .home-img {
  }
`;
