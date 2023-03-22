import { prisma } from "prisma";
import { auth } from '$lib/server/lucia';
import { z } from 'zod';
import { t } from "$lib/trpc/t"
import delay from 'delay'

export const greeting = t.router({
    load: t.procedure.query(async () => {
        await delay(500); // 👈 simulate an expensive operation
        return `Hello tRPC v10 @ ${new Date().toLocaleTimeString()}`;
      })
})