<script lang="ts">
  import childwave from "$lib/images/childwave.svg";
  import homeWaveDesktop from "$lib/images/homeWaveDesktop.svg";
</script>

<div class="w-full md:h-[95vh] h-[60vh] bg-[rgb(243,250,255)] relative xl:px-16 md:py-6 md:px-10 p-3">
  <div class="w-full h-full rotate-80 absolute top-48 left-0 z-1 md:hidden overflow-hidden">
    <img src={childwave} alt="childwave" class="w-full h-full object-cover" />
  </div>
  <div class="w-full h-full rotate-80 absolute top-0 left-0 z-1 md:block hidden overflow-y-hidden">
    <img src={homeWaveDesktop} alt="homeWave" class="w-full h-full object-cover" />
  </div>
  <h1 class="text-black xl:text-7x md:text-6xl text-3xl font-bold relative">
    Child ID <br />
    <span class="text-primary"> Advanced Piece of Mind. </span>
  </h1>
</div>
