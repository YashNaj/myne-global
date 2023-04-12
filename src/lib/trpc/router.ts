import type { Context } from "$lib/trpc/context";
import { Prisma, PrismaClient } from "@prisma/client";
import { getSessionUser } from "$lib/server/lucia";
import { t } from "$lib/trpc/t";
import { greeting } from "$lib/trpc/routes/greeting";
import { cards } from "$lib/trpc/routes/cards";
import { findUser } from "$lib/trpc/routes/findUser";
import { profile } from "$lib/trpc/routes/profile";
import { json } from "@sveltejs/kit";
const prisma = new PrismaClient();
let duration = 200;
export const router = t.router({
  profile,
  greeting,
  cards,
  findUser,
});

export type Router = typeof router;
