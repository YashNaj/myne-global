
import { getUser } from "$lib/server/server";
import { handleServerSession } from "@lucia-auth/sveltekit";
import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";
import { getSessionUser } from "$lib/server/lucia";
import { auth } from "$lib/server/lucia";
import { Prisma, PrismaClient } from "@prisma/client";
import { cardPropsArray, cardProps, isHeirloom } from "../cardProps";
import { createContext } from '$lib/trpc/context';
import { router } from '$lib/trpc/router';
import { currentUser } from '$lib/store'

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
  "/test2",
];
export const load = handleServerSession((async ({ url, locals }) => {
  const onUnauthedRoute = anyoneAllowed.some((route) => url.pathname.startsWith(route));
  const { session, user } = await locals.validateUser();
  if (onUnauthedRoute) return {};
  else if (!session) {
    throw redirect(303, "/signin");
  } else if (user?.valid) {
    let user_id = user.userId;
    console.log(user);

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
    const profile = async() => await prisma.user
      .findUnique({
        where: {
          id: user_id,
        },
      })
      .profile();
    loading = false
    return { isUser: true, profile:profile(), loading };
  } else throw redirect(302, "/unverified-email");
}) satisfies LayoutServerLoad);
