import { baseApi } from "../base.api.js";
import { LoginRequest, LoginResponse } from "./login.types.js";

export const loginApi = {
  login: async (data: LoginRequest): Promise<LoginResponse> => {
    return await baseApi.post<LoginResponse, LoginRequest>(
      "/users/login",
      data
    );
  },

  logout: (): Promise<void> => {
    return baseApi.post<void, {}>("/users/logout", {});
  },
};
