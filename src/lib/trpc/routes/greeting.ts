import { prisma } from "prisma";
import { auth } from "$lib/server/lucia";
import { z } from "zod";
import { t } from "$lib/trpc/t";
import delay from "delay";
import { protectedProcedure } from '$lib/trpc/middleware/auth';

export const greeting = t.router({
  load: protectedProcedure
    .query(async ( ) => {
      return `Hello, from tRPC v10 @ ${new Date().toLocaleTimeString()}`;
    }),
});
