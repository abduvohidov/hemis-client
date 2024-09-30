import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = "http://localhost:9000";

//  Default config
export const apiClient = axios.create({
	baseURL: BASE_URL,
	withCredentials: true, // Enable cookie
	headers: {
		"Content-Type": "application/json", // I dunno what is this
	},
});

//  CRUD
export const baseApi = {
	get: async <T>(url: string, config?: AxiosRequestConfig) => {
		const response = await apiClient.get<T>(url, config);
		console.log("response" + response);
		console.log("response.data" + response.data);
		return response.data;
	},

	post: async <T, D>(url: string, data: D, config?: AxiosRequestConfig) => {
		const response = await apiClient.post<T>(url, data, config);
		console.log("response" + response);
		console.log("response.data" + response.data);
		return response.data;
	},

	put: async <T, D>(url: string, data: D, config?: AxiosRequestConfig) => {
		const response = await apiClient.put<T>(url, data, config);
		return response.data;
	},

	delete: async <T>(url: string, config?: AxiosRequestConfig) => {
		const response = await apiClient.delete<T>(url, config);
		return response.data;
	},
};
