import { browser } from "$app/environment";
import { QueryClient } from "@tanstack/svelte-query";
import type { LayoutLoad } from "./$types";
import { trpc } from '$lib/trpc/client';

export const load: LayoutLoad = async (event, url) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        enabled: browser,
      },
    },
  });
  const client = trpc(event, queryClient);

  return {
    queryClient,
    profile: client.profile.load.createServerQuery({}),
    cards: client.cards.load.createServerQuery({}),
    user: client.profile.user.createServerQuery({}),
  };
};
