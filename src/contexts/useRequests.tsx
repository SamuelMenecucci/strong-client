import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
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
        toast.success("Criado!");
        sessionStorage.setItem("ong", JSON.stringify(res.data));
        window.location.href = "/";
      })
      .catch((err) => {
        toast.error(err.response.data);
      });
  }

  async function editOng(data: any) {
    console.log(data);
    const result = await api.put("editOng", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    sessionStorage.setItem("ong", JSON.stringify(result.data));
  }

  return (
    <RequestsContext.Provider
      value={{ feedbacks, createOng, vagas, loggedOng, setLoggedOng, editOng }}
    >
      {children}
    </RequestsContext.Provider>
  );
}

export function useRequests() {
  const context = useContext(RequestsContext);

  return context;
}
