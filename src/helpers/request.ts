import axios from "axios";

export const API_BASE_URL = import.meta.env.PUBLIC_API;
const ApiClient = () => {
  const instance = axios.create({
    baseURL: API_BASE_URL,
  });

  // instance.interceptors.request.use(
  //   async (request) => {
  //     return request;
  //   },
  //   (error) => {
  //     throw error;
  //   }
  // );

  return instance;
};

export default ApiClient();
