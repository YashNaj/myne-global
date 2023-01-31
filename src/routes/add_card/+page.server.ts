import { auth } from "$lib/auth/lucia";
import {  fail, redirect } from "@sveltejs/kit";
import type {  PageServerLoad, Actions } from "./$types";
import { LuciaError } from "lucia-auth";

export const actions: Actions = {
  default: async ({ request, locals }) => {
    const form = await request.formData();
    console.log(form);
    const category = form.get("category")?.toString() || "";
    const subCategory = form.get("subCategory")?.toString() || "";
    const brand = form.get("brand")?.toString() || "";
    const size = form.get("size")?.toString() || "";
    const purchasedFrom = form.get("purchasedFrom")?.toString() || "";
    const purchasedValue = form.get("purchasedValue")?.toString() || "";
    const description = form.get("description")?.toString() || "";
    console.log(form);
}};