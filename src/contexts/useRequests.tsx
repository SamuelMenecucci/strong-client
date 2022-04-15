import {
  createContext,
  useContext,
  useDebugValue,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";
import { OngType } from "../shared/models";

const RequestsContext = createContext<any>({});

export function RequestsProvider({ children }: any) {
  const [feedbacks, setFeedbacks] = useState<any>([]);

  const [ong, setOng] = useState({});
  const [vagas, setVagas] = useState([]);

  useEffect(() => {
    api.get("feedbacks").then((res) => setFeedbacks(res.data));
  }, []);

  useEffect(() => {
    api.get("ongs").then((res) => {
      setOng(res.data[2]);
      localStorage.setItem("ong", JSON.stringify(res.data[2]));
    });
  }, []);

  useEffect(() => {
    api.get("/vagas").then((res) => setVagas(res.data));
  }, []);

  async function createOng(data: OngType) {
    console.log(data);
    api.post("createOng", { ...data });
  }

  return (
    <RequestsContext.Provider
      value={{ feedbacks, createOng, ong, setOng, vagas }}
    >
      {children}
    </RequestsContext.Provider>
  );
}

export function useRequests() {
  const context = useContext(RequestsContext);

  return context;
}
