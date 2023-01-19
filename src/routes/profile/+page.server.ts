import { redirect } from "@sveltejs/kit";

export const actions: Actions = {
	default: async ({ locals }) => {
		const session = await locals.validate();
		if (!session) {
			if (!session) throw redirect(302, "/");
		}
	}
};

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.validate();
	if (!session) throw redirect(302, "/");
};
