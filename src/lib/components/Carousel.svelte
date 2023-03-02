<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { supabase } from "$lib/supabaseClient";
  import Spinner from "./Spinner.svelte";
  import { Icon, PlusCircle } from "svelte-hero-icons";
  import { onMount } from "svelte";
  import Swiper from "swiper";
  export let size: number;
  export let url: string;
  export let flipped = false; 
  const loading = false;
   let pictureUrls: string[] = [];
   let uploading: boolean | null | undefined = false;
   let downloading: boolean | null | undefined = false;
  import "swiper/swiper-bundle.css";

  let files: FileList;
  let pictureSwiper;

  onMount(() => {
    pictureSwiper = new Swiper("picture-swiper", {
      slidesPerView: 1,
      pagination: {
        el: "picture-swiper-pagination",
        type: "bullets",
      },
    });
  });

  const dispatch = createEventDispatcher();

  const downloadImage = async (path: string) => {
    try {
      downloading = true;
      const { data, error } = await supabase.storage
        .from("card-images")
        .download(path);

      if (error) {
        throw error;
      }

      const url = URL.createObjectURL(data);
      console.log(url);
    } catch (error) {
      if (error instanceof Error) {
        console.log("Error downloading image: ", error.message);
      }
    }
  };

  const uploadPicture = async () => {
    try {
      uploading = true;

      if (!files || files.length === 0) {
        throw new Error("You must select an image to upload.");
      }
      const file = files[0];
      const fileExt = file.name.split(".").pop();
      const filePath = `${Math.random()}.${fileExt}`;
      console.log(filePath);
      let { error } = await supabase.storage
        .from("card-images")
        .upload(filePath, file);

      if (error) {
        console.log(error);
        throw error;
      }

      url = filePath;
      console.log(
        "🚀 ~ file: UploadWidget.svelte:74 ~ uploadPicture ~ url:",
        url
      );
      pictureUrls.push(
        "https://oyucnwsizsmmcmdtynhn.supabase.co/storage/v1/object/card-images/" +
          url
      );

      dispatch("upload");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      uploading = false;
    }
  };
  export let pictures = pictureUrls;
  $: console.log(pictureUrls);

  $: if (url) downloadImage(url);
</script>
<div
  class="h-full opacity-95 w-full carousel rounded-box z-3 flex justify-center"
>
  <div
    class="carousel-item w-full h-full flex justify-center content-center flex-wrap bg-black opacity-95"
  >
  <div class="text-white" style="width: {size}px">
    <label
      class="btn btn-ghost normal-case flex flex-col justify-center cursor-pointer"
      for="single"
    >
      Upload Files
      <Icon src={PlusCircle} size="23px" color="white" />
    </label>
    {#if uploading}
      <Spinner />
    {/if}
    <span style="display:none">
      <input
        type="file"
        id="single"
        accept="image/*"
        bind:files
        on:change={uploadPicture}
        disabled={flipped}
      />
    </span>
  </div>
  </div>

  <div
    class="carousel-item w-full h-full flex justify-center content-center flex-wrap bg-black opacity-95"
  >
  <div class="text-white" style="width: {size}px">
    <label
      class="btn btn-ghost normal-case flex flex-col justify-center cursor-pointer"
      for="single"
    >
      Upload Files
      <Icon src={PlusCircle} size="23px" color="white" />
    </label>
    {#if uploading}
      <Spinner />
    {/if}
    <span style="display:none">
      <input
        type="file"
        id="single"
        accept="image/*"
        bind:files
        on:change={uploadPicture}
        disabled={flipped}
      />
    </span>
  </div>
  
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
