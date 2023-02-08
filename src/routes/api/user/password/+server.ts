import { auth } from "$lib/server/lucia";
import { getUser } from "$lib/server/server";
import { json, type RequestHandler } from "@sveltejs/kit";
import { z } from "zod";

export const PUT: RequestHandler = async ({ locals, request }) => {
    const { userId } = await getUser(locals);
    await auth.updateUserPassword(userId, newPass);

    return json({ ok: true })
}