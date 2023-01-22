import { json, type RequestHandler } from "@sveltejs/kit"
import  { db }  from "../../../hooks.server"
import { getUser } from '$lib/auth/server';
import {mongoose}  from 'mongoose';
import {stolenWatchesCollection} from '$lib/mongoose.ts'
export const GET: RequestHandler = async ({   }) => {
    const documents = await db.collection('watch_jewlery').find({}).limit(100).toArray();

    return json((documents))
}
