import { getUser } from "$lib/server/server";
import { handleServerSession } from "@lucia-auth/sveltekit";
import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";
import { getSessionUser } from "$lib/server/lucia";
import { auth } from "$lib/server/lucia";
import { Prisma, PrismaClient } from "@prisma/client";
import { getCards } from "$lib/server/db"
import { redis } from '$lib/server/redis';
import { router } from '$lib/trpc/router';
import { userCards } from '../../store';
const prisma = new PrismaClient();

export const load: PageServerLoad = async ({ locals, event }) => {
  console.time("loadFunctionTimer")
  let loading = true;
  const { session, user } = await locals.validateUser();
  const getMyneCards = async () => {
    // const cacheKey = `myneCards_${user.userId}`;
    // const cachedData = await redis.get(cacheKey);

    // if (cachedData) {
    //   console.log("cache hit", cachedData)
    //   return JSON.parse(cachedData);
    // }
    
    console.log("cache missed")
    const cards = await prisma.myneCard.findMany({
      where: {
        user_id: user.userId,
      },
    });

    const filteredCards = cards.map((card) => {
      let filteredCard = {};
      for (const key in card) {
        if (card[key] != null) {
          filteredCard[key] = card[key];
        }
      }
      return JSON.parse(JSON.stringify(filteredCard));

    });
    userCards.set(filteredCards)

    const dataToCache = JSON.stringify(filteredCards);
    const cacheExpirationTime = 3600; // 1 hour in seconds, adjust as needed
    // await redis.set(cacheKey, dataToCache, 'EX', cacheExpirationTime);
    // console.log(redis)

    console.timeEnd("loadFunctionTimer")

    return filteredCards;
  };

  loading = false;
  console.log(loading);
  return { getMyneCards: await getMyneCards() };
};
