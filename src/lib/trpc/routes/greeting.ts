import { prisma } from "prisma";
import { auth } from "$lib/server/lucia";
import { z } from "zod";
import { t } from "$lib/trpc/t";
import delay from "delay";
import { protectedProcedure } from '$lib/trpc/middleware/auth';

export const greeting = t.router({
  greeting: protectedProcedure
    .input((name: unknown) => {
      if (typeof name === "string") return name;

      throw new Error(`Invalid input: ${typeof name}`);
    })
    .query(async ({ input }) => {
      return `Hello, ${input} from tRPC v10 @ ${new Date().toLocaleTimeString()}`;
    }),
});
