import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import {Prisma, PrismaClient} from '@prisma/client';
export const GET: RequestHandler = async () => {
    const prisma = new PrismaClient();
    const brands  = await prisma.brand.findMany({
        select: {
            jewlery:true, 
        }
    }); 
    
    
    return json(brands);
};