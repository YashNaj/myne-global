import { auth } from "$lib/server/lucia";
import { getUser } from "$lib/server/server";
import { INTERNAL_SERVER_ERROR } from "$lib/utils/errors";
import { json, type RequestHandler } from "@sveltejs/kit";
import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const load: PageLoad = async ({locals, url}) => { 
    let loading = true
    const { user, session } = await locals.validateUser();
    const getMyneCards = async() => await prisma.myneCard.findMany({
        where: {
          user_id: user.userId
        }
      }).then((cards) => {
        return cards.map((card) => {
          return Object.keys(card).reduce((acc, key) => {
            if (card[key] != null && card[key] !== undefined) {
              acc[key] = card[key];
            }
            return acc;
          }, {});
        });
      });
      loading = false;
      console.log(loading)
      return { getMyneCards:getMyneCards() }
};