import { z } from "zod";
import { httpBatchLink } from "@trpc/client/links/httpBatchLink";
import { getSessionUser } from "$lib/server/lucia";
import { t } from "$lib/trpc/t";
import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
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
const transferInputSchema = z.object({
  currentUserId: z.string(),
  newUserId: z.string(),
  cardId: z.string(),
});

// Validate and pass the input
const input = transferInputSchema.parse({
  currentUserId: "current-user-id",
  newUserId: "new-user-id",
  cardId: "card-id",
});

// Define the actual endpoint
export const cards = t.router({
  list: t.procedure.input(z.string().optional()).query(({ input }) => prisma.myneCard.findMany()),

  load: t.procedure
    // 👈 use auth middleware
    .input(z.string())
    .query(async ({ input }) => {
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
    }),
  delete: t.procedure
    // 👈 use auth middleware
    .input(z.string())
    .mutation(async ({ input: id }) => {
      await prisma.myneCard.delete({ where: { id } });
    }),

  transfer: t.procedure
    .input(
      z.object({
        currentUserId: z.string(),
        newUserId: z.string(),
        cardId: z.string(),
      })
    )
    .mutation(
      async ({ input: { cardId, currentUserId, newUserId } }) =>
        await prisma.myneCard.update({
          where: {
            id: cardId,
          },
          data: {
            user_id: newUserId,
          },
        })
    ),
  reportStolen: t.procedure.input(z.string()).mutation(async ({ input }) => {
    await prisma.myneCard.update({
      where: {
        id: input,
      },
      data: {
        isStolen: true,
      },
    });
  }),
  removeStolen: t.procedure.input(z.string()).mutation(async ({ input }) => {
    await prisma.myneCard.update({
      where: {
        id: input,
      },
      data: {
        isStolen: false,
      },
    });
  }),
});
