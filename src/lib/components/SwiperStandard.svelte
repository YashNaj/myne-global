<script lang="ts">
  import CardFlippable from "$lib/components/CardFlippable.svelte";
  import NextButton from "$lib/components/NextButton.svelte";
  import PaginationButtons from "$lib/components/PaginationButtons.svelte";
  import PrevButton from "$lib/components/PrevButton.svelte";
   let pageCount = 0;
  import { onMount } from "svelte";
  import { slide } from "svelte/transition";

  $: console.log(pageCount);
  onMount(() => {
    const swiperEl = document.querySelector(".swiper-container");
    const nextEl = document.querySelector(".next");
    const previousEl = document.querySelector(".previous");

    console.log(
      "🚀 ~ file: +page.svelte:14 ~ onMount ~ previousEl:",
      previousEl
    );
    console.log("🚀 ~ file: +page.svelte:11 ~ onMount ~ nextEl:", nextEl);
    console.log(swiperEl);

    nextEl?.addEventListener("click", () => {
      swiperEl?.swiper.slideNext();
    });
    previousEl?.addEventListener("click", () => {
      swiperEl?.swiper.slidePrev();
    });
  });

  let inputTest = [
    {
      input: "Input",
      value: "value",
    },
    {
      input: "Input",
      value: "value",
    },
    {
      input: "Input",
      value: "value",
    },
    {
      input: "Input",
      value: "value",
    },
    {
      input: "Input",
      value: "value",
    },
  ];
  export let selectedCategory
  export let addCardInputs;
  export let subcategories;
  export let brands; 
  export let breeds;
  export let stones;
  export let clarities; 
  export let cut_shapes;
  export let colors;
</script>


    <div class="form-box w-full h-full pb-3 px-2">
      <div
        class="form-input-button-wrapper w-full h-full grid grid-cols-1 grid-rows-[3fr_1fr] pb-10"
      >
        <div class="form-slider w-full h-full">
          <swiper-container class="w-full h-full swiper-container">
            {#each inputTest as inputTests}
              <swiper-slide
                class="w-full h-full flex flex-col justify-start content-center relative px-2"
              >
                <div>
                  <label class="label" for="input">
                    {inputTests.input}
                  </label>
                  <input transition:slide class="input input-md w-full " />
                </div>
                <div>
                  <label class="label" for="input">
                    {inputTests.value}
                  </label>
                  <input transition:slide class="input input-md w-full " />
                </div>
              </swiper-slide>
            {/each}
          </swiper-container>
          <div class="pagination-btns grid grid-cols-2 place-items-center">
            <PrevButton
              bind:pageCount
              on:click={() => (pageCount = --pageCount)}
            />
            {#if pageCount === 0 || pageCount < 5}
              <NextButton
                bind:pageCount
                on:click={() => (pageCount = ++pageCount)}
              />
            {/if}

            {#if pageCount === 5}
              <input
                type="submit"
                class="previous btn btn-success normal-case shadow-lg w-[90%]"
                value="Submit"
                on:click={() => {}}
              />
            {/if}
          </div>
        </div>
      </div>
    </div>