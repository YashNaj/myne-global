import { auth } from "$lib/server/lucia";
import { fail, redirect } from "@sveltejs/kit";
import type { PageServerLoad, Actions } from "./$types";
import { LuciaError } from "lucia-auth";
import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();
export const actions: Actions = {
  default: async ({ request, locals }) => {
    const { session, user } = await locals.validateUser();
    console.log("\u001b[1;31m user", user);

    const form = await request.formData();
    const category = form.get("category");
    const subCategory = form.get("subCategory");
    const brand = form.get("brand");
    const size = form.get("size");
    const purchasedFrom = form.get("purchasedFrom");
    const purchasedValue = form.get("purchasedValue");
    const description = form.get("description");
    console.log(form);
    const profile = await prisma.profile.findUnique({
      where:{
        user_id: user.userId,
      }
    })
    console.log(2, profile);
    const card = await prisma.profile.update({
      where: {
        user_id: user.userId,
      },
      data: {
        myneCard: {
          create: {
               category,
               subcategory, 
               brand, 
               size, 
               purchasedFrom, 
               purchasedValue, 
               description
          },
        },
      },
    
    });
    prisma.$disconnect();
  },
};
