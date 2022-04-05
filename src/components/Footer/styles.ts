import styled from "styled-components";
import footerImg from "../../assets/footerBackground.svg";

export const Container = styled.footer`
  background: url(${footerImg}) no-repeat center center;
  background-size: 100%;
  margin: inherit;
  margin-top: 40px;
  /* width: 100%; */
  /* margin: auto; */

  /* background: url(images/bg.jpg) no-repeat center center fixed;  */

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  position: relative;

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

  a {
    & + a {
      margin-left: 48px;
    }
  }
`;
