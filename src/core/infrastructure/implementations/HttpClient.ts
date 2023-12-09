import axios, { AxiosRequestConfig } from "axios";
import { provided, injectable } from "inversify-sugar";
import EnvToken from "../../domain/EnvToken";
import IHttpClient from "../../domain/specifications/IHttpClient";

@injectable()
class HttpClient implements IHttpClient {
  private axios: typeof axios;

  constructor(@provided(EnvToken) private readonly env: ImportMetaEnv) {
    this.axios = axios;

    axios.interceptors.request.use((requestConfig) => {
      requestConfig.baseURL = this.env.VITE_BASE_API_URL;

      // TODO: add authentication

      return requestConfig;
    });

    this.axios.interceptors.response.use(undefined, (err) => {
      if (err.response) {
        if (err.response.status === 401 || err.response.status === 403) {
          // TODO: logout
        }
      }

      return Promise.reject(err);
    });
  }

  public get<ResponseType>(url: string, config?: AxiosRequestConfig) {
    return this.axios
      .get<ResponseType>(url, config)
      .then((response) => response.data);
  }

  public post<DataType, ResponseType>(
    url: string,
    data?: DataType,
    config?: AxiosRequestConfig
  ) {
    return this.axios
      .post<ResponseType>(url, data, config)
      .then((response) => response.data);
  }

  public patch<DataType, ResponseType>(
    url: string,
    data?: DataType,
    config?: AxiosRequestConfig
  ) {
    return this.axios
      .patch<ResponseType>(url, data, config)
      .then((response) => response.data);
  }

  public delete<ResponseType>(url: string, config?: AxiosRequestConfig) {
    return this.axios
      .delete<ResponseType>(url, config)
      .then((response) => response.data);
  }
}

export default HttpClient;
