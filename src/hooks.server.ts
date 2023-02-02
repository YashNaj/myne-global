import { mongoose } from 'mongoose';
import { auth } from '$lib/auth/lucia';
import { handleHooks } from "@lucia-auth/sveltekit";
import {VITE_MONGO_URI} from '$env/static/private';
import * as db from '$lib/mongoose'
import { supabase } from './lib/supabase';
export const handle = handleHooks(auth);
