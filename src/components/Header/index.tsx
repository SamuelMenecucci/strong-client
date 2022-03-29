import { Container } from "./styles";
import logoImg from "../../assets/logo.svg";

export function Header() {
  return (
    <Container>
      <img src={logoImg} alt="" />
      <span>strONG</span>
    </Container>
  );
}
