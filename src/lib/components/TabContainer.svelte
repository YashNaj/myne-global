<script lang="ts">
  import { TabPanel } from "@rgossiaux/svelte-headlessui";
  import { fade, slide } from "svelte/transition";
  import { onMount } from 'svelte';

  let ready = false;
  onMount(() => {
      setTimeout(100),
      ready = true

  });

</script>
{#if ready}

    <TabPanel let:selected class="w-full h-full flex flex-col px-2 rounded-2xl">

        <div class="w-full h-full relative ">
          <div class="h-full w-full absolute">
            <slot />
          </div>
        </div>

      </TabPanel>
{/if}
