import { baseApi } from "../base.api";
import { IUser, IUserReponse } from "./user.types";

export const userApi = {
	createUser: async (data: IUser): Promise<IUserReponse> => {
		return await baseApi.post<IUserReponse, IUser>("/users/create", data);
	},

	updateUser: async (id: number, data: Partial<IUser>): Promise<IUserReponse> => {
		return await baseApi.put<IUserReponse, Partial<IUser>>(`/users/update/${id}`, data);
	},

	deleteUser: async (id: number): Promise<IUserReponse> => {
		return await baseApi.delete<IUserReponse>(`/users/delete/${id}`);
	},
};
