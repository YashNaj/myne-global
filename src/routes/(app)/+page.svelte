<script lang="ts">
  import Dashboard from "$lib/components/Dashboard.svelte";
  import DashboardFunctions from "$lib/components/DashboardFunctions.svelte";
  import { page } from "$app/stores";
  import { handleSession } from "@lucia-auth/sveltekit/client";
  import HomeTabs from "$lib/components/HomeTabs.svelte";
  import type { PageData, PageServerData } from "../$types";
  import CardFlippable from "$lib/components/CardFlippable.svelte";
  export let data: PageData;
  console.log("🚀 ~ file: +page.svelte:10 ~ data", data)
  handleSession(page);
  export let myneCards = data?.myneCards;
 
</script>

<div class="lg:hidden md:hidden xl:hidden 2xl:hidden p-2 ">
  <Dashboard myneCards = {myneCards} />
  <div class = 'quick-cards w-full flex flex-col justify-center content-center bg-secondary rounded-2xl h-[300px] mt-2'>
    <h1 class = 'pt-5 pl-6 text-3xl w-full flex justify start font-semibold '> 
      Quick Cards
    </h1>
    <div class = 'container h-[90%] flex justify-center content-center flex-wrap '>
      <div class = ' w-[90%] h-[90%]'>
        <swiper-container class="mySwiper" pagination="true" effect="coverflow" grab-cursor="true" centered-slides="true"
        slides-per-view="auto" coverflow-effect-rotate="50" coverflow-effect-stretch="0" coverflow-effect-depth="100"
        coverflow-effect-modifier="1" coverflow-effect-slide-shadows="true">
          <swiper-slide class= 'w-full'>
            <CardFlippable/>
          </swiper-slide>
          <swiper-slide>
            <CardFlippable/>
          </swiper-slide>
          <swiper-slide>
            <CardFlippable/>
          </swiper-slide>
          <swiper-slide>
            <CardFlippable/>
          </swiper-slide>
          <swiper-slide>
            <CardFlippable/>
          </swiper-slide>
          <swiper-slide>
            <CardFlippable/>
          </swiper-slide>
        </swiper-container>
      </div>
    </div>
  </div>
  <DashboardFunctions/>
</div>
<div class = 'hidden md:flex w-full h-full p-9 flex flex-col'>
  <HomeTabs myneCards = {myneCards}/>
</div>
<!--  -->
<style lang='postcss'>
  
  swiper-container {
    aspect-ratio: 5/7;
    background: none;
    border-radius: 10%;
    width: 100%;
    height: 100%;
  }

  swiper-slide {
    align-items: center;
    justify-content: center;
    border-radius: 18px;
    font-size: 22px;
    font-weight: bold;
    aspect-ratio: 5/7;
    scale: 60%;
  }
  .quick-cards{
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  }
</style>