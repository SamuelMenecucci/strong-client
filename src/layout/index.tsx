import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Container } from "./styles";

export function Layout({ children }: any) {
  return (
    <Container>
      <div>
        <Header />
        {children}
      </div>
      <Footer />
    </Container>
  );
}
