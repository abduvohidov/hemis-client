import { baseApi } from "../base.api";
import { IFacultyResponse, IFaculty } from "./faculty.types";
import { ICreateFacultyProps } from "../../../entities/ModalFormLayout/model/types";

export const facultyApi = {
  findOrCreate: async (
    data: ICreateFacultyProps
  ): Promise<IFacultyResponse> => {
    return await baseApi.post<IFacultyResponse, ICreateFacultyProps>(
      "/faculties/createOrFind",
      data
    );
  },
  update: async (
    id: number,
    data: Partial<IFaculty>
  ): Promise<IFacultyResponse> => {
    return await baseApi.put<IFacultyResponse, Partial<IFaculty>>(
      `/faculties/update/${id}`,
      data
    );
  },

  deleteUser: async (id: number): Promise<IFacultyResponse> => {
    return await baseApi.delete<IFacultyResponse>(`/faculties/delete/${id}`);
  },
  // gets
  getById: async (id: number): Promise<IFacultyResponse> => {
    return await baseApi.get<IFacultyResponse>(`/faculties/${id}`);
  },
  getAll: async (): Promise<IFacultyResponse[]> => {
    const result = await baseApi.get<IFacultyResponse[]>(`/faculties/all`);
    return result.data;
  },
  getByName: async (name: string): Promise<IFacultyResponse[]> => {
    return await baseApi.post<IFacultyResponse, any>("/faculties/filter", {
      name,
    });
  },
  findByName: async (name: string): Promise<any> => {
    return await baseApi.post<any, any>("/faculties/findByName", {
      name,
    });
  },
};
