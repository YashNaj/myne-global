import { auth } from "$lib/auth/lucia";
import { EmailVerificationRequests } from "$lib/models/emailVerificationRequests";
import { passwordSchema } from "$lib/schema/index";
import { Parsers } from "$lib/schema/parsers";
import { INTERNAL_SERVER_ERROR } from "$lib/utils/errors";
import type { PageServerLoad, Actions } from "./$types";
import { fail, redirect } from "@sveltejs/kit";
import { z } from "zod";
import { VITE_SENDGRID_API_KEY } from "$env/static/private";
import sgMail from "@sendgrid/mail";
sgMail.setApiKey(VITE_SENDGRID_API_KEY);

const sendEmailVerificationLink = async (userId: string, origin: string) => {
  const request = await EmailVerificationRequests.create({ userId });
  const href = `${origin}/api/verify-email?token=${request.token}`;
  const buttonSlug = `<a class = 'btn btn-primary' href =${href} > Verify </a>`;
  console.log(href);
  console.log("TODO: sendEmail");
  const data = {
    to: "yashalnajeeb@gmail.com", // Change to your recipient
    from: "support@myneglobal.com", // Change to your verified sender
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: `<a href= ${href}> Verify Here </a>`,
  };

  await sgMail.send(data).then(console.log("success")).catch(error);
};
 
// If the user exists, redirect authenticated users to the profile page.
export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.validate();
	if (session) throw redirect(302, "/profile");
	return {};
};

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const form = await request.formData();
		console.log(form)
		const email = form.get("email");
		const password = form.get("password");

		// check for empty values
		if (!email || !password || typeof email !== "string" || typeof password !== "string") {
			return fail(400);
		}

		try {
			const user = await auth.createUser("email", email, {
				password,
			});
			console.log('User Created')
			const session = await auth.createSession(user.userId);
			locals.setSession(session);
		} catch (error) {
			if (
				error instanceof LuciaError &&
				(error.message === 'AUTH_DUPLICATE_PROVIDER_ID')
			) {
				return fail(400, {
					message: 'User with current email already exists'
				});
			}
			console.log(error)
			return fail(400);
		}
	}
};
