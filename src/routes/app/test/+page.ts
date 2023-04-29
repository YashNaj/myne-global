import { trpc } from "$lib/trpc/client";
import type { PageLoad } from "./$types";
import {TRPCError } from "@trpc/server";
export const load = (async (event) => {
  const { queryClient } = await event.parent();
  const client = trpc(event, queryClient);
  return {
    foo: client.greeting.load.createServerQuery({}),
  };
}) satisfies PageLoad

