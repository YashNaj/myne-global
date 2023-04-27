<script lang="ts">
  const duration = 300;
  const delay = duration + 100;
  const y = 10;

  const transitionIn = { easing: cubicOut, y, duration, delay };
  const transitionOut = { easing: cubicIn, y: -y, duration };
  import { register } from "swiper/element/bundle";
  register();
  import "./app.css";
  import type { LayoutData, LayoutServerData } from "./$types";
  import { onMount } from "svelte";
  import { browser } from "$app/environment";
  import { QueryClientProvider, QueryClient } from "@tanstack/svelte-query";
  import Navbar from "$lib/components/Navbar.svelte";
  import NavbarHome from "$lib/components/NavbarHome.svelte";
  import { cubicIn, cubicOut } from "svelte/easing";
  import { fly } from "svelte/transition";
  import Footer from "$lib/components/Footer.svelte";
  export let data: LayoutData;
  $: pathname = data.pathname;
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        enabled: browser,
      },
    },
  });
</script>

<svelte:head />
<div class="w-full h-full">
  <Navbar {data}>
    <NavbarHome />
  </Navbar>
  <main class="bg-[rgb(243,250,255)] pt-[3.8rem] h-full w-full">
    {#key pathname}
      <div in:fly={transitionIn} out:fly={transitionOut}>
        <slot />
      </div>
    {/key}
  </main>
  {#if !pathname.includes("/app")}
    <Footer />
  {/if}
</div>
