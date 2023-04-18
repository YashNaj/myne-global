
import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";
import { auth } from "$lib/server/lucia";
import { Prisma, PrismaClient } from "@prisma/client";
import { currentUser } from '$lib/utils/store'

const prisma = new PrismaClient();
const anyoneAllowed = [
  "/auth/signup",
  "/app/signout",
  "/app/unverified-email",
  "/auth/signin",
  "/forgot-password",
  "/reset-password",
  "/verify-email",
  "/test",
  "/test2",
  "/",
];
export const load = ((async ({ url, locals }) => {
  const onUnauthedRoute = anyoneAllowed.some((route) => url.pathname.startsWith(route));
  const session = await locals.auth.validate();
  
  if (onUnauthedRoute) return {};
  else if (!session) {
    throw redirect(303, "/auth/signin");
  } else if (user.valid) {
    let user_id = user.userId;

    // const query = {
    //   where: {
    //     AND: cardPropsArray.map((prop) => {
    //       if (acceptable.includes(prop) === true) {
    //         return { [prop]: true };
          
    //       }
    //       else if (accpetable.includes(dateTime) === true){
    //       } 
    //       else {
    //         return { [prop]: true };
    //       }
    //     }),
    //   },
    //   select: Object.fromEntries(
    //     cardPropsArray
    //       .filter((prop) => acceptable.includes(prop))
    //       .map((prop) => [prop, true])
    //   ),}
    let loading = true; 
    const profile = async() => await prisma.authUser
      .findUnique({
        where: {
          id: user_id,
        },
      })
      .profile();
    loading = false
    throw redirect(202, "/home");
    return { isUser: true, profile:profile(), loading, user_id }
  } else throw redirect(302, "/unverified-email");
}) satisfies LayoutServerLoad);
