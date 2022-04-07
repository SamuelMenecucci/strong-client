import { Container, Content, Search, VacancyContent } from "./styles";
import searchImg from "../../assets/filtro.svg";

export function Vacancy() {
  return (
    <Container>
      <Search>
        <input type="search" placeholder="Search..." />{" "}
        <button type="submit"></button>
        <img src={searchImg} alt="" />
      </Search>

      <Content>
        <VacancyContent>
          <span>
            <img src={require("../../assets/user.png")} alt="" />
          </span>

          <div className="info">
            <h1>Social Mídia</h1>
            <p>Nível Fácil - Social - Designe</p>
          </div>
        </VacancyContent>

        <VacancyContent>
          <span>
            <img src={require("../../assets/user.png")} alt="" />
          </span>

          <div className="info">
            <h1>Social Mídia</h1>
            <p>Nível Fácil - Social - Designe</p>
          </div>
        </VacancyContent>

        <VacancyContent>
          <span>
            <img src={require("../../assets/user.png")} alt="" />
          </span>

          <div className="info">
            <h1>Social Mídia</h1>
            <p>Nível Fácil - Social - Designe</p>
          </div>
        </VacancyContent>

        <VacancyContent>
          <span>
            <img src={require("../../assets/user.png")} alt="" />
          </span>

          <div className="info">
            <h1>Social Mídia</h1>
            <p>Nível Fácil - Social - Designe</p>
          </div>
        </VacancyContent>
      </Content>
    </Container>
  );
}
