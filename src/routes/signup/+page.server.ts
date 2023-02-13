import { fail, redirect } from "@sveltejs/kit";
import { auth } from "$lib/server/lucia";
import type { PageServerLoad, Actions } from "./$types";
import { LuciaError } from "lucia-auth";
import { PrismaClient } from "@prisma/client";
import sgMail from "@sendgrid/mail";
import { VITE_SENDGRID_API_KEY } from "$env/static/private";
import { page } from "$app/stores";
import * as prisma from "$lib/server/db";
const origin = "https://myneglobal.com" || "http://localhost:5173";
const sendEmailVerificationLink = async (
  user: string,
  origin: string,
  email: string,
  url: string
) => {
  sgMail.setApiKey(VITE_SENDGRID_API_KEY);
  const request = await prisma.user.update({
    where: {
      id: user.userId,
    },
    data: {
      emailVerificationRequest: {
        upsert: {
          create: {
            id: user.userId,
            email,
            expiresAt: new Date(Date.now() + 1 * 60 * 60 * 1000),
          },
          update: {
            id: user.userId,
            email,
            expiresAt: new Date(Date.now() + 1 * 60 * 60 * 1000),
          },
        },
      },
    },
  });
  const verificationRequest = await prisma.EmailVerificationRequest.findUnique({
    where: {
      id: user.userId,
    },
    select: {
      token: true,
    },
  });
  const token = verificationRequest?.token;
  console.log("token", verificationRequest);
  const href = `${origin}/api/verify-email?token=${token}`;
  console.log(href);
  const buttonSlug = `<a href= "${href}"> Verify Here </a>`;
  const data = {
    to: email, // Change to your recipient
    from: "support@myneglobal.com", // Change to your verified sender
    subject: "Verify your Myne Global Account",
    text: "Click the link to verify",
    html: buttonSlug,
  };
  console.log(2, origin, request);
  try {
    await sgMail.send(data);
    console.log("Sent message");
  } catch (err) {
    console.log(err);
    console.log("Failed to send message");
  }
};
export const load: PageServerLoad = async ({ locals }) => {
  const session = await locals.validate();
  console.log(session);
  if (session) throw redirect(302, "/");
  return {};
};
export const actions: Actions = {
  default: async ({ request, locals, url }) => {
    const form = await request.formData();
    const email = form.get("email");
    const password = form.get("password");
    const firstName = form.get("firstName");
    const lastName = form.get("lastName");
    const country = form.get("country");
    const postalZip = form.get("postalZip");
    const phone = form.get("phone");
    const birthday = form.get("birthday");
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
      const profileUpsert = await prisma.user.upsert({
        where: {
          id: user.userId,
        },
        data: {
          Profile: {
            upsert: {
              create: {
                firstName,
                lastName,
                country,
                phone,
                postalZip,
                birthday,
              },
              update: {
                firstName,
                lastName,
                country,
                phone,
                postalZip,
                birthday,
              },
            },
          },
        },
      });
      console.log(profileUpsert);
      const session = await auth.createSession(user?.userId);
      locals.setSession(session);
      console.log("success");
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
