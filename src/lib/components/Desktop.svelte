<script lang="ts">
  import AddCard from "$lib/components/AddCard.svelte";
  import CardFlippable from "./CardFlippable.svelte";
  import { firstCapital } from "$lib/caps";
  import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@rgossiaux/svelte-headlessui";
  import PageContainer from "./PageContainer.svelte";
  import Import from "./Import.svelte";
  import type { PageData, PageServerLoad } from "../../routes/(app)/$types";
  import { fade } from "svelte/transition";
  import { Icon, Plus } from "svelte-hero-icons";
  import SwiperPictures from "./SwiperPictures.svelte";
  import HistoryReports from "./HistoryReports.svelte";
  import ItemCertificate from "./ItemCertificate.svelte";
  import RequestInventory from "./RequestInventory.svelte";
  import Swiper from "swiper";
  import { page } from "$app/stores";
  import { onMount, afterUpdate } from "svelte";
  import type { LayoutData, LayoutServerData } from "../../routes/$types";
  import Spinner from "./Spinner.svelte";
  export let loading: boolean
  const tabList = ["Card Vault", "Import", "History Reports", "Item Certificate", "Request Inventory"];

  let categories = [
    "jewelry",
    "watch",
    "art",
    "leather",
    "clothing",
    "sneakers",
    "firearms",
    "technology",
    "trading cards",
    "collectibles",
    "crypto",
    "nft",
    "dog",
    "cat",
    "bird",
    "other animal",
    "vintage",
    "automobile",
    "motorcycle",
    "other",
  ];

  export let data: PageServerLoad;
  export let myneCards = $page.data.myneCard
  export let addCardOpen = false;
  export let categoryFilter: string = "All";

  $: console.log("🚀 ~ file: Desktop.svelte:54 ~ filteredCards:", filteredCards);
  let isLoading;
  $: filteredCards = myneCards.map((card) => {
    card.category === categoryFilter
  })
  $: categories = categories.sort();
  let cardsFiltered;
  $:cardsFiltered = filteredCards
</script>

<PageContainer>
  <TabGroup class=" w-full h-fit overflow-x-hidden">
    <TabList class="w-full h-fit my-2 rounded-3xl flex justify-between px-2">
      {#each tabList as tab, i}
        <Tab
          class={({ selected }) =>
            selected
              ? "flex flex-col flex-wrap content-center justify-center rounded-lg flex-1 bg-primary text-secondary p-1  transform translate-x-2 duration-100 xl:text-lg lg:text-md font-semibold"
              : "flex flex-col flex-wrap flex-1  content-center justify-center rounded-lg p-1 translate-x-[-2] transform duration-100 ease-in-out origin-center  xl:text-lg lg:text-md font-semibold"}
          >{tab}</Tab
        >
      {/each}
    </TabList>
    <TabPanels class="w-full h-[80vh]  mt-2 swiper-wrapper">
     
      <div />
      <!-- <TabContainer>

            <Import data =  {$page.data} />

          </TabContainer>
          <TabContainer>

            <HistoryReports data =  {$page.data} />

          </TabContainer>
          <TabContainer>

            <ItemCertificate {myneCards} {filteredCards} bind:categoryFilter={categoryFilter} />

          </TabContainer>
          <TabContainer>

            <RequestInventory data =  {$page.data} />

          </TabContainer>
           -->
      <TabPanel class="w-full h-full flex flex-col px-2 rounded-2xl">
        <Import data={$page.data} />
      </TabPanel>
      <TabPanel class="w-full h-full flex flex-col px-2 rounded-2xl">
        <HistoryReports data={$page.data} />
      </TabPanel>

      <TabPanel class="w-full h-full flex flex-col px-2 rounded-2xl">
        <ItemCertificate {myneCards}/>
      </TabPanel>
      <TabPanel class="w-full h-full flex flex-col px-2 rounded-2xl">
        <RequestInventory data={$page.data} />
      </TabPanel>
    </TabPanels>
  </TabGroup>
</PageContainer>
