<script lang="ts">
  import { page } from "$app/stores";
  import { pictures } from "./../../cardProps.ts";
  import { cloneDeep } from "lodash";
  import { scale } from "svelte/transition";
  import { stolen, selectedCard } from "$lib/store";
  import CardFlippable from "./CardFlippable.svelte";
  import { trpc } from "$lib/trpc/client";
  import SwiperPictures from "./SwiperPictures.svelte";
  import Spinner from "./Spinner.svelte";
  import { invalidateAll } from "$app/navigation";
  import Card from "./Card.svelte";
  let toggleRemoveStolen = false;
  let cardProps = { ...$selectedCard };
  $: if (cardProps.isStolen) {
    toggleRemoveStolen = true;
  }
  $: togggeRemoveStolen = toggleRemoveStolen;

  console.log("🚀 ~ file: ReportStolen.svelte:11 ~ selectedCard:", $selectedCard);
  console.log("cardProps", cardProps);
  let loading = false;
  let success = false;
  const reportStolen = async () => {
    loading = true;
    await trpc($page).cards.reportStolen.mutate(cardProps.id);
    loading = false;
    console.log("Reported Stolen");
  };
  const removeStolen = async () => {
    loading = true;
    await trpc($page).cards.removeStolen.mutate(cardProps.id);
    loading = false;
    console.log("Removed Stolen");
    invalidateAll();
  };

  $: cardProps = { ...$selectedCard };
</script>

<div class="w-80 h-[fullrem] shadow-lg card  relative flex flex-col p-3 bg-error" transition:scale|local>
  <button
    on:click={() => {
      stolen.set(false);
    }}
    class="absolute top-1 right-1 btn btn-square bg-error font-semilbold text-white border-none z-[99] "
  >
    X
  </button>
  {#if !toggleRemoveStolen}
    <h1 class="font-semibold text-2xl w-full h-fit justify-center text-white bg- z-3 relative  p-1">Report Stolen</h1>
  {:else}
    <h1 class="font-semibold text-2xl w-full h-fit justify-center text-white bg- z-3 relative  p-1">Remove Stolen</h1>
  {/if}

  <div class="w-full h-full container-for-badges flex flex-col justify-center content-center flex-nowrap">
    <div class="w-full h-full text-white flex-flex-col p-1">
      {#if !loading}
        {#if !toggleRemoveStolen}
          <h1 class="text-white font-semibold">The following item will be reported as stolen in the Myne Database</h1>
        {:else}
          <h1 class="text-white font-semibold">The following item will be removed from the stolen database</h1>
        {/if}

        <div class="w-full h-fit flex justify-center content-center flex-wrap relative scale-75">
          <Card cardProps={$selectedCard}>
            <SwiperPictures/>
          </Card>
        </div>
        {#if !toggleRemoveStolen}
          <h1 class="text-white font-medium p-1 text-center">
            *Coming Soon* : the option to forward the item details to relevant authorities.
          </h1>
        {:else}
          <h1 class="text-white font-medium p-1 text-center">Item recovered? Remove from our stolen list!</h1>
        {/if}
        <div class="button-container flex justify-around w-full  bottom-2 left-0">
          {#if !toggleRemoveStolen}
            <button on:click={() => reportStolen()} class="btn btn-success normal-case flex-1 text-white">
              Confirm
            </button>
          {:else}
            <button on:click={() => removeStolen()} class="btn btn-success normal-case flex-1 text-white">
              Remove Stolen
            </button>
          {/if}
        </div>
      {:else}
        {#await reportStolen()}
          <div class="w-full h-full text-white flex-flex-col p-1" />
          <Spinner />
        {:then success}
          {success}
          Success message
        {/await}
      {/if}
    </div>
  </div>
</div>
