import { Container, Links } from "./styles";

import instagramImg from "../../assets/instagram.svg";
import linkedInImg from "../../assets/linkedin.svg";
import gitHubImg from "../../assets/github.svg";
import footerImg from "../../assets/logoFooter.svg";

export function Footer() {
  return (
    <Container>
      <img src={footerImg} alt="" />

      <Links>
        <span>
          <a href="/">
            <img src={instagramImg} alt="" />
          </a>

          <a href="/">
            <img src={gitHubImg} alt="" />
          </a>

          <a href="/">
            <img src={linkedInImg} alt="" />
          </a>
        </span>
        <p>Todos os direitos reservados ©2022 strONG </p>
      </Links>
    </Container>
  );
}
