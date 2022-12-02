import { Container } from "./styles";

export function Search() {
  return (
    <Container>
      <input
        type="search"
        placeholder="Digite o titulo ou a tag que deseja buscar"
        name="filter"
      />
      <button type="submit"></button>
      {/* <img src={searchImg} alt="" /> */}
    </Container>
  );
}
