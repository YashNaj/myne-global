<script>
  import CardFlippable from "$lib/components/CardFlippable.svelte";
  import { Rss } from "svelte-hero-icons";
  import { register } from "swiper/element/bundle";
  import svgLogo from "$lib/images/logo.svg";
  import { draw } from "svelte/transition";
  register();

  const spaceBetween = 10;
  const onProgress = (e) => {
    const [swiper, progress] = e.detail;
    console.log(progress);
  };
  const onSlideChange = (e) => {
    console.log("slide changed");
  };
  let toggle = false;
  function setToggle() {
    toggle = !toggle;
  }
</script>
<div class = 'desktop-background h-full w-full z-0 absolute top-0 '/>


  
<style lang='postcss'>
  .auth-box {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    background: rgb(231, 240, 255);
  }
   input{
      color: primary;
      background-color:white;
    }
    .desktop-background{
      background-image: url("$lib/images/desktopAuthWave.svg");
      background-size: cover; 
      background-repeat: no-repeat;
    }
    
</style>
