<script lang="ts">
  import Spinner from "$lib/components/Spinner.svelte";
  import { afterUpdate, beforeUpdate, createEventDispatcher } from "svelte";
  import { supabase } from "$lib/supabaseClient";
  import { CloudUpload, Icon } from "svelte-hero-icons";
  import Swiper from "swiper";
  ``;
  import { onMount } from "svelte";
  let parentEl;

  export let size = 10;
  beforeUpdate(()=>{
    for (let picture of pictures) {
          if (pictures?.length > 0 && pictures[0] !== "")
            downloadImage(picture).then((url) => {
              const imgElement = document.getElementById(`img-${picture}`);
              imgElement?.setAttribute("src", url);
            });
        }
  })
  onMount(() => {
    if (parentEl) {
      parentEl.addEventListener("click", (event) => {
        const targetEl = event.target as HTMLElement;
        const swiperEl = parentEl.swiper;
        if (targetEl.classList.contains("swiper-button-pictures-next")) {
          const swiperEl = parentEl.swiper;
          console.log("🚀 ~ file: CardSlider.svelte:33 ~ parentEl.addEventListener ~ swiperEl:", swiperEl);
          if (swiperEl) {
            swiperEl.slideNext();
          }
        } else if (targetEl.classList.contains("swiper-button-pictures-prev")) {
          console.log("🚀 ~ file: SwiperPictures.svelte:23 ~ parentEl.addEventListener ~ pictures:", pictures);
          const swiperEl = parentEl.swiper;
          if (swiperEl) {
            swiperEl.slidePrev();
          }
        }
        
      });
    }
  });

  export let pictures: string[] = [];
  console.log("🚀 ~ file: SwiperPictures.svelte:33 ~ pictures:", pictures);
  $: pictures = pictures;
  console.log("🚀 ~ file: SwiperPictures.svelte:35 ~ pictures:", pictures);
  console.log("🚀 ~ file: SwiperPictures.svelte:35 ~ pictures:", pictures);
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
        console.log("Error downloading image: ", error.message);
      }
    }
  };

  const uploadCardPicture = async () => {
    try {
      uploading = true;

      if (!files || files.length === 0) {
        throw new Error("You must select an image to upload.");
      }

      if (pictures.length >= 10) {
        console.log("🚀 ~ file: SwiperPictures.svelte:67 ~ uploadCardPicture ~ pictures:", pictures);
        throw new Error("You cannot upload more than 10 pictures.");
      }
      console.log("🚀 ~ file: SwiperPictures.svelte:70 ~ uploadCardPicture ~ pictures:", pictures);

      const file = files[0];
      const fileExt = file.name.split(".").pop();
      const filePath = `${Math.random()}.${fileExt}`;

      let { error } = await supabase.storage.from("card-images").upload(filePath, file);

      if (error) {
        throw error;
      }

      pictures = [...pictures, filePath];
      console.log("🚀 ~ file: SwiperPictures.svelte:77 ~ uploadCardPicture ~ pictures:", pictures);

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

</script>

<swiper-container
  bind:this={parentEl}
  observer={true}
  observer-parents={true}
  slides-per-view="1"
  class="picture-swiper  w-[17rem] h-46 rounded-2xl "
  virtual="true"
>
  {#if pictures.length > 0}
    {#each pictures as picture, i}
      <swiper-slide class=" object-cover rounded-2xl flex justify-center  bg-black bg-opacity-30" id={`item-${i}`}>
        {#if picture}
          <img
            loading="lazy"
            id={`img-${picture}`}
            src=""
            alt="Uploaded picture"
            class="object-cover  bg-black bg-opacity"
          />
        {:else}
          <div class="object-cover bg-black bg-opacity" />
        {/if}
        <div
          class="absolute bottom-0 h-10  w-full  flex  rounded--2xl bg-black bg-opacity-5 picture-swiper-nav-container z-99 "
        >
          <div class="btn btn-ghost swiper-button-pictures-next flex-1 order-2 h-full normal-case text-white">Next</div>
          <div class="btn btn-ghost swiper-button-pictures-prev flex-1 h-full normal-case text-white">Prev</div>
        </div>
      </swiper-slide>
    {/each}
  {/if}
  <swiper-slide class=" rounded-box  bg-black bg-opacity-10">
    <div class="w-full h-full flex">
      <div class="w-full h-full ">
        <label
          class=" font-semibold text-center w-full h-full text-white bg-black bg-opacity-40  bg-200 normal-case  flex flex-col justify-center content-center flex-nowrap"
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
        on:change={uploadCardPicture}
        disabled={uploading || pictures.length >= 10}
        bind:this={uploadButton}
      />
    </div>
    <!-- <div
          class="absolute  bottom-0 h-10  flex  rounded--2xl bg-black bg-opacity-5 picture-swiper-nav-container z-99 "
        >
          <div class="btn btn-ghost swiper-button-pictures-next flex-1 order-2 h-full normal-case text-white"> Next </div>
          <div class="btn btn-ghost swiper-button-pictures-prev flex-1 h-full normal-case text-white"> Prev </div>
    
        </div>
        </swiper-slide> -->
    <div
      class="absolute bottom-0 h-10  w-full  flex  rounded--2xl bg-black bg-opacity-5 picture-swiper-nav-container z-99 "
    >
      <div class="btn btn-ghost swiper-button-pictures-next flex-1 order-2 h-full normal-case text-white">Next</div>
      <div class="btn btn-ghost swiper-button-pictures-prev flex-1 h-full normal-case text-white">Prev</div>
    </div>
  </swiper-slide>

  <div
    class="absolute bottom-0 h-10  w-full  flex  rounded--2xl bg-black bg-opacity-5 picture-swiper-nav-container z-99 "
  >
    <div class="btn btn-ghost swiper-button-pictures-next flex-1 order-2 h-full normal-case text-white">Next</div>
    <div class="btn btn-ghost swiper-button-pictures-prev flex-1 h-full normal-case text-white">Prev</div>
  </div>
</swiper-container>
