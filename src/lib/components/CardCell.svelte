<script lang="ts">
 export  let justifyCell = "";
 export  let label = "";
 export  let value = "";
 export let id = ''
 export let gridClass =''
</script>

<div
  id = {id}
  class="w-full h-full bg-white flex flex-col flex-wrap content-start justify-start {gridClass}"
>
  <div class=" w-full h-full">
    <div
      class="card-field-label label py-0 font-bold text-lg   w-full flex {justifyCell}"
    >
      {label}
    </div>
    <div class="card-field-value label py-0 flex {justifyCell}">
      {value}
    </div>
  </div>
</div>
