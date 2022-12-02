import styled from "styled-components";

export const Container = styled.header`
  background-color: var(--primary-color);

  details {
    display: none;
  }

  @media (max-width: 780px) {
    details {
      display: initial;
      summary {
        list-style: none;
      }

      .menuList {
        position: fixed;
        right: 0;
        top: 0;
        z-index: 2;

        width: 179px;
        height: 100vh;
        padding: 20px 15px;

        background-color: #121324;

        border-radius: 16px 0 0 16px;

        button.profile {
          width: 100px;
          margin: 17px auto;
        }

        .itens {
          border-top: 1px solid #fff;

          a {
            display: block;
            text-decoration: none;
            font-size: 22px;
            line-height: 40px;
            color: rgba(255, 255, 255, 1);
          }
        }
      }
    }
  }

  padding: 11px 43px;

  min-width: 1100px;
  width: 98%;
  margin: 0 auto;

  border-radius: 14.42px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 780px) {
    min-width: initial;
    width: 95%;
    display: flex;
  }

  button.profile {
    padding: 7px 13px;
  }
`;

export const Content = styled.div`
  display: flex;

  span {
    color: #fff;
    font-size: 32px;
  }

  img {
    margin-right: 28px;

    @media (max-width: 780px) {
      display: none;
    }
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 780px) {
    display: none;
  }

  a {
    color: #fff;
    text-decoration: none;
    font-size: 18px;

    & + a {
      margin-left: 42px;
    }

    &:hover {
      border-bottom: 2px solid #7579ff;
    }

    &.active {
      border-bottom: 2px solid #b224ef;
    }
  }
`;
