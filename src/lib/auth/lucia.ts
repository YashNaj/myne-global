import { dev } from "$app/environment";
import lucia, { generateRandomString } from "lucia-auth";
import prisma from "@lucia-auth/adapter-prisma";
import { PrismaClient } from "@prisma/client";
import adapter from '@lucia-auth/adapter-prisma';

export const auth = lucia({
    adapter: adapter(prisma),
    env: dev ? "DEV" : "PROD",
    generateCustomUserId: async () => generateRandomString(8),
    transformUserData: ({ userData}) => ({
        myne_id: userData.myne_id,
        email: userData.email,
        roles: userData.roles,
        emailVerified: userData.emailVerified,
        firstName: userData.firstName, 
        lastName: userData.lastName
    })
});

export type Auth = typeof auth;