import { auth } from "$lib/server/lucia";
import { fail, redirect } from "@sveltejs/kit";
import type { PageServerLoad, Actions } from "./$types";
import { LuciaError } from "lucia-auth";
import { signin } from "../../../../tests/utils";
import { currentUser } from "$lib/utils/store";
let signingIn = false;
export const load: PageServerLoad = async ({ locals, page }) => {
  const session = await locals.auth.validate();
  const { user } = await locals.auth.validateUser();
  console.log(user)
  if (user) {
    currentUser.set(user.userId);
  }
  console.log("session", session);
  if (session) throw redirect(302, "/app");
};
// Set signingIn to false when redirecting

export const actions: Actions = {
  default: async ({ request, locals, page }) => {
    const form = await request.formData();
    const email = form.get("email");
    const password = form.get("password");
    console.log(form);
    if (!email || !password || typeof email !== "string" || typeof password !== "string")
      return fail(400, {
        message: "Email or Password cannot be empty",
        signingIn: false,
      });
    try {
      let signingIn = true;
      const key = await auth.useKey("email", email, password);
      console.log(key);

      const session = await auth.createSession(key.userId);
      console.log(session);
      locals.auth.setSession(session);
    } catch (error) {
      if (error instanceof LuciaError && error.message === "AUTH_INVALID_PROVIDER_ID") {
        return fail(400, {
          message: "Invalid Email",
        });
      } else if (error instanceof LuciaError && error.message === "AUTH_INVALID_PASSWORD") {
        return fail(400, {
          message: "Invalid Password.",
        });
      }
      console.log(error);
      return fail(400, { signingIn: false });
    } finally {
      signingIn = false;
    }
  },
};
