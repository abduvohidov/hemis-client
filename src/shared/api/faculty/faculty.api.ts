import { baseApi } from "../base.api";
import { IFacultyReponse, IFaculty } from "./faculty.types";

export const facultyApi = {
  create: async (data: IFaculty): Promise<IFacultyReponse> => {
    console.log("data : ", data);
    return await baseApi.post<IFacultyReponse, IFaculty>(
      "/faculties/create",
      data
    );
  },

  update: async (
    id: number,
    data: Partial<IFaculty>
  ): Promise<IFacultyReponse> => {
    return await baseApi.put<IFacultyReponse, Partial<IFaculty>>(
      `/faculties/update/${id}`,
      data
    );
  },

  deleteUser: async (id: number): Promise<IFacultyReponse> => {
    return await baseApi.delete<IFacultyReponse>(`/faculties/delete/${id}`);
  },
  // gets
  getById: async (id: number): Promise<IFacultyReponse> => {
    return await baseApi.get<IFacultyReponse>(`/faculties/${id}`);
  },
  getAll: async (): Promise<IFacultyReponse[]> => {
    const result = await baseApi.get<IFacultyReponse[]>(`/faculties/all`);
    return result.data;
  },
  getByName: async (name: string): Promise<IFacultyReponse[]> => {
    return await baseApi.post<IFacultyReponse, any>("/faculties/filter", {
      name,
    });
  },
  findByName: async (name: string): Promise<any> => {
    return await baseApi.post<any, any>("/faculties/findByName", {
      name,
    });
  },
};
