<script lang="ts">  
  import { fade, fly, scale } from "svelte/transition";
  import CardFlippable from "./CardFlippable.svelte";
  export let myneCards: [{}];
  export let carProps;
</script>
<div

  class="vault h-full w-full rounded-3xl k px-4 py-2"
>
  <div class="vault-content h-[100%] flex flex-col w-full rounded-2xl text-primary "
  transition:fly={{x: -1000}}>
    <div class="vault-title max-h-full min-w-full flex px-4  justify-between top-0">
      <h1
        class="font-bold flex justify-start  text-[5rem] md:text-[3rem] "
      >
        Card Vault
      </h1>
      <div
        class="dropdown dropdown-end dropdown-bottom font-bold justify-start  text-[5rem] md:text-[3rem] p-3"
      >
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <label
          tabindex="0"
          for="categoriesSelect"
          class="btn normal-case btn-ghost flex flex-col  h-full   text-[5rem] md:text-[3rem] "
          >All Categories</label
        >
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <ul
          
          tabindex="0"
          class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><a href="/">Item 1</a></li>
          <li><a href="/">Item 2</a></li>
        </ul>
      </div>
    </div>
          <div class = 'flex flex-wrap justify-center overflow-y-auto h-[85%] gap-2 py-2 top-0'>
        {#each myneCards as myneCard}
        <CardFlippable cardProps={{...myneCards}}  />
    {/each}

    </div>


  </div>
</div>

<style lang="postcss">

  .background-color{
    background-color: 	hsl(216, 100%, 98%);

  }
</style>
