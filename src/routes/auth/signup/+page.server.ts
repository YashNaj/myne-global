import { fail, redirect } from "@sveltejs/kit";
import { auth } from "$lib/server/lucia";
import type { PageServerLoad, Actions } from "./$types";
import { LuciaError } from "lucia-auth";
import sgMail from "@sendgrid/mail";
import { VITE_SENDGRID_API_KEY } from "$env/static/private";
import { page } from "$app/stores";
import { Prisma, PrismaClient } from "@prisma/client";
import { render } from "svelte-email";
import SignUpEmail from "$lib/components/SignUpEmail.svelte";
import { z } from "zod";
import { superValidate } from "sveltekit-superforms/server";

const prisma = new PrismaClient();
const registerSchema = z.object({
  firstName: z.string().nonempty(),
  lastName: z.string().nonempty(),
  address: z.string().nonempty(),
  addressTwo: z.string(),
  city: z.string().nonempty(),
  state: z.string().nonempty(),
  country: z.string().nonempty(),
  postalZip: z.string().nonempty(),
  phone: z.string().nonempty(),
  birthday: z.string().nonempty(),
  email: z.string().email().nonempty(),
  password: z.string().min(8).nonempty(),
  confirmPassword: z.string().min(8).nonempty(),
});
const origin = "https://myneglobal.com" || "http://localhost:5173";
const sendEmailVerificationLink = async (user: string, origin: string, email: string, url: string) => {
  sgMail.setApiKey(VITE_SENDGRID_API_KEY);
  console.log("sendgrid user", user);
  // const request = await prisma.authUser.update({
  //   where: {
  //     id: user.userId,
  //   },
  //   data: {
  //     emailVerificationRequest: {
  //       create: {
  //         email,
  //         expiresAt: new Date(Date.now() + 1 * 60 * 60 * 1000),
  //       },
  //     },
  //   },
  // });
  const verificationRequest = await prisma.emailVerificationRequest.findUnique({
    where: {
      user_id: user.userId,
    },
    select: {
      token: true,
    },
  });
  const profile = await prisma.profile.findUnique({
    where: {
      user_id: user.userId,
    },
  });
  const token = verificationRequest?.token;
  const href = `${origin}/api/verify-email?token=${token}`;
  const buttonSlug = `<a href= "${href}"> Verify Here </a>`;
  const emailHtml = render({
    template: SignUpEmail,
    props: {
      firstName: profile.firstName,
      origin,
      token,
      href,
    },
  });
  const data = {
    to: email, // Change to your recipient
    from: "support@myneglobal.com", // Change to your verified sender
    subject: "Verify your Myne Global Account",
    html: emailHtml,
  };
  try {
    await sgMail.send(data);
    console.log("Sent message");
  } catch (err) {
    console.log(err);
    console.log("Failed to send message");
  }
};
export const load: PageServerLoad = async ({ locals }) => {
  const form = await superValidate(registerSchema);
  const session = await locals.auth.validate();
  console.log(session);
  if (session) throw redirect(302, "/app");
  return { form };
};
export const actions: Actions = {
  default: async ({ request, locals, url }) => {
    const form = await superValidate(request, registerSchema);
    const {
      firstName,
      lastName,
      address,
      addressTwo,
      city,
      state,
      country,
      phone,
      postalZip,
      birthday,
      password,
      confirmPassword,
      email,
    } = form.data;
    if (confirmPassword !== password) {
      console.log("Passwords do not match");
      return fail(400), { message: "Passwords do not match" };
    }
    try {
      const user = await auth.createUser({
        primaryKey: {
          providerId: "email",
          providerUserId: email, 
          password,
        },
        attributes: {
          email,
          valid: false,
        },
      });

      console.log("🚀 ~ file: +page.server.ts:102 ~ default: ~ user", user);
      const session = await auth.createSession(user.userId);
      locals.auth.setSession(session);

      const profileUpsert = await prisma.authUser.update({
        where: {
          id: user.userId,
        },
        data: {
          profile: {
            create: {
              firstName,
              lastName,
              address,
              addressTwo,
              city,
              state,
              country,
              phone,
              postalZip,
              birthday,
            },
          },
        },
      });
      const emailVerificationRecord = await prisma.emailVerificationRequest.create({
        data: {
          email,
          user_id: user.userId,
          expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000), // Set expiration to 24 hours from now
        },
      });
      console.log("Created Email Verification Record");
      await sendEmailVerificationLink(user, origin, email);
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
