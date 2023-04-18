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
  console.time("loadFunctionTimer");
  const { session } = await event.locals.auth.validate();
  if (!session) {
    throw redirect(302, "/signin");
  }
  return {};
};
