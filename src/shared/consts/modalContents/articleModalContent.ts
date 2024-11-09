export interface ArticleModalContentProps {
  placeholder: string;
  name: string;
  isSelect: boolean;
  options?: string[];
}

export const Article_Modal_Content: Array<ArticleModalContentProps> = [
  {
    isSelect: false,
    name: "firstArticle",
    placeholder: "Birinchi maqola nomi",
  },
  {
    isSelect: false,
    name: "firstArticleJournal",
    placeholder: "Birinchi maqola chop etilgan jurnal",
  },
  {
    isSelect: false,
    name: "firstArticleDate",
    placeholder: "Birinchi maqola chop etilgan sana",
  },

  {
    isSelect: false,
    name: "secondArticle",
    placeholder: "Ikkinchi maqol nomi",
  },

  {
    isSelect: false,
    name: "secondArticleJournal",
    placeholder: "maqola chop etilgan jurnal",
  },
  {
    isSelect: false,
    name: "secondArticleDate",
    placeholder: "Ikkinchi maqola chop etilgan sana",
  },
];
