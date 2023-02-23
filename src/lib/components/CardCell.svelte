<script lang="ts">
  import type { IcardProps } from "../../cardProps";
  export let justifyCell = "";
  export let label = "";
  export let value: string | symbol | null | undefined | bigint | boolean;
  export let id = "";
  export let gridClass = "";
</script>

<div
  {id}
  class="w-auto h-full flex flex-col flex-wrap content-start justify-start"
>
  <div class=" w-full h-full">
    <label
      for="cell-label"
      class="card-field-label label py-0 font-semibold text-md  w-full flex {justifyCell} {gridClass}"
    >
      {label}
    </label>
    <label
      for="cell-value"
      class="card-field-value label py-0 flex text-md {justifyCell}"
    >
      {#if value !== undefined}
        {value}
      {/if}
    </label>
  </div>
</div>
