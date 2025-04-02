import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3333", // Replace with your API base URL
  withCredentials: true, // Include cookies in requests
});
