import { auth } from "$lib/auth/lucia";
import {  fail, redirect } from "@sveltejs/kit";
import type {  PageServerLoad, Actions } from "./$types";
import { LuciaError } from "lucia-auth";
import { prisma } from "$lib/prisma";

export const actions: Actions = {
      default: async ({ request, locals}) => {
      const form = await request.formData();
        const { user } = locals.validat
        const category = form.get("category");
        const subCategory = form.get('subCategory');
        const brand = form.get('brand');
        const size = form.get("size");
        const purchasedFrom = form.get("purchasedFrom");
        const purchasedValue = form.get("purchasedValue");
        const description  = form.get("description");
        
          const card = await prisma.user.upsert(
         {   where : {
              id : user.id, 

            },
            create: {
              MyneCard :{
                category,
                subCategory,
                brand,
                size,
                purchasedFrom,
                purchasedValue,
                description
              }
            }}
          )
    }};