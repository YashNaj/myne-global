import { browser } from "$app/environment";
import { QueryClient } from "@tanstack/svelte-query";
import type { LayoutLoad } from "./$types";
import { trpc } from '$lib/trpc/client';

export const load: LayoutLoad = async (event) => {
  const {pathname}  = event.url; 
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { 
        enabled: browser,
      },
    },
  });
  const client = trpc(event, queryClient);

  return {
    pathname,
    queryClient,
  };
};
