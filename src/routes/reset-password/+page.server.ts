import { auth } from "$lib/server/lucia";
import { PasswordResetRequests } from "$lib/models/passwordResetRequests";
import { passwordSchema } from "$lib/schema";
import { Parsers } from "$lib/schema/parsers";
import { INTERNAL_SERVER_ERROR } from "$lib/utils/errors";
import { error, type Actions } from "@sveltejs/kit";
import * as prisma from "$lib/server/db";
export const actions: Actions = {
    default: async ({ request }) => {
        const { newPass, token } = await prisma.form(request, z.object({
            newPass: passwordSchema,
            token: z.string()
        }))

        const resetRequest = await prisma.findOne({ token }).exec()
        if (!resetRequest) throw error(400, "Invalid token")
        if (resetRequest.expiresAt < new Date()) {
            await resetRequest.remove()
            throw error(400, "Token expired")
        }

        try {
            await auth.updateUserPassword(resetRequest.userId, newPass)
            await resetRequest.remove()

            return { ok: true }
        } catch (err) {
            console.log(err)
            throw INTERNAL_SERVER_ERROR(err)
        }
    }
}