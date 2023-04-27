import type { PageServerLoad } from "./$types";
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async (event) => {
  const myneCards = [""];
  console.time("loadFunctionTimer");
  const session = await event.locals.auth.validate();
  const { user } = await event.locals.auth.validateUser();

  if (!session) {
    throw redirect(302, "/auth/signin");
  }
  if (!user.valid) {
    throw redirect(302, "/app/unverified-email");
  }
  if (user.role === "RPAIR" || user.role === "ADMIN" || user.role === "OWNR") {
    return {};
  }
  else return {}
};
