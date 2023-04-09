<script lang="ts">
  import { page } from "$app/stores";
  import { handleSession } from "@lucia-auth/sveltekit/client";
  import type { PageData } from "./$types";
  import { onMount } from "svelte";
  import PageContainer from "$lib/components/PageContainer.svelte";
  import CardVault from "$lib/components/CardVault.svelte";
  import UserSelector from "$lib/components/UserSelector.svelte";
  import { fade } from "svelte/transition";
  import { certificate, stolen, transfer, documentUpload, userCards, selectedCard, currentUser } from "$lib/store";
  import ReportStolen from "$lib/components/ReportStolen.svelte";
  import CardButtonDocumentUpload from "$lib/components/CardButtonDocumentUpload.svelte";
  import MakeCertificate from "$lib/components/MakeCertificate.svelte";
  import BottomNav from "$lib/components/BottomNav.svelte";
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

<div class="lg:hidden md:hidden xl:hidden 2xl:hidden p-2 w-full h-[100dvh] flex flex-col">
  <CardFunctionModals />
  <CardVaultMenu bind:categoryFilter bind:inputText />
  <CardVault {categoryFilter} {inputText} mobile={true} />
</div>
<divp
  class="hidden md:flex w-full h-[100dvh] py-3 px-2 flex-col scrollbar-track-transparent bg-[rgb(243,250,255)] ;
  "
>
  <PageContainer>
    <div class="w-full h-full">
      <CardFunctionModals />
      <CardVaultMenu bind:categoryFilter bind:inputText />
      <CardVault {categoryFilter} {inputText} mobile={false}/>
    </div>
  </PageContainer>
</divp>
