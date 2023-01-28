import { getUser } from "$lib/auth/server";
import { handleServerSession } from "@lucia-auth/sveltekit";
import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";
import { getSessionUser } from '$lib/auth/lucia';
import { auth } from '$lib/auth/lucia';
const anyoneAllowed = [
  "/signup",
  "/signin",
  "/forgot-password",
  "/reset-password",
  "/verify-email",
  "/unverified-email",
  "/test",
  "/api/addCards",
  "/api/test"
]; 
let isSession = false; 

export const load = handleServerSession((async ({ url, locals , isSession}) => {
  const onUnauthedRoute = anyoneAllowed.some((route) =>
    url.pathname.startsWith(route)
  );
  if (onUnauthedRoute) return {};
  const { session, user } = await locals.validateUser();
  if (!session) {
    throw redirect(303, "/signin");
  }
  if (user.emailVerified) return {};
  else throw redirect(302, "/unverified-email");
}) satisfies LayoutServerLoad);

console.log(isSession)