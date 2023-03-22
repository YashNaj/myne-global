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

// Define the actual endpoint
export const myneCards = t.router({
  list: t.procedure.input(z.string().optional()).query(({ input }) => prisma.myneCard.findMany()),

  load: t.procedure
    // 👈 use auth middleware
    .input(z.string())
    .query(({ input }) =>
      prisma.myneCard.findUniqueOrThrow({
        select: {
          id: true,
        },
        where: { id: input },
      })
    ),

  // save: t.procedure
  //   .use(logger)
  //   .use(auth) // 👈 use auth middleware
  //   .input(
  //     z.object({
  //       id: z.string().nullable(),
  //     })
  //   )
  //   .mutation(async ({ input: { id, ...rest }, ctx: { userId } }) => {
  //     if (id) {
  //       await prisma.myneCard.update({
  //         data: { ...rest, updatedByUserId: userId },
  //         where: { id }
  //       });
  //     } else {
  //       await prisma.myneCard.create({
  //         data: { ...rest, updatedByUserId: userId }
  //       });
  //     }
  //   }),

  delete: t.procedure
    // 👈 use auth middleware
    .input(z.string())
    .mutation(async ({ input: id }) => {
      await prisma.myneCard.delete({ where: { id } });
    }),

  transfer: t.procedure.input(z.string()).mutation(
    async ({ input: currentUserId, newUserId: newUserId }) =>
      await prisma.myneCard.update({
        where: {
          user_id : currentUserId
        },
        update:{
          user_id : newUserId
        }
      })
  ),
});
