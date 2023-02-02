import { fail, redirect } from "@sveltejs/kit";
import { auth } from "$lib/auth/lucia";
import type { PageServerLoad, Actions } from "./$types";
import { LuciaError } from "lucia-auth";
import { PrismaClient } from '@prisma/client'
import sgMail from "@sendgrid/mail";
import { VITE_SENDGRID_API_KEY } from "$env/static/private";
import { Role } from '../../lib/auth/roles';
const prisma = new PrismaClient()


const sendEmailVerificationLink = async (
  user: string,
  origin: string,
  email: string
) => {
  sgMail.setApiKey(VITE_SENDGRID_API_KEY);
  const request = await prisma.users.create(
    { 
    data:{
      emailVerificationRequest:{
        user_id : user.user_id
      }
    }
   });
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
      const profileUpsert = await prisma.user.update({
        where: {
          id: user.userId,
        },
        data: {
          Profile: {
            firstName,
            lastName,
            country,
            phone,
            birthday,
            postalZip
          }
      }});   
      await sendEmailVerificationLink(user, origin, email)
      console.log("success");
      console.log(user);
      const session = await auth.createSession(user?.userId);
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
