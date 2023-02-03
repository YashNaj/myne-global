
import { auth } from "$lib/auth/lucia";
import { Parsers } from "$lib/schema/parsers";
import { error, redirect, type RequestHandler } from "@sveltejs/kit";
import { z } from "zod";
import { prisma } from "$lib/prisma";
export const GET: RequestHandler = async ({ url, user }) => {
  const  {token}  = Parsers.params(url, z.object({ token: z.string() }));
  console.log(token);
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
    return new Response({"message": "success!"})
    throw redirect(302, "/");
  }
};
