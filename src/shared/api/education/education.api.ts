import { baseApi } from "../base.api.js";
import { IEdcationResponse, IEducation } from "./education.types";
export const educationApi = {
  create: async (data: IEducation): Promise<IEdcationResponse> => {
    return await baseApi.post<IEdcationResponse, IEducation>(
      "/educations/create",
      data
    );
  },
  update: async (
    id: number,
    data: Partial<IEducation>
  ): Promise<IEdcationResponse> => {
    return await baseApi.put<IEdcationResponse, Partial<IEducation>>(
      `/educations/update/${id}`,
      data
    );
  },
  delete: async (id: number): Promise<IEdcationResponse> => {
    return await baseApi.delete<IEdcationResponse>(`/educations/delete/${id}`);
  },

  // gets
  getById: async (id: number): Promise<IEdcationResponse> => {
    return await baseApi.get<IEdcationResponse>(`/educations/${id}`);
  },
  getAll: async (): Promise<IEdcationResponse[]> => {
    const result = await baseApi.get<IEdcationResponse[]>(`/educations/all`);
    return result.data;
  },
  getByMasterId: async (id: number): Promise<IEdcationResponse> => {
    const result = await baseApi.post<any, { id: number }>(
      `/educations/findByMaster`,
      { id }
    );
    return result.data;
  },
  filter: async (data: Partial<IEducation>): Promise<IEdcationResponse[]> => {
    return await baseApi.post<IEdcationResponse, Partial<IEducation>>(
      `/educations/filter`,
      data
    );
  },
};
