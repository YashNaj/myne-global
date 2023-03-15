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
export const myneCards = t.router({
  list: t.procedure
    .use(logger)
    .input(z.string().optional())
    .query(({ input }) =>
      prisma.myneCard.findMany({
        select: {
          id: true,
          firstName: true,
          lastName: true,
          updatedAt: true,
          _count: { select: { books: true } }
        },
        orderBy: { updatedAt: 'desc' },
        where: input
          ? {
              OR: [{ firstName: { contains: input } }, { lastName: { contains: input } }]
            }
          : undefined
      })
    ),

  load: t.procedure
    .use(logger)
    .use(auth) // 👈 use auth middleware
    .input(z.string())
    .query(({ input }) =>
      prisma.myneCard.findUniqueOrThrow({
        select: {
          id: true,
          firstName: true,
          lastName: true,
          bio: true,
          updatedAt: true,
          updatedBy: { select: { name: true } }
        },
        where: { id: input }
      })
    ),

  save: t.procedure
    .use(logger)
    .use(auth) // 👈 use auth middleware
    .input(
      z.object({
        id: z.string().nullable(),
      })
    )
    .mutation(async ({ input: { id, ...rest }, ctx: { userId } }) => {
      if (id) {
        await prisma.myneCard.update({
          data: { ...rest, updatedByUserId: userId },
          where: { id }
        });
      } else {
        await prisma.myneCard.create({
          data: { ...rest, updatedByUserId: userId }
        });
      }
    }),

  delete: t.procedure
    .use(logger)
    .use(auth) // 👈 use auth middleware
    .input(z.string())
    .mutation(async ({ input: id }) => {
      await prisma.myneCard.delete({ where: { id } });
    })
});
