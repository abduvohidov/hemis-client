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
  getById: async (id: number): Promise<IEducation> => {
    return await baseApi.get<IEdcationResponse>(`/educations/${id}`);
  },
  getAll: async (): Promise<IEducation[]> => {
    const result = await baseApi.get<IEdcationResponse>(`/educations/all`);
    return result?.message?.data;
  },
  getByMasterId: async (id: number): Promise<IEducation> => {
    const result = await baseApi.post<IEdcationResponse, { id: number }>(
      `/educations/findByMaster`,
      { id }
    );
    return result?.message?.data;
  },
  filter: async (data: Partial<IEducation>): Promise<IEdcationResponse[]> => {
    const result = await baseApi.post<IEdcationResponse, Partial<IEducation>>(
      `/educations/filter`,
      data
    );

    return result?.message?.data;
  },
};
