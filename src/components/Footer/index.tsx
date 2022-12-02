import { Container, Links } from "./styles";

import instagramImg from "../../assets/instagram.svg";
import linkedInImg from "../../assets/linkedin.svg";
import gitHubImg from "../../assets/github.svg";
import footerImg from "../../assets/logoFooter.svg";
import footerMobileImg from "../../assets/logoFooterMobile.svg";
import { useState } from "react";

export function Footer() {
  const [mobile, setMobile] = useState(() => {
    const tela = window.screen.width;

    if (tela > 780) return true;

    return false;
  });

  console.log(mobile);

  return (
    <Container>
      <img
        src={window.screen.width > 780 ? footerImg : footerMobileImg}
        alt=""
      />

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
