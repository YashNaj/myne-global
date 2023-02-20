<script lang="ts">
  import { firstCapital } from "$lib/caps";


  export let justifyCell = "";
  export let label = "";
  export let value = "";
  export let id = "";
  export let gridClass = "";
  $: value = value 
  $: label = label 
</script>

<div
  {id}
  class="w-auto h-full flex flex-col flex-wrap content-start justify-start {gridClass}"
>
  <div class=" w-full h-full">
    <label for ='cell-label'
      class="card-field-label label py-0 font-bold text-[2.2vh]  w-full flex {justifyCell}"
    >
      {label}
  </label>
    <label  for ='cell-value' class="card-field-value label py-0 flex text-[2.2vh] {justifyCell}">
      {firstCapital(value)}
    </label>
  </div>
</div>

