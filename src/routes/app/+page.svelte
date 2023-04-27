<script lang="ts">
  import { page } from "$app/stores";
  import type { PageData } from "./$types";
  import { onMount } from "svelte";
  import CardVault from "$lib/components/CardVault.svelte";
  import { userCards, selectedCard, currentUser, addCard } from "$lib/utils/store";
  import { trpc } from "$lib/trpc/client";
  import CardFunctionModals from "$lib/components/CardFunctionModals.svelte";
  import CardVaultMenu from "$lib/components/CardVaultMenu.svelte";
  import { fly } from "svelte/transition";
  import AddCard from "$lib/components/AddCard.svelte";
  import { cubicIn, cubicOut } from "svelte/easing";
  export let data: PageData;
  let size = "9";
  let cards;
  let cardsLoading;
  let userId = '';
  $: userId = $currentUser;
  async function getMyneCardstRPC() {
    cardsLoading = true;
    if(userId){
      cards = await trpc($page).cards.load.query(userId)
    }
    cardsLoading = false;
  }
  onMount(async () => {
    cards = getMyneCardstRPC();
  });
  export let myneCards = getMyneCardstRPC()
  console.log(myneCards)
  
  
  console.log("🚀 ~ file: +page.svelte:31 ~ cards:", cards);
  // userCards.set([...myneCards]);
  export let categoryFilter: string = "All";

  $: filteredCards = myneCards.map((card) => {
    card.category === categoryFilter;
  });
  let cardsFiltered;
  $: cardsFiltered = filteredCards;
  let loading;
  $: loading = data.loading;
  
  $: console.log("selectedCard", $selectedCard);
  $: console.log("trpc cards", cards);
  let inputText;

  const duration = 300;
  const y = 1000;
  const delay = duration + 100;
  const easeIn = cubicOut;
  const easeOut = cubicIn;
  const transitionIn = { duration, y: -y, easing: easeIn, opacity: 1 };
  const transitionOut = { duration, y: -y, easing: easeOut, opacity: 0 };
</script>

<div class="md:hidden bg-[rgb(243,250,255)] p-2 w-full h-full flex flex-col">
  <div class="w-full pt-20 h-full">
    {#if $addCard}
      <div
        class="w-full h-full flex flex-wrap justify-center content-center relative bg-black bg-opacity-25 z-[998] backdrop-blur-lg top-0 left-0"
        in:fly={transitionIn}
        out:fly={transitionOut}
      >
        <AddCard />
      </div>
    {/if}
    <CardFunctionModals />
    <div class=" top-0 left-0 z-[99] fixed pt-[4rem] w-screen">
      <CardVaultMenu bind:categoryFilter bind:inputText />
    </div>
    <CardVault {categoryFilter} {inputText} mobile={true} />
  </div>
</div>

<div class="hidden md:flex w-full h-full flex-col scrollbar-track-transparent bg-[rgb(243,250,255)]">
  <div class="w-full h-full pt-20">
    {#if $addCard}
      <div
        class="w-full h-full flex flex-wrap justify-center content-center relative bg-black bg-opacity-25 z-[998] backdrop-blur-lg top-0 left-0"
        in:fly={transitionIn}
        out:fly={transitionOut}
      >
        <AddCard />
      </div>
    {/if}
    <CardFunctionModals />
    <div class=" top-0 pt-[4rem] z-[99] fixed">
      <CardVaultMenu bind:categoryFilter bind:inputText />
    </div>
    <CardVault {categoryFilter} {inputText} mobile={false} />
  </div>
</div>
