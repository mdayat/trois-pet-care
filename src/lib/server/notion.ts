import { Client } from "@notionhq/client";
import { DATABASE_ID, NOTION_KEY } from "./config";
import type {
	PageObjectResponse,
	RichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";
import type { Article, GetArticlesResponse } from "../../types/article";

const notion = new Client({ auth: NOTION_KEY });

const getArticles = (start_cursor?: string) => {
	const promise = new Promise<GetArticlesResponse>((resolve, reject) => {
		notion.databases
			.query({
				database_id: DATABASE_ID,
				sorts: [
					{
						property: "published_date",
						direction: "descending",
					},
				],
				page_size: 9,
				start_cursor: start_cursor,
			})
			.then((res) => {
				const result: GetArticlesResponse = {
					articles: [],
				};

				if (res.next_cursor !== null) {
					result.next_cursor = res.next_cursor;
				}

				for (let i = 0; i < res.results.length; i++) {
					const pageObject = res.results[i] as PageObjectResponse;
					const article: Article = {
						id: pageObject.id,
					};

					// Assign page cover URL to "article" if available
					if (pageObject.cover !== null) {
						switch (pageObject.cover.type) {
							case "external": {
								article.coverImageURL = pageObject.cover.external.url;
								break;
							}

							case "file": {
								article.coverImageURL = pageObject.cover.file.url;
								break;
							}
						}
					}

					// Assign page title to "article" if available
					if (pageObject.properties.title.type === "title") {
						const richTextOfTitle = pageObject.properties.title
							.title as Array<RichTextItemResponse>;

						if (richTextOfTitle.length !== 0) {
							article.title = richTextOfTitle[0].plain_text;
						}
					}

					// Assign page author to "article" if available
					if (pageObject.properties.author.type === "rich_text") {
						const richTextOfTitle = pageObject.properties.author
							.rich_text as Array<RichTextItemResponse>;

						if (richTextOfTitle.length !== 0) {
							article.author = richTextOfTitle[0].plain_text;
						}
					}

					// Assign page short_description to "article" if available
					if (pageObject.properties.short_description.type === "rich_text") {
						const richTextOfTitle = pageObject.properties.short_description
							.rich_text as Array<RichTextItemResponse>;

						if (richTextOfTitle.length !== 0) {
							article.shortDescription = richTextOfTitle[0].plain_text;
						}
					}

					// Assign page published_date to "article" if available
					if (pageObject.properties.published_date.type === "date") {
						if (pageObject.properties.published_date.date !== null) {
							article.publishedDate =
								pageObject.properties.published_date.date.start;
						}
					}

					result.articles.push(article);
				}

				resolve(result);
			})
			.catch(() => {
				reject();
			});
	});

	return promise;
};

export { notion, getArticles };
export type { GetArticlesResponse, Article };
