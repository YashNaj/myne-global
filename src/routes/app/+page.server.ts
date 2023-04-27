import type { LayoutServerLoad } from "./$types";
import { redirect } from "@sveltejs/kit";
import { getSessionUser } from "$lib/server/lucia";
import { auth } from "$lib/server/lucia";
import { Prisma, PrismaClient } from "@prisma/client";
import { getCards } from "$lib/server/db";
import { redis } from "$lib/server/redis";
import { userCards } from "$lib/utils/store";
const prisma = new PrismaClient();

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
  if (user.role === "ADMIN") {
    throw redirect(302, "/app/admin");
  }
  if (user.role === "OWNR") {
    throw redirect(302, "/app/admin");
  }
  if (user.role === "DIST") {
    throw redirect(302, "/app/dist");
  }
  if (user.role === "RPAIR") {
    throw redirect(302, "/app/repair");
  } 
  return {myneCards, user}
};
