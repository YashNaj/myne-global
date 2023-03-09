import { getUser } from "$lib/server/server";
import { handleServerSession } from "@lucia-auth/sveltekit";
import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";
import { getSessionUser } from "$lib/server/lucia";
import { auth } from "$lib/server/lucia";
import { Prisma, PrismaClient } from "@prisma/client";
import { cardPropsArray, cardProps } from "../cardProps";
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
  const props = cardPropsArray;

  if (onUnauthedRoute) return {};
  else if (!session) {
    throw redirect(303, "/signin");
  } else if (user?.valid) {
    let user_id = user.userId;
    console.log(user);
    let myneCard = await prisma.myneCard.findMany({
      where:{
        user_id: user_id,
      },
    })

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
