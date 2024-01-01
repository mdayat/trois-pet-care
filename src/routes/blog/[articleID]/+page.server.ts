import type { PageServerLoad } from "./$types";

export const prerender = false;

export const load: PageServerLoad = ({ params }) => {
	const promise = new Promise((resolve) => {
		const articleID = params.articleID;
		console.log(articleID);
		resolve({ msg: "HI" });
	});

	return promise;
};
