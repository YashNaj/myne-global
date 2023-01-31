import { mongoose } from 'mongoose';
import { auth } from '$lib/auth/lucia';
import { handleHooks } from "@lucia-auth/sveltekit";
import {VITE_MONGO_URI} from '$env/static/private';
import * as db from '$lib/mongoose'
export const handle = handleHooks(auth);
try{ 
    await mongoose.connect(VITE_MONGO_URI)
    console.log("Starting MongoDB")
}catch(e){
    console.error(e)
}finally{
    console.log("Successfully connected to MongoDB")
}