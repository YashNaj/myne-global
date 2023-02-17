<script lang="ts">
  import UploadWidget from "./UploadWidget.svelte";
  let size: any | undefined | null;
  let url: string | null;
</script>

<div
  class="h-full opacity-95 w-full carousel rounded-box z-3 flex justify-center"
>
  <div
    class="carousel-item w-full h-full flex justify-center content-center flex-wrap bg-black opacity-95"
  >
    <UploadWidget {url} {size} />
  </div>
</div>

<style lang="postcss">
  img {
    max-width: 100;
  }
  .carousel {
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
      rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  }
</style>
