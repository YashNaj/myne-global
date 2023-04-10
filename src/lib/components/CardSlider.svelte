<script lang="ts">
  import ChildId from "$lib/components/ChildId.svelte";
  import PageContainer from "$lib/components/PageContainer.svelte";
  import { beforeUpdate, onMount } from "svelte";
  import { ArrowCircleLeft, ArrowCircleRight, Icon } from "svelte-hero-icons";
  import Swiper from "swiper";
  import "swiper/swiper-bundle.css";
  import CardCell from "./CardCell.svelte";
  import { construct_svelte_component } from "svelte/internal";
  export let cardDisplayId: number = 1;
  console.log("🚀 ~ file: CardSlider.svelte:11 ~ cardDisplayId:", cardDisplayId);
  export let cardProps;
  export let description;
  export let fieldsBackOneValues;
  export let fieldsBackTwoValues;
  export let fieldsBackThreeValues;
  export let generalFieldsBack;
  let loading = false;
  let mySwiper;
  let expand = false;
  let backCardSwiper;
  console.log(backCardSwiper);
  onMount(() => {
    backCardSwiper = new Swiper(".backCardSwiper" + cardDisplayId, {
      direction: "horizontal",
      loop: false,
      slidesPerView: 1,
      spaceBetween: 0,
      centeredSlides: true,
      navigation: {
        nextEl: ".backCardSwiperNext-`{$cardDisplayId}",
        prevEl: ".backCardSwiperPrevious-`{$cardDisplayId}",
      },
    });
  });
</script>

<div class="backCardSwiperContainer rounded-3xl w-full md:h-44 h-40 overflow-hidden relative">
  <swiper-container
    observer="true"
    observer-parents="true"
    id={cardDisplayId}
    virtual={true}
    class="lg:h-full backCardSwiper-{cardDisplayId} aspect-[1-1] flippable-card-swiper back-card_card-general-2 touch-none bg-opacity-20 bg-slate-400 rounded-xl flex flex-col p-1 text-black"
  >
    {#if fieldsBackOneValues?.length > 0}
      <swiper-slide class="md:p-3 p-1">
        <div class=" grid grid-cols-2 grid-rows-3 grid-gap-0 w-full h-32 p-1">
          {#each fieldsBackOneValues as fieldBackOne, i}
            <CardCell
              bind:value={cardProps[fieldBackOne.value]}
              label={fieldBackOne.label}
              allignText={i % 2 === 0 ? "left" : "right"}
            />
          {/each}
        </div>
      </swiper-slide>
    {/if}
    {#if fieldsBackTwoValues?.length > 0}
      <swiper-slide class="md:p-3 p-1">
        <div class=" grid grid-cols-2 grid-rows-3 grid-gap-0 w-full h-32 p-1">
          {#each fieldsBackTwoValues as fieldBackTwo, i}
            <CardCell
              bind:value={cardProps[fieldBackTwo.value]}
              label={fieldBackTwo.label}
              allignText={i % 2 === 0 ? "left" : "right"}
            />
          {/each}
        </div>
      </swiper-slide>
    {/if}
    {#if fieldsBackThreeValues?.length > 0}
      <swiper-slide class="md:p-3 p-1">
        <div class=" grid grid-cols-2 grid-rows-3 gap-0 w-full h-32 p-1">
          {#each fieldsBackThreeValues as fieldBackThree, i}
            <CardCell
              bind:value={cardProps[fieldBackThree.value]}
              label={fieldBackThree.label}
              allignText={i % 2 === 0 ? "left" : "right"}
            />
          {/each}
        </div>
      </swiper-slide>
    {/if}
    <swiper-slide class="md:p-3 p-1">
      <div class="full w-full h-full flex justify-center">
        <div class="w-full h-full flex flex-col flex-wrap content-start justify-start">
          <div class=" w-full h-full">
            <div class="card-field-label label py-0 font-bold text-lg w-full flex mb-2">Description</div>
            <div class="card-field-value label py-0 flex">
              <textarea disabled class="textarea bg-none w-full h-full" placeholder="Description"
                >{description}</textarea
              >
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide class="md:p-3 p-1">
      <div class="w-full md:h-full h-32 grid grid-cols-2 grid-rows-3 gap-0">
        {#each generalFieldsBack as generalFields, i}
          <CardCell
            bind:value={cardProps[generalFields.value]}
            label={generalFields.label}
            allignText={i % 2 === 0 ? "left" : "right"}
          />
        {/each}
      </div>
    </swiper-slide>
  </swiper-container>
  <button
    class=" previous-card-slider backCardSwiperNext-{cardDisplayId}
btn btn-ghost btn-square normal-case touch-none absolute bottom-[-.5rem] left-[-.3rem] z-10"
  >
    <Icon
      size="10px"
      class="  opacity-60 cursor-pointer pointer-events-none text-black z-10 "
      src={ArrowCircleLeft}
      on:click={() => (expand = !expand)}
    />
  </button>
  <div />
  <button
    class=" next-card-slider backCardSwiperPrevious-{cardDisplayId} btn btn-ghost btn-square normal-case touch-none absolute bottom-[-.5rem] right-[-.3rem] z-10"
  >
    <Icon
      size="10px"
      class=" opacity-60 cursor-pointer pointer-events-none text-black z-10"
      src={ArrowCircleRight}
      on:click={() => (expand = !expand)}
    /></button
  >
</div>
