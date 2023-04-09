<script lang="ts">
  import { certificate, documentUpload, stolen, transfer } from "$lib/store";
  import { onMount } from "svelte";
  import { Icon, DocumentText, ShieldExclamation, SwitchHorizontal, Star } from "svelte-hero-icons";
  export let selected: boolean;
</script>

<div class="button-container w-full md:h-[90%] h-10 grid grid-cols-2 grid-rows-2 gap-[2px] place-items-center">
  <button
    class="btn btn-ghost w-[90%] h-full  flex-nowrap z-2 normal-case p-2"
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
    class="btn btn-ghost w-[90%] h-full  flex-nowrap z-2 normal-case p-2"
  >
    <p class="flex text-xs w-full justify-center text-yellow-700">Certificate</p>
    <Icon src={Star} color="gold" class="opacity-90" size="30px" />
  </button>
  <button
    on:click={() => {
      selected = true;
      stolen.set(true);
    }}
    class="btn btn-ghost  w-[90%] h-full  flex-nowrap z-2 normal-case p-2"
  >
    <Icon src={ShieldExclamation} color="#ff0f0f" class="opacity-90" size="30px" />
    <p class="flex text-xs w-full justify-center text-red-600">Stolen</p>
  </button>
  <button
    on:click={() => {
      selected = true;
      documentUpload.set(true);
    }}
    class="btn btn-ghost  w-[90%] h-full flex-nowrap z-2 normal-case p-2"
  >
    <p class="flex text-xs w-full justify-center text-green-900">Document</p>
    <Icon src={DocumentText} color="green" class="opacity-90" size="30px" />
  </button>
</div>
