import { auth } from "$lib/server/lucia";
import { getUser } from "$lib/server/server";
import { INTERNAL_SERVER_ERROR } from "$lib/utils/errors";
import { json, type RequestHandler } from "@sveltejs/kit";
import { Prisma, PrismaClient } from "@prisma/client";
import type { PageServerLoad } from "./$types";
import { createContext } from '$lib/trpc/context';
import { router } from '$lib/trpc/router';

export const load: PageServerLoad = async ({event, params, locals}) => {
    const {user} = locals.auth.validateUser();
    console.log(user);
    if (!user) {
        throw redirect(302, '/auth/signin')
    }
    const cardId = params.card 
    return {
        cardId
    }
};
