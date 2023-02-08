import { auth } from "$lib/server/lucia";
import { getUser } from "$lib/server/server";
import { INTERNAL_SERVER_ERROR } from "$lib/utils/errors";
import { json, type RequestHandler } from "@sveltejs/kit";
import { Prisma, PrismaClient} from '@prisma/client';
export const POST: RequestHandler = async ({  locals, request, response}) =>{
  const prisma = new PrismaClient();
  const data = await request.json(); 
    try {
        const stolenWatch = await prisma.stolenWatches.findUnique({
          where: {
            caseSerialNumber: data.caseSerialNumber,
          },
          select:{
            manufacture: true, 
            reference_: true, 
            model: true, 
            caseSerialNumber: true
          }
        });
        return json({ stolenWatch})
    } catch (err) {
        console.log(err)
        throw INTERNAL_SERVER_ERROR(err)
    }
    prisma.$disconnect()
}