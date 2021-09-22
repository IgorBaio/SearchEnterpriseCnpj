import webserver from "./webserver";
import webserverDatabase from "./webserverDatabase";
import cnpjWs from "cnpj-ws";
export const getEnterprise = async (cnpj, sso) => {
  try {
    const teste = cnpj.replace(/[\.\-\/]/g, "");

    const response = await webserver.get(`/${teste}`);
    if (!response && !response?.data) {
      return false;
    }
    const { data } = response;
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const setEnterpriseOnDatabase = async (enterprise, sso) => {
  try {
    const response = await webserverDatabase.post(`/`, enterprise);
    if (!response && !response?.data) {
      return false;
    }
    const { data } = response;

    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getEnterpriseOnDatabase = async (enterprise, sso) => {
  try {
    const response = await webserverDatabase.get(`/`);
    if (!response && !response?.data) {
      return false;
    }
    const { data } = response;

    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const deleteEnterpriseOnDatabase = async (enterprise, sso) => {
  try {
    const response = await webserverDatabase.delete(`/`, {
      data: enterprise[0],
    });
    if (!response && !response?.data) {
      return false;
    }
    const { data } = response;

    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getEnterpriseStarred = async (username, sso) => {
  try {
    const response = await webserver.get(`/${username}/starred`);
    if (!response && !response?.data) {
      return false;
    }
    const { data } = response;

    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
};
