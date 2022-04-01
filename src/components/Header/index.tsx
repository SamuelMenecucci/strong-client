import { Container, Content, Links } from "./styles";
import logoImg from "../../assets/logo.svg";

export function Header() {
  const currentPage = window.location.pathname;

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="" />
        <span>
          str<b>ONG</b>
        </span>
      </Content>

      <Links>
        <a
          className={currentPage.includes("/home") ? "active" : undefined}
          href="/home"
        >
          Home
        </a>
        <a href="/">Vagas</a>
        <a
          href="/feedbacks"
          className={currentPage.includes("/feedbacks") ? "active" : undefined}
        >
          Feedback
        </a>
        <a href="/">Sobre nós</a>
      </Links>
    </Container>
  );
}
