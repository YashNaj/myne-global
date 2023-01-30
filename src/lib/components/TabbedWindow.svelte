<script lang="ts">
  import {
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
  } from "@rgossiaux/svelte-headlessui";
  import { fade } from "svelte/transition";
  import RadioGroup from "./RadioGroup.svelte";

  let open = false;
  let tabs = ["Cards", "Stolen Search", "Reports", "Enterprise"];
  let content = ["1", "2", "3", "4"];
</script>

<div class="flex flex-col justify-center container h-[400px] ">
  <!-- <button class = 'btn btn-primary absolute top-o' on:click={()=> open = !open}>
        {open ? "close" : "open"}
</button> -->
  <div
    class="flex h-full"
    in:fade={{ duration: 150 }}
    out:fade={{ duration: 200 }}
  >
    <TabGroup defaultIndex = {0} class={"flex flex-col w-full h-full  h-full rounded-lg"}>
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
      <TabPanels class="flex bg-neutral h-full rounded-lg p-2">
        <div in:fade={{ duration: 100, delay: 100 }} out:fade={{ delay: 100 }} class = 'w-full h-full'>
          {#each content as content}
          <div in:fade={{ duration: 100, delay: 100 }} out:fade={{ delay: 100 }}>
            <TabPanel>
                <RadioGroup/>
            </TabPanel>
          </div>
          {/each}
          </div>
      </TabPanels>
    </TabGroup>
  </div>
</div>

<style lang="postcss">
  * > :global(.selected) {
    background-color: rgb(191 219 254);
  }
</style>
