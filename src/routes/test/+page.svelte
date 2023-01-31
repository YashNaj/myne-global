<script lang="ts">
  import { enhance } from "$app/forms";
  import AddCard from "$lib/components/AddCard.svelte";
  import CardFlippable from "$lib/components/CardFlippable.svelte";
  import CardVault from "$lib/components/CardVault.svelte";
  import CreditCard from "$lib/components/CreditCard.svelte";
  import DesktopWidget from "$lib/components/DesktopWidget.svelte";
  import DialogueBox from "$lib/components/DialogueBox.svelte";
  import Helcim from "$lib/components/Helcim.svelte";
  import PageContainer from "$lib/components/PageContainer.svelte";
  import {
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
  } from "@rgossiaux/svelte-headlessui";
  import { quintOut } from "svelte/easing";
  import { fade, fly } from "svelte/transition";
  let open = false;
  let tabs = [
    "Card Vault",
    "Import",
    "Request History Report",
    "Request Item Certificate",
    "Download Inventory",
    "Search",
  ];
  let contents = [
    "Card Vault",
    "Import",
    "Request History ",
    "Requst Item Certificate",
    "Download Inventory",
  ];


</script>

<div class="flex flex-col justify-center ">
  <!-- <button class = 'btn btn-primary absolute top-o' on:click={()=> open = !open}>
        {open ? "close" : "open"}
</button> -->
  <div class="flex h-full flex flex-col">
    <TabGroup defaultIndex={0} class="flex flex-col w-full h-full rounded-lg">
      <TabList
        class={"flex font-bold justify-center bg-accent rounded-lg mb-2 p-1 text-primary"}
      >
        <div class="flex justify-center content-center w-full shadow-sm">
          {#each tabs as tab}
            <Tab
              class={({ selected }) =>
                selected
                  ? "flex flex-col flex-wrap content-center justify-center rounded-lg flex-1 bg-primary text-secondary p-1"
                  : "flex flex-col flex-wrap flex-1  content-center justify-center rounded-lg p-1"}
            >
              {tab}
            </Tab>
          {/each}
        </div>
      </TabList>

      <TabPanels class="w-full xl:[50rem] lg:h-[40rem] rounded-lg p-2">
        {#each contents as content}
            <TabPanel class="h-full w-full">
              {#if content != "Card Vault"}
                <DesktopWidget title={content} />
              {:else}

                <CardVault />
                {/if}
            </TabPanel>
        {/each}
      </TabPanels>
    </TabGroup>
  </div>
</div>

<!-- <AddCard/> -->

<style lang="postcss">
  * > :global(.selected) {
    background-color: rgb(191 219 254);
  }
</style>
