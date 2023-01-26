import type { PageServerLoad } from "./$types";
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals }) => {
	const [user, session] = await locals.validate();
    console.log(user)
	if (!session) {
		throw redirect(301, '/signin')
	}
    if(user.rolls = ['rolls']) return {}; 
}