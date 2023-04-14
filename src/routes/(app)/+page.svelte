<script lang="ts">
  import { page } from "$app/stores";
  import { handleSession } from "@lucia-auth/sveltekit/client";
  import type { PageData } from "./$types";
  import { onMount } from "svelte";
  import CardVault from "$lib/components/CardVault.svelte";
  import {  userCards, selectedCard, currentUser } from "$lib/store";
  import { trpc } from "$lib/trpc/client";
  import CardFunctionModals from "$lib/components/CardFunctionModals.svelte";
  import CardVaultMenu from "$lib/components/CardVaultMenu.svelte";
  export let data: PageData = $page.data;
  let size = "9";
  let cards;
  let cardsLoading;
  let userId = $currentUser;
  $: userId = $currentUser;
  handleSession(page);
  async function getMyneCardstRPC() {
    cardsLoading = true;
    cards = await trpc($page).cards.load.query(userId);
    cardsLoading = false;
  }

  export let myneCards = $page.data.getMyneCards;
  console.log("🚀 ~ file: +page.svelte:31 ~ cards:", cards);

  userCards.set([...myneCards]);
  export let addCardOpen = false;
  export let categoryFilter: string = "All";

  $: filteredCards = myneCards.map((card) => {
    card.category === categoryFilter;
  });
  let cardsFiltered;

  $: cardsFiltered = filteredCards;
  let loading;
  $: loading = data.loading;
  const tabList = ["Card Vault", "Import", "History Reports", "Request Inventory"];
  export let isLoading = true;
  onMount(async () => {
    cards = getMyneCardstRPC();
  });
  $: console.log("selectedCard", $selectedCard);
  $: console.log("trpc cards", cards);
  let inputText;
</script>

<div class="md:hidden p-2 w-full h-[100dvh] flex flex-col">
  <div class="w-full h-full pt-20">
  <CardFunctionModals />
  <CardVaultMenu bind:categoryFilter bind:inputText />
  <CardVault {categoryFilter} {inputText} mobile={true} />
</div>

</div>


<div class="hidden md:flex w-full h-[100dvh] flex-col  scrollbar-track-transparent bg-[rgb(243,250,255)]">
  <div class="w-full h-full pt-20">
    <CardFunctionModals />
    <CardVaultMenu bind:categoryFilter bind:inputText />
    <CardVault {categoryFilter} {inputText} mobile={false} />
  </div>
</div>
