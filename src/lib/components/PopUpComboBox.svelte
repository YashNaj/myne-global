<script lang="ts">
  import { firstCapital } from "$lib/caps";
  import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
    Popover,
    PopoverButton,
    PopoverPanel,
  } from "@rgossiaux/svelte-headlessui";
  import { slide } from "svelte/transition";
  import { myneMasterBrandsAndBreeds } from "../../index";
  let value = "";
  export let label = "";
  export let name = "";
  export let heading = "";
  export let valueId: string | number | undefined | null = undefined;
  export let valueDisplay: string | number | undefined | null = undefined;
  export let options: [string] | number | undefined | null = "";
  export let popOpen = false;
  const popUpname = `${name}-popup`;
</script>

<div>
  <input bind:value class="w-full input-md text-black" />

  <Popover class="relative" id={popUpname}>
    <PopoverButton>open</PopoverButton>
    <div transition:slide={{ duration: 100 }} class="p-3">
      <PopoverPanel
        class={"flex flex-col h-64  overflow-y-auto w-full card text-black bg-white"}
      >
        <div transition:slide={{ duration: 100 }}>
          {#each options as option}
            <div class="p-3">
              <PopoverButton on:click={() => {}}>
                <options>
                  {firstCapital(option)}
                </options>
              </PopoverButton>
            </div>
          {/each}
        </div></PopoverPanel
      >
    </div>
  </Popover>
</div>

{value}
