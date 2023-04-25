<script lang="ts">
  import homeWave from "$lib/images/homeWave.svg";
  import homeWaveDesktop from "$lib/images/desktopWave_1.svg";
  import introArt from "$lib/images/introArt.png";
  import blueIcon from "$lib/images/blue_icon.png";
  import blueLogo from "$lib/images/blue_myne_logo.png";
</script>

<!-- mobile -->
<div class="w-full md:h-[95vh] h-[100svh] relative xl:px-16 md:py-6 md:px-10 p-3 z-1 md:hidden">
  <div class="w-full h-full absolute top-0 right-10 rotate-[90deg] z-1 scale-[200%] md:hidden overflow-hidden">
    <img src={homeWave} alt="homeWave" class="w-full h-full object-cover" />
  </div>
  <div class="w-full max-h-full absolute top-80 right-32 z-1 scale-[100%] md:hidden overflow-hidden">
    <img src={blueIcon} alt="blueIcon" class="w-full h-full object-cover" />
  </div>
  <div class="w-full h-full relative">
    <img src={introArt} alt="home`Wave" class="absolute w-[400px] h-auto object-contian top-48 left-20 scale-[140%]" />
    <div class="flex flex-col mt-3">
      <div class="order-2 mt-4">
        <h1 class="text-black xl:text-7x md:text-6xl text-3xl font-bold">
          Think <span class="text-primary"> Safety. </span><br />
          Your valuables
          <br />
          <span class="text-primary"> secured. </span>
        </h1>
      </div>

      <div class="container order-1">
        <img alt="blueLogo" src={blueLogo} class="object-contain w-48" />
      </div>
    </div>
  </div>
  <a href="/auth/signup" class="bottom-20 btn bg-white text-primary normal-case absolute z-1"> Get Started Today </a>
</div>

<!-- desktop -->
<div class="w-full md:h-[95vh] h-[100svh] relative xl:px-16 md:py-6 md:px-10 p-3 z-1 hidden md:flex">
  <div class="w-full max-h-full absolute top-80 right-32 z-1 scale-[100%] md:hidden overflow-hidden">
    <img src={blueIcon} alt="blueIcon" class="w-full h-full object-cover" />
  </div>
  <div class="w-full h-full absolute top-0 md:top-20 left-0 z-1 md:block hidden overflow-y-hidden">
    <img src={homeWaveDesktop} alt="homeWave" class="w-full h-full object-cover" />
  </div>

  <div class="w-full h-full relative">
    <img src={introArt} alt="home`Wave" class="absolute w-[400px] h-auto object-contian top-80 xl:right-0 md:right-20 xl:scale-[300%] 
    md:scale-[200%]" />
    <div class="flex flex-col mt-3">
      <div class="order-2 mt-4">
        <h1 class="text-black xl:text-7x md:text-6xl text-3xl font-bold">
          Think <span class="text-primary"> Safety. </span><br />
          Your valuables <span class="text-primary"> secured. </span>
        </h1>
      </div>

      <div class="container order-1">
        <img alt="blueLogo" src={blueLogo} class="object-contain w-48" />
      </div>
    </div>
  </div>
  <a
    href="/auth/signup"
    class="w-fit h-fit  btn bg-white text-primary normal-case absolute xl:bottom-80 md:bottom-20 z-1 
    xl:text-3xl  xl:p-10 md:p-6 md:text-xl shadow-lg font-bold"
  >
    Get Started Today
  </a>
</div>
