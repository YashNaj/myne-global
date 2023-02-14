
import { auth } from "$lib/server/lucia";
import { error, redirect, type RequestHandler } from "@sveltejs/kit";
import { z } from "zod";
import { Parsers } from '$lib/schemas/pasrser';
import {Prisma , PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();
export const GET: RequestHandler = async ({ url, user }) => {
  const { token } = Parsers.params(url, z.object({ token: z.string() }));
  try {
    const request = await prisma.emailVerificationRequest.findUnique({
      where: {
        token: token
      }
    });

    console.log(request);
    if (!request) throw error(400, "Invalid token");
    const { id, expiresAt } = request;
    console.log(id, expiresAt);
    if (request.expiresAt < new Date()) throw error(400, "Token expired");

    const user = await auth.getUser(id);
    if (!user) throw error(400, "Invalid token");
    await auth.updateUserAttributes(user.userId, {
      valid: true,
    });

  } catch (error) {
    console.log(error);
  }finally{
    throw redirect(302, "/");

  }
  return new Response({"message": "success!"})

};
