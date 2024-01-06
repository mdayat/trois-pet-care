import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = ({ url }) => {
	if (url.pathname === "/layanan") {
		redirect(307, "/");
	}
};
