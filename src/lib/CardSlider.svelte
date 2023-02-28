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
  let mySwiper;

  onMount(() => {
    mySwiper = new Swiper(".flippable-card-swiper", {
      slidesPerView: 1,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
      },
      navigation: {
        nextEl: ".flippable-next",
        prevEl: ".flippable-previous",
      },
    });
  });
  let expand = false;
</script>

<div class=" rounded-3xl w-full h-30 overflow-hidden relative">
  <div
    class="flippable-card-swiper h-full flippable-card-swiper back-card_card-general-2  touch-none bg-opacity-20 bg-slate-400 rounded-xl flex flex-col"
  >
    <div class="swiper-wrapper">
      {#if fieldsBackOneValues?.length > 0}
        <div class="swiper-slide back-card_card-fields w-full h-full p-3">
          {#each fieldsBackOneValues as fieldBackOne}
            <CardCell
              bind:value={cardProps[fieldBackOne.value]}
              gridClass={fieldBackOne.location}
              label={fieldBackOne.label}
              justifyCell={fieldBackOne.justify}
            />
          {/each}
        </div>
      {/if}
      {#if fieldsBackTwoValues?.length > 0}
        <div class="swiper-slide back-card_card-fields w-full h-full p-3">
          {#each fieldsBackTwoValues as fieldBackTwo}
            <CardCell
              bind:value={cardProps[fieldBackTwo.value]}
              gridClass={fieldBackTwo.location}
              label={fieldBackTwo.label}
              justifyCell={fieldBackTwo.justify}
            />
          {/each}
        </div>
      {/if}
      {#if fieldsBackThreeValues?.length > 0}
        <div class="swiper-slide back-card_card-fields w-full h-full p-3">
          {#each fieldsBackThreeValues as fieldBackThree}
            <CardCell
              bind:value={cardProps[fieldBackThree.value]}
              gridClass={fieldBackThree.location}
              label={fieldBackThree.label}
              justifyCell={fieldBackThree.justify}
            />
          {/each}
        </div>
      {/if}
      <div class="swiper-slide w-full h-full p-3">
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
      <div class="swiper-slide w-full h-full p-3">
        <div class="w-full h-full back-card_card-fields p-1">
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

    </div>
    <div class="swiper-pagination" />

  </div>
  <button
    class="flippable-previous btn btn-ghost btn-square normal-case touch-none   absolute bottom-0 left-0 z-10"
  >
    <Icon
      size="32px"
      class="opacity-60 cursor-pointer  text-black ml-[1rem]"
      src={ArrowCircleLeft}
      on:click={() => (expand = !expand)}
    />
  </button>
  <button
    class="flippable-next btn btn-ghost btn-square  normal-case  touch-none  absolute bottom-0 right-0 z-10"
  >
    <Icon
      size="32px"
      class="opacity-60 cursor-pointer  text-black ml-[1rem]"
      src={ArrowCircleRight}
      on:click={() => (expand = !expand)}
    /></button
  >
</div>

<style lange="postcss">
  .back-card_card-fields {
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
</style>
