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
    placeholder: "Birinchi maqolani kiriting",
  },
  {
    isSelect: false,
    name: "firstArticleDate",
    placeholder: "Birinchi maqolaning sanasini kiriting",
  },
  {
    isSelect: false,
    name: "firstArticleJournal",
    placeholder: "Birinchi maqolani tzs kiriting",
  },

  {
    isSelect: false,
    name: "secondArticle",
    placeholder: "Ikkinchi maqolani",
  },

  {
    isSelect: false,
    name: "secondArticleJournal",
    placeholder: "Ikkinchi maqolani tzs kiriting",
  },
  {
    isSelect: false,
    name: "secondArticleDate",
    placeholder: "Ikkinchi maqolaning sanasini kiriting",
  },
];
