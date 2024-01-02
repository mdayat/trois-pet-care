const joinStringToHyphen = (string: string, separator: string) => {
	return string.split(separator).join("-");
};

const parseArticleIDFromRouteParams = (paramsString: string) => {
	const articleParamsLength = paramsString.split("-").length;
	const articleID = paramsString.split("-").splice(articleParamsLength - 5);
	return articleID.join("-");
};

const articleCoverImageAltFallback = (articleID: string) => {
	return `Deskripsi gambar untuk artikel dengan ID ${articleID}`;
};

export {
	joinStringToHyphen,
	parseArticleIDFromRouteParams,
	articleCoverImageAltFallback,
};
