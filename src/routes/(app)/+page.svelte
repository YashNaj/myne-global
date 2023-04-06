<script lang="ts">
  import logo from "$lib/images/white_icon.png";
  import Dashboard from "$lib/components/Dashboard.svelte";
  import DashboardFunctions from "$lib/components/DashboardFunctions.svelte";
  import { page } from "$app/stores";
  import { handleSession } from "@lucia-auth/sveltekit/client";
  import HomeTabs from "$lib/components/HomeTabs.svelte";
  import CardFlippable from "$lib/components/CardFlippable.svelte";
  import type { LayoutData, PageData } from "./$types";
  import { onMount } from "svelte";
  import Spinner from "$lib/components/Spinner.svelte";
  import Desktop from "$lib/components/Desktop.svelte";
  import { TabGroup, TabList, TabPanels, Tab, TabPanel } from "@rgossiaux/svelte-headlessui";
  import PageContainer from "$lib/components/PageContainer.svelte";
  import CardVault from "$lib/components/CardVault.svelte";
  import Import from "$lib/components/Import.svelte";
  import HistoryReports from "$lib/components/HistoryReports.svelte";
  import ItemCertificate from "$lib/components/ItemCertificate.svelte";
  import RequestInventory from "$lib/components/RequestInventory.svelte";
  import UserSelector from "$lib/components/UserSelector.svelte";
  import { fade } from "svelte/transition";
  import { certificate, stolen, transfer, documentUpload, userCards, selectedCard, currentUser } from "$lib/store";
  import ReportStolen from "$lib/components/ReportStolen.svelte";
  import CardButtonDocumentUpload from "$lib/components/CardButtonDocumentUpload.svelte";
  import MakeCertificate from "$lib/components/MakeCertificate.svelte";
  import BottomNav from "$lib/components/BottomNav.svelte";
  import { trpc } from "$lib/trpc/client";
  export let data: PageData = $page.data;
  let size = "9";
  let cards;
  let cardsLoading;
  let userId = $currentUser;
  $:userId = $currentUser
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
  $: console.log("trpc cards", cards)

</script>

<div class="lg:hidden md:hidden xl:hidden 2xl:hidden p-2 w-full h-screen flex flex-col">
  {#if $transfer}
    <div
      class="w-full h-full flex flex-wrap justify-center content-center absolute bg-black bg-opacity-25 z-[998] backdrop-blur-lg rounded-2xl"
      transition:fade|local
    >
      <UserSelector />
    </div>
  {/if}
  {#if $stolen}
    <div
      class="w-full h-full flex flex-wrap justify-center content-center absolute bg-black bg-opacity-25 z-[998] backdrop-blur-lg top-0 rounded-2xl"
      transition:fade|local
    >
      <ReportStolen />
    </div>
  {/if}
  {#if $documentUpload}
    <div
      class="w-full h-full flex flex-wrap justify-center content-center absolute bg-black bg-opacity-25 z-[998] backdrop-blur-lg rounded-2xl"
      transition:fade|local
    >
      <CardButtonDocumentUpload />
    </div>
  {/if}
  {#if $certificate}
    <div
      class="w-full h-full flex flex-wrap justify-center content-center absolute bg-black bg-opacity-25 z-[998] backdrop-blur-lg rounded-2xl"
      transition:fade|local
    >
      <MakeCertificate />
    </div>
  {/if}
  <CardVault mobile={true} />
  <BottomNav />
</div>
<div
  class="hidden md:flex w-full h-full py-3 px-2 flex-col overflow-y-hidden scrollbar-track-transparent bg-[rgb(243,250,255)] ;
  "
>
  <PageContainer>

          <div class="w-full h-full">
            {#if $transfer}
              <div
                class="w-full h-full flex flex-wrap justify-center content-center absolute bg-black bg-opacity-25 z-[998] backdrop-blur-lg rounded-2xl"
                transition:fade|local
              >
                <UserSelector />
              </div>
            {/if}
            {#if $stolen}
              <div
                class="w-full h-full flex flex-wrap justify-center content-center absolute bg-black bg-opacity-25 z-[998] backdrop-blur-lg top-0 rounded-2xl"
                transition:fade|local
              >
                <ReportStolen />
              </div>
            {/if}
            {#if $documentUpload}
              <div
                class="w-full h-full flex flex-wrap justify-center content-center absolute bg-black bg-opacity-25 z-[998] backdrop-blur-lg rounded-2xl"
                transition:fade|local
              >
                <CardButtonDocumentUpload />
              </div>
            {/if}
            {#if $certificate}
              <div
                class="w-full h-full flex flex-wrap justify-center content-center absolute bg-black bg-opacity-25 z-[998] backdrop-blur-lg rounded-2xl"
                transition:fade|local
              >
                <MakeCertificate />
              </div>
            {/if}

            <CardVault {data} />
          </div>
  </PageContainer>
</div>
