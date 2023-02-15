<script>
  import CardFlippable from "$lib/components/CardFlippable.svelte";
import { Rss } from "svelte-hero-icons";
import { register } from "swiper/element/bundle";

  register();

  const spaceBetween = 10;
  const onProgress = (e) => {
    const [swiper, progress] = e.detail;
    console.log(progress);
  };
  const onSlideChange = (e) => {
    console.log("slide changed");
  };
</script>

<div class = 'container w-full h-full flex justify-center'>

    <div class = 'wave btn  normal-case t h-[100px] w-[175px] relative'> 
      <div class = 'wave absolute background-image bg-contain top-0 right-0 z-0'>
        
      </div> 
      <p class = 'flex w-full justify start text-2xl pt-5'>
        Add a Card 
      </p>
    </div>
</div>

<style lang='postcss'>
  .wave {
    background-image: url('/src/lib/images/button-wave.svg');
    background-size: cover;
    background-repeat: no-repeat;
  }
</style>