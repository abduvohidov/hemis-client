import { baseApi } from "../base.api";
import { IAddress, IAddressResponse } from "./address.types";

export const addressApi = {
	createUser: async (data: IAddress): Promise<IAddressResponse> => {
		return await baseApi.post<IAddressResponse, IAddress>(
			"/addresses/create",
			data
		);
	},

	updateUser: async (
		id: number,
		data: Partial<IAddress>
	): Promise<IAddressResponse> => {
		return await baseApi.put<IAddressResponse, Partial<IAddress>>(
			`/addresses/update/${id}`,
			data
		);
	},

	deleteUser: async (id: number): Promise<IAddressResponse> => {
		return await baseApi.delete<IAddressResponse>(`/addresses/delete/${id}`);
	},
	// gets
	getById: async (id: number): Promise<IAddressResponse> => {
		return await baseApi.get<IAddressResponse>(`/addresses/${id}`);
	},
	filter: async (data: Partial<IAddress>): Promise<IAddressResponse[]> => {
		return await baseApi.post<IAddressResponse, Partial<IAddress>>(
			`/addresses/filter`,
			data
		);
	},
};
