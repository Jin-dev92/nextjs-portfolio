import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, CreateAxiosDefaults } from 'axios';
import { replaceFalsyData } from '@/utils/params.util';

export interface Response<T> {
  code: number;
  data: T & { total?: number };
}

interface ErrorResponse<T> {
  code: number;
  message: string;
  data: T;
}

// interface ApiConstructorArgs {
//   baseUrl: string;
//   headers?: AxiosRequestConfig['headers'];
// }

export interface CustomError extends AxiosError<ErrorResponse<{}>> {}

class Api {
  private readonly axiosInstance: AxiosInstance;
  protected readonly token: string | null | undefined;

  constructor(config: CreateAxiosDefaults) {
    // if (typeof localStorage !== 'undefined') {
    //   this.token = localStorage.getItem('accessToken') ?? null;
    // }
    this.axiosInstance = axios.create(config);

    const hasAuthorizationHeader = Boolean(
      this.axiosInstance.defaults.headers.common.Authorization,
    );
    const hasToken = Boolean(this.token);

    this.axiosInstance.interceptors.request.use(
      config => {
        if (config.data) {
          if (config.headers['Content-Type'] !== 'multipart/form-data') {
            config.data = replaceFalsyData(config.data);
          }
          if (!hasAuthorizationHeader && hasToken) {
            config.headers.Authorization = `Bearer ${this.token}`;
            return config;
          }
        }
        if (config.params) {
          config.params = replaceFalsyData(config.params);
        }
        return config;
      },
      function (error) {
        // 요청 오류가 있는 작업 수행
        return Promise.reject(error);
      },
    );
  }

  protected async get<T, D = unknown>(
    url: string,
    params?: D,
    headers?: AxiosRequestConfig['headers'],
  ) {
    return this.axiosInstance.get<Response<T>>(url, {
      params,
      headers,
    });
  }

  protected async post<T, D>(url: string, data: D, headers?: AxiosRequestConfig['headers']) {
    return this.axiosInstance.post<Response<T>>(url, data, { headers });
  }

  protected async put<T, D>(url: string, data: D, headers?: AxiosRequestConfig['headers']) {
    return this.axiosInstance.put<Response<T>>(url, data, { headers });
  }

  protected async delete<T, D>(url: string, data?: D, headers?: AxiosRequestConfig['headers']) {
    return this.axiosInstance.delete<Response<T>>(url, { headers, data });
  }

  protected async patch<T, D>(url: string, data: D, headers?: AxiosRequestConfig['headers']) {
    return this.axiosInstance.patch<Response<T>>(url, data, { headers });
  }
}

export default Api;
