import { auth } from "$lib/auth/lucia";
import { EmailVerificationRequests } from "$lib/models/emailVerificationRequests";
import { Parsers } from "$lib/schema/parsers";
import { error, redirect, type RequestHandler } from "@sveltejs/kit";
import { z } from "zod";

export const GET: RequestHandler = async ({ url }) => {

    const verificationRequest = await prisma.EmailVerificationRequests.create().exec();
    if (!verificationRequest) throw error(400, "Invalid token");
    const { userId, expiresAt } = verificationRequest;

    if (expiresAt < new Date()) throw error(400, "Token expired");

    const user = await auth.getUser(userId);
    if (!user) throw error(400, "Invalid token");

    await auth.updateUserAttributes(user, {
        valid: true,
    });

    await verificationRequest.remove();

    throw redirect(302, "/");
}
