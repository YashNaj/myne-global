import { auth } from "$lib/server/lucia";
import { getUser } from "$lib/server/server";
import { INTERNAL_SERVER_ERROR } from "$lib/utils/errors";
import { json, type RequestHandler } from "@sveltejs/kit";
import { Prisma, PrismaClient } from "@prisma/client";
export const POST: RequestHandler = async ({ locals, request, response }) => {
  const data = await request.json();
  console.log("request data", data);
  const prisma = new PrismaClient();
  const { session, user } = await locals.validateUser();

  const user_id = user?.userId;
  const id = data?.id;
  console.log(user_id, id);

  if (id === null || id === undefined) {
    return json({ message: "no card id present" });
  }
  const cardProps = await prisma.myneCard.findUnique({
    where: { id: id },
  });
  Object.keys(cardProps).forEach((key) => {
    if (cardProps[key] === null) {
      delete cardProps[key];
    }
  });
  console.log(cardProps);

  return json({ cardProps });
  prisma.$disconnect();
};
