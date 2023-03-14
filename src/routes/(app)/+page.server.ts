import { getUser } from "$lib/server/server";
import { handleServerSession } from "@lucia-auth/sveltekit";
import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";
import { getSessionUser } from "$lib/server/lucia";
import { auth } from "$lib/server/lucia";
import { Prisma, PrismaClient } from "@prisma/client";
import { getCards } from "$lib/server/db"
import { writable } from 'svelte/store';
import { redis } from '$lib/server/redis';
import { router } from '$lib/trpc/router';

export const load: PageServerLoad = async ({ locals, event }) => {
  
  const { session, user } = await locals.validateUser();
  const getCards = async(q:string) => {
    const cached = await redis.get(q)

    
    if (cached){
      console.log('cache hit')
      return JSON.parse(cached)
    }
      console.log('cache missed')
      const myneCards = router
      .createCaller(await createContext(event))
      .getMyneCards() 
    redis.set(q, JSON.stringify(myneCards, "EX", 500))
  }
};
