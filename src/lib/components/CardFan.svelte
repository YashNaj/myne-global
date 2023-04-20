<script lang="ts">
  import { inview } from "svelte-inview";
  import type { ObserverEventDetails, ScrollDirection, Options } from "svelte-inview";
  import CardStatic from "./CardStatic.svelte";

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

<div
  use:inview={options}
  on:inview_change={handleChange}
  class="card-fan group w-fit h-fit xl:left-[400px] top-10 left-16 xl:scale-[120%] scale-[55%]"
>
  <div
    class="will-change-auto absolute top-0 left-0 [transform-origin:_50%_100%;] transition-transform {isInView
      ? ' rotate-[-40deg]'
      : ' rotate-[0deg]'}"
  >
    <CardStatic cardProps = {
      {category: 'watch',
      pictures: [''],}
    } />
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
