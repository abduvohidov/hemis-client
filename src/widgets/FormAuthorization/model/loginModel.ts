import { create } from "zustand";
import { removeToken, setToken } from "../lib/cookie";
import { IStudentReponse, LoginRequest, loginApi } from "./../../../shared";

interface ILoginState {
  error: string | null;
  login: (credentials: LoginRequest) => Promise<String | null>;
  studentInfo: IStudentReponse | null;
  logout: () => void;
}

export const useLoginStore = create<ILoginState>((set: Function) => ({
  role: null,
  error: null,
  studentInfo:
    (JSON.parse(
      localStorage.getItem("student") as string
    ) as IStudentReponse) || null,
  login: async (data: LoginRequest): Promise<String | null> => {
    const result = await loginApi.login(data);
    if (typeof result !== "string") {
      setToken(result.jwt);
      set({ error: null, studentInfo: result.result });
      localStorage.setItem("student", JSON.stringify(result.result));
      return result.redirectTo as string;
    } else {
      set({ error: result });
      return null;
    }
  },

  logout: () => {
    removeToken("token");
    localStorage.removeItem("student");
    loginApi.logout();
  },
}));
