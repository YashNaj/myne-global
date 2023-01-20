import { getUser } from "$lib/auth/server";
import { handleServerSession } from "@lucia-auth/sveltekit";
import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

const anyoneAllowed = [
    "/signup",
    "/signin",
    "/forgot-password",
    "/reset-password",
    "/api/verify-email",
    "/unverified-email",
    '/api/send-mail'
]


export const load = handleServerSession(
    (async ({ url, locals }) => {
        const onUnauthedRoute = anyoneAllowed.some((route) => url.pathname.startsWith(route))
        if (onUnauthedRoute) return {}

        const user = await getUser(locals, { url })
        if (!user) redirect (302, '/signin')
        if (user.emailVerified)  redirect(302, "/profile")
        else throw redirect(302, "/unverified-email")
    }) satisfies LayoutServerLoad
)