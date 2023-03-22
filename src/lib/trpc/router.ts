import type { Context } from '$lib/trpc/context';
import { Prisma, PrismaClient } from '@prisma/client';
import { getSessionUser } from '$lib/server/lucia';
import { t } from "$lib/trpc/t"
import { greeting } from '$lib/trpc/routes/greeting'
import { myneCards } from "$lib/trpc/routes/get_myne_cards"
import { findUser } from "$lib/trpc/routes/findUser"
import { json } from '@sveltejs/kit';
const prisma = new PrismaClient();
let duration  = 200;
export const router = t.router({
  greeting,
  myneCards,
  findUser
});

export type Router = typeof router;
