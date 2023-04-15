<script lang="ts">
  import Spinner from "$lib/components/Spinner.svelte";
  import { afterUpdate, beforeUpdate, createEventDispatcher } from "svelte";
  import { supabase } from "$lib/supabaseClient";
  import { ArrowCircleLeft, ArrowCircleRight, CloudUpload, Icon } from "svelte-hero-icons";
  import Swiper from "swiper";
  import { onMount } from "svelte";
  export let mobile = false;
  export let expanded = false;
  export let inAddCard = false; 
  let parentEl;
  export let size = 10;
  let cardFrontSwiperId;
  let pictureSwiper;

  export let pictures: string[] = [];
  $: pictures = pictures;
  let uploading = false;
  let files: FileList;
  let uploadButton: HTMLInputElement;
  const dispatch = createEventDispatcher();


  const uploadFile = async (event) => {
    uploading = true;
    const file = event.target.files[0];
    const { data, error } = await supabase.storage.from("card-images").upload(`folder-name/${file.name}`, file);
    if (error) {
      console.error(error);
    } else {
      files = [...files, data.Key];
      dispatch("upload", files);
    }
    uploading = false;
  };

  const deleteFile = async (file) => {
    const { error } = await supabase.storage.from("card-images").remove([file]);
    if (error) {
      console.error(error);
    } else {
      files = files.filter((f) => f !== file);
      dispatch("delete", files);
    }
  };

  const getImageUrl = (file) => {
    let publicUrl = supabase.storage.from("card-images").getPublicUrl(file).data.publicUrl;
    console.log(publicUrl);
    return publicUrl;
  };
</script>

<div class="relative w-full h-full md:aspect-[16/9] aspect-[1/1] rounded-2xl bd-opacity {expanded ? 'md:p-4' : ''}">
  <swiper-container
    slides-per-view={expanded ? "auto" : 1}
    observer={true}
    observer-parents={true}
    class="w-full h-full md:aspect-[16/9] aspect-[1/1] f`lex justify-center"
    space-between="100"
  >
    {#if pictures.length > 0 && pictures[0] !== ""}
      {#each pictures as file, i}
        <swiper-slide
          class="md:w-auto md:h-auto w-full h-full flex flex-col justify-center rounded-2xl bg-black bg-opacity-50 backdrop-blur-lg shadow-md"
        >
          <img
            id={i}
            alt="img"
            class="mx-auto my-auto rounded-2xl object-contain object-center md:p-4 p-2 shadow-sm"
            style="max-width: 100%; max-height: 100%;"
            src={getImageUrl(file)}
          />
          <button
            class="hidden md:absolute btn btn-ghost bg-white text-red normal-case"
            on:click={() => deleteFile(file)}>Delete</button
          >
        </swiper-slide>
      {/each}
    {/if}
    <swiper-slide class="md:w-[300px] md:aspect-[1/1] w-full bg-black bg-opacity-50 rounded-2xl">
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
        <input
          style="visibility: hidden; position:absolute;"
          type="file"
          id="single"
          accept="image/*"
          bind:files
          on:change={uploadFile}
          disabled={uploading || pictures.length >= 10}
          bind:this={uploadButton}
        />
      </label>
    </swiper-slide>
  </swiper-container>
</div>
