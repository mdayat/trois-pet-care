import { Client } from "@notionhq/client";
import { DATABASE_ID, NOTION_KEY } from "./config";
import { parsePageObjectProperties } from "$lib/utils";
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { Article, GetArticlesResponse } from "../../types/article";

const notion = new Client({ auth: NOTION_KEY });

const getArticles = (start_cursor?: string) => {
	const promise = new Promise<GetArticlesResponse>((resolve, reject) => {
		notion.databases
			.query({
				database_id: DATABASE_ID,
				filter: {
					property: "ready_to_publish",
					checkbox: {
						equals: true,
					},
				},
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
					const article = parsePageObjectProperties(pageObject);
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
