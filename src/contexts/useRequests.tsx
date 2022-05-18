import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { api } from "../services/api";
import { OngType } from "../shared/models";

const RequestsContext = createContext<any>({});

export function RequestsProvider({ children }: any) {
  const [loggedOng, setLoggedOng] = useState("");

  async function loadOng() {
    let result = await api.get("/ongs/getOng");

    setLoggedOng(result.data);
  }

  useEffect(() => {
    loadOng();
  }, []);

  const [feedbacks, setFeedbacks] = useState<any>([]);

  const [vagas, setVagas] = useState([]);

  async function createOng(data: OngType) {
    toast.promise(api.post("/ongs/createOng", { ...data }), {
      loading: "Salvando...",
      success: (res) => {
        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
        return "Criado!";
      },
      error: (err) => err.response.data,
    });
  }

  async function editOng(data: any) {
    console.log(data);

    toast.promise(
      api.put("ongs/editOng", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
      {
        loading: "Salvando alterações...",
        success: (res) => {
          setTimeout(() => {
            window.location.reload();
          });

          // sessionStorage.setItem("ong", JSON.stringify(res.data));

          return "Alterações salvas!";
        },
        error: (err) => err.response.data,
      }
    );
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
