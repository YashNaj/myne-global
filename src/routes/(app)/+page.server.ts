import { getUser } from "$lib/server/server";
import { handleServerSession } from "@lucia-auth/sveltekit";
import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";
import { getSessionUser } from "$lib/server/lucia";
import { auth } from "$lib/server/lucia";
import { Prisma, PrismaClient } from "@prisma/client";
import { getCards } from "$lib/server/db"
export const load: PageServerLoad = async ({ locals }) => {
  
  const { session, user } = await locals.validateUser();
  const user_id = user.userId;
  if (user_id !== null) {
    const myneCards = getCards(50, 0 , user_id)
    console.log(myneCards);
    return { myneCards: myneCards};
  }
};
