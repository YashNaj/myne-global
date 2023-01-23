<script lang="ts">
  import {
    RadioGroup,
    RadioGroupLabel,
    RadioGroupOption,
    RadioGroupDescription,
  } from "@rgossiaux/svelte-headlessui";
  import { fly } from "svelte/transition";
  export let title = "Default";
  let plan = "Plan";
  let titles = ["One Card", "Two Cards", "Three Cards"];
  let description = "description";
  let price = '1'
</script>

<div class="container flex flex-col h-auto">
  <RadioGroup value={plan} on:change={(e) => (plan = e.detail)}>
    <RadioGroupLabel
      class="text-xl font-bold text-primary w-full h-10 flex justify-center"
      value="Plan">Plan</RadioGroupLabel
    >
    <div class="w-full h-full p-2">
      {#each titles as title}
        <RadioGroupOption
          class="w-full h-20 rounded-lg bg-secondary shadow-md my-2"
          value={title}
          let:checked
        >
          <div
            class={"w-full flex justify-between h-full p-2 hover:outline-2 hover:outine-black"}
            class:checked
          >
            <div class="flex flex-col flex-1">
              <div class="text-xl font-bold">
                {title}
              </div>
              <div>
                {description}
              </div>
            </div>
            <div class="flex btn btn-accent text-base-100 text-xl font-bold justify-center flex-1 content-center">${price}</div>
            <div />
          </div></RadioGroupOption
        >
      {/each}
    </div>
  </RadioGroup>
</div>

<style lang="postcss">
  .checked {
    background-color: #002d72;
    color: white;
    border-radius: 0.5rem;
    outline: 3px solid rgba(212, 203, 227, 0.605);
  }
</style>
