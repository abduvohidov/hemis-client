import { getToken } from "../../../widgets/FormAuthorization/lib/cookie";
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

  deleteStudent: async (id: number): Promise<IStudentReponse> => {
    const token = getToken();

    if (!token) {
      throw new Error("Token not found");
    }

    try {
      return await baseApi.delete<IStudentDeletedResponse>(
        `/students/delete/${id}`,
        {
          headers: {
            token: token,
          }
        }
      );
    } catch (error) {
      return error.message;
    }
  },

  // gets
  getAllStudents: async (): Promise<IStudentReponse[]> => {
    return await baseApi.get<IStudentReponse[]>(`/students/all`);
  },

  getStudentById: async (id: number): Promise<IStudent[]> => {
    return await baseApi.get<IStudent[]>(`/students/${id}`);
  },
  getStudentsByFilter: async (data: Partial<IStudent>): Promise<IStudent[]> => {
    return await baseApi.post<IStudentReponse[], Partial<IStudent>>(
      `/students/filter`,
      data
    );
  },
};
