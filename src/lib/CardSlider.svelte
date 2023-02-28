<script lang="ts">
  import focusSlide from "$lib/swiperActions";
  import ChildId from "$lib/components/ChildId.svelte";
  import PageContainer from "$lib/components/PageContainer.svelte";
  import { onMount } from "svelte";
  import { ArrowCircleLeft, ArrowCircleRight, Icon } from "svelte-hero-icons";
  import Swiper from "swiper";
  import "swiper/swiper-bundle.css";
  import CardCell from "./components/CardCell.svelte";
  export let cardProps;
  export let description;
  export let fieldsBackOneValues;
  export let fieldsBackTwoValues;
  export let fieldsBackThreeValues;
  export let generalFieldsBack;
  let swiperId = ".flippable-card-swiper";
  let swiperPagination = ".swiper-pagination-flip-card";
  let nextEl = ".flippable-next";
  let prevEl = ".flippable-prev";
  let swiperIdClass = "flippable-card-swiper";
  let swiperPaginationClass = "swiper-pagination-flipcard";
  let nextElClass = "flippable-next";
  let prevElClass = "flippable-prev";
  $: if (cardProps.id !== undefined) {
   swiperId = ".flippable-card-swiper-" + cardProps.id;
   swiperPagination = ".swiper-pagination-flip-card" + cardProps.id;
   nextEl = ".flippable-next-" + cardProps.id;
   prevEl = ".flippable-prev-" + cardProps.id;
   swiperIdClass = "flippable-card-swiper-" + cardProps.id;
   swiperPaginationClass = "swiper-pagination-flipcard-" + cardProps.id;
   nextElClass = "flippable-next-" + cardProps.id;
   prevElClass = "flippable-prev-" + cardProps.id;
  }
 
  let mySwiper;
  onMount(() => {
    mySwiper = new Swiper(swiperId, {
      slidesPerView: 1,
      pagination: {
        el: swiperPagination,
        type: "bullets",
      },
      navigation: {
        nextEl: nextEl,
        prevEl: prevEl,
      },
    });
  });
  let expand = false;
</script>

<div class=" rounded-3xl w-full h-30 overflow-hidden relative">
  <div
    class="{swiperIdClass} h-full flippable-card-swiper back-card_card-general-2  touch-none bg-opacity-20 bg-slate-400 rounded-xl flex flex-col p-1"
  >
    <div class="swiper-wrapper w-full h-full">
      {#if fieldsBackOneValues?.length > 0}
        <div class="swiper-slide w-full h-full p-1">
          <div
            class=" grid grid-cols-2 grid-rows-3 grid-gap-0 w-full h-full p-1"
          >
            {#each fieldsBackOneValues as fieldBackOne}
              <CardCell
                bind:value={cardProps[fieldBackOne.value]}
                gridClass={fieldBackOne.location}
                label={fieldBackOne.label}
                justifyCell={fieldBackOne.justify}
              />
            {/each}
          </div>
        </div>
      {/if}
      {#if fieldsBackTwoValues?.length > 0}
        <div class="swiper-slide w-full h-full p-1">
          <div
            class=" grid grid-cols-2 grid-rows-3 grid-gap-0 w-full h-full p-1"
          >
            {#each fieldsBackTwoValues as fieldBackTwo}
              <CardCell
                bind:value={cardProps[fieldBackTwo.value]}
                gridClass={fieldBackTwo.location}
                label={fieldBackTwo.label}
                justifyCell={fieldBackTwo.justify}
              />
            {/each}
          </div>
        </div>
      {/if}
      {#if fieldsBackThreeValues?.length > 0}
        <div class="swiper-slide w-full h-full">
          <div class=" grid grid-cols-2 grid-rows-3 gap-0 w-full h-full p-1">
            {#each fieldsBackThreeValues as fieldBackThree}
              <CardCell
                bind:value={cardProps[fieldBackThree.value]}
                gridClass={fieldBackThree.location}
                label={fieldBackThree.label}
                justifyCell={fieldBackThree.justify}
              />
            {/each}
          </div>
        </div>
      {/if}
      <div class="swiper-slide w-full h-full p-1">
        <div class="full w-full h-full flex justify-center">
          <div
            class="w-full h-full flex flex-col flex-wrap content-start justify-start"
          >
            <div class=" w-full h-full">
              <div
                class="card-field-label label py-0 font-bold text-lg w-full flex mb-2"
              >
                Description
              </div>
              <div class="card-field-value label py-0 flex ">
                <textarea
                  disabled
                  class="textarea bg-none w-full h-full"
                  placeholder="Description">{description}</textarea
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-slide w-full h-full p-1">
        <div class="w-full h-full grid grid-cols-2 grid-rows-3 gap-0 ">
          {#each generalFieldsBack as generalFields}
            <CardCell
              bind:value={cardProps[generalFields.value]}
              gridClass={generalFields.location}
              label={generalFields.label}
              justifyCell={generalFields.justify}
            />
          {/each}
        </div>
      </div>
      <div class = '{swiperPaginationClass}'/>
    </div>
  </div>
  <button
    class="
    {prevElClass} btn btn-ghost btn-square normal-case touch-none   absolute bottom-[-.5rem] left-[-.3rem] z-10"
  >
    <Icon
      size="32px"
      class="opacity-60 cursor-pointer  text-black"
      src={ArrowCircleLeft}
      on:click={() => (expand = !expand)}
    />
  </button>
  <div class={swiperPaginationClass} />
  <button
    class="   {nextElClass} btn btn-ghost btn-square  normal-case  touch-none  absolute bottom-[-.5rem] right-[-.3rem] z-10"
  >
    <Icon
      size="32px"
      class="opacity-60 cursor-pointer  text-black"
      src={ArrowCircleRight}
      on:click={() => (expand = !expand)}
    /></button
  >
</div>

<style lange="postcss">
  .grid grid-cols-2 grid-rows-3 gap-0 {
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
</style>
