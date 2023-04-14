<script lang="ts">
  import Spinner from "$lib/components/Spinner.svelte";
  import { afterUpdate, beforeUpdate, createEventDispatcher } from "svelte";
  import { supabase } from "$lib/supabaseClient";
  import { ArrowCircleLeft, ArrowCircleRight, CloudUpload, Icon } from "svelte-hero-icons";
  import Swiper from "swiper";
  import { onMount } from "svelte";
  export let mobile;
  let parentEl;
  export let size = 10;
  let cardFrontSwiperId;
  let pictureSwiper;
  afterUpdate(() => {});
  onMount(() => {
    pictureSwiper = document.querySelector(".test-swiper-" + cardFrontSwiperId);
    for (let picture of pictures) {
      if (pictures?.length > 0 && pictures[0] !== "")
        downloadImage(picture).then((url) => {
          const imgElement = document.getElementById(`img-${picture}`);
          imgElement?.setAttribute("src", url);
        });
    }
    console.log(pictureSwiper);
  });
  export let pictures: string[] = [];
  $: pictures = pictures;
  let uploading = false;
  let files: FileList;
  let uploadButton: HTMLInputElement;
  const dispatch = createEventDispatcher();

  const downloadImage = async (path: string) => {
    try {
      const { data, error } = await supabase.storage.from("card-images").download(path);
      if (error) {
        throw error;
      }
      const url = URL.createObjectURL(data);

      return url;
    } catch (error) {
      if (error instanceof Error) {
      }
    }
  };

  const uploadImage = async () => {
    try {
      uploading = true;
      if (!files || files.length === 0) {
        throw new Error("You must select an image to upload.");
      }
      if (pictures.length >= 10) {
        throw new Error("You cannot upload more than 10 pictures.");
      }
      const file = files[0];
      const fileExt = file.name.split(".").pop();
      const filePath = `${Math.random()}.${fileExt}`;
      let { error } = await supabase.storage.from("card-images").upload(filePath, file);
      if (error) {
        throw error;
      }
      pictures = [...pictures, filePath];
      dispatch("picturesuploaded", pictures);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      uploading = false;
      files = null;
      uploadButton.value = "";
    }
  };
  export let expanded;
</script>

<div class="swiper-wrapper relative w-full h-full">
  <swiper-container
    class="test-swiper-{cardFrontSwiperId} lg:w-64 md:w-48 w-30 md:aspect-[16/9] aspect-[1/1] rounded-xl [box-shadow:_rgba(0,_0,_0,_0.06)_0px_2px_4px_0px_inset;]"
    observer="true"
    observer-parents="true"
    virtual="true"
  >
    {#if pictures?.length > 0}
      {#each pictures as picture, i}
        <swiper-slide
          class=" w-full h-full rounded-lg flex justify-center bg-black bg-opacity-30 object-contain"
          id={`item-${i}`}
        >
          {#if picture}
            <div class="w-full object-cover h-full">
              <!-- svelte-ignore a11y-img-redundant-alt -->
              <img id={`img-${picture}`} alt="Uploaded picture" class="bg-black bg-opacity-40 w-full h-full" />
            </div>

            <!-- svelte-ignore a11y-img-redundant-alt -->
          {:else}
            <div class="object-contain bg-black bg-opacity" />
          {/if}
        </swiper-slide>
      {/each}
      <swiper-slide class=" rounded-box bg-black bg-opacity-10">
        <div class="w-full h-full flex">
          <div class="w-full h-full">
            <label
              class=" font-semibold text-center w-full h-full text-white bg-black bg-opacity-40 bg-200 normal-case flex flex-col justify-center content-center flex-nowrap"
              for="single"
            >
              {#if uploading}
                <Spinner />
              {:else}
                <div class="flex flex-col content-center flex-wrap justify-center">
                  <div class="w-full flex justify-center">
                    <Icon src={CloudUpload} class="w-fit" color="white text-center" size={mobile ? "12px" : "24px"} />
                  </div>
                  Upload a picture
                </div>
              {/if}
            </label>
          </div>
          <input
            style="visibility: hidden; position:absolute;"
            type="file"
            id="single"
            accept="image/*"
            bind:files
            on:change={uploadImage}
            disabled={uploading || pictures.length >= 10}
            bind:this={uploadButton}
          />
        </div>
      </swiper-slide>
    {:else}
      <swiper-slide class=" rounded-box bg-black bg-opacity-10">
        <div class="w-full h-full flex">
          <div class="w-full h-full">
            <label
              class=" font-semibold text-center w-full h-full text-white bg-black bg-opacity-40 bg-200 normal-case flex flex-col justify-center content-center flex-nowrap"
              for="single"
            >
              {#if uploading}
                <Spinner />
              {:else}
                <div class="flex flex-col content-center flex-wrap justify-center">
                  <div class="w-full flex justify-center">
                    <Icon src={CloudUpload} class="w-fit" color="white text-center" size="24px" />
                  </div>
                  Upload a picture
                </div>
              {/if}
            </label>
          </div>
          <input
            style="visibility: hidden; position:absolute;"
            type="file"
            id="single"
            accept="image/*"
            bind:files
            on:change={uploadImage}
            disabled={uploading || pictures.length >= 10}
            bind:this={uploadButton}
          />
        </div>
      </swiper-slide>
    {/if}
  </swiper-container>
  <button
    on:click={() => {
      pictureSwiper.swiper.slidePrev();
      console.log("clicked");
    }}
    class="btn btn-ghost normal-case absolute z-[3] bottom-0 left-0"
  >
    <Icon
      size={mobile ? "12px" : "24px"}
      class=" previous-card-slider opacity-60 cursor-pointer  text-black z-0 "
      src={ArrowCircleLeft}
    />
  </button>
  <button
    on:click={() => {
      pictureSwiper.swiper.slideNext();
      console.log("clicked");
    }}
    class="btn btn-ghost normal-case absolute z-[3] bottom-0 right-0"
  >
    <Icon
      size={mobile ? "12px" : "24px"}
      class="next-card-slider opacity-60 cursor-pointer  text-black z-0"
      src={ArrowCircleRight}
    />
  </button>
</div>
