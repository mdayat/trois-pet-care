import type { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

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
	contents: BlockObjectResponse[];
	coverImageURL?: string;
}

export type { GetArticlesResponse, GetArticleResponse, Article };
