import axios from "axios";

export const api = axios.create({
  // baseURL: "http://localhost:5001",
  baseURL: process.env.REACT_APP_API_ADDRESS,
  withCredentials: true,
});
