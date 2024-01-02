interface Article {
	id: string;
	title?: string;
	shortDescription?: string;
	author?: string;
	publishedDate?: string;
	coverImageURL?: string;
}

interface GetArticlesResponse {
	articles: Array<Article>;
	next_cursor?: string;
}

interface GetArticleResponse {
	id: string;
	contents: string;
	title?: string;
	coverImageURL?: string;
}

export type { GetArticlesResponse, GetArticleResponse, Article };
