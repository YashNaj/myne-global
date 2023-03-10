<script lang="ts">
  import AddCard from "$lib/components/AddCard.svelte";
  import CardFlippable from "./CardFlippable.svelte";
  import { firstCapital } from "$lib/caps";
  import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@rgossiaux/svelte-headlessui";
  import PageContainer from "./PageContainer.svelte";
  import UploadWidget from "./UploadWidget.svelte";
  import Import from "./Import.svelte";
  import type { PageData } from "../../routes/(app)/$types";
  import { fade, scale, slide } from "svelte/transition";
  import { backOut } from "svelte/easing";
  import { Icon, Plus, Search } from "svelte-hero-icons";
  import Transition from "./Transition.svelte";
  import SwiperPictures from "./SwiperPictures.svelte";
  import HistoryReports from "./HistoryReports.svelte";
  import ItemCertificate from "./ItemCertificate.svelte";
  import RequestInventory from "./RequestInventory.svelte";
  import Swiper from "swiper";
  import {page} from "$app/stores"
  import { onMount, afterUpdate } from "svelte";
  import type { LayoutData, LayoutServerData } from "../../routes/$types";
  import type { MyneCard } from "@prisma/client";
  import TabContainer from "./TabContainer.svelte";
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

  export let data: LayoutServerData;
  export let myneCards;
  export let addCardOpen = false;
  export let categoryFilter: string = ''
  let filteredCards;
  let isLoading;
  let filterCards = (categoryFilter) => {
    filteredCards = []
    filteredCards = myneCards?.filter((card) => {
      return card.category === categoryFilter?.toLowerCase();
    });
    isLoading = false;
    return filteredCards;
  };

  $: if (categoryFilter === "" || categoryFilter?.toLowerCase() === "all") {filteredCards = myneCards}else{filteredCards = filterCards(categoryFilter)}
  $: categories = categories.sort();
  

</script>

<PageContainer>
  
<TabGroup  class=" w-full h-fit overflow-x-hidden">
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
         
            <TabPanel
            class="identify-1 w-full h-[80vh] flex flex-col px-2 rounded-2xl bg-gradient-to-b from-slate-300 to-slate-100"
          >
          <div class = 'w-ful h-[80vh]' transition:fade|local={{duration:300}}>
            <div class="navbar bg-none w-full"  >
              <div class="navbar-start">
                <div class="dropdown">
                  <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
                  <!-- svelte-ignore a11y-label-has-associated-control -->
                  <label tabindex="0" class="btn btn-ghost btn-circle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      ><path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h7"
                      /></svg
                    >
                  </label>
                  <ul
                    tabindex="0"
                    class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li><a>Add Cards</a></li>
                    <li><a>Delete Cards</a></li>
                    <li><a>About</a></li>
                  </ul>
                </div>
                <select
                  bind:value={categoryFilter}
                  class="select w-full max-w-xs bg-transparent text-center px-2 flex justify-start text-xl"
                >
                  <option class="bg-transparent" selected>All</option>
                  {#each categories as category}
                    <option class="bg-transparent" value={category}>
                      {firstCapital(category)}
                    </option>
                  {/each}
                </select>
              </div>
              <div class="navbar-center">
                <div class="form-control">
                  <div class="input-group">
                    <input type="text" placeholder="Search…" class="input input-md shadow-sm bg-slate-100 border-none" />
                    <button class="btn btn-ghost bg-slate-100 p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        ><path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        /></svg
                      >
                    </button>
                  </div>
                </div>
              </div>
              <div class="navbar-end">
                <button
                  on:click={() => {
                    addCardOpen = !addCardOpen;
                  }}
                  class="btn btn-success flex normal-case text-white mr-5"
                >
                  <Icon src={Plus} color="white" size="12px" class="mr-1" />
                  Add a Card
                </button>
                <button class="btn btn-ghost btn-circle">
                  <div class="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      ><path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      /></svg
                    >
                    <span class="badge badge-xs badge-primary indicator-item" />
                  </div>
                </button>
              </div>
            </div>
            {#if addCardOpen}
              <div
              class=" flex flex-row w-full h-[89%] justify-center items-center flex-wrap"
              >
                <AddCard />
              </div>
            {:else}
              <div
              class:translate-y-full={addCardOpen}
              class:ease-linear={addCardOpen}
                class="h-[89%]  bg-black bg-opacity-25  rounded-xl grid grid-rows-auto grid-cols-4 gap-4 justify-center overflow-y-auto p-1 w-full overflow-x-hidden shadow-lg transition-shadow duration-75"
              >
                {#if filteredCards?.length > 0}
                  {#each filteredCards as myneCard, i}
                    <div class="w-fit h-fit">
                      <CardFlippable cardDisplayId="flippable-card-{i}" {...myneCard}>
                        <SwiperPictures pictures={myneCard.pictures} />
                      </CardFlippable>
                    </div>
                  {/each}
                {:else}
                  <div class="w-fit h-fit">
                    <CardFlippable>
                      <div class="p-3 w-full h-full">
                        <div
                          class="text-3xl flex flex-col justify-center content-cener flex-wrap h-full w-full text-primary bg-black bg-opacity-10 rounded-2xl "
                        >
                          <p class="text-4xl text-primary font-semibold">No cards found</p>
                        </div>
                      </div>
                    </CardFlippable>
                  </div>
                {/if}
              </div>
            {/if}
          </div>
           
          </TabPanel>
          <div/>
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
 
                  <Import data =  {$page.data} />
           
            </TabPanel>            <TabPanel class="w-full h-full flex flex-col px-2 rounded-2xl">
                  <HistoryReports data =  {$page.data} />
        
            </TabPanel>

            <TabPanel class="w-full h-full flex flex-col px-2 rounded-2xl">
          
                  <ItemCertificate {myneCards} {filteredCards} bind:categoryFilter={categoryFilter} />
              
            </TabPanel>
            <TabPanel class="w-full h-full flex flex-col px-2 rounded-2xl">

                  <RequestInventory data =  {$page.data} />
             
            </TabPanel>
        </TabPanels
      >
  </TabGroup>
</PageContainer>
