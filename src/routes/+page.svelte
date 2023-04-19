<script lang="ts">
  import CardStatic from "$lib/components/CardStatic.svelte";
  import MyneVideos from "$lib/components/MyneVideos.svelte";
  import homeWave from "$lib/images/homeWave.svg";
  import homeWaveDesktop from "$lib/images/homeWaveDesktop.svg";
  import { inview } from "svelte-inview";
  import type { ObserverEventDetails, ScrollDirection, Options } from "svelte-inview";

  let isInView: boolean;
  $: isInView = isInView;
  let scrollDirection;
  const options: Options = {
    rootMargin: "-30%",
    unobserveOnEnter: true,
  };
  $: console.log("is in view", isInView);
  const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
    isInView = detail.inView;
    scrollDirection = detail.scrollDirection.vertical;
  };
</script>

<div class="w-full h-full flex flex-col overflow-x-hidden [user-select:none] z-50">
  <div class="w-full md:h-[95vh] h-[60vh] bg-transparent relative xl:px-16 md:py-6 md:px-10 p-3 z-1">
    <div class="w-full h-full rotate-80 absolute top-0 left-0 z-1 md:hidden">
      <img src={homeWave} alt="homeWave" class="w-full h-full object-cover" />
    </div>
    <div class="w-full h-full rotate-80 absolute top-0 left-0 z-1 md:block hidden">
      <img src={homeWaveDesktop} alt="homeWave" class="w-full h-full object-cover" />
    </div>
    <div class="w-full h-full relative">
      <h1 class="text-black xl:text-7x md:text-6xl text-3xl font-bold">
        Think <span class="text-primary"> Safety. </span><br />
        Your valuables secured.
      </h1>
    </div>
  </div>
  <div
    class="w-full md:h-[95vh] h-[60vh] bg-[rgb(243,250,255)] relative xl:px-16 md:py-6 md:px-10 p-3 overflow-hidden flex flex-col md:flex-row"
  >
    <h1 class="text-black xl:text-7x md:text-6xl text-3xl font-bold relative z-[2]">
      If it matters <br />
      <span class="text-primary"> Register it. </span>
    </h1>
    <div class="h-full w-full">
      <h1 class="absolute bottom-10 w-[200px] font-semibold">
        A robust list of categories and attributes, ever expanding and linked to your favorite merchants.
      </h1>
      <div class="container relative flex justify-center">
        <div
          use:inview={options}
          on:inview_change={handleChange}
          class="card-fan group xl:left-[400px] top-10 left-16 xl:scale-[120%] scale-[55%]"
        >
          <div
            class="will-change-auto absolute top-0 left-0 [transform-origin:_50%_100%;] transition-transform {isInView
              ? ' rotate-[-40deg]'
              : ' rotate-[0deg]'}"
          >
            <CardStatic />
          </div>
          <div
            class="will-change-auto absolute [transform-origin:_50%_100%;] transition-transform {isInView
              ? 'translate-x-[0] rotate-[40deg] '
              : 'translate-x-[0px] rotate-[0deg]'}"
          >
            <CardStatic />
          </div>
          <div
            class="will-change-auto absolute transition-transform {isInView
              ? ' rotate-[-10deg]  [transform-origin:_50%_100%;]'
              : 'translate-x-[0px] rotate-[0deg]'}"
          >
            <CardStatic />
          </div>
          <div
            class="will-change-auto absolute transition-transform {isInView
              ? ' rotate-[10deg] [transform-origin:_50%_100%;] '
              : 'translate-x-[0px] rotate-[0deg]'}"
          >
            <CardStatic />
          </div>

          <div class="absolute transition-transform">
            <CardStatic />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="w-full md:h-[95vh] h-[90vh] bg-[rgb(243,250,255)] relative xl:px-16 md:py-6 md:px-10 p-3">
    <h1 class="text-black xl:text-7x md:text-6xl text-3xl font-bold z-[50] overflow-y-clip flex flex-col">
      Myne Dashboard <br />
      <span class="text-primary"> Manage, Transfer, Report </span>
    </h1>
    <div class = 'w-full h-full'>
        <div class="mockup-phone absolute scale-[40%] z-[4] left-[10rem] bottom-[-90px]">
          <div class="camera" />
          <div class="display">
            <div class="artboard artboard-demo phone-1 'bg-white/20 w-full h-full backdrop-blur-[300px] backdrop-brightness-105">Hi.</div>
          </div>
        </div>
      <div class="absolute w-[400px] bottom-32 left-[4rem] z-[0]">
        <figure
          class="ml-auto mr-20 relative z-[1] max-w-full w-[50rem] h-auto rounded-b-lg shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] dark:shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)]"
        >
          <div class="relative flex items-center max-w-[50rem] bg-gray-800 rounded-t-lg py-2 px-24 dark:bg-gray-700">
            <div class="flex space-x-1 absolute top-2/4 left-4 -translate-y-1">
              <span class="w-2 h-2 bg-gray-600 rounded-full dark:bg-gray-600" />
              <span class="w-2 h-2 bg-gray-600 rounded-full dark:bg-gray-600" />
              <span class="w-2 h-2 bg-gray-600 rounded-full dark:bg-gray-600" />
            </div>
            <div
              class="flex justify-center items-center w-full h-full bg-gray-700 text-[.25rem] text-gray-400 rounded-sm sm:text-[.5rem] dark:bg-gray-600 dark:text-gray-400"
            >
              www.myneglobal.com
            </div>
          </div>
  
          <div class="bg-gray-800 rounded-b-lg h-[200px]">
            <div class = 'bg-white/20 w-full h-full backdrop-blur-[300px] backdrop-brightness-105 rounded-b-md'>

            </div>
          </div>
        </figure>
      </div>
    </div>
   
  </div>
  <div class="w-full md:h-[95vh] h-[60vh] bg-[rgb(243,250,255)] relative xl:px-16 md:py-6 md:px-10 p-3">
    <h1 class="text-black xl:text-7x md:text-6xl text-3xl font-bold">
      Buy With <span class="text-primary"> Confidence </span> <br />
    </h1>
  </div>
  <div class="w-full md:h-[95vh] h-[60vh] bg-[rgb(243,250,255)] relative xl:px-16 md:py-6 md:px-10 p-3">
    <h1 class="text-black xl:text-7x md:text-6xl text-3xl font-bold">
      History Reports <br /> <span class="text-primary"> Avoid the headaches. </span> <br />
    </h1>
  </div>
  <div class="w-full md:h-[95vh] h-[60vh] bg-[rgb(243,250,255)] relative xl:px-16 md:py-6 md:px-10 p-3">
    <h1 class="text-black xl:text-7x md:text-6xl text-3xl font-bold">
      Child ID <br />
      <span class="text-primary"> Advanced Piece of Mind. </span>
    </h1>
  </div>
  <div class="w-full h-full bg-[rgb(243,250,255)] relative xl:px-16 md:py-6 md:px-10 p-3 overflow-x-hidden">
    <h1 class="text-black xl:text-7x md:text-6xl text-3xl font-bold">
      Guides <br />
    </h1>
    <p class="font-semibold mt-2">
      A curated list of videos to help you understand the Myne platform and how to use it.
    </p>
    <MyneVideos />
  </div>
</div>
