<script lang="ts">
  import { capitalizeFirstWord, firstCapital } from "$lib/caps";
  import { slide } from "svelte/transition";
  import type { IcardProps } from "../../cardProps";
  export let justifyCell = "";
  export let label = "";
  export let value: string | symbol | null | bigint = "";
  export let id = "";
  export let gridClass = "";
  function capitalizeFirstLetters(value) {
    // Check if input is a string
    if (typeof value !== "string") {
      return "";
    }

    // Split input into words and capitalize first letter of each
    const words = value.split(" ");
    const capitalizedWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });

    // Join capitalized words back into a string and return
    return capitalizedWords.join(" ");
  }
  // need to format nft
  $: value = capitalizeFirstWord(value);

  // $: value = capitalizeFirstLetters(value)
  let duration = 150;
  let delay = 150;
</script>

<div
  {id}
  class="w-auto h-full flex flex-col flex-wrap content-start justify-start relative"
>
  <div
    class="w-full h-full flex flex-col flex-wrap{justifyCell}"
    transition:slide
  >
    {#key label}
      <div in:slide={{ duration, delay }} out:slide={{ duration, delay }}>
        <label
          for="cell-label"
          class="card-field-label label py-0 font-semibold text-md  w-full flex {justifyCell} {gridClass}"
        >
          {label}
        </label>
      </div>
    {/key}
      <div in:slide={{ duration, delay }} out:slide={{ duration, delay }}>
        <label
          for="cell-value"
          class="card-field-value label py-0 flex text-md {justifyCell}"
        >
          {#if value !== null}
            {value}
          {/if}
        </label>
      </div>
  </div>
</div>
