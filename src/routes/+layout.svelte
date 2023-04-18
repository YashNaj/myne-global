<script lang="ts">
  // register Swiper custom elements
  import { register } from "swiper/element/bundle";
  register();
  import "./app.css";
  import type { LayoutData, LayoutServerData } from "./$types";

  import { onMount } from "svelte";
  import { browser } from "$app/environment";
  import { QueryClientProvider, QueryClient } from "@tanstack/svelte-query";
  import Navbar from "$lib/components/Navbar.svelte";
  import NavbarHome from "$lib/components/NavbarHome.svelte";
  export let data: LayoutData;
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
<div>
  <Navbar {data}>
    <NavbarHome />
  </Navbar>
  <main class="bg-[rgb(243,250,255)] pt-[4rem] h-full">
    <slot />
  </main>
</div>
