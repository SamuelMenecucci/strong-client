import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { VacancyModal } from "../Modals/VacancyModal";
import { Search } from "./Search";
import { Container, Content } from "./styles";
import { VacancyCard } from "./VacancyCard";

export function Vacancy() {
  const [vagas, setVagas] = useState([]);

  useEffect(() => {
    api.get("/vagas").then((res) => setVagas(res.data));
  }, []);

  return (
    <Container>
      <Search />

      {/* TODO O map com as vagas será feito aqui, passando as informações como propriedade para o vacancy card, inclusie com o id  */}

      {vagas.map((element) => {
        return <VacancyCard vaga={element} />;
      })}
    </Container>
  );
}
