<script lang="ts">
  import homeWave from "$lib/images/homeWave.svg";
  import homeWaveDesktop from "$lib/images/homeWaveDesktop.svg";
</script>

<div class="w-full md:h-[95vh] h-[80vh] bg-transparent relative xl:px-16 md:py-6 md:px-10 p-3 z-1">
  <div class="w-full h-full rotate-80 absolute top-0 left-0 z-1 md:hidden">
    <img src={homeWave} alt="homeWave" class="w-full h-full object-cover" />
  </div>
  <div class="w-full h-full rotate-80 absolute top-0 left-0 z-1 md:block hidden">
    <img src={homeWaveDesktop} alt="homeWave" class="w-full h-full object-cover" />
  </div>
  <div class="w-full h-full relative">
    <h1 class="text-black xl:text-7x md:text-6xl text-3xl font-bold">
      Think <span class="text-primary"> Safety. </span><br />
      Your valuables
      <br />
      <span class="text-primary"> secured. </span>
    </h1>
  </div>
</div>
