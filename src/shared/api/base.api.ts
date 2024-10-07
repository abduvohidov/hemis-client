import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = "http://localhost:9000";

export const apiClient = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const baseApi = {
  get: async <T>(url: string, config?: AxiosRequestConfig) => {
    try {
      const response = await apiClient.get<T>(url, config);
      return response?.data;
    } catch (error: any) {
      console.error("API GET Error:", error);
      return error.message;
    }
  },

  post: async <T, D>(url: string, data: D, config?: AxiosRequestConfig) => {
    try {
      const response = await apiClient.post<T>(url, data, config);
      return response?.data;
    } catch (error: any) {
      return error.response?.data || { error: "Unknown error" };
    }
  },

  put: async <T, D>(url: string, data: D, config?: AxiosRequestConfig) => {
    try {
      const response = await apiClient.put<T>(url, data, config);
      return response?.data;
    } catch (error: any) {
      return error.response?.data || { error: "Unknown error" };
    }
  },

  delete: async <T>(url: string, config?: AxiosRequestConfig) => {
    try {
      const response = await apiClient.delete<T>(url, config);
      return response?.data;
    } catch (error: any) {
      return error.response?.data || { error: "Unknown error" };
    }
  },
};
