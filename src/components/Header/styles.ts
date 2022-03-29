import styled from "styled-components";

export const Container = styled.header`
  background-color: #1b1c37;

  /* max-width: 1500px; */
  margin: 21px 15px;

  border-radius: 14.42px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 11px 43px;
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
  }
`;
