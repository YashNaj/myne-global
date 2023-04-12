import { auth } from "$lib/server/lucia";
import { z } from "zod";
import { t } from "$lib/trpc/t";
import delay from "delay";
import { protectedProcedure } from "../middleware/auth";
import { currentUser } from "$lib/store";
import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const profile = t.router({
  load: protectedProcedure.query(async (ctx) => {
    std.log("profile load");
    let profile = await prisma.profile.findUnique({
      where: {
        user_id: ctx.user.userId,
      },
    });
    return profile;
  }),
});
