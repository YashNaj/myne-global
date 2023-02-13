<script lang="ts">
  import { fly } from "svelte/transition";

  import { Icon, Photograph } from "svelte-hero-icons";
  import Carousel from "./Carousel.svelte";
  import type { string } from "zod";
  import Currency from "svelte-currency-formatter";
  export let category = "";
  export let subcategory = "";
  export let brand = "";
  export let breed: string ;
  export let size = "";
  export let purchasedFrom = "";
  export let purchasedValue = " ";
  export let description = "";
  export let brands:[] | string[] | null | undefined;
  export let breeds:[] | string[] | null | undefined;   
  let pictureArray; 
  


  export let backgroundColor: keyof typeof colors;
  $: backgroundColor = category.toLowerCase();
  let colorKey: keyof typeof colors;
  $: colorKey = backgroundColor;
  $: console.log("🚀 ~ file: CardFlippable.svelte:17 ~ colorKey", colorKey);
  export let flipped = false;
  const colors = {
    jewelry: "#F192E8",
    watch: "#2B2C31",
    art: "#FFE609",
    leather: "#984E1D",
    clothing: "#59898A",
    sneakers: "#B3F5F7",
    firearms: "#3A5130",
    technology: "#080631",
    "trading cards": "#FCF7DE",
    collectibles: "#61E1A3",
    crypto: "#B6B1B1",
    nft: "#7C1EB6",
    vintage: "#FF5F09",
    automobile: "#E10909",
    motorcycle: "#E10909",
    dog: "#278001",
    cat: "#278001",
    bird: "#278001",
    childId: "#00BFFF",
    other: "#ffffff",
  };
  let pickedColor: string;
  $: pickedColor = colors[colorKey];
  let currency: string;
  $: currency = purchasedValue;
  $: purchasedValue = currencyFormatter.format(purchasedValue);
  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
 //   import Currency from 'svelte-currency-formatter'
  // ;<Currency
  //   quantity={45685} // Required
  //   currency="USD" // Optional (USD by default)
  //   locale="en_EN" // Optional
  //   pattern="##,### !" // Optional
  //   decimal="," // Optional
  //   group="." // Optional
  // />
</script>

<div
  class:flipped
  class=" flex flex-col flex-wrap justify-center content-center relative  rounded-2xl lg:w-80 w-full"
  on:click={() => (flipped = !flipped)}
  on:keydown={() => (flipped = !flipped)}
>
  <div class="flip-card w-[80%]  rounded-2xl  aspect-[5/7]  ">
    <div class="flip-card-inner rounded-2xl">
      <div class="flip-card-front rounded-2xl aspect-[5/7]  h-full">
        <div
          class="card-item w-full gradient whole-card rounded-2xl shadow-2xl aspect-[5/7]  z-2 bg-white"
        >
          <div
            class="w-full h-[50%] rounded-t-2xl"
            style="background: {pickedColor};"
          >
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
                          class="label-tex text-lg lg:text-[1rem] md:text-[.6rem] font-bold"
                          >Category</span
                        >
                      </div>
                      <div class="text-lg lg:text-[1rem] md:text-[.6rem] flex h-[24px]">
                        {category}
                      </div>
                    </div>
                    <div class=" flex flex-col flex-1 w-full h-full">
                      <div class="flex w-full justify-end">
                        <span
                          class="label-tex text-lg lg:text-[1rem] md:text-[.6rem] font-bold"
                          >Subcategory</span
                        >
                      </div>
                      <div
                        class="text-lg lg:text-[1rem] md:text-[.6rem] flex h-[24px] justify-end"
                      >
                        {subcategory}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex w-full justify-between my-3 flex-1 ">
                <div class="flex w-full justify-between">
                  
                  <div class="flex w-full justify-between ">
                    {#if breeds?.length > 0}
                    <div class=" flex flex-col flex-1 w-full h-full">
                      <div class="flex w-full justify-start">
                        <span
                          class="label-tex text-lg lg:text-[1rem] md:text-[.6rem] font-bold"
                          >Breed</span
                        >
                      </div>
                      <div class="text-lg lg:text-[1rem] md:text-[.6rem] flex h-[24px]">
                        {breed}
                      </div>
                    </div>
                    {/if}

                    {#if brands?.length > 0}
                    <div class=" flex flex-col flex-1 w-full h-full">
                      <div class="flex w-full justify-start">
                        <span
                          class="label-tex text-lg lg:text-[1rem] md:text-[.6rem] font-bold"
                          >Brand</span
                        >
                      </div>
                      <div class="text-lg lg:text-[1rem] md:text-[.6rem] flex h-[24px]">
                        {brand}
                      </div>
                    </div>
                    {/if}

                   
                    <div class=" flex flex-col flex-1 w-full h-full">
                      <div class="flex w-full justify-end">
                        <span
                          class="label-tex text-lg lg:text-[1rem] md:text-[.6rem] font-bold"
                          >Size</span
                        >
                      </div>
                      <div
                        class="text-lg lg:text-[1rem] md:text-[.6rem] flex h-[24px] justify-end"
                      >
                        {size}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex w-full justify-between flex-1">
                <div class="flex w-full justify-between">
                  <div class="flex w-full justify-between ">
                    <div class="dynamic-field h-fit flex flex-col flex-1 w-full h-full">
                      <div class="flex w-full justify-start">
                        <span
                          class="label-tex text-sm lg:text-[1rem] md:text-[.6rem] font-bold"
                          >Dynamic Field</span
                        >
                      </div>
                      <div class="text-lg lg:text-[1rem] md:text-[.6rem] flex h-[24px]">
                      </div>
                    </div>
                    <div class="dynamic-field h-fit flex flex-col flex-1 w-full h-full">
                      <div class="flex w-full justify-end">
                        <span
                          class="label-tex text-sm lg:text-[1rem] md:text-[.6rem] font-bold text-"
                          >Dynamic Field</span
                        >
                      </div>
                      <div
                        class="text-lg lg:text-[1rem] md:text-[.6rem] flex h-[24px] justify-end"
                      >
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
      <div class="flip-card-back   rounded-2xl text-black aspect-[5/7] ">
        <div
          class="card-item   bg-white rounded-2xl shadow-2xl z-2 aspect-[5/7]"
        >
          <div class="flex flex-col rounded-2xl w-full h-full justify-between whole-card ">
            <div class=" flex flex-col flex-1 w-full h-full">
              <div
                class="w-full aspect-[5/7] rounded-2xl p-3 px-5 flex flex-col xl:p-3 lg:p-2.5 md:p-2 justify-start content-start "
              >
                <div class="flex w-full justify-start">
                  <span
                    class="label-tex text-lg lg:text-[1rem] md:text-[.6rem] font-bold"
                    >Purchased From</span
                  >
                </div>
                <div
                  class="text-lg lg:text-[1rem] md:text-[.6rem] flex h-[24px] h-[24px]"
                >
                  {purchasedFrom}
                </div>
                <div class=" flex flex-col w-full ">
                  <div class="flex w-full">
                    <span
                      class="label-tex text-lg lg:text-[1rem] md:text-[.6rem] font-bold"
                      >Purchased Value</span
                    >
                  </div>
                  <div
                    class="text-lg lg:text-[1rem] md:text-[.6rem] flex h-[24px] h-[24px]"
                  >
                    {purchasedValue}
                  </div>
                </div>

                <div
                  class="text-lg lg:text-[1rem] md:text-[.6rem]  "
                >
                  <div class="flex flex-col w-full ">
                    <span
                      class="w-full flex justify-start text-lg lg:text-[1rem] md:text-[.6rem] font-bold"
                      >Description</span
                    >
                    <textarea
                      disabled
                      class="textarea flex flex-wrap   text-box z-1 w-[100%] text-left p-1"
                      placeholder="Description">{description}</textarea
                    >
                  </div>
                </div>
                <div class = 'flex flex-col w-full h-full pt-1 pb-1 '>
                  <div class="flex w-full justify-between flex-1">
                    <div class="flex w-full justify-between">
                      <div class="flex w-full justify-between ">
                        <div class="dynamic-field h-fit flex flex-col flex-1 w-full ">
                          <div class="flex w-full justify-start">
                            <span
                              class="label-tex text-sm lg:text-[1rem] md:text-[.6rem] font-bold"
                              >Dynamic Field</span
                            >
                          </div>
                          <div class="text-sm lg:text-[1rem] md:text-[.6rem] flex h-[24px]">
                          </div>
                        </div>
                        <div class=" dynamic-field h-fit flex flex-col flex-1 w-full ">
                          <div class="flex w-full justify-end">
                            <span
                              class="label-tex text-sm lg:text-[1rem] md:text-[.6rem] font-bold text-"
                              >Dynamic Field</span
                            >
                          </div>
                          <div
                            class="text-sm lg:text-[1rem] md:text-[.6rem] flex h-[24px] justify-end"
                          >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex w-full justify-between flex-1">
                    <div class="flex w-full justify-between">
                      <div class="flex w-full justify-between ">
                        <div class=" dynamic-field h-fit flex flex-col flex-1 w-full ">
                          <div class="flex w-full justify-start">
                            <span
                              class="label-tex text-sm lg:text-[1rem] md:text-[.6rem] font-bold"
                              >Dynamic Field</span
                            >
                          </div>
                          <div class="text-lg lg:text-[1rem] md:text-[.6rem] flex h-[24px]">
                          </div>
                        </div>
                        <div class="dynamic-field h-fit flex flex-col flex-1 w-full ">
                          <div class="flex w-full justify-end">
                            <span
                              class="label-tex text-sm lg:text-[1rem] md:text-[.6rem] font-bold text-"
                              >Dynamic Field</span
                            >
                          </div>
                          <div
                            class="text-lg lg:text-[1rem] md:text-[.6rem] flex h-[24px] justify-end"
                          >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
                <div class = 'button-container w-full flex justify-around'>
                  <div class = 'flex flex-col justify-center content-center flex-1'>
                    <div class = 'flex w-full justify-center'>
                      <button class="btn btn-square z-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                      </button>
                    </div>
                    <label class = 'flex text-xs w-full justify-center' for = 'button'>
                      Stolen
                    </label>
                  </div>
                  <div class = 'flex flex-col justify-center content-center flex-1'>
                    <div class = 'flex w-full justify-center'>
                      <button class="btn btn-square z-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                      </button>
                    </div>
                    <label class = 'flex text-xs w-full justify-center' for = 'button'>
                      Transfer
                    </label>
                  </div>
                  <div class = 'flex flex-col justify-center content-center flex-1'>
                    <div class = 'flex w-full justify-center'>
                      <button class="btn btn-square z-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                      </button>
                    </div>
                    <label class = 'flex text-xs w-full justify-center' for = 'button'>
                      Certificate
                    </label>
                  </div>
                  <div class = 'flex flex-col justify-center content-center flex-1'>
                    <div class = 'flex w-full justify-center'>
                      <button class="btn btn-square z-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                      </button>
                    </div>
                    <label class = 'flex text-xs w-full justify-center' for = 'button'>
                      Transfer
                    </label>
                  </div>
                  
            
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
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
  .text-box {
    margin: 0 auto;
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -pre-wrap;
    white-space: -o-pre-wrap;
    word-wrap: break-word;
    display: box;
  }
  .whole-card{
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  .gradient{
    /* background: rgb(38,82,29);
background: -moz-linear-gradient(90deg, rgba(38,82,29,1) 0%, rgb(40, 68, 42) 100%);
background: -webkit-linear-gradient(90deg, rgba(38,82,29,1) 0%, rgb(41, 78, 44) 100%);
background: linear-gradient(90deg, rgb(115, 134, 111) 0%, rgb(25, 49, 26) 100%); */
/* background: rgb(180,79,66);
background: -moz-linear-gradient(90deg, rgb(92, 40, 33) 0%, rgba(55,9,3,1) 100%);
background: -webkit-linear-gradient(90deg, rgb(82, 32, 25) 0%, rgb(121, 0, 0) 100%);
background: linear-gradient(90deg, rgb(230, 23, 0) 0%, rgb(54, 13, 13) 100%); */


  }
</style>
