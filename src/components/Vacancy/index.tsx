import { useState } from "react";
import { VacancyModal } from "../Modals/VacancyModal";
import { Search } from "./Search";
import { Container, Content } from "./styles";
import { VacancyCard } from "./VacancyCard";

export function Vacancy() {
  return (
    <Container>
      <Search />

      {/* TODO O map com as vagas será feito aqui, passando as informações como propriedade para o vacancy card, inclusie com o id  */}
      <VacancyCard />
    </Container>
  );
}
