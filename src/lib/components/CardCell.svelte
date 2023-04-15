<script lang="ts">
  import { capitalizeFirstWord, firstCapital } from "$lib/caps";
  import { fly, slide } from "svelte/transition";
  import type { IcardProps } from "../../cardProps";
  import { cubicIn, cubicOut } from "svelte/easing";
  export let allignText = "";
  let textSlug = "text-" + allignText;
  console.log(textSlug);
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
  <div {id} class="w-full h-auto grid grid-rows-2 {textSlug} {gridClass}">
    <div class={textSlug} in:slide={{ duration }}>
      <label
        for="cell-label"
        class="card-field-label text-black text-opacity-40 md:text-[15px] text-[10px] py-0 font-semibold {textSlug}"
      >
        {label}
      </label>
    </div>
    <div class={textSlug}>
      <label
        for="cell-value"
        class="card-field-value h-auto w-full py-0 md:text-[15px] text-[9px] text-black font-medium {textSlug}"
      >
        {#if value !== null}
          {value}
        {/if}
      </label>
    </div>
  </div>
{/key}
