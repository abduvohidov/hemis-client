import { getToken } from "../../../widgets/FormAuthorization/lib/cookie";
import { baseApi } from "../base.api";
import {
  IMasterResponse,
  IMaster,
  IMasterDeletedResponse,
} from "./master.types";

export const masterApi = {
  createMaster: async (data: IMaster): Promise<IMasterResponse> => {
    return await baseApi.post<IMasterResponse, IMaster>(
      "/masters/register",
      data
    );
  },

  updateMaster: async (
    id: number,
    data: Partial<IMaster>
  ): Promise<IMasterResponse> => {
    return await baseApi.put<IMasterResponse, Partial<IMaster>>(
      `/masters/update/${id}`,
      data
    );
  },

  deleteMaster: async (id: number): Promise<IMasterResponse> => {
    const token = getToken();

    if (!token) {
      throw new Error("Token not found");
    }

    try {
      return await baseApi.delete<IMasterDeletedResponse>(
        `/masters/delete/${id}`,
        {
          headers: {
            token: token,
          },
        }
      );
    } catch (error) {
      return error.message;
    }
  },

  // gets
  getAllMasters: async (): Promise<IMasterResponse[]> => {
    const result = await baseApi.get<IMasterResponse[]>(`/masters/all`);
    return result.message.data;
  },

  getMastersByFilter: async (data: Partial<IMaster>): Promise<IMaster[]> => {
    return await baseApi.post<IMasterResponse[], Partial<IMaster>>(
      `/masters/filter`,
      data
    );
  },
};
