import axios from "axios";

const BASE_URL = "https://brasilapi.com.br/api/cnpj/v1/";

const client = axios.create({
  baseURL: BASE_URL,
});

client.interceptors.request.use(async (config) => {
  return config;
});
client.interceptors.response.use(async (config) => {
  return config;
});

export default client;
