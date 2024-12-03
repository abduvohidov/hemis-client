import { create } from "zustand";
import { removeToken, setToken } from "../lib/cookie";
import {
  IArticle,
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
  ArticleInfo: IArticle | null;
  updateArticleInfo: (article: IArticle) => void;
}

export const useLoginStore = create<ILoginState>((set: Function) => ({
  role: null,
  error: null,
  // Retrieve ArticleInfo from localStorage or set it to null
  ArticleInfo:
    (JSON.parse(localStorage.getItem("ArticleInfo") as string) as IArticle) ||
    null,
  MasterInfo:
    (JSON.parse(localStorage.getItem("Master") as string) as IMaster) || null,

  login: async (data: LoginRequest) => {
    const result: any = await loginApi.login(data);
    console.log(result?.message?.result?.education[0]?.articles);

    if (typeof result.message === "string" || !result.success) {
      alert(result.message);
    } else if (result.success) {
      setToken(result?.message.jwt);
      localStorage.setItem("role", result.message.redirectTo);

      // Extract ArticleInfo if education exists
      const articleInfo =
        result?.message?.result?.education?.[0]?.articles || null;

      set({
        error: null,
        MasterInfo: result.message.result,
        ArticleInfo: articleInfo,
      });

      // Save MasterInfo and ArticleInfo to localStorage
      localStorage.setItem("Master", JSON.stringify(result.message.result));
      if (articleInfo) {
        localStorage.setItem("ArticleInfo", JSON.stringify(articleInfo));
      }

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

  updateArticleInfo: (article: IArticle) => {
    set((state: ILoginState) => {
      const updatedArticleInfo = { ...state.ArticleInfo, ...article };

      // Update ArticleInfo in localStorage
      localStorage.setItem("ArticleInfo", JSON.stringify(updatedArticleInfo));

      return { ArticleInfo: updatedArticleInfo };
    });
    alert("Article info updated successfully ✅");
  },
}));
