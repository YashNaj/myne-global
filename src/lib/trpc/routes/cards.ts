import { z } from "zod";
import { httpBatchLink } from "@trpc/client/links/httpBatchLink";
import { getSessionUser } from "$lib/server/lucia";
import { t } from "$lib/trpc/t";
import { Prisma, PrismaClient } from "@prisma/client";
import { protectedProcedure } from "$lib/trpc/middleware/auth";
import { userCards, currentUser } from "$lib/store";
import { cOfAuth } from "../../../cardProps";
const prisma = new PrismaClient();
// Define the types for the input and output of the endpoint
const myneCardsOutputSchema = z.object({
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
const transferInput = transferInputSchema.parse({
  currentUserId: "current-user-id",
  newUserId: "new-user-id",
  cardId: "card-id",
});

// Define the actual endpoint
export const cards = t.router({
  load: protectedProcedure
    // 👈 use auth middleware
    .input(z.string())
    .query(async ({ ctx, input }) => {
      let user = ctx.user;
      let session = ctx.session;
      console.log("trpc calling user and session", { user, session });
      const cards = await prisma.myneCard.findMany({
        where: {
          user_id: input,
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
      userCards.set(filteredCards);

      console.log("trpc cards", filteredCards);
      return filteredCards;
    }),
  delete: protectedProcedure
    // 👈 use auth middleware
    .input(z.string())
    .mutation(async ({ input: id }) => {
      await prisma.myneCard.delete({ where: { id } });
    }),

  transfer: protectedProcedure
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
  reportStolen: protectedProcedure.input(z.string()).mutation(async ({ input }) => {
    await prisma.myneCard.update({
      where: {
        id: input,
      },
      data: {
        isStolen: true,
      },
    });
  }),
  removeStolen: protectedProcedure.input(z.string()).mutation(async ({ input }) => {
    await prisma.myneCard.update({
      where: {
        id: input,
      },
      data: {
        isStolen: false,
      },
    });
  }),
  // addReceipt: protectedProcedure.input(z.sting()).mutation(async ({input})=> {
  //   await prisma.myneCard.update({
  //     where: {
  //       id: input,
  //     },
  //     data: {
  //       receipt
  //     },
  //   });
  // }),
  // addValuationReport: protectedProcedure.input(z.string()).mutation(async ({ input } ) => {
  //   await prisma.myneCard.update({
  //     where: {
  //       id: input,
  //     },
  //     data: {
  //       valuationReport
  //     },
  //   });
  //   addDocumentMiscArray: protectedProcedure.input(z.string()).mutation(async ({ input } ) => {
  //     await prisma.myneCard.update({
  //       where: {
  //         id: input,
  //       },
  //       data: {
  //         documnet_array
  //       },
  //     });
  // })
  // addRegistrationCert: protectedProcedure.input(z.string()).mutation(async(({input})=>{
  //   await prisma.myneCard.update({
  //     where: {
  //       id: input
  //     }
  //     data: {
  //       registration_certificate
  //     }

  //   })
  // })),
  // addcertOfAuth: protectedProcedure.input(z.string()).mutation(async(({input})=>{
  //   await prisma.myneCard.update({
  //     where: {
  //       id: input
  //     }
  //     data: {
  //       cOfAuth
  //     }

  //   })
  // })),
});
