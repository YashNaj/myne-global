import type { PageServerLoad } from "./$types";
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals }) => {
	const { session, user } = await locals.validateUser();
    console.log(user, session)
	if (!session) {
		throw redirect(301, '/signin')
	}
    if(user?.role === 'ADMIN' || 'OWNR'){
		return {}; 
	}else throw redirect(302, '/')
}