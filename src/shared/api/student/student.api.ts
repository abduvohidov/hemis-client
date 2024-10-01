import { baseApi } from "../base.api";

export const studentApi = {
    
	createStudent: async (data: ): Promise<> => {
		return await baseApi.post<, >("/students/create", data);
	},

	updateStudent: async (id: number, data: Partial<>): Promise<> => {
		return await baseApi.put<, Partial<>>(`/students/update/${id}`, data);
	},

	deleteStudent: async (id: number): Promise<> => {
		return await baseApi.delete<>(`/students/delete/${id}`);
	},

};
