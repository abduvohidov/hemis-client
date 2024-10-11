import { create } from "zustand";
import { removeToken, setToken } from "../lib/cookie";
import { IMasterReponse, LoginRequest, loginApi } from "./../../../shared";

interface ILoginState {
  error: string | null;
  login: (credentials: LoginRequest) => Promise<String | null>;
  MasterInfo: IMasterReponse | null;
  logout: () => void;
}

export const useLoginStore = create<ILoginState>((set: Function) => ({
  role: null,
  error: null,
  MasterInfo:
    (JSON.parse(
      localStorage.getItem("Master") as string
    ) as IMasterReponse) || null,
  login: async (data: LoginRequest): Promise<String | null> => {
    const result = await loginApi.login(data);
    if (typeof result !== "string") {
      setToken(result.jwt);
      set({ error: null, MasterInfo: result.result });
      localStorage.setItem("Master", JSON.stringify(result.result));
      return result.redirectTo as string;
    } else {
      set({ error: result });
      return null;
    }
  },

  logout: () => {
    removeToken("token");
    localStorage.removeItem("Master");
    loginApi.logout();
  },
}));
