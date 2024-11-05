import { baseApi } from "../base.api";
import { IArticle, IArticleModal, IArticleReponse } from "./article.types";

export const articleApi = {
  create: async (data: IArticleModal): Promise<IArticleReponse> => {
    return await baseApi.post<IArticleReponse, IArticleModal>(
      "/articles/create",
      data
    );
  },
  update: async (
    id: number,
    data: Partial<IArticle>
  ): Promise<IArticleReponse> => {
    return await baseApi.put<IArticleReponse, Partial<IArticle>>(
      `/articles/update/${id}`,
      data
    );
  },
  delete: async (id: number): Promise<IArticleReponse> => {
    return await baseApi.delete<IArticleReponse>(`/articles/delete/${id}`);
  },

  // gets
  getById: async (id: number): Promise<IArticleReponse> => {
    return await baseApi.get<IArticleReponse>(`/articles/${id}`);
  },
  getAll: async (): Promise<IArticleReponse[]> => {
    const result = await baseApi.get<IArticleReponse[]>(`/articles/all`);

    return result.articles;
  },
  filter: async (data: Partial<IArticle>): Promise<IArticleReponse[]> => {
    return await baseApi.post<IArticleReponse, Partial<IArticle>>(
      `/articles/filter`,
      data
    );
  },
};
