import { notion } from "$lib/server/notion";
import { parseArticleIDFromRouteParams } from "$lib/utils";
import type {
	BlockObjectResponse,
	PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import type { PageServerLoad } from "./$types";
import type { GetArticleResponse } from "../../../types/article";

export const prerender = false;

export const load: PageServerLoad = ({ params }) => {
	const promise = new Promise((resolve) => {
		const articleID = parseArticleIDFromRouteParams(params.articleID);

		Promise.all([
			notion.blocks.children.list({ block_id: articleID }),
			notion.pages.retrieve({ page_id: articleID }),
		])
			.then((res) => {
				const article: GetArticleResponse = {
					contents: res[0].results as BlockObjectResponse[],
				};

				const pageObject = res[1] as PageObjectResponse;
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

				resolve(article);
			})
			.catch(() => {
				resolve({ status: 404 });
			});
	});

	return promise;
};
