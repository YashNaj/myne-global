<script>
  import { quintOut } from "svelte/easing";
  import { fade, fly } from "svelte/transition";
  export let title = " ";
  import CardFlippable from "./CardFlippable.svelte";
  let duration = 100;
</script>

<div class=" relative h-full  w-full rounded-3xl k p-4">
  <div
    transition:fly={{ x: -1000 }}
    class="h-[100%] flex flex-col w-full rounded-2xl text-primary absolute top-0 "
  >
    <div class="vault-title h-auto  min-w-full flex px-4  justify-between">
      <h1 class="font-bold flex justify-start  text-[5rem] md:text-[3rem] p-3">
        {title}
      </h1>
      <div
        class="dropdown dropdown-end dropdown-bottom font-bold justify-start  text-[5rem] md:text-[3rem] p-3"
      />
    </div>
    <div
      class="w-full h-[90%] flex flex-wrap gap-4 overflow-y-auto justify-center p-2"
    >
      <slot />
    </div>
  </div>
</div>

<style lang="postcss">
  .background-color {
    background-color: hsl(216, 100%, 98%);
  }
</style>
