<script lang="ts">
  import registerWave from "$lib/images/registerWave.svg";
  import homeWaveDesktop from "$lib/images/homeWaveDesktop.svg";
  import CardFan from "./CardFan.svelte";
</script>

<div
  class="w-full md:h-[95vh] h-[65vh] bg-[rgb(243,250,255)] relative xl:px-16 md:py-6 md:px-10 p-3 overflow-x-clip overflow-y-hidden flex flex-col md:flex-row"
>
  <div class="w-full h-full rotate-80 absolute bottom-0 left-10 scale-[130%] z-1 md:hidden">
    <img src={registerWave} alt="homeWave" class="w-full h-full object-cover select-none"  />
  </div>
  <div class="w-full h-full rotate-80 absolute bottom-0 left-0 z-1 md:block hidden">
    <img src={homeWaveDesktop} alt="homeWave" class="w-full h-full object-cover select-none " />
  </div>
  <div class="relative h-fit w-full">
    <h1 class="text-black xl:text-7x md:text-6xl text-3xl font-bold relative z-[2]">
      If it matters <br />
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

  <h1 class="absolute bottom-10 w-full font-semibold text-white pt-2">
    A robust list of categories and attributes, ever expanding and linked to your favorite merchants.
  </h1>
</div>
