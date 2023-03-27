<script lang="ts">
  import { scale } from "svelte/transition";
  import { selectedCardId, stolen } from "../../store";
  import CardFlippable from "./CardFlippable.svelte";
  import { trpc } from "$lib/trpc/client";
  let loading = false; 
  const reportStolen = async()=>{
    loading = true; 
  }
</script>

<div class="w-80 h-[34rem] shadow-lg card  relative flex flex-col p-3 bg-error" transition:scale|local>
  <button
    on:click={() => {
      selectedCardId.set("");
      stolen.set(false);
    }}
    class="absolute top-1 right-1 btn btn-square bg-error font-semilbold text-white border-none z-[99] "
  >
    X
  </button>
  <h1 class="font-semibold text-2xl w-full h-fit justify-center text-white bg- z-3 relative  p-1">Report Stolen</h1>
  <div class="w-full h-full container-for-badges flex flex-col justify-center content-center flex-nowrap">
    <div class="w-full h-full text-white flex-flex-col p-1">
        <h1 class="text-white font-semibold">The following item will be reported as stolen</h1>
        <div class="w-full h-fit flex justify-center content-center flex-wrap relative">
          <CardFlippable  />
        </div>
        <h1 class="text-white font-medium p-1 text-center">
          When an item is reported stolen, you have the option to forward the item details to relevant authorities. 
        </h1>
        <div class="button-container flex justify-around w-full absolute bottom-2 left-0">
          <button
            class="btn btn-error normal-case flex-1"
            on:click={() => {
        
            }}
          >
            Go Back
          </button>

          <button class="btn btn-success normal-case flex-1" on:click={() => swiperEl.swiper.slideNext()}>
            Confirm
          </button>
        </div>
      </div>
  </div>
</div>
