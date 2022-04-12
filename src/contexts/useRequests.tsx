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

  useEffect(() => {
    api.get("feedbacks").then((res) => setFeedbacks(res.data));
  }, []);

  useEffect(() => {
    api.get("ongs").then((res) => {
      setOng(res.data[2]);
      localStorage.setItem("ong", JSON.stringify(res.data[2]));
    });
  }, []);

  async function createOng(data: OngType) {
    api.post("ongs", { ...data });
  }

  return (
    <RequestsContext.Provider value={{ feedbacks, createOng, ong, setOng }}>
      {children}
    </RequestsContext.Provider>
  );
}

export function useRequests() {
  const context = useContext(RequestsContext);

  return context;
}
