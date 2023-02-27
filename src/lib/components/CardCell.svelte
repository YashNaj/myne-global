<script lang="ts">
  import { capitalizeFirstWord, firstCapital } from "$lib/caps";
  import type { IcardProps } from "../../cardProps";
  export let justifyCell = "";
  export let label = "";
  export let value: string | symbol | null |  bigint = ''
  export let id = "";
  export let gridClass = "";
  function capitalizeFirstLetters(value) {
  // Check if input is a string
  if (typeof value !== 'string') {
    return '';
  }

  // Split input into words and capitalize first letter of each
  const words = value.split(' ');
  const capitalizedWords = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  // Join capitalized words back into a string and return
  return capitalizedWords.join(' ');
}
$: value = capitalizeFirstWord(value)
$: console.log("🚀 ~ file: CardCell.svelte:25 ~ value:", value)
// $: value = capitalizeFirstLetters(value)

</script>

<div
  {id}
  class="w-auto h-full flex flex-col flex-wrap content-start justify-start"
>
  <div class=" w-full h-full">
    <label
      for="cell-label"
      class="card-field-label label py-0 font-semibold text-md  w-full flex {justifyCell} {gridClass}"
    >
      {label}
    </label>
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
