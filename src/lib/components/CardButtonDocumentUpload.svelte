<script lang="ts">
	import { page } from '$app/stores';
    import { scale } from "svelte/transition";
    import { selectedCard, document } from "../../store";
    import { trpc } from "$lib/trpc/client";
    let loading = false; 
    const reportStolen = async()=> {
      loading = true; 
      await trpc($page).cards.reportStolen.query($selectedCard.id)
      loading = false;
    }
  </script>
  
  <div class="w-80 h-[34rem] shadow-lg card  relative flex flex-col p-3 bg-green-900" transition:scale|local>
    <button
      on:click={() => {
        selectedCard.set(null);
        document.set(false);
      }}
      class="absolute top-1 right-1 btn btn-square bg-green-900 font-semilbold text-white border-none z-[99] "
    >
      X
    </button>
    <h1 class="font-semibold text-2xl w-full h-fit justify-center text-white bg- z-3 relative  p-1">Upload Documents</h1>
    <div class="w-full h-full container-for-badges flex flex-col justify-center content-center flex-nowrap">
      <div class="w-full h-full text-white flex-flex-col p-1">
          <h1 class="text-white font-semibold">The following item will be reported as stolen</h1>
  
          <h1 class="text-white font-medium p-1 text-center">
            Choose an option above to upload a document. 
        </h1>
          <div class="button-container flex justify-around w-full absolute bottom-2 left-0">
          </div>
        </div>
    </div>
  </div>
  