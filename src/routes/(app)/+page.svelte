<script lang="ts">
  import Dashboard from "$lib/components/Dashboard.svelte";
  import DashboardFunctions from "$lib/components/DashboardFunctions.svelte";
  import { page } from "$app/stores";
  import { handleSession } from "@lucia-auth/sveltekit/client";
  import HomeTabs from "$lib/components/HomeTabs.svelte";
  import CardFlippable from "$lib/components/CardFlippable.svelte";
  import type { PageData } from "./$types";
  import { onMount } from "svelte";
  import Spinner from "$lib/components/Spinner.svelte";
  import Desktop from "$lib/components/Desktop.svelte";
  import { formResult } from "$lib/stores";
  console.log("🚀 ~ file: +page.svelte:13 ~ formResult:", formResult)
  export let data: PageData;
  handleSession(page);
  export let myneCards = data?.myneCards;
  export let isLoading = true;
  export let addCardOpen = false; 
  onMount(async () => {
    // Load data here
    isLoading = false;
  });
  $: console.log("🚀 ~ file: +page.svelte:24 ~ $page.form:", $page.form)
</script>

<div
  class="lg:hidden md:hidden xl:hidden 2xl:hidden p-2 w-full h-full flex flex-col "
>
  <Dashboard {myneCards} {isLoading} />
  <div
    class="quick-cards w-full flex flex-col justify-center content-center bg-secondary rounded-2xl h-[300px] mt-2"
  >
    <h1 class="pt-5 pl-6 text-3xl w-full flex justify start font-semibold ">
      Quick Cards
    </h1>
    <div
      class="container h-[90%] flex justify-center content-center flex-wrap  [box-shadow:rgba(0, 0, 0, 0.06)_0px_2px_4px_0px_inset] "
    >
      <div class=" w-[90%] h-[90%]">
        <swiper-container
          class="mySwiper touch-none aspect-[5/7] bg-none rounded-[10%] w-full h-full"
          pagination="true"
          grab-cursor="true"
          centered-slides="true"
          coverflow-effect-modifier="1"
          coverflow-effect-slide-shadows="true"
        >
          <swiper-slide
            class="w-full h-full items-center justify-center text-xl rounded-[18px]  font-bold aspect-[5/7] 
          "
          >
            <CardFlippable />
          </swiper-slide>
          <swiper-slide
            class="w-full h-full items-center justify-center text-xl rounded-[18px]  font-bold aspect-[5/7] 
          "
          >
            <CardFlippable />
          </swiper-slide>
          <swiper-slide
            class="w-full h-full items-center justify-center text-xl rounded-[18px]  font-bold aspect-[5/7] 
          "
          >
            <CardFlippable />
          </swiper-slide>
          <swiper-slide
            class="w-full h-full items-center justify-center text-xl rounded-[18px]  font-bold aspect-[5/7] 
          "
          >
            <CardFlippable />
          </swiper-slide>
          <swiper-slide
            class="w-full h-full items-center justify-center text-xl rounded-[18px]  font-bold aspect-[5/7] 
          "
          >
            <CardFlippable />
          </swiper-slide>
          <swiper-slide
            class="w-full h-full items-center justify-center text-xl rounded-[18px]  font-bold aspect-[5/7] 
          "
          >
            <CardFlippable />
          </swiper-slide>
        </swiper-container>
      </div>
    </div>
  </div>
  <DashboardFunctions />
</div>
<div
  class="hidden md:flex w-full h-[94vh] py-3 px-5 flex-col overflow-y-hidden scrollbar-track-transparent "
>
<Desktop {data} {addCardOpen}/>
</div>
x