import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Vacancy } from "../../components/Vacancy";
import { Container } from "./styles";

export function Vacancies() {
  return (
    <Container>
      <Header />
      <Vacancy />
      <Footer />
    </Container>
  );
}
