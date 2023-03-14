import { auth } from "$lib/server/lucia";
import { getUser } from "$lib/server/server";
import { INTERNAL_SERVER_ERROR } from "$lib/utils/errors";
import { json, type RequestHandler } from "@sveltejs/kit";
import { Prisma, PrismaClient } from "@prisma/client";

export const GET: RequestHandler = async ({ locals, request, response }) => {
  const prisma = new PrismaClient();
  const { session, user } = await locals.validateUser();
 
  const user_id = user?.userId
  try {
    let myneCards = await prisma.myneCard.findMany({
        where: {
          user_id
        },
        select:{
          id: true,
        }
      })
    
    return json({ myneCards });
  } catch (err) {
    console.log(err);
    throw INTERNAL_SERVER_ERROR(err);
  }
  prisma.$disconnect();
};
