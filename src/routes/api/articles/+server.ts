import { DATABASE_ID } from "$lib/server/config";
import { notion } from "$lib/server/notionClient";
import type {
	PageObjectResponse,
	RichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { type RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = () => {
	const promise = new Promise<Response>((resolve) => {
		notion.databases
			.query({
				database_id: DATABASE_ID,
				sorts: [
					{
						property: "published_date",
						direction: "descending",
					},
				],
			})
			.then((res) => {
				const listOfArticles = [];

				for (let i = 0; i < res.results.length; i++) {
					const pageObject = res.results[i] as PageObjectResponse;

					let pageCoverUrl = null;
					if (pageObject.cover === null) continue;
					if (pageObject.cover.type === "external") {
						pageCoverUrl = pageObject.cover.external.url;
					} else {
						pageCoverUrl = pageObject.cover.file.url;
					}

					let pageTitle = null;
					if (pageObject.properties.title.type === "title") {
						const richTextOfTitle = pageObject.properties.title
							.title as Array<RichTextItemResponse>;

						if (richTextOfTitle.length === 0) continue;
						pageTitle = richTextOfTitle[0].plain_text;
					}

					let pageAuthor = null;
					if (pageObject.properties.author.type === "rich_text") {
						const richTextOfAuthor = pageObject.properties.author
							.rich_text as Array<RichTextItemResponse>;

						if (richTextOfAuthor.length === 0) continue;
						pageAuthor = richTextOfAuthor[0].plain_text;
					}

					let pageShortDescription = null;
					if (pageObject.properties.short_description.type === "rich_text") {
						const richTextOfShortDesc = pageObject.properties.short_description
							.rich_text as Array<RichTextItemResponse>;

						if (richTextOfShortDesc.length === 0) continue;
						pageShortDescription = richTextOfShortDesc[0].plain_text;
					}

					let pagePublishedDate = null;
					if (pageObject.properties.published_date.type === "date") {
						if (pageObject.properties.published_date.date === null) continue;
						pagePublishedDate = pageObject.properties.published_date.date.start;
					}

					const article = {
						id: pageObject.id,
						title: pageTitle,
						shortDescription: pageShortDescription,
						author: pageAuthor,
						publishedDate: pagePublishedDate,
						coverUrl: pageCoverUrl,
					};
					listOfArticles.push(article);
				}

				resolve(
					new Response(JSON.stringify(listOfArticles), {
						headers: {
							"Content-Type": "application/json",
						},
					})
				);
			});
	});

	return promise;
};
