import { fail, redirect } from "@sveltejs/kit";
import { auth } from "$lib/auth/lucia";
import type { PageServerLoad, Actions } from "./$types";
import { LuciaError } from "lucia-auth";
import { prisma } from "$lib/prisma";

import sgMail from "@sendgrid/mail";
import { VITE_SENDGRID_API_KEY } from "$env/static/private";
// If the user exists, redirect authenticated users to the profile page.
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
  default: async ({ request, locals }) => {
    const form = await request.formData();
    const email = form.get("email");
    const password = form.get("password");
    const firstName = form.get("firstName");
    const lastName = form.get("lastName");
    const country = form.get("country");
    const postalZip = form.get("postalZip");
    const phone = form.get("phone");
    const birthday = form.get("bithday");
    const valid = false;
    console.log(form);
    if (
      !email ||
      !password ||
      typeof email !== "string" ||
      typeof password !== "string"
    ) {
      console.log("Failed to enter email password");
      return fail(400), { message: "Failed to enter email password" };
    }
    try {
      const user = await auth.createUser({
        key: {
          providerId: "email",
          providerUserId: email,
          password,
        },
        attributes: {
          email,
          valid,
        },
      });
      console.log("success");
      console.log(1, user);
      const profile = await prisma.profile.upsert({
        where: {
          id: user.userId,
        },
        update: {
          firstName: "test",
          lastName: "test",
          country: "test",
          postalZip: "test",
        },
        create: {
          user : user,
          user_id: user.userId,
          firstName: "test",
          lastName: "test",
          country: "test",
          postalZip: "test"
        },
        
      });
      await sendEmailVerificationLink(user, url.origin, user.email);

      const session = await auth.createSession(user.userId);
      locals.setSession(session);
    } catch (error) {
      if (error instanceof LuciaError) {
        return fail(400), { message: error.message };
      }
      console.log(error);
      // username already in use
      return fail(400), { message: "Error" };
    }
  },
};
