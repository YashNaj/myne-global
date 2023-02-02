import { getUser } from "$lib/auth/server";
import { handleServerSession } from "@lucia-auth/sveltekit";
import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";
import { getSessionUser } from '$lib/auth/lucia';
import { auth } from '$lib/auth/lucia';
import { supabase } from "$lib/supabase";
const anyoneAllowed = [
  "/signup",
  "/signin",
  "/forgot-password",
  "/reset-password",
  "/verify-email",
  "/unverified-email",
  "/test",
  "/api/get-records"
  "/api"
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
  if (user.valid) return {isUser:true};
  else throw redirect(302, "/unverified-email");

}) satisfies LayoutServerLoad);

