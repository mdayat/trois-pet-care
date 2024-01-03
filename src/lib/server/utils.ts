import type {
	PageObjectResponse,
	RichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";
import type { Article } from "../../types/article";

const joinStringToHyphen = (string: string, separator: string): string => {
	return string.split(separator).join("-");
};

const parseArticleIDFromRouteParams = (paramsString: string): string => {
	const articleParamsLength = paramsString.split("-").length;
	const articleID = paramsString.split("-").splice(articleParamsLength - 5);
	return articleID.join("-");
};

const articleCoverImageAltFallback = (articleID: string): string => {
	return `Artikel dengan ID ${articleID}`;
};

const parsePageObjectProperties = (pageObject: PageObjectResponse): Article => {
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
			article.publishedDate = pageObject.properties.published_date.date.start;
		}
	}

	return article;
};

export {
	joinStringToHyphen,
	parseArticleIDFromRouteParams,
	articleCoverImageAltFallback,
	parsePageObjectProperties,
};
