import { auth } from "$lib/auth/lucia";
import { Parsers } from "$lib/schema/parsers";
import { LuciaError } from 'lucia-auth';
import { error, redirect, type Actions, fail } from '@sveltejs/kit';
import { z } from "zod";
import { Redirect } from '../../lib/interfaces/index';

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.validate();
	if (session) throw redirect(302, '/profile');
};

export const actions: Actions = {
    default: async ({ request, locals, url }) => {
        const form = await request.formData();
		console.log(form);
		const email = form.get('email');
		const password = form.get('password');
        try {
            const user = await auth.authenticateUser(
                "email",
                email,
                password
            );
			console.log(user);
            const session = await auth.createSession(user.userId)
            locals.setSession(session)
			if (session) throw redirect(302, '/profile')
        } catch (error) {
            if (
				error instanceof LuciaError &&
				(error.message === 'AUTH_INVALID_PROVIDER_ID')
                
			) {
				return fail(400, {
					message: 'Invalid Email'
				});
			}
			else if (
				error instanceof LuciaError &&
				(error.message === 'AUTH_INVALID_PASSWORD')
			) {
				return fail(400, {
					message: 'Invalid Password.'
				});
			}
        }
    }
};