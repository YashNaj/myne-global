import type { Context } from '$lib/trpc/context';
import { initTRPC } from '@trpc/server';
import delay from 'delay';
import { Prisma, PrismaClient } from '@prisma/client';
import { getSessionUser } from '$lib/server/lucia';
import { json } from '@sveltejs/kit';
const prisma = new PrismaClient();
let duration  = 200;
export const t = initTRPC.context<Context>().create();
export const router = t.router({
  greeting: t.procedure.query(async () => {
    await delay(500); // 👈 simulate an expensive operation
    return `Hello tRPC v10 @ ${new Date().toLocaleTimeString()}`;
  }),
  getMyneCards: t.procedure.query(async()=>{
    console.log(Date.now());
    const myneCards = await prisma.myneCard.findMany({
    });
    console.log(myneCards)
    console.log(Date.now());
    return JSON.stringify({myneCards}); 
  })
});

export type Router = typeof router;
