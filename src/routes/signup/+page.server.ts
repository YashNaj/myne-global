import { auth  } from "$lib/auth/lucia";
import { EmailVerificationRequests } from "$lib/models/emailVerificationRequests";
import { LuciaError } from 'lucia-auth';
import { INTERNAL_SERVER_ERROR } from "$lib/utils/errors";
import {errro ,fail, redirect, type Actions } from "@sveltejs/kit";
import sgMail from '@sendgrid/mail';
import {VITE_SENDGRID_API_KEY} from "$env/static/private";
sgMail.setApiKey(VITE_SENDGRID_API_KEY)
const sendEmailVerificationLink = async (userId: string, origin: string, email:string) => {
  const request = await EmailVerificationRequests.create({ userId });
  const href = `${origin}/api/verify-email?token=${request.token}`;
  const buttonSlug = `<a href= "${href}"> Verify Here </a>`;
  const data = {
    to:   email, // Change to your recipient
    from: "support@myneglobal.com", // Change to your verified sender
    subject: "Verify your Myne Global Account",
    text: "Click the linke to verify",
    html: buttonSlug
  };
  try{
    sgMail.send(data)
    console.log("Sent message")
  }
  catch (err){
    console.log(err)
  }
};
export const load: PageServerLoad = async ({ locals }) => {
  const session = await locals.validate();
  if (session) throw redirect(302, "/");
};


export const actions: Actions = {
  default: async ({ request, locals, url }) => {
    const form = await request.formData();
		const email = form.get('email');
		const password = form.get('password');
    try {
      const { userId } = await auth.createUser("email", email, {
        password,
        attributes: {
          email,
          roles: [],
          emailVerified: false,
        },
      });
      console.log(userId)

      await sendEmailVerificationLink(userId, url.origin ,email);

      const session = await auth.createSession(userId);
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
    throw redirect(302, "/");
  },
};
