<script lang="ts">
  import "../app.css";
  import { page } from "$app/stores";
  import { handleSession } from "@lucia-auth/sveltekit/client";
  import logo from "$lib/images/white_myne_logo.png";
  import LogOut from "$lib/components/LogOut.svelte";
  import type { LayoutServerData, PageServerLoad } from "./$types";
  import type { PageData } from "./$types";
  import PageContainer from "$lib/components/PageContainer.svelte";
  import Spinner from "$lib/components/Spinner.svelte";

  import { currentUser } from "$lib/store";
  import Navbar from "$lib/components/Navbar.svelte";
  export let addCardOpen = false;
  export let data: PageData = $page.data;
  const profile = data.profile;
  const userId = profile?.user_id;
  $: if (currentUser) {
    currentUser.set(userId);
  }
  export let loading = data.loading;
  $: console.log(loading);
  let menuItems = [
    "Import",
    "Request History Reports",
    "Request Item Certificate",
    "Download Inventory",
    "Insurance Claim",
    "Add A Card",
    "Delete A Card",
  ];
</script>

<svelte:head>
  <link rel="stylesheet" href="https://use.typekit.net/kaa7gct.css" />
</svelte:head>

<div class="hidden w-full h-[100dvh] md:flex flex-col justify-start content-center flex-wrap">
  <Navbar />
  <slot />
</div>
<div class=" md:hidden w-full h-[100dvh]">
  <Navbar />
  <slot />
</div>

<style lang="postcss">
  :global(html) {
    overflow: scroll;
    height: 100dvh;
  }
  :global(body) {
    overflow: auto;
    height: 100dvh;
    font-family: futura-pt;
    background: linear-gradient(30deg, rgba(0, 45, 114, 1) 10%, rgba(255, 255, 255, 1) 10%);
  }
  :global(main) {
    background-color: #f5f9ff;
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
