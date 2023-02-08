<script lang="ts">
  import { fly } from "svelte/transition";

  import { Icon, Photograph } from "svelte-hero-icons";
  import Carousel from "./Carousel.svelte";
  export let category = "Category";
  export let subCategory = "Subcategory";
  export let brand = "Brand";
  export let size = "Size";
  export let purchasedFrom = "Purchased from";
  export let purchasedValue = "Purchased value";
  export let description = "Keep the description to a few words";
  export let iconColor = "black";
  let flipped = false;
</script>

<div
  class:flipped
  class="flex flex-col flex-wrap justify-center content-center relative lg:w-80 w-full"
  on:click={() => (flipped = !flipped)}
  on:keydown={() => (flipped = !flipped)}
>
  <div class="flip-card w-[80%]  aspect-[5/7]  ">
    <div class="flip-card-inner ">
      <div class="flip-card-front aspect-[5/7]  ">
        <div
          class="card-item  bg-jewelery rounded-2xl shadow-2xl aspect-[5/7]  z-2  bg-white "
        >
          <div class="w-full h-[50%] bg-jewlery rounded-t-2xl  ">
            <div class="w-full h-full  p-3">
              <div class="upload-pictures w-full h-full rounded-md shadow-md">
                <Carousel />
              </div>
            </div>
            <div
              class="w-full h-full rounded-b-2xl p-3 px-5 flex flex-col xl:p-3 lg:p-2.5 md:p-2 justify-start"
            >
              <div class="flex w-full justify-between flex-1">
                <div class="flex w-full justify-between">
                  <div class="flex w-full justify-between ">
                    <div class=" flex flex-col flex-1 w-full h-full">
                      <div class="flex w-full justify-start">
                        <span
                          class="label-tex text-md lg:text-[1rem] md:text-[.6rem] font-bold"
                          >Category</span
                        >
                      </div>
                      <div class="text-md lg:text-[1rem] md:text-[.6rem] flex">
                        {category}
                      </div>
                    </div>
                    <div class=" flex flex-col flex-1 w-full h-full">
                      <div class="flex w-full justify-end">
                        <span
                          class="label-tex text-md lg:text-[1rem] md:text-[.6rem] font-bold"
                          >Subcategory</span
                        >
                      </div>
                      <div
                        class="text-md lg:text-[1rem] md:text-[.6rem] flex justify-end"
                      >
                        {subCategory}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex w-full justify-between my-3 flex-1 ">
                <div class="flex w-full justify-between">
                  <div class="flex w-full justify-between ">
                    <div class=" flex flex-col flex-1 w-full h-full">
                      <div class="flex w-full justify-start">
                        <span
                          class="label-tex text-md lg:text-[1rem] md:text-[.6rem] font-bold"
                          >Brand</span
                        >
                      </div>
                      <div class="text-md lg:text-[1rem] md:text-[.6rem] flex">
                        {brand}
                      </div>
                    </div>
                    <div class=" flex flex-col flex-1 w-full h-full">
                      <div class="flex w-full justify-end">
                        <span
                          class="label-tex text-md lg:text-[1rem] md:text-[.6rem] font-bold"
                          >Size</span
                        >
                      </div>
                      <div
                        class="text-md lg:text-[1rem] md:text-[.6rem] flex justify-end"
                      >
                        {size}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex w-full justify-between my-3 flex-1 lg:hidden" />
              <div class="flex w-full justify-between my-3 flex-1">
                <div class="flex w-full justify-between">
                  <div class="flex w-full justify-between ">
                    <div class=" flex flex-col flex-1 w-full h-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flip-card-back  text-black   aspect-[5/7] ">
        <div
          class="card-item bg-white rounded-2xl shadow-2xl  z-2  aspect-[5/7]"
        >
          <div class="flex flex-col w-full justify-between ">
            <div class=" flex flex-col flex-1 w-full h-full">
              <div class = 'w-full h-full rounded-b-2xl p-3 px-5 flex flex-col xl:p-3 lg:p-2.5 md:p-2 justify-start '>
                <div class="flex w-full justify-start">
                  <span
                    class="label-tex text-md lg:text-[1rem] md:text-[.6rem] font-bold"
                    >Purchased From</span
                  >
                </div>
                <div class="text-md lg:text-[1rem] md:text-[.6rem] flex">
                  {purchasedFrom}
                </div>
                <div class=" flex flex-col flex-1 w-full h-full">
                  <div class="flex w-full justify-end">
                    <span
                      class="label-tex text-md lg:text-[1rem] md:text-[.6rem] font-bold"
                      >Purchased Value</span
                    >
                  </div>
                  <div
                    class="text-md lg:text-[1rem] md:text-[.6rem] flex justify-end"
                  >
                    {purchasedValue}
                  </div>
                </div>
                <div class="flex w-full justify-start">
                  <span
                    class="label-tex text-md lg:text-[1rem] md:text-[.6rem] font-bold"
                    >Description</span
                  >
                </div>
                <div class="text-md lg:text-[1rem] md:text-[.6rem] flex">
                  {description}
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
<style>
  /* Flip card toggle */
  .flip-card {
    background-color: transparent;
    perspective: 1000px;
    cursor: pointer;
    user-select: none;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
  }

  .flipped .flip-card .flip-card-inner {
    transform: rotateY(180deg);
    width: 100%;
    height: 100%;
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .flip-card-front {
    color: black;
  }

  .flip-card-back {
    transform: rotateY(180deg);
  }
  .background-class {
    background-color: #00bfff;
  }
  .upload-picures {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
</style>
