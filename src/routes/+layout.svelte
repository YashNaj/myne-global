<script lang="ts">
  import { register } from "swiper/element/bundle";
  register();
  import "./app.css";
  import type { LayoutData, LayoutServerData } from "./$types";
  import { QueryClientProvider } from "@tanstack/svelte-query";
  import Navbar from "$lib/components/Navbar.svelte";
  import NavbarHome from "$lib/components/NavbarHome.svelte";
  import { cubicIn, cubicOut } from "svelte/easing";
  import Footer from "$lib/components/Footer.svelte";
  export let data: LayoutData;
  $: pathname = data.pathname;
</script>

<svelte:head />

<QueryClientProvider client={data.queryClient}>
  <div class="w-full h-full">
    <Navbar>
      <NavbarHome />
    </Navbar>
    <main class="bg-[rgb(243,250,255)] pt-[3.8rem] h-full w-full">
      <slot />
    </main>
    {#if !pathname.includes("app")}
      <Footer />
    {/if}
  </div>
</QueryClientProvider>

<style lang="postcss">
  :global(html) {
    font-family: futura-pt;
  }
  ::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
  /* Optional: show position indicator in red */
  ::-webkit-scrollbar-thumb {
    background: #0062ff;
  }
</style>
