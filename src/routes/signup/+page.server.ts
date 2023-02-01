import { auth } from "$lib/auth/lucia";
import { EmailVerificationRequests } from "$lib/models/emailVerificationRequests";
import { LuciaError } from "lucia-auth";
import { INTERNAL_SERVER_ERROR } from "$lib/utils/errors";
import { fail, redirect, type Actions } from "@sveltejs/kit";
import sgMail from "@sendgrid/mail";
import { VITE_SENDGRID_API_KEY } from "$env/static/private";

const sendEmailVerificationLink = async (
  userId: string,
  origin: string,
  email: string
) => {
  sgMail.setApiKey(VITE_SENDGRID_API_KEY);
  const request = await EmailVerificationRequests.create({ userId });
  const href = `${origin}/api/verify-email?token=${request.token}`;
  const buttonSlug = `<a href= "${href}"> Verify Here </a>`;
  const data = {
    to: email, // Change to your recipient
    from: "support@myneglobal.com", // Change to your verified sender
    subject: "Verify your Myne Global Account",
    text: "Click the link to verify",
    html: buttonSlug,
  };
  try {
    await sgMail.send(data);
    console.log("Sent message");
  } catch (err) {
    console.log(err);
    console.log("Failed to send message");
  }
};
export const actions: Actions = {
  default: async ({ request, locals, url }) => {
    const form = await request.formData();
    const email = form.get("email");
    const password = form.get("password");
    if (
      !email ||
      !password ||
      typeof email !== "string" ||
      typeof password !== "string"
    )
      return fail(400);
    try {
      const userId  = await auth.createUser("email", email, {
        key: {
					providerId: "email",
					providerUserID: email,
					password
				},
				attributes: {
					email
				}
			});
      console.log({userId});
      const session = await auth.createSession(userId);
      locals.setSession(session);
      await sendEmailVerificationLink(userId, url.origin, email);
    } catch (error) {
      if (
        error instanceof LuciaError &&
        error.message === "AUTH_DUPLICATE_PROVIDER_ID"
      ) {
        return fail(400, {
          message: "Email already exists",
        });
      } else if (
        error instanceof LuciaError &&
        error.message === "AUTH_INVALID_PASSWORD"
      ) {
        return fail(400, {
          message: "Invalid Password.",
        });
      }
      console.log(error);
      return fail(400);
    }

    throw redirect(302, "/");
  },
};
