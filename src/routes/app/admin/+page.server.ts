import type { PageServerLoad } from "./$types";
import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
	const { session, user } = await locals.validateUser();
    console.log(user, session)
	if (!session) {
		throw redirect(301, '/signin')
	}
    if(user?.role === 'ADMIN' || 'OWNR'){
		return {}; 
	}
}