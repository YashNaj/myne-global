<script lang="ts">
  export let justifyCell = "";
  export let label = "";
  export let value = "";
  export let id = "";
  export let gridClass = "";
</script>

<div
  {id}
  class="w-auto h-full flex flex-col flex-wrap content-start justify-start {gridClass}"
>
  <div class=" w-full h-full">
    <div
      class="card-field-label label py-0 font-bold text-[1.4vh]  w-full flex {justifyCell}"
    >
      {label}
    </div>
    <div class="card-field-value label py-0 flex text-[5vh] {justifyCell}">
      {value}
    </div>
  </div>
</div>

