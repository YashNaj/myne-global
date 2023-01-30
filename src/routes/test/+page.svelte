<script lang="ts">
  import { enhance } from "$app/forms";
    import AddCard from "$lib/components/AddCard.svelte";
  import CardFlippable from "$lib/components/CardFlippable.svelte";
  import CardVault from "$lib/components/CardVault.svelte";
    import CreditCard from "$lib/components/CreditCard.svelte";
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
  import { fade } from "svelte/transition";
  let open = false;
  let tabs = ["Card Vault", "Import", "Request History Report", "Request Item Certificate", "Download Inventorys"];
  let content = ["1", "2", "3", "4"];
</script>

<div class="flex flex-col justify-center ">
  <!-- <button class = 'btn btn-primary absolute top-o' on:click={()=> open = !open}>
        {open ? "close" : "open"}
</button> -->
  <div
    class="flex h-full flex flex-col"
    in:fade={{ duration: 150 }}
    out:fade={{ duration: 200 }}
  >
    <TabGroup defaultIndex = {0} class="flex flex-col w-full h-full rounded-lg">
      <TabList
        class={"flex font-bold justify-center bg-accent rounded-lg mb-2 p-1 text-primary"}
      >
      <div class = 'flex justify-center content-center w-full shadow-sm'>
        {#each tabs as tab }
        <Tab class={({selected}) => 
        selected ? 
        'flex flex-col flex-wrap content-center justify-center rounded-lg flex-1 bg-primary text-secondary p-1' 
        : 'flex flex-col flex-wrap flex-1  content-center justify-center rounded-lg p-1'}>
        {tab}
         </Tab>
      {/each}
      </div>
      </TabList>
      <TabPanels class="flex  h-[80vh] rounded-lg p-2">
        <div in:fade={{ duration: 100, delay: 100 }} out:fade={{ delay: 100 }} class = 'w-full h-full'>
          {#each content as content}
            <TabPanel class = 'flex h-[100%]' >
              <CardVault/>
            </TabPanel>
          {/each}
      </TabPanels>
    </TabGroup>
  </div>
</div>

<style lang="postcss">
  * > :global(.selected) {
    background-color: rgb(191 219 254);
  }
</style>

<!-- <AddCard/> -->
