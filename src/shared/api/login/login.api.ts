import { baseApi } from "../base.api.js";
import { LoginRequest, LoginResponse } from "./login.types.js";

export const loginApi = {
  login: async (data: LoginRequest): Promise<LoginResponse> => {
    const response = await baseApi.post<LoginResponse, LoginRequest>(
      "/users/login",
      data
    );

    if (response) {
      const { redirectTo } = response.message;
      localStorage.setItem("redirectTo", redirectTo);
      window.location.href = `/${redirectTo}`;
    }

    return response;
  },

  logout: (): Promise<void> => {
    return baseApi.post<void, {}>("/users/logout", {});
  },
};
