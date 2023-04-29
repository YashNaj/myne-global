import { auth } from "$lib/server/lucia";
import { z } from "zod";
import { t } from "$lib/trpc/t";
import delay from "delay";
import { protectedProcedure } from "$lib/trpc/middleware/auth";
import { currentUser } from "$lib/utils/store";
import { Prisma, PrismaClient } from "@prisma/client";
const cardFieldsSchema = z.record(z.any());
const prisma = new PrismaClient();
const cardDataScehma = z.object({});

export const addCard = t.router({
  load: protectedProcedure.input(cardDataSchema).mutation(async ({ ctx }) => {
    let user_id = ctx.user.userId;
    const cardDataScehma = z.object({});

    let profile = await prisma.myneCards.create({
      data: {
        user_id,
        cardData,
      },
    });
    console.log("addCard", { addCard });
    return { message: "Success" };
  }),
});
