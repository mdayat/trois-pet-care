import { getArticles } from "$lib/server/notion";

export const prerender = false;

export const load = () => {
	const promise = new Promise((resolve) => {
		getArticles()
			.then((res) => {
				resolve(res);
			})
			.catch((err) => {
				resolve({ status: 500, message: err });
			});
	});

	return promise;
};
