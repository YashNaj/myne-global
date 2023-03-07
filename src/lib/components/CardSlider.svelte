<script lang="ts">
  import focusSlide from "$lib/swiperActions";
  import ChildId from "$lib/components/ChildId.svelte";
  import PageContainer from "$lib/components/PageContainer.svelte";
  import { onMount } from "svelte";
  import { ArrowCircleLeft, ArrowCircleRight, Icon } from "svelte-hero-icons";
  import Swiper from "swiper";
  import "swiper/swiper-bundle.css";
  import CardCell from "./CardCell.svelte";
  export let cardDisplayId: string;
  console.log(
    "🚀 ~ file: CardSlider.svelte:11 ~ cardDisplayId:",
    cardDisplayId
  );
  export let cardProps;
  export let description;
  export let fieldsBackOneValues;
  export let fieldsBackTwoValues;
  export let fieldsBackThreeValues;
  export let generalFieldsBack;
  let cardSliderClassSlug = `${cardDisplayId}`;
  console.log(
    "🚀 ~ file: CardSlider.svelte:23 ~ cardSliderClassSlug:",
    cardSliderClassSlug
  );
  let loading = false;
  let mySwiper;
  let expand = false;
  let parentEl: HTMLElement;
  onMount(() => {
    if (parentEl) {
      parentEl.addEventListener("click", (event) => {
        const targetEl = event.target as HTMLElement;
        if (targetEl.classList.contains("next-card-slider")) {
          const swiperEl = parentEl.querySelector(
            ".swiper-" + cardDisplayId
          ) as any;
          console.log(
            "🚀 ~ file: CardSlider.svelte:33 ~ parentEl.addEventListener ~ swiperEl:",
            swiperEl
          );
          const swiper = swiperEl.swiper;
          if (swiper) {
            swiper.slideNext();
          }
        } else if (targetEl.classList.contains("previous-card-slider")) {
          const swiperEl = parentEl.querySelector(
            ".swiper-" + cardDisplayId
          ) as any;
          const swiper = swiperEl.swiper;
          if (swiper) {
            swiper.slidePrev();
          }
        }
      });
    }
  });
</script>

<div
bind:this={parentEl}
  class=" rounded-3xl w-full h-30 overflow-hidden relative {cardSliderClassSlug}"
>
  <swiper-container
    observer={true }
    observer-parents={true}
    no-swiping={true}
    id={cardDisplayId}
    class="h-full swiper-{cardDisplayId}  flippable-card-swiper back-card_card-general-2  touch-none bg-opacity-20 bg-slate-400 rounded-xl flex flex-col p-1"
  >
    {#if fieldsBackOneValues?.length > 0}
      <swiper-slide class="p-3">
        <div class=" grid grid-cols-2 grid-rows-3 grid-gap-0 w-full h-full p-1">
          {#each fieldsBackOneValues as fieldBackOne}
            <CardCell
              bind:value={cardProps[fieldBackOne.value]}
              gridClass={fieldBackOne.location}
              label={fieldBackOne.label}
              justifyCell={fieldBackOne.justify}
            />
          {/each}
        </div>
      </swiper-slide>
    {/if}
    {#if fieldsBackTwoValues?.length > 0}
      <swiper-slide class="p-3">
        <div class=" grid grid-cols-2 grid-rows-3 grid-gap-0 w-full h-full p-1">
          {#each fieldsBackTwoValues as fieldBackTwo}
            <CardCell
              bind:value={cardProps[fieldBackTwo.value]}
              gridClass={fieldBackTwo.location}
              label={fieldBackTwo.label}
              justifyCell={fieldBackTwo.justify}
            />
          {/each}
        </div>
      </swiper-slide>
    {/if}

    {#if fieldsBackThreeValues?.length > 0}
      <swiper-slide class="p-3">
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
      </swiper-slide>
    {/if}
    <swiper-slide class="p-3">
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
    </swiper-slide>
    <swiper-slide class="p-3">
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
    </swiper-slide>
  </swiper-container>
  <button
    class=" previous-card-slider previous-swiper-{cardDisplayId}
  btn btn-ghost btn-square normal-case touch-none   absolute bottom-[-.5rem] left-[-.3rem] z-10"
  >
    <Icon
      size="32px"
      class=" previous-card-slider opacity-60 cursor-pointer  text-black z-0 "
      src={ArrowCircleLeft}
      on:click={() => (expand = !expand)}
    />
  </button>
  <div />
  <button
    class=" next-card-slider next-swiper-{cardDisplayId} btn btn-ghost btn-square  normal-case  touch-none  absolute bottom-[-.5rem] right-[-.3rem] z-10"
  >
    <Icon
      size="32px"
      class="next-card-slider opacity-60 cursor-pointer  text-black z-0"
      src={ArrowCircleRight}
      on:click={() => (expand = !expand)}
    /></button
  >
</div>
