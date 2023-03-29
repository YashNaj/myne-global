<script lang="ts">
    import { scale } from "svelte/transition";
    import { selectedCard, certificate } from "../../store";
    import { trpc } from "$lib/trpc/client";
    let loading = false; 
    export let selected 
  </script>
  
  <div class="w-80 h-80 shadow-lg card  relative flex flex-col p-3 bg-yellow-700" transition:scale|local>
    <button
      on:click={() => {
        selected = false; 
        selectedCard.set(null);
        certificate.set(false);
      }}
      class="absolute top-1 right-1 btn btn-square bg-yellow-700 font-semilbold text-white border-none z-[99] "
    >
      X
    </button>
    <h1 class="font-semibold text-2xl w-full h-fit justify-center text-white bg- z-3 relative  p-1">Get an Item Certificate</h1>
    <div class="w-full h-full container-for-badges flex flex-col justify-center content-center flex-nowrap">
      <div class="w-full h-full text-white flex-flex-col p-1">
          <h1 class="text-white font-semibold">The following item will be reported as stolen</h1>
 
          <h1 class="text-white font-medium p-1 text-center">
            Download a pdf with your items pictures, information, and relative documents. 
        </h1>
          <div class="button-container flex justify-around w-full absolute bottom-2 left-0">
          </div>
        </div>
        <button class = 'btn btn-warning text-white normal-case'>
          Generate Certificate
        </button>
    </div>
  </div>
  