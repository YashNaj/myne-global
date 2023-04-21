<script lang="ts">
  import { inview } from "svelte-inview";
  import type { ObserverEventDetails, ScrollDirection, Options } from "svelte-inview";
  import CardStatic from "./CardStatic.svelte";

  let isInView: boolean;
  $: isInView = isInView;
  let scrollDirection;
  const options: Options = {
    rootMargin: "-10%",
    unobserveOnEnter: true,
  };
  $: console.log("is in view", isInView);
  const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
    isInView = detail.inView;
    scrollDirection = detail.scrollDirection.vertical;
  };
  let staticWatch = {
    category: "watch",
    pictures: [""],
    brand: "Rolex",
    model: "Cosmograph Daytona",
    brand_reference: 6239,
  };
  let staticArt = { category: "art", pictures: [""], subcategory: "Painting", year: '2023' };
  let staticJewelry = {
    category: "jewelry",
    pictures: [""],
    subcategory: "bracelet",
    brand: "Cartier",
    model: "Love Bracelet",
    brand_reference: "B6035710",
    year: 2023,
  };
</script>

<div
  use:inview={options}
  on:inview_change={handleChange}
  class="card-fan group w-fit h-fit xl:left-[400px] xl:scale-[120%] scale-[55%]"
>
  <div
    class="will-change-auto absolute top-0 left-0 [transform-origin:_50%_100%;] transition-transform {isInView
      ? 'translate-x-[-100px]  rotate-[-40deg]'
      : ' rotate-[0deg]'}"
  >
    <CardStatic
      staticPicture="https://www.cartier.com/variants/images/1647597277058388/img1/w1242_tpadding12.jpg"
      cardProps={staticJewelry}
    />
  </div>
  <div
    class="will-change-auto absolute [transform-origin:_50%_100%;] transition-transform {isInView
      ? 'translate-x-[50px] rotate-[40deg] '
      : 'translate-x-[0px] rotate-[0deg]'}"
  >
    <CardStatic
      staticPicture="https://d3rf6j5nx5r04a.cloudfront.net/TvBWlIqGfhmaBXbAU8pzlLDsuLM=/1120x0/product/d/3/9792bfd06d3948da8396fda2fabb6f43_opt.jpg"
      cardProps={staticArt}
    />
  </div>
  <div
    class="will-change-auto absolute transition-transform {isInView
      ? ' rotate-[-20deg] translate-y-[-20px]  [transform-origin:_50%_100%;]'
      : 'translate-x-[0px] rotate-[0deg]'}"
  >
    <CardStatic
      staticPicture="https://www.akc.org/wp-content/uploads/2015/11/Cane-Corso-standing-in-the-park.jpg"
      cardProps={{ category: "dog", pictures: [""] }}
    />
  </div>
  <div
    class="will-change-auto absolute transition-transform {isInView
      ? ' rotate-[20deg] translate-y-[-20px] [transform-origin:_50%_100%;] '
      : 'translate-x-[0px] rotate-[0deg]'}"
  >
    <CardStatic
      staticPicture="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/F40_Ferrari_20090509.jpg/800px-F40_Ferrari_20090509.jpg"
      cardProps={{ category: "automobile", pictures: [""] }}
    />
  </div>

  <div class="absolute transition-transform">
    <CardStatic
      staticPicture="https://content.rolex.com/v7/dam/2023/upright-c/m126519ln-0004.png?impolicy=v7&imwidth=640"
      cardProps={staticWatch}
    />
  </div>
</div>
