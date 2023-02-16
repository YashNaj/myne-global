<script lang='ts'>
  import CardFlippable from "$lib/components/CardFlippable.svelte";
import DesktopWidget from "$lib/components/DesktopWidget.svelte";

</script>

<div class="full w-full h-full">
  <DesktopWidget title="Request History ">
    <input class="input input-lg w-[30rem]" placeholder="Search" />
    <swiper-container
      class="mySwiper"
      pagination="true"
      effect="coverflow"
      grab-cursor="true"
      centered-slides="true"
      slides-per-view="auto"
      coverflow-effect-rotate="50"
      coverflow-effect-stretch="0"
      coverflow-effect-depth="100"
      coverflow-effect-modifier="1"
      coverflow-effect-slide-shadows="true"
      navigation= 'true'
    >
    <swiper-slide>
        <CardFlippable />
      </swiper-slide>   
      <swiper-slide>
        <CardFlippable />
      </swiper-slide>     
      <swiper-slide>
        <CardFlippable />
      </swiper-slide>     
      <swiper-slide>
        <CardFlippable />
      </swiper-slide>     
      <swiper-slide>
        <CardFlippable />
      </swiper-slide>       
      <swiper-slide>
        <CardFlippable />
      </swiper-slide>     
      <swiper-slide>
        <CardFlippable />
      </swiper-slide>     
      
    </swiper-container>
  </DesktopWidget>
</div>

<style lang="postcss">
  swiper-container {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
  }
  swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    aspect-ratio: 5/7;
  }
</style>
