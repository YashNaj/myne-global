import { z } from "zod";
import { t } from "$lib/trpc/t";
import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const findUser = t.router({
  load: t.procedure.input(z.string().optional()).query(async ({ input }) =>
    prisma.user.findMany({
      where: {
        OR: [
          {
            email: {
              startsWith: input,
            },
           
          },
          {
            id: {
                startsWith: input,
              },
          }
        ],
      },
    })
  ),
});
