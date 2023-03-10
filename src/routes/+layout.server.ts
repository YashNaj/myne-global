import { getUser } from "$lib/server/server";
import { handleServerSession } from "@lucia-auth/sveltekit";
import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";
import { getSessionUser } from "$lib/server/lucia";
import { auth } from "$lib/server/lucia";
import { Prisma, PrismaClient } from "@prisma/client";
import { cardPropsArray, cardProps, isHeirloom } from "../cardProps";
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
    
    let myneCard = await prisma.myneCard.findMany({
      where: {
        user_id
      }
    }).then((cards) => {
      return cards.map((card) => {
        return Object.keys(card).reduce((acc, key) => {
          if (card[key] != null && card[key] !== undefined) {
            acc[key] = card[key];
          }
          return acc;
        }, {});
      });
    });
    
    
    console.log("🚀 ~ file: +layout.server.ts:139 ~ load ~ filteredCards:", myneCard)
  

    const profile = await prisma.user
      .findUnique({
        where: {
          id: user_id,
        },
      })
      .profile();

    return { isUser: true, myneCard, profile };
  } else throw redirect(302, "/unverified-email");
}) satisfies LayoutServerLoad);
