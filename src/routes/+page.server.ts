import type { PageServerLoad } from "./$types";
import { redirect } from "@sveltejs/kit";

export const load = (async ({locals}) => {
  return {};
}) satisfies PageServerLoad;
