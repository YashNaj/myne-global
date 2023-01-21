import { auth } from "$lib/auth/lucia";
import { Parsers } from "$lib/schema/parsers";
import { INTERNAL_SERVER_ERROR } from "$lib/utils/errors";
import { error, redirect, type Actions } from "@sveltejs/kit";
import { z } from "zod";
import { LuciaError } from 'lucia-auth';

export const actions: Actions = {
  default: async ({ request, locals, url }) => {
    const { email, password } = await Parsers.form(
      request,
      z.object({
        email: z.string().email(),
        password: z.string(),
      })
    );

    try {
      const user = await auth.authenticateUser("email", email, password);

      const session = await auth.createSession(user.userId);
      locals.setSession(session);
    }  catch (error) {
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
			console.log(error)
			return fail(400);
		}
}
};