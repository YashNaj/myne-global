import { createContext } from "$lib/trpc/context";
import { router } from "$lib/trpc/router";
import type { Handle } from "@sveltejs/kit";
import { createTRPCHandle } from "trpc-sveltekit";
import { auth } from "$lib/server/lucia";
import { sequence } from "@sveltejs/kit/hooks";
import { VITE_MONGO_URI } from "$env/static/private"

//must sequence the following hook for it to work properly
// export const handle: Handle = createTRPCHandle({ router, createContext })
export const handle: Handle = sequence((async ({ event, resolve }) => {
  event.locals.auth = auth.handleRequest(event);
  return await resolve(event);
}), createTRPCHandle({ router, createContext }));
