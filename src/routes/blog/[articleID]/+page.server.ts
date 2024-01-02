import { NotionToMarkdown } from "notion-to-md";
import { notion } from "$lib/server/notion";
import { parseArticleIDFromRouteParams } from "$lib/utils";
import type {
	PageObjectResponse,
	RichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";
import type { PageServerLoad } from "./$types";
import type { GetArticleResponse } from "../../../types/article";

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
				const article: GetArticleResponse = {
					id: articleID,
					contents: n2m.toMarkdownString(res[0]).parent,
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

				if (pageObject.properties.title.type === "title") {
					const richTextOfTitle = pageObject.properties.title
						.title as Array<RichTextItemResponse>;

					if (richTextOfTitle.length !== 0) {
						article.title = richTextOfTitle[0].plain_text;
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
