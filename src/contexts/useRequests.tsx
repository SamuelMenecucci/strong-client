import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { OngType } from "../shared/models";

const RequestsContext = createContext<any>({});

export function RequestsProvider({ children }: any) {
  const [loggedOng, setLoggedOng] = useState(() => {
    const isLogged = sessionStorage.getItem("ong");

    if (isLogged) {
      return JSON.parse(isLogged);
    }

    return "";
  });

  console.log(loggedOng);

  const [feedbacks, setFeedbacks] = useState<any>([]);

  const [vagas, setVagas] = useState([]);

  async function createOng(data: OngType) {
    //TODO descobrir o pq dessa forma não funciona. não grava os dados do retorno no sessionStorage
    // api
    //   .post("createOng", { ...data })
    //   .then((res) => {
    //     sessionStorage.setItem("ong", JSON.stringify(res.data));
    //   })
    //   .catch((err) => err);

    const result = await api.post("createOng", { ...data });

    sessionStorage.setItem("ong", JSON.stringify(result.data));
  }

  function editOng(data: any) {
    api.put("editOng", { ...data });
  }

  return (
    <RequestsContext.Provider
      value={{ feedbacks, createOng, vagas, loggedOng, setLoggedOng }}
    >
      {children}
    </RequestsContext.Provider>
  );
}

export function useRequests() {
  const context = useContext(RequestsContext);

  return context;
}
