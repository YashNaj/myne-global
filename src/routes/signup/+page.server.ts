import { auth } from "$lib/auth/lucia";
import { EmailVerificationRequests } from "$lib/models/emailVerificationRequests";
import { passwordSchema } from "$lib/schema/index";
import { Parsers } from "$lib/schema/parsers";
import { INTERNAL_SERVER_ERROR } from "$lib/utils/errors";
import { fail, error, redirect, type Actions } from "@sveltejs/kit";
import { z } from "zod";
import { SENDGRID_API_KEY } from "$env/static/private";
import sgMail from "@sendgrid/mail";
sgMail.setApiKey(SENDGRID_API_KEY);
const msg = {
  to: "yashalnajeeb@gmail.com", // Change to your recipient
  from: "support@myneglobal.com", // Change to your verified sender
  subject: "Sending with SendGrid is Fun",
  text: "and easy to do anywhere, even with Node.js",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>",
};

const sendEmailVerificationLink = async (userId: string, origin: string) => {
  const request = await EmailVerificationRequests.create({ userId });
  const href = `${origin}/api/verify-email?token=${request.token}`;
  const buttonSlug = `<a class = 'btn btn-primary' href =${href} > Verify </a>`;
  console.log(href);
  console.log("TODO: sendEmail");
  try {
    await fetch("/api/verify-email");
  } catch (e) {
    console.log(e);
  }
};
export const actions: Actions = {
  default: async ({ request, locals, url }) => {
    const form = await request.formData();
    const email = form.get("email");
    const password = form.get("password");

    try {
      const { userId } = await auth.createUser("email", email, {
        password,
        attributes: {
          email,
          roles: [],
          emailVerified: false,
        },
      });

      await sendEmailVerificationLink(userId, url.origin);

      const session = await auth.createSession(userId);
      locals.setSession(session);
    } catch (e) {
      const { message } = e as Error;
      if (
        message === "AUTH_DUPLICATE_PROVIDER_ID" ||
        message === "AUTH_DUPLICATE_USER_DATA"
      )
        return fail(400, {
          message: "Email already in use",
        });

      return INTERNAL_SERVER_ERROR(e);
    }

    throw redirect(302, "/");
  },
};
