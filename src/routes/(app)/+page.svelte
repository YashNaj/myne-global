<script lang="ts">
	import { selectedCard } from './../../store.ts';
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
  import { certificate, stolen, transfer, document } from "../../store";
  import ReportStolen from "$lib/components/ReportStolen.svelte";
  import CardButtonDocumentUpload from "$lib/components/CardButtonDocumentUpload.svelte";
  import MakeCertificate from "$lib/components/MakeCertificate.svelte";
  export let data: PageData = $page.data;
  let size = "9";

  export let myneCards = $page.data.getMyneCards;
  export let addCardOpen = false;
  export let categoryFilter: string = "All";

  $: filteredCards = myneCards.map((card) => {
    card.category === categoryFilter;
  });
  let cardsFiltered;
  $: cardsFiltered = filteredCards;
  handleSession(page);
  let loading;
  $: loading = data.loading;
  const tabList = ["Card Vault", "Import", "History Reports", "Request Inventory"];
  export let isLoading = true;
  onMount(async () => {
    // Load data here
    isLoading = false;
  });
  $: console.log('selectedCard',$selectedCard)
</script>

<div class="lg:hidden md:hidden xl:hidden 2xl:hidden p-2 w-full h-full flex flex-col ">
  <Dashboard {isLoading} />
  <div class="quick-cards w-full flex flex-col justify-center content-center bg-secondary rounded-2xl h-[300px] mt-2">
    <h1 class="pt-5 pl-6 text-3xl w-full flex justify start font-semibold ">Quick Cards</h1>
    <div
      class="container h-[90%] flex justify-center content-center flex-wrap  [box-shadow:rgba(0, 0, 0, 0.06)_0px_2px_4px_0px_inset] "
    >
      <div class=" w-[90%] h-[90%]">
        <swiper-container
          class="mySwiper touch-none aspect-[5/7] bg-none rounded-[10%] w-full h-full"
          pagination="true"
          grab-cursor="true"
          centered-slides="true"
          coverflow-effect-modifier="1"
          coverflow-effect-slide-shadows="true"
        >
          <swiper-slide
            class="w-full h-full items-center justify-center text-xl rounded-[18px]  font-bold aspect-[5/7] 
          "
          >
            <CardFlippable />
          </swiper-slide>
          <swiper-slide
            class="w-full h-full items-center justify-center text-xl rounded-[18px]  font-bold aspect-[5/7] 
          "
          >
            <CardFlippable />
          </swiper-slide>
          <swiper-slide
            class="w-full h-full items-center justify-center text-xl rounded-[18px]  font-bold aspect-[5/7] 
          "
          >
            <CardFlippable />
          </swiper-slide>
          <swiper-slide
            class="w-full h-full items-center justify-center text-xl rounded-[18px]  font-bold aspect-[5/7] 
          "
          >
            <CardFlippable />
          </swiper-slide>
          <swiper-slide
            class="w-full h-full items-center justify-center text-xl rounded-[18px]  font-bold aspect-[5/7] 
          "
          >
            <CardFlippable />
          </swiper-slide>
          <swiper-slide
            class="w-full h-full items-center justify-center text-xl rounded-[18px]  font-bold aspect-[5/7] 
          "
          >
            <CardFlippable />
          </swiper-slide>
        </swiper-container>
      </div>
    </div>
  </div>
  <DashboardFunctions />
</div>
<div
  class="hidden md:flex w-full h-full py-3 px-5 flex-col overflow-y-hidden scrollbar-track-transparent bg-[rgb(243,250,255)] ;
  "
>
  <PageContainer>
    <TabGroup class=" w-full h-full overflow-x-hidden flex flex-col">
      <TabList class="w-full h-fit my-2 rounded-3xl flex justify-between px-2">
        {#each tabList as tab, i}
          <Tab
            class={({ selected }) =>
              selected
                ? "flex flex-col flex-wrap content-center justify-center rounded-lg flex-1 bg-primary text-secondary p-1  transform translate-x-2 duration-100 xl:text-lg lg:text-md font-semibold"
                : "flex flex-col flex-wrap flex-1  content-center justify-center rounded-lg p-1 translate-x-[-2] transform duration-100 ease-in-out origin-center  xl:text-lg lg:text-md font-semibold"}
          >
            {tab}
          </Tab>
        {/each}
      </TabList>
      <TabPanels class="w-full h-full flex flex-col  mt-1">
        <TabPanel class="w-full h-full relative">
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
            {#if $document}
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
        </TabPanel>
        <TabPanel class="w-full h-full">
          {#await import("$lib/components/Import.svelte")}
            <div class="w-full h-full bg-primary p-1 flex justify-center content-center flex-wrap">
              <div class="spinner container flex justify-center ">
                <div class="flex flex-col justify-center content-center flex-wrap w-{size} h-{size} rounded-full">
                  <img alt="myne-logo" src={logo} class="w-full h-full max-w-full animate-spin" />
                </div>
              </div>
            </div>
          {:then Module}
            <Module.default {data} />
          {/await}
        </TabPanel>
        <TabPanel class="w-full h-full">
          <HistoryReports {data} />
        </TabPanel>
        <TabPanel class="w-full h-full">
          <RequestInventory {data} />
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </PageContainer>
</div>
