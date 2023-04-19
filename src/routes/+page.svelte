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
    rootMargin: "-20%",
    unobserveOnEnter: true,
  };
  $: console.log("is in view", isInView);
  const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
    isInView = detail.inView;
    scrollDirection = detail.scrollDirection.vertical;
  };
</script>

<div class="w-full h-full flex flex-col overflow-x-hidden [user-select:none]">
  <div class="w-full md:h-[95vh] h-[44vh] bg-transparent relative xl:px-16 md:py-6 md:px-10 p-3 z-1">
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
  <div class="w-full md:h-[95vh] h-[44vh] bg-[rgb(243,250,255)] relative xl:px-16 md:py-6 md:px-10 p-3 overflow-hidden">
    <div class="relative" />
    <h1 class="text-black xl:text-7x md:text-6xl text-3xl font-bold">
      If it matters <br />
      <span class="text-primary"> Register it. </span>
    </h1>
    <div class="absolute top-0 right-10 h-full w-[75%]">
      <div class="container relative flex justify-center">
        <div
          use:inview={options}
          on:inview_change={handleChange}
          class="card-fan group absolute xl:left-[400px] top-10 left-16 xl:scale-[120%] scale-[75%]"
        >
          <div
            class="will-change-auto absolute transition-transform  {isInView
              ? 'translate-x-[-200px] rotate-[-10deg] '
              : 'translate-x-[0px] rotate-[0deg]'}"
          >
            <CardStatic />
          </div>
          <div
            class="will-change-auto absolute transition-transform {isInView
              ? 'translate-x-[100px] rotate-[10deg] '
              : 'translate-x-[0px] rotate-[0deg]'}"
          >
            <CardStatic />
          </div>
          <div
            class="will-change-auto absolute transition-transform {isInView
              ? 'translate-x-[-100px] rotate-[-10deg]'
              : 'translate-x-[0px] rotate-[0deg]'}"
          >
            <CardStatic />
          </div>
          <div
            class="will-change-auto absolute transition-transform {isInView
              ? 'translate-x-[200px] rotate-[10deg] '
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
  <div class="w-full md:h-[95vh] h-[44vh] bg-[rgb(243,250,255)] relative xl:px-16 md:py-6 md:px-10 p-3">
    <h1 class="text-black xl:text-7x md:text-6xl text-3xl font-bold">
      Myne Dashboard <br />
      <span class="text-primary"> Manage, Transfer, Report </span>
    </h1>
  </div>
  <div class="w-full md:h-[95vh] h-[44vh] bg-[rgb(243,250,255)] relative xl:px-16 md:py-6 md:px-10 p-3">
    <h1 class="text-black xl:text-7x md:text-6xl text-3xl font-bold">
      Buy With <span class="text-primary"> Confidence </span> <br />
    </h1>
  </div>
  <div class="w-full md:h-[95vh] h-[44vh] bg-[rgb(243,250,255)] relative xl:px-16 md:py-6 md:px-10 p-3">
    <h1 class="text-black xl:text-7x md:text-6xl text-3xl font-bold">
      Stolen Search <br /> <span class="text-primary"> Knowledge is power. </span> <br />
    </h1>
  </div>
  <div class="w-full md:h-[95vh] h-[44vh] bg-[rgb(243,250,255)] relative xl:px-16 md:py-6 md:px-10 p-3">
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
