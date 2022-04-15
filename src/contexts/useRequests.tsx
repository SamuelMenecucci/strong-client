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

  const [loggedOng, setLoggedOng] = useState(
    JSON.parse(sessionStorage.getItem("ong") || "")
  );

  console.log(loggedOng);

  const [ong, setOng] = useState({});
  const [vagas, setVagas] = useState([]);

  useEffect(() => {
    api.get("feedbacks").then((res) => setFeedbacks(res.data));
  }, []);

  useEffect(() => {
    api.get("/vagas").then((res) => setVagas(res.data));
  }, []);

  async function createOng(data: OngType) {
    api.post("createOng", { ...data }).then((res) => {
      sessionStorage.setItem("ong", JSON.stringify(res.data));

      console.log(res.data);
    });
  }

  return (
    <RequestsContext.Provider
      value={{ feedbacks, createOng, ong, setOng, vagas, loggedOng }}
    >
      {children}
    </RequestsContext.Provider>
  );
}

export function useRequests() {
  const context = useContext(RequestsContext);

  return context;
}
