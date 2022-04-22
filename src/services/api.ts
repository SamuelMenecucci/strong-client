import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5001",
});

export const jsonServer = axios.create({
  baseURL: "http://localhost:5050",
});
