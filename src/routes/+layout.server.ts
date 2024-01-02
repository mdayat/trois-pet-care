import type { LayoutServerLoad } from "./$types";

export const prerender = true;

export const load: LayoutServerLoad = ({ url }) => {
	return { pageURL: url.href };
};
