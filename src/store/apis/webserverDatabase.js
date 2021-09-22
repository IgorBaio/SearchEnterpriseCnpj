import axios from "axios";

const BASE_URL = 'https://api-enterprise-cnpj.herokuapp.com/enterprises'//"http://localhost:3333/enterprises";

const client = axios.create({
  baseURL: BASE_URL,
});

export default client;
