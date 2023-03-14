import { z } from "zod";
import { prisma } from "$lib/server/prisma";
import { getSession } from "$lib/server/auth";
import { createTRPCRouter } from "@trpc/server";
import { httpBatchLink } from "@trpc/client/links/httpBatchLink";
import { json } from "@trpc/server/adapters";
import { getSessionUser } from '$lib/server/lucia';

// Define the types for the input and output of the endpoint
const myneCardsInput = z.object({
  userId: z.string(),
});

const myneCardsOutput = z.object({
  myneCards: z.array(
    z.object({
      id: z.number(),
    })
  ),
});

// Define the actual endpoint
export const getMyneCards = createTRPCRouter()
  .query("myneCards", {
    input: myneCardsInput,
    async resolve({ input }) {

      const { user, session } = await locals.getSessionUser()

      if (!session) {
        throw new Error("Unauthorized");
      }
      const myneCards = await prisma.myneCard.findMany({
        where: {
          user_id: userId,
        },
        select: {
          id: true,
        },
      });
      return {
        myneCards,
      };
    },
    output: myneCardsOutput,
  })
  .middleware(httpBatchLink);

// Export a SvelteKit endpoint adapter for the TRPC router
export const handler = json(myneCards.handler);