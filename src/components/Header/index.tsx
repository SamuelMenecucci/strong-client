import { Container, Content, Links } from "./styles";
import logoImg from "../../assets/logo.svg";

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="" />
        <span>
          str<b>ONG</b>
        </span>
      </Content>

      <Links>
        <a href="">Home</a>
        <a href="">Vagas</a>
        <a href="">Feedback</a>
        <a href="">Sobre nós</a>
      </Links>
    </Container>
  );
}
