import { browser } from "$app/environment";
import { QueryClient } from "@tanstack/svelte-query";
import type { LayoutLoad } from "./$types";
import { trpc } from '$lib/trpc/client';

export const load: LayoutLoad = async (event ) => {
  const { queryClient } = await event.parent();
  const client = trpc(event, queryClient);
  const { pathname } = event.url 
  console.log(pathname)
  return {
    profile: client.profile.load.createServerQuery({}),
    cards: client.cards.load.createServerQuery({}),
    user: client.profile.user.createServerQuery({}),
    pathname
  };
};
