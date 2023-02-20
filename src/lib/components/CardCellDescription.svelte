<script lang="ts">
    export let description;
</script>

<div class="full w-full h-full flex justify-center">
    <div
  class="w-full h-full flex flex-col flex-wrap content-start justify-start"
>
  <div class=" w-full h-full">
    <div
      class="card-field-label label py-0 font-bold text-lg w-full flex mb-4"
    >
      Description
    </div>
    <div class="card-field-value label py-0 flex ">
        <textarea disabled class="textarea textarea-ghost w-full" placeholder="Description">{description}</textarea>
        
    </div>
  </div>
</div>

</div>