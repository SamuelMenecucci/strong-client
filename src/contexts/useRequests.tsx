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

  const [feedbacks, setFeedbacks] = useState<any>([]);

  const [vagas, setVagas] = useState([]);

  async function createOng(data: OngType) {
    api
      .post("createOng", { ...data })
      .then((res) => {
        sessionStorage.setItem("ong", JSON.stringify(res.data));
      })
      .catch((err) => err);
  }

  return (
    <RequestsContext.Provider
      value={{ feedbacks, createOng, vagas, loggedOng }}
    >
      {children}
    </RequestsContext.Provider>
  );
}

export function useRequests() {
  const context = useContext(RequestsContext);

  return context;
}
