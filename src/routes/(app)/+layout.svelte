<script lang="ts">
  import "../app.css";
  import { page } from "$app/stores";
  import logo from "$lib/images/white_myne_logo.png";
  import LogOut from "$lib/components/LogOut.svelte";
  import type { LayoutServerData, PageData,  } from "./$types";
  import type { LayoutData } from "./$types";
  import PageContainer from "$lib/components/PageContainer.svelte";
  import Spinner from "$lib/components/Spinner.svelte";
  import { fade, fly } from "svelte/transition";
  import { currentUser, selectedCard } from "$lib/utils/store";
  import Navbar from "$lib/components/Navbar.svelte";
  import { cubicIn, cubicOut } from "svelte/easing";
  import { onMount } from "svelte";
  export let addCardOpen = false;
  export let data: LayoutData;
  $: pathname = data.pathname;
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

<div class="hidden w-full h-full md:flex flex-col justify-start content-center bg-[rgb(243,250,255)]">
  <Navbar />
    {#key pathname}
    <main class = "bg-[rgb(243,250,255)] h-full">
      <div class="flex-grow">
        <div in:fly={transitionIn} out:fly={transitionOut}>
          <slot />
        </div>
      </div>
    </main>
    {/key}
</div>
<div class=" md:hidden w-full h-full bg-[rgb(243,250,255)]">
  <Navbar />
    {#key pathname}
    <main class = "bg-[rgb(243,250,255)] h-full">
      <div class="flex-grow">
        <div in:fly={transitionIn} out:fly={transitionOut}>
          <slot />
        </div>
      </div>
    </main>
    {/key}
</div>

<style lang="postcss">
  :global(body) {
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
