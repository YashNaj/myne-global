import { auth } from "$lib/auth/lucia";
import { Parsers } from "$lib/schema/parsers";
import { LuciaError } from 'lucia-auth';
import { error, redirect, type Actions, fail } from '@sveltejs/kit';
import { z } from "zod";

export const actions: Actions = {
    default: async ({ request, locals, url }) => {
        const form = await request.formData();
		const email = form.get('email');
		const password = form.get('password');
        try {
            const user = await auth.authenticateUser(
                "email",
                email,
                password
            );


            const session = await auth.createSession(user.userId)
            locals.setSession(session)
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