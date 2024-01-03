import { NotionToMarkdown } from "notion-to-md";
import { notion } from "$lib/server/notion";
import {
	parseArticleIDFromRouteParams,
	parsePageObjectProperties,
} from "$lib/utils";
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { PageServerLoad } from "./$types";
import type { Article, GetArticleResponse } from "../../../types/article";

export const prerender = false;

export const load: PageServerLoad = ({ params }) => {
	const n2m = new NotionToMarkdown({ notionClient: notion });
	const articleID = parseArticleIDFromRouteParams(params.articleID);

	const promise = new Promise((resolve) => {
		Promise.all([
			n2m.pageToMarkdown(articleID),
			notion.pages.retrieve({ page_id: articleID }),
		])
			.then((res) => {
				const article: GetArticleResponse & Article = {
					id: articleID,
					contents: n2m.toMarkdownString(res[0]).parent,
				};

				const pageObject = res[1] as PageObjectResponse;
				const properties = new Map(
					Object.entries(parsePageObjectProperties(pageObject))
				);

				for (const [key, value] of properties) {
					switch (key) {
						case "title": {
							article.title = value;
							break;
						}
						case "shortDescription": {
							article.shortDescription = value;
							break;
						}
						case "author": {
							article.author = value;
							break;
						}
						case "publishedDate": {
							article.publishedDate = value;
							break;
						}
						case "coverImageURL": {
							article.coverImageURL = value;
							break;
						}
					}
				}

				resolve(article);
			})
			.catch(() => {
				resolve({ status: 404 });
			});
	});

	return promise;
};
