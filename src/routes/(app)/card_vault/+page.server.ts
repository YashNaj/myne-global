import { auth } from "$lib/server/lucia";
import { getUser } from "$lib/server/server";
import { INTERNAL_SERVER_ERROR } from "$lib/utils/errors";
import { json, type RequestHandler } from "@sveltejs/kit";
import { Prisma, PrismaClient } from "@prisma/client";
import redis from '$lib/server/redis'
const prisma = new PrismaClient();

export const load: PageLoad = async ({ locals, url }) => {
  let loading = true;
  const { user, session } = await locals.validateUser();

  const getMyneCards = async () => {
    const cacheKey = `myneCards_${user.userId}`;
    const cachedData = await redis.get(cacheKey);

    if (cachedData) {
      console.log("cache hit")
      return JSON.parse(cachedData);
    }
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
      return filteredCard;
    });

    const dataToCache = JSON.stringify(filteredCards);
    const cacheExpirationTime = 3600; // 1 hour in seconds, adjust as needed
    await redis.set(cacheKey, dataToCache, 'EX', cacheExpirationTime);
    console.log(redis)

    return filteredCards;
  };

  loading = false;
  console.log(loading);
  return { getMyneCards: await getMyneCards() };
};