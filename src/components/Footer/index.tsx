import { Container, Links } from "./styles";

import instagramImg from "../../assets/instagram.svg";
import linkedInImg from "../../assets/linkedin.svg";
import gitHubImg from "../../assets/github.svg";

export function Footer() {
  return (
    <Container>
      <Links>
        <a href="/">
          <img src={instagramImg} alt="" />
        </a>

        <a href="/">
          <img src={gitHubImg} alt="" />
        </a>

        <a href="/">
          <img src={linkedInImg} alt="" />
        </a>
      </Links>

      <p>Todos os direitos reservados ©2022 strONG </p>
    </Container>
  );
}
