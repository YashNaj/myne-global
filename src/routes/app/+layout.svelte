<script lang="ts">
  import "../app.css";
  import { fade, fly } from "svelte/transition";
  import { currentUser, selectedCard } from "$lib/utils/store";
  import Navbar from "$lib/components/Navbar.svelte";
  import { cubicIn, cubicOut } from "svelte/easing";
  import { onMount } from "svelte";
  import NavbarProfile from "$lib/components/NavbarProfile.svelte";
  import { browser } from "$app/environment";
  import { QueryClientProvider } from "@tanstack/svelte-query";
  import type { LayoutData } from "./$types";

  export let addCardOpen = false;
  export let data: LayoutData;
  let pathname = data.pathname;
  let user = data.user();
  let profile = data.profile();
  let role = $user.data.role; 
  console.log('data check', role , $profile.data)
  let menuItems = [
    "Import",
    "Request History Reports",
    "Request Item Certificate",
    "Download Inventory",
    "Insurance Claim",
    "Add A Card",
    "Delete A Card",
  ];
  const duration = 300;
  const delay = duration + 100;
  const y = 10; 

  const transitionIn = { easing: cubicOut, y, duration, delay };
  const transitionOut = { easing: cubicIn, y: -y, duration };
  export let card = $selectedCard;
  $: card = card;
  onMount(() => {
    /mobile/i.test(navigator.userAgent) &&
      !location.hash &&
      setTimeout(function () {
        window.scrollTo(0, 1);
      }, 1000);
  });
</script>

<svelte:head>
  <link rel="stylesheet" href="https://use.typekit.net/kaa7gct.css" />
</svelte:head>
<div class="hidden w-full h-full md:flex flex-col justify-start content-center bg-primary">
  <Navbar role = {$user.data.role}>
    <NavbarProfile />
  </Navbar>
  {#key pathname}
    <main class="bg-primary h-full min-h-screen">
      <div in:fly={transitionIn} out:fly={transitionOut}>
        <slot />
      </div>
    </main>
  {/key}
</div>
<div class=" md:hidden w-full min-h-screen h-full bg-primary">
  <Navbar>
    <NavbarProfile />
  </Navbar>
  {#key pathname}
    <main class="bg-primary h-full">
      <div in:fly={transitionIn} out:fly={transitionOut}>
        <slot />
      </div>
    </main>
  {/key}
</div>

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
