<script lang="ts">
	import { onMount } from 'svelte';
  import CardCell from "$lib/components/CardCell.svelte";
  import UserSelector from "$lib/components/UserSelector.svelte";
  import { draw } from "svelte/transition";
  import type { PageData } from "./$types";
  import type Swiper from "swiper";

  let description = "";
  let value = "test";
  let label = "test";
  let toggle = false;
  export let data: PageData;
  let swiperEl
  onMount(()=>{
    swiperEl = document.querySelector('.test-swiper')
    console.log(swiperEl)
  })


</script>

<div
  class="w-full h-full flex flex-wrap justify-center content-center relative bg-black bg-opacity-25 backdrop-blur-lg"
>
  <swiper-container class="test-swiper w-80 h-80">
    <swiper-slide class="w-full h-full bg-primary text-white"> SLIDE 1 </swiper-slide>
    <swiper-slide class="w-full h-full bg-primary text-white"> SLIDE 2 </swiper-slide>
    <swiper-slide class="w-full h-full bg-primary text-white"> SLIDE 3 </swiper-slide>
  </swiper-container>
  <button on:click={()=>{
    swiperEl.swiper.slideNext()
  }} class = 'btn btn-primary normal-case'>

    Slide
  </button>
</div>



