import { baseApi } from "../base.api";
import { IBachelor, IBachelorResponse } from "./bachelor.types";

export const bachelorApi = {
  create: async (data: IBachelor): Promise<IBachelorResponse> => {
    return await baseApi.post<IBachelorResponse, IBachelor>(
      "/bachelors/create",
      data
    );
  },
  udpate: async (
    id: number,
    data: Partial<IBachelor>
  ): Promise<IBachelorResponse> => {
    return await baseApi.post<IBachelorResponse, Partial<IBachelor>>(
      `/bachelors/update/${id}`,
      data
    );
  },
  delete: async (id: number): Promise<IBachelorResponse> => {
    return await baseApi.delete<IBachelorResponse>(`/bachelors/delete/${id}`);
  },

  // gets
  getById: async (id: number): Promise<IBachelorResponse> => {
    return await baseApi.get<IBachelorResponse>(`/bachelors/${id}`);
  },
  filter: async (data: Partial<IBachelor>): Promise<IBachelorResponse[]> => {
    return await baseApi.post<IBachelorResponse, Partial<IBachelor>>(
      `/bachelors/filter`,
      data
    );
  },
};
