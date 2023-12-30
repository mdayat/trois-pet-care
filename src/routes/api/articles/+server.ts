import { getArticles } from "$lib/server/notion";
import { type RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = ({ url }) => {
	const promise = new Promise<Response>((resolve) => {
		const start_cursor = url.searchParams.get("start_cursor");
		getArticles(start_cursor ?? undefined)
			.then((res) => {
				resolve(
					new Response(JSON.stringify(res), {
						headers: {
							"Content-Type": "application/json",
						},
					})
				);
			})
			.catch((err) => {
				resolve(
					new Response(JSON.stringify(err), {
						status: 500,
						headers: {
							"Content-Type": "application/json",
						},
					})
				);
			});
	});

	return promise;
};
