export interface ArticleModalContentProps {
  placeholder: string;
  value: string;
  name: string;
  isSelect: boolean;
  options?: string[];
}

export const Article_Modal_Content: Array<ArticleModalContentProps> = [
  {
    value: "",
    isSelect: false,
    name: "firstArticle",
    placeholder: "Birinchi maqolani kiriting",
  },
  {
    value: "",
    isSelect: false,
    name: "firstArticleDate",
    placeholder: "Birinchi maqolaning sanasini kiriting",
  },
  {
    value: "",
    isSelect: false,
    name: "firstArticleJournal",
    placeholder: "Birinchi maqolani tzs kiriting",
  },

  {
    value: "",
    isSelect: false,
    name: "secondArticle",
    placeholder: "Ikkinchi maqolani",
  },

  {
    value: "",
    isSelect: false,
    name: "secondArticleJournal",
    placeholder: "Ikkinchi maqolani tzs kiriting",
  },
  {
    value: "",
    isSelect: false,
    name: "secondArticleDate",
    placeholder: "Ikkinchi maqolaning sanasini kiriting",
  },
];
