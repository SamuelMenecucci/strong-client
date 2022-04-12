import styled from "styled-components";

export const Container = styled.header`
  background-color: var(--primary-color);
  margin: 21px 15px;
  /* max-width: 1200px; */

  border-radius: 14.42px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 11px 43px;

  min-width: 1200px;

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
  }
`;

export const Links = styled.div`
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

    /* &:last-child {
      margin-right: 230px;
    } */

    &.active {
      border-bottom: 2px solid #b224ef;
    }
  }
`;
