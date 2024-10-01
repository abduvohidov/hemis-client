import { baseApi } from "../base.api";
import {
	IStudentReponse,
	IStudent,
	IStudentDeletedResponse,
} from "./student.types";

export const studentApi = {
	createStudent: async (data: IStudent): Promise<IStudentReponse> => {
		return await baseApi.post<IStudentReponse, IStudent>(
			"/students/create",
			data
		);
	},

	updateStudent: async (
		id: number,
		data: Partial<IStudent>
	): Promise<IStudent> => {
		return await baseApi.put<IStudentReponse, Partial<IStudent>>(
			`/students/update/${id}`,
			data
		);
	},

	deleteStudent: async (id: number): Promise<IStudent> => {
		return await baseApi.delete<IStudentDeletedResponse>(
			`/students/delete/${id}`
		);
	},
};
