<script lang="ts">
  import { certificate, documentUpload, stolen, transfer } from "$lib/store";
  import { onMount } from "svelte";
  import { Icon, DocumentText, ShieldExclamation, SwitchHorizontal, Star } from "svelte-hero-icons";
  export let selected: boolean;
</script>

<div
  class="button-container w-full h-fit grid grid-rows-1 grid-cols-4 md:py-0 py-4 gap-[2px] place-items-center rounded-2xl relative"
>
  <button
    class="btn btn-ghost md:w-full w-[90%] aspect-[16/9] flex-nowrap z-2 normal-case p-2 shadow-md"
    on:click={() => {
      selected = true;
      transfer.set(true);
    }}
  >
    <Icon src={SwitchHorizontal} color="purple" class="opacity-90" size="30px" />
    <p class="flex text-xs w-full justify-center text-violet-900">Transfer</p>
  </button>

  <button
    on:click={() => {
      selected = true;
      certificate.set(true);
    }}
    class="btn btn-ghost md:w-full w-[90%] aspect-[16/9] flex-nowrap z-2 normal-case p-2 shadow-md"
  >
    <Icon src={Star} color="gold" class="opacity-90" size="30px" />

    <p class="flex text-xs w-full justify-center text-yellow-700">Certificate</p>
  </button>
  <button
    on:click={() => {
      selected = true;
      stolen.set(true);
    }}
    class="btn btn-ghost md:w-full w-[90%] aspect-[16/9] flex-nowrap z-2 normal-case p-2 shadow-md"
  >
    <Icon src={ShieldExclamation} color="#ff0f0f" class="opacity-90" size="30px" />
    <p class="flex text-xs w-full justify-center text-red-600">Stolen</p>
  </button>
  <button
    on:click={() => {
      selected = true;
      documentUpload.set(true);
    }}
    class="btn btn-ghost md:w-full w-[90%] aspect-[16/9] flex-nowrap z-2 normal-case p-2 shadow-md"
  >
    <Icon src={DocumentText} color="green" class="opacity-90" size="30px" />

    <p class="flex text-xs w-full justify-center text-green-900">Document</p>
  </button>
</div>
