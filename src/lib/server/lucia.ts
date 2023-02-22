import { dev } from "$app/environment";
import lucia, { generateRandomString } from "lucia-auth";
import prisma from "@lucia-auth/adapter-prisma";
import { Prisma, PrismaClient } from "@prisma/client";
const prismaClient = new PrismaClient()
  
export const auth = lucia({
    adapter: prisma(prismaClient),
    env: dev ? "DEV" : "PROD",
    generateCustomUserId: async () => generateRandomString(8),
    transformUserData: ( userData ) => ({
        userId: userData.id,
        email: userData.email,
        role: userData.role,
        valid: userData.valid
    })
});

export type Auth = typeof auth;