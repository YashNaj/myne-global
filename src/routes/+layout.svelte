<script lang="ts">
  // register Swiper custom elements
  import { register } from "swiper/element/bundle";
  register();
  import "./app.css";
  import type { LayoutServerData } from "./$types";

  import { onMount } from "svelte";
  import { browser } from "$app/environment";
  import { QueryClientProvider, QueryClient } from "@tanstack/svelte-query";

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        enabled: browser,
      },
    },
  });
  
</script>

<svelte:head>
</svelte:head>

<main class="bg-[rgb(243,250,255)]">
  <slot />
</main>
