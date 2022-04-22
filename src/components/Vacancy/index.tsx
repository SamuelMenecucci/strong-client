import axios from "axios";
import { useEffect, useState } from "react";
import { api, jsonServer } from "../../services/api";
import { VacancyModal } from "../Modals/VacancyModal";
import { Search } from "./Search";
import { Container, Content } from "./styles";
import { VacancyCard } from "./VacancyCard";

export function Vacancy() {
  const [vagas, setVagas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   api.get("/vagas").then((res) => setVagas(res.data));
  // }, []);

  useEffect(() => {
    jsonServer.get("/vagas").then((res) => {
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
