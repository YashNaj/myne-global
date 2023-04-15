<script lang="ts">
  import CardFunctionModals from "$lib/components/CardFunctionModals.svelte";
  import { fly } from "svelte/transition";
  import type { LayoutData } from "./$types";
  import { cubicIn, cubicOut } from "svelte/easing";
  export let data: LayoutData;
  $: pathname = data.pathname;
  const duration = 300;
  const delay = duration + 100;
  const y = 10;

  const transitionIn = { easing: cubicOut, y, duration, delay };
  const transitionOut = { easing: cubicIn, y: -y, duration };
</script>

<div>
  <CardFunctionModals />
  {#key pathname}
      <div in:fly={transitionIn} out:fly={transitionOut}>
        <slot />
      </div>
  {/key}
</div>
