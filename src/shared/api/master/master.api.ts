import { getToken } from "../../../widgets/FormAuthorization/lib/cookie";
import { baseApi } from "../base.api";
import {
  IMasterReponse,
  IMaster,
  IMasterDeletedResponse,
} from "./master.types";

export const MasterApi = {
  createMaster: async (data: IMaster): Promise<IMasterReponse> => {
    return await baseApi.post<IMasterReponse, IMaster>(
      "/masters/register",
      data
    );
  },

  updateMaster: async (
    id: number,
    data: Partial<IMaster>
  ): Promise<IMaster> => {
    return await baseApi.put<IMasterReponse, Partial<IMaster>>(
      `/masters/update/${id}`,
      data
    );
  },

  deleteMaster: async (id: number): Promise<IMasterReponse> => {
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
  getAllMasters: async (): Promise<IMasterReponse[]> => {
    const result = await baseApi.get<IMasterReponse[]>(`/masters/all`);
    return result.data;
  },

  getMasterById: async (id: number): Promise<IMaster[]> => {
    return await baseApi.get<IMaster[]>(`/masters/${id}`);
  },
  getMastersByFilter: async (data: Partial<IMaster>): Promise<IMaster[]> => {
    return await baseApi.post<IMasterReponse[], Partial<IMaster>>(
      `/masters/filter`,
      data
    );
  },
};
