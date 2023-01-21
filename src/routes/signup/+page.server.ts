import { auth } from "$lib/auth/lucia";
import { EmailVerificationRequests } from "$lib/models/emailVerificationRequests";
import { passwordSchema } from "$lib/schema/index";
import { Parsers } from "$lib/schema/parsers";
import { INTERNAL_SERVER_ERROR } from "$lib/utils/errors";
import { error, redirect, type Actions } from "@sveltejs/kit";
import sgMail from '@sendgrid/mail'
import { z } from "zod";

const sendEmailVerificationLink = async (userId: string, origin: string, email:string) => {
  const request = await EmailVerificationRequests.create({ userId });
  const href = `${origin}/api/verify-email?token=${request.token}`;
  const buttonSlug = `<a href= "${href}"> Verify Here </a>`;
  const data = {
    to:   email, // Change to your recipient
    from: "support@myneglobal.com", // Change to your verified sender
    subject: "Verrify your Myne Global Account",
    text: "Click the linke to verify",
    html: buttonSlug
  };
  const msg = JSON.stringify(data)
  try{
    sgMail.send(msg)
  }
  catch (err){
    console.log(err)
  }
};

export const actions: Actions = {
  default: async ({ request, locals, url }) => {
    const { email, password } = await Parsers.form(
      request,
      z.object({
        email: z.string().email(),
        password: passwordSchema,
      })
    );

    try {
      const { userId } = await auth.createUser("email", email, {
        password,
        attributes: {
          email,
          roles: [],
          emailVerified: false,
        },
      });

      await sendEmailVerificationLink(userId, url.origin ,email);

      const session = await auth.createSession(userId);
      locals.setSession(session);
    } catch (e) {
      const { message } = e as Error;
      if (
        message === "AUTH_DUPLICATE_PROVIDER_ID" ||
        message === "AUTH_DUPLICATE_USER_DATA"
      )
        throw error(400, "Email already in use");

      throw INTERNAL_SERVER_ERROR(e);
    }

    throw redirect(302, "/");
  },
};
