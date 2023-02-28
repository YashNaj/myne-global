<script lang="ts">
  import { onMount } from "svelte";
  import {
    Icon,
    DocumentText,
    ShieldExclamation,
    SwitchHorizontal,
    Star,
    ArrowLeft,
    ArrowRight,
  } from "svelte-hero-icons";
  export let expand = false;
  onMount(() => {
    const cardSwiperEl = document?.querySelector(".flippable-card-swiper");
    const nextEl = document?.querySelector(".flippable-next");
    const previousEl = document?.querySelector(".flippable-previous");

    console.log(
      "🚀 ~ file: +page.svelte:14 ~ onMount ~ previousEl:",
      previousEl
    );
    console.log("🚀 ~ file: +page.svelte:11 ~ onMount ~ nextEl:", nextEl);
    console.log(cardSwiperEl);

    nextEl?.addEventListener("click", () => {
      cardSwiperEl?.swiper.slideNext();
    });
    previousEl?.addEventListener("click", () => {
      cardSwiperEl?.swiper.slidePrev();
    });
  });
</script>

<div
  class="button-container w-full h-[90%] grid grid-cols-2 grid-rows-2 gap-[2px] place-items-center"
>
  <button class="btn btn-ghost w-[90%] h-full  flex-nowrap z-2 normal-case p-2">
    <Icon
      src={SwitchHorizontal}
      color="purple"
      class="opacity-90"
      size="30px"
    />
    <p class="flex text-xs w-full justify-center text-violet-900">Transfer</p>
  </button>

  <button class="btn btn-ghost w-[90%] h-full  flex-nowrap z-2 normal-case p-2">
    <p class="flex text-xs w-full justify-center text-yellow-700">
      Certificate
    </p>
    <Icon src={Star} color="gold" class="opacity-90" size="30px" />
  </button>
  <button
    class="btn btn-ghost  w-[90%] h-full  flex-nowrap z-2 normal-case p-2"
  >
    <Icon
      src={ShieldExclamation}
      color="#ff0f0f"
      class="opacity-90"
      size="30px"
    />
    <p class="flex text-xs w-full justify-center text-red-600">Stolen</p>
  </button>
  <button class="btn btn-ghost  w-[90%] h-full flex-nowrap z-2 normal-case p-2">
    <p class="flex text-xs w-full justify-center text-green-900">Document</p>
    <Icon src={DocumentText} color="green" class="opacity-90" size="30px" />
  </button>
</div>
