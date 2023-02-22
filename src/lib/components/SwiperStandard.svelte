<script lang="ts">
    import CardFlippable from "$lib/components/CardFlippable.svelte";
    import NextButton from "$lib/components/NextButton.svelte";
    import PaginationButtons from "$lib/components/PaginationButtons.svelte";
    import PrevButton from "$lib/components/PrevButton.svelte";
    export let pageCount = 0;
    import { onMount } from "svelte";
    import { slide } from "svelte/transition";
  
    $: console.log(pageCount);
    onMount(() => {
      const swiperEl = document.querySelector("swiper-container");
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
  </script>
  
  <div class="w-full h-full flex justify-center content-center p-3">
    <div class="form-container w-80 h-80 bg-secondary rounded-lg [box-shadow:rgba(0,_0,_0,_0.09)_0px_2px_1px,_rgba(0,_0,_0,_0.09)_0px_4px_2px,_rgba(0,_0,_0,_0.09)_0px_8px_4px,_rgba(0,_0,_0,_0.09)_0px_16px_8px,_rgba(0,_0,_0,_0.09)_0px_32px_16px;]">
      <form class="form px-2 pt-10 pb-3 w-full h-full">
        <div class="form-box w-full h-full pb-3 px-2">
          <div
            class="form-input-button-wrapper w-full h-full grid grid-cols-1 grid-rows-[3fr_1fr]"
          >
            <div class="form-slider w-full h-full">
              <swiper-container class="w-full h-full swiper-con">
                <swiper-slide class="w-full h-full flex flex-col justify-start content-center relative px-2">
                  <div class = ''>
                    <label class = 'label'>
                      Label
                    </label>
                    <input
                      transition:slide
                      class="input input-md w-full "
                    />
                  </div>
                  <div class = ''>
                    <label class = 'label'>
                      Label
                    </label>
                    <input
                      transition:slide
                      class="input input-md w-full "
                    />
                  </div>
                </swiper-slide>
                <swiper-slide class="w-full h-full flex flex-col justify-start content-center relative px-2">
                  <div class = ''>
                    <label class = 'label'>
                      Label
                    </label>
                    <input
                      transition:slide
                      class="input input-md w-full "
                    />
                  </div>
                  <div class = ''>
                    <label class = 'label'>
                      Label
                    </label>
                    <input
                      transition:slide
                      class="input input-md w-full "
                    />
                  </div>
                </swiper-slide>
                <swiper-slide class="w-full h-full flex flex-col justify-start content-center relative px-2">
                  <div class = ''>
                    <label class = 'label'>
                      Label
                    </label>
                    <input
                      transition:slide
                      class="input input-md w-full "
                    />
                  </div>
                  <div class = ''>
                    <label class = 'label'>
                      Label
                    </label>
                    <input
                      transition:slide
                      class="input input-md w-full "
                    />
                  </div>
                </swiper-slide>
                <swiper-slide class="w-full h-full flex flex-col justify-start content-center relative px-2">
                  <div class = ''>
                    <label class = 'label'>
                      Label
                    </label>
                    <input
                      transition:slide
                      class="input input-md w-full "
                    />
                  </div>
                  <div class = ''>
                    <label class = 'label'>
                      Label
                    </label>
                    <input
                      transition:slide
                      class="input input-md w-full "
                    />
                  </div>
                </swiper-slide>
                <swiper-slide class="w-full h-full flex flex-col justify-start content-center relative px-2">
                  <div class = ''>
                    <label class = 'label'>
                      Label
                    </label>
                    <input
                      transition:slide
                      class="input input-md w-full "
                    />
                  </div>
                  <div class = ''>
                    <label class = 'label'>
                      Label
                    </label>
                    <input
                      transition:slide
                      class="input input-md w-full "
                    />
                  </div>
                </swiper-slide>
              </swiper-container>
              <div class="pagination-btns flex w-full self-end">
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
                    class="btn btn-success normal-case shadow-sm flex-1"
                    value="Submit"
                    on:click={() => {}}
                  />
                {/if}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
  