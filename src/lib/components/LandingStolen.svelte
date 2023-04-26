<script lang="ts">
  import stolenWave from "$lib/images/stolenWave.svg";
  import homeWaveDesktop from "$lib/images/desktopWave_4.svg";
  import CardStaticStolen from "./CardStaticStolen.svelte";
  let staticStolen = {
    category: "jewelry",
    pictures: [""],
    brand: "Tiffany's",
    model: "Diamond Wire",
    subcategory: "Ring",
    brand_reference: "33279183",
    serial: "#1ASDASD8",
  };
</script>

<!--mobile-->
<div class="w-full md:h-[95vh] h-[80vh] mt-4 bg-[rgb(243,250,255)] relative xl:px-16 md:py-6 md:px-10 p-3 md:hidden">
  <div class="w-full h-full rotate-80 absolute bottom-0 left-0 z-1 md:hidden overflow-y-hidden">
    <img src={stolenWave} alt="homeWave" class="w-full h-full object-cover" />
  </div>
  <div class="w-full h-full rotate-80 absolute top-0 left-0 z-1 md:block hidden">
    <img src={homeWaveDesktop} alt="homeWave" class="w-full h-full object-cover" />
  </div>
  <div class="relative flex flex-col">
    <h1 class="text-black xl:text-7x md:text-6xl text-3xl font-bold">
      Purchase with <span class="text-primary"> confidence </span> <br />
    </h1>
    <h1 class="font-semibold mt-2">
      The Myne Global database flags items that have been reported lost or stolen, allowing you to avoid purchasing
      second-hand items with a questionable history.
    </h1>
  </div>

  <div class=" stolen-card-container flex justify-center">
    <div class="scale-[70%]">
      <CardStaticStolen
        staticPicture="https://media.tiffany.com/is/image/Tiffany/EcomItemL2/tiffany-tdiamond-wire-ring-33279183_991995_ED.jpg?&op_usm=1.75,1.0,6.0&$cropN=0.1,0.1,0.8,0.8&defaultImage=NoImageAvailableInternal&"
        cardProps={staticStolen}
      />
    </div>
  </div>
</div>
<!--desktop-->
<div
  class="w-full md:h-[95vh] h-[80vh] mt-4 bg-[rgb(243,250,255)] relative xl:px-16 md:py-6 md:px-10 p-3 md:flex hidden flex-col"
>
  <div
    class="w-full h-full [transform:scaleX(-1);] [-webkit-transform:scaleX(-1);] rotate-80 absolute top-10 left-0 z-1 md:block hidden"
  >
    <img src={homeWaveDesktop} alt="homeWave" class="w-full h-full object-cover" />
  </div>
  <div class="relative flex flex-col">
    <h1 class="text-black xl:text-7x md:text-6xl text-3xl font-bold">
      Purchase with <span class="text-primary"> confidence </span> <br />
    </h1>
    <h1 class="font-semibold mt-2 text-2xl">
      The Myne Global database flags items that have been reported lost or stolen, allowing you to avoid purchasing
      second-hand items with a questionable history.
    </h1>
  </div>

  <div class=" stolen-card-container flex justify-center relative">
    <div class="absolute top-48 scale-[150%]">
      <CardStaticStolen
        staticPicture="https://media.tiffany.com/is/image/Tiffany/EcomItemL2/tiffany-tdiamond-wire-ring-33279183_991995_ED.jpg?&op_usm=1.75,1.0,6.0&$cropN=0.1,0.1,0.8,0.8&defaultImage=NoImageAvailableInternal&"
        cardProps={staticStolen}
      />
    </div>
  </div>
</div>
