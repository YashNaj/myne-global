<script lang="ts">
  import CardSlider from "$lib/CardSlider.svelte";
  import CardFlippable from "$lib/components/CardFlippable.svelte";
import ChildId from "$lib/components/ChildId.svelte";
  import PageContainer from "$lib/components/PageContainer.svelte";
  import { onMount } from "svelte";
  import { ArrowCircleLeft, ArrowCircleRight, Icon } from "svelte-hero-icons";
  import Swiper from "swiper";
  import "swiper/swiper-bundle.css";
  let mySwiper;

  onMount(() => {
    mySwiper = new Swiper(".swiper-container", {
      slidesPerView: 1,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
      },
      navigation: {
        nextEl: ".flippable-next",
        prevEl: ".flippable-previous",
      },
    });
  });
  let expand = false; 
</script>
<div class = 'w-full h-full grid place-items-center relative'>

</div>
