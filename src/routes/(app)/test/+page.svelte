<script lang="ts">
  import { writable } from "svelte/store";
  import { quintOut } from "svelte/easing";
  import { spring } from "svelte/motion";
  import { page } from "$app/stores";

  import Spinner from "$lib/components/Spinner.svelte";
  import { trpc } from "$lib/trpc/client";
  import CardFlippable from "$lib/components/CardFlippable.svelte";
  let expanded = false;
  $: console.log("🚀 ~ file: +page.svelte:9 ~ expanded:", expanded);

  let expandWidth = 250;
  let expandHeight = 350;
  let expandedWidth = spring(expandWidth, {
    stiffness: 0.15,
    damping: 0.5,
  });
  let w: number;
  let h: number;
  let expandedHeight = spring(expandHeight, {
    stiffness: 0.15,
    damping: 0.5,
  });
  let expandedPosition = writable("relative")
  let zIndex = writable(1)

  function toggleExpand() {
    if (expanded === true) {
      expandedHeight.set(h);
      expandedWidth.set(w);
      expandedPosition.set('absolute')
      zIndex.set(99)
    } else {
      expandedHeight.set(expandHeight);
      expandedWidth.set(expandWidth);
      expandedPosition.set('relative')
      zIndex.set(1)
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
  console.log("🚀 ~ file: +page.svelte:11 ~ loadData ~ myneCardTest:", myneCardTest);
</script>

<div class="w-full h-full flex flex-col p-3 bg-slate-50">
  <h1 class="flex justify-start w-fit flex-1 font-semibold text-2xl p-3">OFFICAL MYNE TEST ENVIORMENT</h1>

  <div
    class="workspace-container flex w-full h-full rounded-2xl relative border border-dashed border-spacing-5 border-primary p-3"
  >
    <div bind:clientHeight={h} bind:clientWidth={w} class="w-full h-full flex  grid-rows-auto relative ">
      <!-- <div class="card wrapper w-fit h-fit  relative">
        <div
          class="{expanded
            ? 'transition-colors bg-gradient-to-t from-red-500 to-bg-orange-400 '
            : ''} bg-slate-400 rounded-2xl transition-colors grid grid-rows-[2fr_1fr_1fr]  "
          style="height: {$expandedHeight}px; width: {$expandedWidth}px; z-index: {$zIndex}; position: {$expandedPosition};"
        >
          <button
            class="expand btn btn-primary z-99 absolute"
            on:click={() => {
              expanded = !expanded;
              toggleExpand();
            }}
          >
            Expand
          </button>
          <div class="bg-success w-full h-full rounded-t-2xl">expansion</div>
          <div class="bg-error w-full h-full" />
          <div class="bg-primary w-full h-full rounded-b-2xl" />
        </div>
      </div>
      {#if expanded}
        <div class="rounded-2xl w-[250px] h-[350px] bg-none relative" />
      {/if}
      <div class="card wrapper w-fit h-fit  relative">
        <div
          class="bg-slate-400 rounded-2xl transition-colors grid grid-rows-[2fr_1fr_1fr]   "
          style="width: 250px; height: 350px; z-index : 1;"
        >
          <div class="bg-success w-full h-full rounded-t-2xl">expansion</div>
          <div class="bg-error w-full h-full" />
          <div class="bg-primary w-full h-full rounded-b-2xl" />
        </div>
      </div>
      <div class="card wrapper w-fit h-fit  relative">
        <div
        class="bg-slate-400 rounded-2xl transition-colors grid grid-rows-[2fr_1fr_1fr] "

          style="width: 250px; height: 350px; z-index : 1;" 
        >
          <div class="bg-success w-full h-full rounded-t-2xl">expansion</div>
          <div class="bg-error w-full h-full" />
          <div class="bg-primary w-full h-full rounded-b-2xl" />
        </div>
      </div> -->
      <CardFlippable {h} {w} myneCard = { {category: "jewelry"}}/>
      <CardFlippable {h} {w} myneCard = { {category: "watch"}}/>
      <CardFlippable {h} {w}  myneCard = { {category: "clothing"}}/>


    </div>
  </div>

  <!-- component-container -->
</div>
