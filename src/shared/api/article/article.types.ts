export interface IArticle {
  id?: number;
  firstArticle: string;
  firstArticleDate: string;
  firstArticleJournal: string;
  secondArticle: string;
  secondArticleDate: string;
  secondArticleJournal: string;
  firstArticleFilename?: string;
  secondArticleFilename?: string;
  education?: any[];
}
export interface IArticleReponse {
  success: boolean;
  message:
    | string
    | {
        message: string;
        data: IArticle;
      };
}

export interface IArticleModal extends IArticle {
  masterId: string | number;
}
