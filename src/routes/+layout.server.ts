import { getUser } from "$lib/server/server";
import { handleServerSession } from "@lucia-auth/sveltekit";
import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";
import { getSessionUser } from '$lib/server/lucia';
import { auth } from '$lib/server/lucia';
import {Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();
const anyoneAllowed = [
  "/signup",
  "/signout",
  "/signin",
  "/forgot-password",
  "/reset-password",
  "/verify-email",
  "/unverified-email",
  "/test",
  "/api/addCard"
]; 
export const load = handleServerSession((async ({ url, locals}) => {

  const onUnauthedRoute = anyoneAllowed.some((route) =>
    url.pathname.startsWith(route)
  );
  if (onUnauthedRoute) return {};
  const { session, user } = await locals.validateUser();

  if (!session) {
    throw redirect(303, "/signin");
  }
  if (user.valid){
    const user_id = user.userId
    console.log(user);
    const profile = await prisma.profile.findUnique({
      where:{
        user_id
      },
      select: {
        firstName: true,
        lastName: true,
      }
    })  
    return { isUser:true, profile}
  };
  else throw redirect(302, "/unverified-email");

}) satisfies LayoutServerLoad)
