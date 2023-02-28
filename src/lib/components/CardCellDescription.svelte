<script lang="ts">
	import  focusSlide  from '$lib/swiperActions';
  export let description;
</script>

<div class="full w-full h-full flex justify-cente p-2">
  <div
    class="w-full h-full flex flex-col flex-wrap content-start justify-start"
  >
    <div class=" w-full h-full">
      <div
        class="card-field-label label py-0 font-bold text-lg w-full flex mb-2"
      >
        Description
      </div>
      <div class="card-field-value label py-0 flex ">
        <textarea
          use:focusSlide
          disabled
          class="textarea bg-none w-full h-full"
          placeholder="Description">{description}</textarea
        >
      </div>
    </div>
  </div>
</div>
