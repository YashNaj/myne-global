import { auth } from "$lib/auth/lucia";
import { Parsers } from "$lib/schema/parsers";
import { error, redirect, type RequestHandler } from "@sveltejs/kit";
import { z } from "zod";
import {prisma}  from "$lib/prisma";
export const GET: RequestHandler = async ({ url }) => {
  const {token}  = Parsers.params(url, z.object({ token: z.string() }));
  console.log(token)
  try{
    const request = await prisma.emailVerificationRequest.findUnique({
        where: {
          token: token, 
        },
        select: {
       
            emailVerificationRequest: true, 
        },
      })
      
    console.log(request)
    if (!request) throw error(400, "Invalid token");
    const { userId, expiresAt } = request;
  
    if (request.expiresAt < new Date()) throw error(400, "Token expired");
  
    const user = await auth.getUser(userId);
    if (!user) throw error(400, "Invalid token");
    await auth.updateUserAttributes(user, {
        valid: true,
      });
    
      throw redirect(302, "/");
      return Response.send(JSON.stringify(token));
  }
  
  catch (error){
    console.log(error);
  }

};
