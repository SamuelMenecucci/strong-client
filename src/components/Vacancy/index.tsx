import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Search } from "../Inputs/Search";
import { Container, Content } from "./styles";
import { VacancyCard } from "./VacancyCard";

export function Vacancy() {
  const [vagas, setVagas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [foundVacancies, setFoundVacancies] = useState([]);

  const getVacancies = async () => {
    try {
      const res = await api.get("/getVacancies");

      setVagas(res.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getVacancies();
  }, []);

  useEffect(() => {
    api
      .get(`searchVacancy${window.location.search}`)
      .then((res) => setFoundVacancies(res.data));
  }, []);

  // if (isLoading) {
  //   return (
  //     <h1 style={{ textAlign: "center", fontSize: "32px", padding: "50px" }}>
  //       Carregando...
  //     </h1>
  //   );
  // }

  console.log("vagas aqui caraui", vagas);

  return (
    <Container>
      <Search />
      {isLoading ? (
        <h1 style={{ textAlign: "center", fontSize: "32px", padding: "50px" }}>
          Carregando...
        </h1>
      ) : foundVacancies.length ? (
        <VacancyCard vagas={foundVacancies} />
      ) : (
        <VacancyCard vagas={vagas} />
      )}
    </Container>
  );
}
