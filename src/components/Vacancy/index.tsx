import { useState } from "react";
import { Search } from "./Search";
import { Container, Content } from "./styles";
import { VacancyCard } from "./VacancyCard";

export function Vacancy() {
  return (
    <Container>
      <Search />
      <VacancyCard
        onClick={() =>
          function Teste() {
            alert("foi");
          }
        }
      />
    </Container>
  );
}
