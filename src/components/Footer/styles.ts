import styled from "styled-components";

export const Container = styled.footer`
  background: linear-gradient(
    to right,
    rgba(178, 36, 239, 0.1),
    rgba(117, 121, 255, 0.2)
  );

  margin-top: 40px;
  p {
    text-align: center;
  }

  padding: 32px 0;
`;

export const Links = styled.div`
  display: flex;
  justify-content: center;

  a {
    & + a {
      margin-left: 48px;
    }
  }
`;
