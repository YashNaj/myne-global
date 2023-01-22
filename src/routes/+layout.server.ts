import { getUser } from "$lib/auth/server";
import { handleServerSession } from "@lucia-auth/sveltekit";
import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

const anyoneAllowed = [
  "/signup",
  "/signin",
  "/forgot-password",
  "/reset-password",
  "/verify-email",
  "/unverified-email",
  "/test"
];

export const load = handleServerSession((async ({ url, locals }) => {
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
