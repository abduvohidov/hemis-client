export interface IArticle {
	firstArticle: string;
	firstArticleDate: string;
	firstArticleJournal: string;
	secondArticle: string;
	secondArticleDate: string;
	secondArticleJournal: string;
	education?: any[];
}
export interface IArticleReponse extends IArticle {
	id: number;
}
