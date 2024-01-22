import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = ({ url }) => {
	return { pageURL: url.href, baseURL: url.origin };
};
