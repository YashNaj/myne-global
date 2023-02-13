import { getUser } from "$lib/server/server";
import { handleServerSession } from "@lucia-auth/sveltekit";
import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";
import { getSessionUser } from '$lib/server/lucia';
import { auth } from '$lib/server/lucia';
const anyoneAllowed = [
  "/signup",
  "/signout",
  "/signin",
  "/forgot-password",
  "/reset-password",
  "/verify-email",
  "/unverified-email",
  "/test",
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
  console.log(user);
  if (user.valid) return { isUser:true};
  else throw redirect(302, "/unverified-email");

}) satisfies LayoutServerLoad)