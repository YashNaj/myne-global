<script lang="ts">
  import { capitalizeFirstWord, firstCapital } from "$lib/utils/caps";
  import { slide } from "svelte/transition";
  import type { IcardProps } from "$lib/utils/cardProps";
  import { text } from "svelte/internal";
  export let allignText = "";
  let textSlug = "text-" + allignText;
  export let label = "";
  export let value: string | symbol | null | bigint = "Default";
  export let id = "";
  export let gridClass;
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
  let textAlign;
  $: if (label === "") {
    value = "";
  }
</script>

{#key label}
  <div {id} class="w-full h-fit grid grid-rows-2 flex-wrap {textSlug} {gridClass}">
    <div in:slide={{ duration }}>
      <label
        for="cell-label"
        class="w-full card-field-label text-primary text-opacity-40 md:text-[15px] text-xl py-0 font-semibold text-{allignText} text-right"
      >
        {label}
      </label>
    </div>
    <div in:slide={{ duration }}>
      <label
        for="cell-value"
        class="w-full card-field-value h-fit py-0 md:text-[15px] text-xl text-primary font-medium text-{allignText} text-right"
      >
        {#if value !== null}
          {value}
        {/if}
      </label>
    </div>
  </div>
{/key}
