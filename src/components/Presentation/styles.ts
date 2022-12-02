import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: auto;

  margin-top: 55px;

  max-width: 1200px;

  @media (max-width: 780px) {
    max-width: initial;
    display: initial;

    .be-a-volunteer {
      h1 {
        font-size: 46px !important;
        margin: 20px auto !important;

        line-height: 48px !important;
      }

      p {
        position: absolute;
        padding: 5px;
      }
    }
  }
  .be-a-volunteer {
    padding: 0 28px;
    h1 {
      font-size: 56px;
      line-height: 96px;

      color: var(--primary-color);

      margin-bottom: 58px;
    }

    p {
      line-height: 24px;
      font-weight: 500;
    }

    #register {
      padding: 16px 50px;
      min-width: 318px;
      margin-top: 50px;
    }

    img {
      margin-left: 10px;
    }
  }

  .home-img {
    img {
      width: 100%;
    }
  }
  .home-img.mobile {
    display: none;
  }

  @media (max-width: 780px) {
    .home-img.mobile {
      display: initial;
      img {
        width: 80%;
      }
    }

    .home-img.desktop {
      display: none;

      img {
        width: 100%;
      }
    }
  }
`;
