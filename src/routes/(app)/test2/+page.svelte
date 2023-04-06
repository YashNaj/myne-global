<script lang="ts">
  import type { PageData } from "./$types";
  import Card from "$lib/components/Card.svelte";
  import { userCards } from "$lib/store";
  import CardCell from "$lib/components/CardCell.svelte";
  import UserSelector from "$lib/components/UserSelector.svelte";
  import { draw } from "svelte/transition";
  import type Swiper from "swiper";
  import { onMount } from "svelte";

  export let data: PageData;
  let cards;
  console.log($userCards);
  let swiperEl;
  
</script>

<div class="w-full h-full">
  <!-- swiper code  -->
  <!-- <swiper-container class="test-swiper w-80 h-80">
    <swiper-slide class="w-full h-full bg-primary text-white"> SLIDE 1 </swiper-slide>
    <swiper-slide class="w-full h-full bg-primary text-white"> SLIDE 2 </swiper-slide>
    <swiper-slide class="w-full h-full bg-primary text-white"> SLIDE 3 </swiper-slide>
  </swiper-container>
  <button on:click={()=>{
    swiperEl.swiper.slideNext()
  }} class = 'btn btn-primary normal-case'>

    Slide
  </button> -->
  <div class="test-card-container w-full h-full flex flex-wrap gap-3 justify-start p-3 overflow-y-auto">
    <Card/>
  </div> 
</div>
