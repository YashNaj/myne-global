import { getUser } from "$lib/server/server";
import { handleServerSession } from "@lucia-auth/sveltekit";
import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";
import { getSessionUser } from "$lib/server/lucia";
import { auth } from "$lib/server/lucia";
import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function load({ locals }) {
  const { session, user } = await locals.validateUser();
  console.log(user);
  const user_id = user.userId
  console.log(1, user_id)
  const myneCards = await prisma.myneCard.findMany({
    where: {
      user_id
    },
  });
  return {myneCards}
}
