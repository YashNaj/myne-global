import prisma from '@lucia-auth/adapter-prisma';
import { dev } from '$app/environment';
import { PrismaClient, Prisma } from '@prisma/client';


 
export default prisma(new PrismaClient());

export async function getCards(take:number, skip: number, user_id: string){
    const prisma = new PrismaClient();
    const myneCards = await prisma.myneCard.findMany({
        take,
        skip,
        where: {
          user_id,
        },
      });
    return myneCards;
}
export async function transferCard()