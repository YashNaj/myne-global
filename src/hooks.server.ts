import type { Handle } from '@sveltejs/kit';
import { auth } from '$lib/server/lucia';
import { handleHooks } from "@lucia-auth/sveltekit";
import {VITE_MONGO_URI} from '$env/static/private';
export const handle: Handle = handleHooks(auth);
