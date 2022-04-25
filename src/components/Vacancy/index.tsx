import axios from "axios";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Search } from "../Inputs/Search";
import { Container, Content } from "./styles";
import { VacancyCard } from "./VacancyCard";

export function Vacancy() {
  const [vagas, setVagas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.get("/getVacancies").then((res) => {
      setVagas(res.data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>carregando</p>;
  }

  return (
    <Container>
      <Search />
      <VacancyCard vagas={vagas} />;
    </Container>
  );
}
