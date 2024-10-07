import { create } from "zustand";
import { LoginRequest, loginApi } from "./../../../shared";
import { removeToken, setToken } from "../lib/cookie";

interface ILoginState {
  role: string | null;
  error: string | null;
  login: (credentials: LoginRequest) => Promise<void>;
  logout: () => void;
}

export const useLoginStore = create<ILoginState>((set: Function) => ({
  role: null,
  error: null,

  login: async (data: LoginRequest) => {
    const result = await loginApi.login(data);
    if (typeof result !== "string") {
      setToken(result.jwt);
      set({ role: result.redirectTo, error: null });
    } else {
      set({ error: result });
    }
  },

  logout: () => {
    removeToken("token");
    // loginApi.logout();
    set({ role: null });
  },
}));
