import styled from "styled-components";
import footerImg from "../../assets/footerBackground.svg";
import footerMobileImg from "../../assets/footerMobile.svg";

export const Container = styled.footer`
  background: url(${footerImg}) no-repeat center center;
  background-size: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  position: relative;

  min-width: 1200px;

  @media (max-width: 780px) {
    min-width: initial;
    width: 100vw;
    background: url(${footerMobileImg}) no-repeat center center;
    background-size: 100%;
  }

  p {
    text-align: center;
    color: #fff;
    font-size: 18px;
    line-height: 27px;
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 22px;
  right: 31px;

  @media (max-width: 780px) {
    display: none;
  }

  a {
    & + a {
      margin-left: 48px;
    }
  }
`;
