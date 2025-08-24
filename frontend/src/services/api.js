import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:4000/api",
});

export const fetchPlants = async (params) => {
  const { data } = await api.get("/plants", { params });
  return data;
};

export const addPlant = async (payload) => {
  const { data } = await api.post("/plants/add", payload);
  return data;
};
