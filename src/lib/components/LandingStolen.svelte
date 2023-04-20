<script lang="ts">
  import stolenWave from "$lib/images/stolenWave.svg";
  import homeWaveDesktop from "$lib/images/homeWaveDesktop.svg";
  import CardStaticStolen from "./CardStaticStolen.svelte";
</script>

<div class="w-full md:h-[95vh] h-[80vh] bg-[rgb(243,250,255)] relative xl:px-16 md:py-6 md:px-10 p-3">
  <div class="w-full h-full rotate-80 absolute bottom-0 left-0 z-1 md:hidden overflow-y-hidden">
    <img src={stolenWave} alt="homeWave" class="w-full h-full object-cover" />
  </div>
  <div class="w-full h-full rotate-80 absolute top-0 left-0 z-1 md:block hidden">
    <img src={homeWaveDesktop} alt="homeWave" class="w-full h-full object-cover" />
  </div>
  <div class="relative flex flex-col">
    <h1 class="text-black xl:text-7x md:text-6xl text-3xl font-bold">
      Buy With <span class="text-primary"> Confidence </span> <br />
    </h1>
    <h1 class="font-semibold mt-2">
      Myne's database will ping items reported stolen as such, no more guessing when purchasing second hand high value
      goods.
    </h1>
  </div>

  <div class=" stolen-card-container flex justify-center">
    <div class="scale-[70%]">
      <CardStaticStolen />
    </div>
  </div>
</div>
