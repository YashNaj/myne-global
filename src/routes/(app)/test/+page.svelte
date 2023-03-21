<script lang="ts">
  import { writable } from "svelte/store";
  import { quintOut } from "svelte/easing";
  import { spring } from "svelte/motion";
  import { page } from "$app/stores";

  import Spinner from "$lib/components/Spinner.svelte";
  import { trpc } from "$lib/trpc/client";
  import CardFlippable from "$lib/components/CardFlippable.svelte";
  import SwiperPictures from "$lib/components/SwiperPictures.svelte";
  let expanded = false;
  $: console.log("🚀 ~ file: +page.svelte:9 ~ expanded:", expanded);
  let scrollContainer;
  let expandWidth = 250;
  let expandHeight = 350;
  let expandedWidth = spring(expandWidth, {
    stiffness: 1.0,
    damping: 1.0,
  });
  let w: number;
  let h: number;
  export let scrollTop ;
  let expandedHeight = spring(expandHeight, {
    stiffness: 0.15,
    damping: 0.5,
  });
  let expandedPosition = writable("relative");
  let zIndex = writable(1);

  function toggleExpand() {
    if (expanded === true) {
      expandedHeight.set(h);
      expandedWidth.set(w);
      expandedPosition.set("absolute");
      zIndex.set(99);
    } else {
      expandedHeight.set(expandHeight);
      expandedWidth.set(expandWidth);
      expandedPosition.set("relative");
      zIndex.set(1);
    }
  }

  let cardWidth = "";

  let greeting = "press the button to load data";

  let myneCardTest;
  let loading = false;
  $: expanded = expanded;
  const loadData = async () => {
    loading = true;
    greeting = await trpc($page).greeting.query();
    myneCardTest = await trpc($page).getMyneCards.query();
    loading = false;
  };
  let pictures = [];
  console.log("🚀 ~ file: +page.svelte:11 ~ loadData ~ myneCardTest:", myneCardTest);
</script>

<div class="w-full h-full flex flex-col p-3 bg-slate-50">
  <h1 class="flex justify-start w-fit flex-1 font-semibold text-2xl p-3">OFFICAL MYNE TEST ENVIORMENT</h1>

  <div
    class="workspace-container flex w-full h-full rounded-2xl relative border border-dashed border-spacing-5 border-primary p-3"
  >
    <div
      bind:this={scrollContainer}
      bind:clientHeight={h}
      bind:clientWidth={w}
      on:scroll={() => (scrollTop = scrollContainer.scrollTop)}
      class="w-full h-[97%] grid  grid-rows-auto grid-cols-4 gap-2 relative overflow-y-auto"
    >
      <CardFlippable {scrollTop} {h} {w} myneCard={{ category: "clothing" }}
        ><SwiperPictures {pictures} /></CardFlippable
      >
      <CardFlippable {scrollTop} {h} {w} myneCard={{ category: "watch" }}><SwiperPictures {pictures} /></CardFlippable>

      <CardFlippable {scrollTop} {h} {w} myneCard={{ category: "jewelry" }}><SwiperPictures {pictures} /></CardFlippable
      >
      <CardFlippable {scrollTop} {h} {w} myneCard={{ category: "clothing" }}
        ><SwiperPictures {pictures} /></CardFlippable
      >
      <CardFlippable {scrollTop} {h} {w} myneCard={{ category: "watch" }}><SwiperPictures {pictures} /></CardFlippable>
      <CardFlippable {scrollTop} {h} {w} myneCard={{ category: "jewelry" }}><SwiperPictures {pictures} /></CardFlippable
      >
      <CardFlippable {scrollTop} {h} {w} myneCard={{ category: "clothing" }}
        ><SwiperPictures {pictures} /></CardFlippable
      >
      <CardFlippable {scrollTop} {h} {w} myneCard={{ category: "watch" }}><SwiperPictures {pictures} /></CardFlippable>
      <CardFlippable {scrollTop} {h} {w} myneCard={{ category: "jewelry" }}><SwiperPictures {pictures} /></CardFlippable
      >
      <CardFlippable {scrollTop} {h} {w} myneCard={{ category: "clothing" }}
        ><SwiperPictures {pictures} /></CardFlippable
      >
      <CardFlippable {scrollTop} {h} {w} myneCard={{ category: "watch" }}><SwiperPictures {pictures} /></CardFlippable>

      <CardFlippable {h} {w} myneCard={{ category: "jewelry" }}><SwiperPictures {pictures} /></CardFlippable>
    </div>
  </div>

  <!-- component-container -->
</div>
