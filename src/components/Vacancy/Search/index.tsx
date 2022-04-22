import searchImg from "../../../assets/filtro.svg";
import { Container } from "./styles";

export function Search() {
  return (
    <Container>
      <input type="search" placeholder="Search..." name="filter" />{" "}
      <button type="submit"></button>
      <img src={searchImg} alt="" />
    </Container>
  );
}
