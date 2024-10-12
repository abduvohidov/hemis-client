import { baseApi } from "../base.api";
import { IArticle, IArticleReponse } from "./article.types";

export const articleApi = {
  create: async (data: IArticle): Promise<IArticleReponse> => {
    const result = await baseApi.post<IArticleReponse, IArticle>(
      "/articles/create",
      data
    );
    return result.article;
  },
  udpate: async (
    id: number,
    data: Partial<IArticle>
  ): Promise<IArticleReponse> => {
    return await baseApi.post<IArticleReponse, Partial<IArticle>>(
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
  filter: async (data: Partial<IArticle>): Promise<IArticleReponse[]> => {
    return await baseApi.post<IArticleReponse, Partial<IArticle>>(
      `/articles/filter`,
      data
    );
  },
};
