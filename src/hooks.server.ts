import { createContext } from '$lib/trpc/context';
import { router } from '$lib/trpc/router';
import type { Handle } from '@sveltejs/kit';
import { createTRPCHandle } from 'trpc-sveltekit';
import { auth } from '$lib/server/lucia';
import { handleHooks } from "@lucia-auth/sveltekit";
import {VITE_MONGO_URI} from '$env/static/private';
export const handle: Handle = handleHooks(auth);
//must sequence the following hook for it to work properly 
// export const handle: Handle = createTRPCHandle({ router, createContext })