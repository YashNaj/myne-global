import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";
import { auth } from "$lib/server/lucia";
import { Prisma, PrismaClient } from "@prisma/client";
import { currentUser } from "$lib/utils/store";

const prisma = new PrismaClient();
const anyoneAllowed = [
  "/auth/signup",
  "/app/signout",
  "/app/unverified-email",
  "/auth/signin",
  "/forgot-password",
  "/reset-password",
  "/api/verify-email",
  "/test",
  "/test2",
  "/",
];
export const load = (async ({ url, locals }) => {
  const onUnauthedRoute = anyoneAllowed.some((route) => url.pathname.startsWith(route));
  const session = await locals.auth.validate();
  const { user } = await locals.auth.validateUser();
  const { pathname } = url;
  let isUser;
  if (onUnauthedRoute) return {};
  if (!session) {
    throw redirect(303, "/auth/signin");
  }
  if (session && user.valid) {
    return { pathname, loggedIn: true };
  } else redirect(302, "/app/unverified-email");
}) satisfies LayoutServerLoad;
