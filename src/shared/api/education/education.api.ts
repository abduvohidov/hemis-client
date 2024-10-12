import { baseApi } from "../base.api.js";
import { IEdcationResponse, IEducation } from "./education.types";
export const educationApi = {
  create: async (data: IEducation): Promise<IEdcationResponse> => {
    return await baseApi.post<IEdcationResponse, IEducation>(
      "/educations/create",
      data
    );
  },
  udpate: async (
    id: number,
    data: Partial<IEducation>
  ): Promise<IEdcationResponse> => {
    return await baseApi.post<IEdcationResponse, Partial<IEducation>>(
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
  getByMasterId: async (id: number): Promise<IEdcationResponse> => {
    return await baseApi.post<IEdcationResponse, any>(
      `/educations/filterByMaster`,
      id
    );
  },
  filter: async (data: Partial<IEducation>): Promise<IEdcationResponse[]> => {
    return await baseApi.post<IEdcationResponse, Partial<IEducation>>(
      `/educations/filter`,
      data
    );
  },
};
