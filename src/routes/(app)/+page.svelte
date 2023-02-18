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

<div class="lg:hidden md:hidden xl:hidden 2xl:hidden p-2 w-full h-full flex flex-col ">
  <Dashboard myneCards = {myneCards} />
  <div class = 'quick-cards w-full flex flex-col justify-center content-center bg-secondary rounded-2xl h-[300px] mt-2'>
    <h1 class = 'pt-5 pl-6 text-3xl w-full flex justify start font-semibold '> 
      Quick Cards
    </h1>
    <div class = 'container h-[90%] flex justify-center content-center flex-wrap  [box-shadow:rgba(0, 0, 0, 0.06)_0px_2px_4px_0px_inset] '>
      <div class = ' w-[90%] h-[90%]'>
        <swiper-container class="mySwiper touch-none aspect-[5/7] bg-none rounded-[10%] w-full h-full" pagination="true"  grab-cursor="true" centered-slides="true"

        coverflow-effect-modifier="1" coverflow-effect-slide-shadows="true">
          
        <swiper-slide class= 'w-full h-full items-center justify-center text-xl rounded-[18px]  font-bold aspect-[5/7] 
          '>
          
            <CardFlippable/>
          </swiper-slide>
          <swiper-slide class= 'w-full h-full items-center justify-center text-xl rounded-[18px]  font-bold aspect-[5/7] 
          '>
          
            <CardFlippable/>
          </swiper-slide>
          <swiper-slide class= 'w-full h-full items-center justify-center text-xl rounded-[18px]  font-bold aspect-[5/7] 
          '>
          
            <CardFlippable/>
          </swiper-slide>
          <swiper-slide class= 'w-full h-full items-center justify-center text-xl rounded-[18px]  font-bold aspect-[5/7] 
          '>
          
            <CardFlippable/>
          </swiper-slide>
          <swiper-slide class= 'w-full h-full items-center justify-center text-xl rounded-[18px]  font-bold aspect-[5/7] 
          '>
          
            <CardFlippable/>
          </swiper-slide>
          <swiper-slide class= 'w-full h-full items-center justify-center text-xl rounded-[18px]  font-bold aspect-[5/7] 
          '>
          
            <CardFlippable/>
          </swiper-slide>

      </div>
    </div>
  </div>
  <DashboardFunctions/>
</div>
<div class = 'hidden md:flex w-full h-[95%] full py-3 px-5 flex-col overflow-y-hidden '>
  <HomeTabs myneCards = {myneCards}/>
</div>