<script lang="ts">
  import CreditCard from "$lib/components/CreditCard.svelte";
  import Helcim from "$lib/components/Helcim.svelte";
  import TabbedWindow from "$lib/components/TabbedWindow.svelte";
  import { slide } from "svelte/transition";
  export let page = 0;
  function pageUp() {
    page = page + 1;
  }
  function pageDown() {
    page = page - 1;
  }
</script>

<div>
  {#if page === 0}
    <div
      class=""
      in:slide={{ duration: 200, delay: 200 }}
      out:slide={{ delay: 200 }}
    >
      <TabbedWindow />
    </div>
  {/if}
  {#if page === 1}
    <div
      class=""
      in:slide={{ duration: 200, delay: 200 }}
      out:slide={{ delay: 200 }}
    >
    <CreditCard/>
  </div>
  {/if}
  <div class="flex">
    {#if page > 0}
      <button on:click={pageDown} class="btn btn-primary"> Previous </button>
    {/if}
    <button on:click={pageUp} class="btn btn-primary"> Next </button>
  </div>
</div>
