import { baseApi } from "../base.api";
import { IBachelor, IBachelorResponse } from "./bachelor.types";

export const bachelorApi = {
  create: async (data: IBachelor): Promise<IBachelorResponse> => {
    return await baseApi.post<IBachelorResponse, IBachelor>(
      "/bachelors/create",
      data
    );
  },
  update: async (
    id: number,
    data: Partial<IBachelor>
  ): Promise<IBachelorResponse> => {
    return await baseApi.put<IBachelorResponse, Partial<IBachelor>>(
      `/bachelors/update/${id}`,
      data
    );
  },
  delete: async (id: number): Promise<IBachelorResponse> => {
    return await baseApi.delete<IBachelorResponse>(`/bachelors/delete/${id}`);
  },

  // gets
  getAll: async (): Promise<IBachelor[]> => {
    const result = await baseApi.get<IBachelorResponse>(`/bachelors/all`);
    return result?.message?.data;
  },
  getById: async (id: number): Promise<IBachelor> => {
    return await baseApi.get<IBachelorResponse>(`/bachelors/${id}`);
  },
  filter: async (data: Partial<IBachelor>): Promise<IBachelor[]> => {
    const result = await baseApi.post<IBachelorResponse, Partial<IBachelor>>(
      `/bachelors/filter`,
      data
    );
    return result?.message?.data;
  },
};
