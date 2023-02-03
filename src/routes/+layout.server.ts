import { getUser } from "$lib/auth/server";
import { handleServerSession } from "@lucia-auth/sveltekit";
import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";
import { getSessionUser } from '$lib/auth/lucia';
import { auth } from '$lib/auth/lucia';
import { supabase } from "$lib/supabase";
const anyoneAllowed = [
  "/signup",
  "/signout",
  "/signin",
  "/forgot-password",
  "/reset-password",
  "/verify-email",
  "/unverified-email",
  "/test",
  "/api/get-records",
  "/api",
]; 
const onlyAdmin = [
  "/admin"
]

export const load = handleServerSession((async ({ url, locals}) => {
  const onUnauthedRoute = anyoneAllowed.some((route) =>
    url.pathname.startsWith(route)
  ); 
  const adminRoute = onlyAdmin.some((route) => url.pathname.startsWith(route));
  const { session, user } = await locals.validateUser();
  
  if (!session) {
    throw redirect(303, "/signin");
  }
  console.log(user);
  if (user.valid) return { isUser:true};
  else throw redirect(302, "/unverified-email");
  if (onUnauthedRoute) return {};


}) satisfies LayoutServerLoad);

