import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: auto;

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
  }

  .home-img {
  }
`;
