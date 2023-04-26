<script lang="ts">
  import registerWave from "$lib/images/registerWave.svg";
  import homeWaveDesktop from "$lib/images/desktopWave_2.svg";
  import CardFan from "./CardFan.svelte";
</script>

<!-- mobile -->
<div
  class="w-full md:h-[95vh] h-[65vh] bg-[rgb(243,250,255)] relative xl:px-16 md:py-6 md:px-10 p-3 overflow-x-clip overflow-y-hidden flex flex-col md:flex-row md:hidden"
>
  <div class="w-full h-full rotate-80 absolute bottom-0 left-10 scale-[130%] z-1 md:hidden">
    <img src={registerWave} alt="homeWave" class="w-full h-full object-cover select-none" />
  </div>
  <div class="w-full h-full rotate-80 absolute bottom-0 left-0 z-1 md:block hidden">
    <img src={homeWaveDesktop} alt="homeWave" class="w-full h-full object-cover select-none" />
  </div>
  <div class="relative h-fit w-full">
    <h1 class="text-black xl:text-7x md:text-6xl text-3xl font-bold relative z-[2]">
      If it matters, <br />
      <span class="text-primary"> Register it. </span>
    </h1>
  </div>
  <div class="flex justify-center content-center flex-wrap">
    <div class="relative w-32 h-64 flex justify-center content-center flex-wrap">
      <div class="w-fit h-fit absolute justify-center top-0 left-0">
        <CardFan />
      </div>
    </div>
  </div>

  <h1 class="flex absolute bottom-10 w-96 font-semibold text-white pt-2">
    Enjoy an extensive and continuously expanding list of categories, all connected to your favorite
    merchants.  </h1>
</div>
<!-- desktop -->
<div
  class="w-full md:h-[95vh] h-[65vh] bg-[rgb(243,250,255)] relative xl:px-16 md:py-6 md:px-10 p-3 overflow-x-clip overflow-y-hidden flex-col md:flex hidden"
>
  <div class="w-full h-full rotate-80 absolute bottom-0 left-0 z-1 select-none">
    <img src={homeWaveDesktop} alt="homeWave" class="w-full h-full object-cover select-none" />
  </div>
  <div class="relative h-fit w-full z-[2]">
    <h1 class="text-black xl:text-7x md:text-6xl text-3xl font-bold relative ">
      If it matters, <br />
      <span class="text-primary"> Register it. </span>
    </h1>
  </div>
  <div class=" w-full h-full flex justify-center content-center place-items-center flex-wrap">
    <div class="relative w-[50%] h-full ">
      <div class=" relative w-fit h-fit justify-center top-0 left-[25%]">
        <CardFan />
      </div>
    </div>
  </div>

  <h1 class="flex absolute bottom-16 w-[40rem] font-semibold text-white pt-2 text-2xl p-4" >
    Enjoy an extensive and continuously expanding list of categories, all connected to your favorite
    merchants.  </h1>
</div>
