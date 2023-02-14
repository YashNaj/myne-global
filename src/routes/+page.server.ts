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
  const myneCards = await prisma.myneCard.findMany({
    where: {
      user_id: user?.user_id,
    },
    select: {
      category: true,
      subcategory: true,
      breed: true,
      brand: true,
      purchasedFrom: true,
      purchasedValue: true,
      description: true,
    },
  });
  return {myneCards}
}
