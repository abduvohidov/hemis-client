import { create } from "zustand";
import { removeToken, setToken } from "../lib/cookie";
import {
  IMaster,
  LoginRequest,
  LoginResponse,
  loginApi,
} from "./../../../shared";

interface ILoginState {
  error: string | null;
  login: (credentials: LoginRequest) => void;
  MasterInfo: IMaster | null;
  logout: () => void;
}

export const useLoginStore = create<ILoginState>((set: Function) => ({
  role: null,
  error: null,
  MasterInfo:
    (JSON.parse(localStorage.getItem("Master") as string) as IMaster) || null,
  login: async (data: LoginRequest) => {
    const result: LoginResponse = await loginApi.login(data);
    if (typeof result.message === "string" || !result.success)
      alert(result.message);
    else if (result.success) {
      setToken(result?.message.jwt);
      localStorage.setItem("role", result.message.redirectTo);
      set({ error: null, MasterInfo: result.message.result });
      localStorage.setItem("Master", JSON.stringify(result.message.result));
      window.location.href = `/${result.message.redirectTo}`;
      alert("Muvaffaqiyatli kirish ✅");
    } else {
      set({ error: result });
      return null;
    }
  },

  logout: () => {
    removeToken("token");
    localStorage.clear();
    loginApi.logout();
  },
}));
