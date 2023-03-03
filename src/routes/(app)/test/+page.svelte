<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { supabase } from "$lib/supabaseClient";
  import Spinner from "$lib/components/Spinner.svelte";
  import { Icon, PlusCircle } from "svelte-hero-icons";
  import { onMount } from "svelte";
  import Swiper from "swiper";
  export let size: number;
  export let url: string;
  export let flipped = false;
  const loading = false;
  let pictureUrl;
  let pictureUrls: string[] = [];
  let uploading: boolean | null | undefined = false;
  let downloading: boolean | null | undefined = false;
  import PageContainer from "$lib/components/PageContainer.svelte";
  import UploadWidget from "$lib/components/UploadWidget.svelte";

  let files: FileList;
  let swiper;

  onMount(() => {
    swiper = new Swiper(".picture-swiper", {
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
      console.log(path);
      const { data, error } = await supabase.storage
        .from("card-images")
        .download(path);
      console.log(data);
      if (error) {
        throw error;
      }
      const url = URL.createObjectURL(data);
      pictureUrl = url;
      pictureUrls.push(url);
    } catch (error) {
      if (error instanceof Error) {
        console.log("Error downloading image: ", error.message);
      }
    }
  };
  const uploadPicture = async () => {
    {
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

        dispatch("upload");
      } catch (error) {
        if (error instanceof Error) {
          alert(error.message);
        }
      } finally {
        uploading = false;
      }
    }
  };
  export let pictures: string[] = [];

  $: pictureUrls = pictureUrls;
  $: console.log("🚀 ~ file: +page.svelte:93 ~ pictures:", pictureUrls);

  $: if (url) downloadImage(url);
</script>

<PageContainer>
  <div
    class="w-80 aspect-[5/7] flex flex-col content-center justify-center bg- bg-error rounded-2xl"
  >
    <div class="h-[50%] w-full flex-1 bg-red-500 rounded-t-2xl p-3">
      <swiper-container class="picture-swiper w-full h-full bg-black rounded-2xl">
        {#if pictureUrls.length > 0}
          {#each pictureUrls as pictureUrl}
            <swiper-slide class="w-full h-full bg-blue-100">
              <div class="w-full h-full" aria-live="polite">
                <img
                  src={pictureUrl}
                  alt={pictureUrl ? "picture" : "No image"}
                  class="picture max-w-full"
                  style="height: {size}px, width: {size}px"
                />
              </div>
            </swiper-slide>
          {/each}
        {/if}
        <swiper-slide class="w-full h-full bg-blue-200">
          <div class="text-white" style="width: {size}px">
            <label
              class="btn btn-ghost normal-case flex flex-col justify-center content-center cursor-pointer z-3"
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
                hidden
                id="single"
                accept="image/*"
                bind:files
                on:change={uploadPicture}
                disabled={flipped}
              />
            </span>
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
    <div class="h-[50%] w-full flex-1 bg-blue-500 rounded-b-2xl" />
  </div>
  <!-- <UploadWidget/> -->
</PageContainer>
