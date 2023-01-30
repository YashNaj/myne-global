<script lang='ts'>
  import { fly } from "svelte/transition";

  import { Icon, Photograph } from "svelte-hero-icons";

  export let category = "Category";
  export let subCategory = "Subcategory";
  export let brand = "Brand";
  export let size = "Size";
  export let purchasedFrom = "Purchased from";
  export let purchasedValue = "Purchased value";
  export let description = "Keep the description to a few words";
  export let iconColor = "black";
	export let clue;
	export let answer;
	export let showCardBack;
</script>



  <div class="card-item bg-white rounded-2xl shadow-2xl w-72 2xl:[12rem] xl:w-[10rem] lg:w-[8.2rem] md:w-[9rem] h-[20rem] lg:h-[14rem]    z-2 ">
    <div class="w-full h-[50%] bg-error rounded-t-2xl  ">
      <div class="w-full h-full  p-3">
        <div class="upload-pictures w-full h-full rounded-md shadow-md">
          <Icon src={Photograph} color={iconColor} class="opacity-20" />
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
                  <span class="label-tex text-xs lg:text-[.5rem] md:text-[.6rem] font-bold">Category</span>
                </div>
                <div class="text-xs lg:text-[.5rem] md:text-[.6rem] flex">
                  {category}
                </div>
              </div>
              <div transition:fly class=" flex flex-col flex-1 w-full h-full">
                <div class="flex w-full justify-end">
                  <span class="label-tex text-xs lg:text-[.5rem] md:text-[.6rem] font-bold">Subcategory</span>
                </div>
                <div class="text-xs lg:text-[.5rem] md:text-[.6rem] flex justify-end">
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
                  <span class="label-tex text-xs lg:text-[.5rem] md:text-[.6rem] font-bold">Brand</span>
                </div>
                <div class="text-xs lg:text-[.5rem] md:text-[.6rem] flex">
                  {brand}
                </div>
              </div>
              <div transition:fly class=" flex flex-col flex-1 w-full h-full">
                <div class="flex w-full justify-end">
                  <span class="label-tex text-xs lg:text-[.5rem] md:text-[.6rem] font-bold">Size</span>
                </div>
                <div class="text-xs lg:text-[.5rem] md:text-[.6rem] flex justify-end">
                  {size}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex w-full justify-between my-3 flex-1 lg:hidden">
          <div class="flex w-full justify-between">
            <div class="flex w-full justify-between ">
              <div class=" flex flex-col flex-1 w-full h-full">
                <div class="flex w-full justify-start">
                  <span class="label-tex text-xs lg:text-[.5rem] md:text-[.6rem] font-bold"
                    >Purchased From</span
                  >
                </div>
                <div class="text-xs lg:text-[.5rem] md:text-[.6rem] flex">
                  {purchasedFrom}
                </div>
              </div>
              <div class=" flex flex-col flex-1 w-full h-full">
                <div class="flex w-full justify-end">
                  <span class="label-tex text-xs lg:text-[.5rem] md:text-[.6rem] font-bold"
                    >Purchased Value</span
                  >
                </div>
                <div class="text-xs lg:text-[.5rem] md:text-[.6rem] flex justify-end">
                  {purchasedValue}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex w-full justify-between my-3 flex-1">
          <div class="flex w-full justify-between">
            <div class="flex w-full justify-between ">
              <div class=" flex flex-col flex-1 w-full h-full">
                <!-- <div class="flex w-full justify-start">
                  <span class="label-tex text-xs lg:text-[.5rem] md:text-[.6rem] font-bold">Description</span>
                </div> -->
                <!-- <div class="text-xs lg:text-[.5rem] md:text-[.6rem] flex">
                  {description}
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

<div class="flip-box-back" class:conceal-answer={showCardBack}>
  <div class="card-item bg-white rounded-2xl shadow-2xl w-72 2xl:[12rem] xl:w-[10rem] lg:w-[8.2rem] md:w-[9rem] h-[20rem] lg:h-[14rem]    z-2 ">
    <div class="w-full h-[50%] bg-error rounded-t-2xl  ">
      <div class="w-full h-full  p-3">
        <div class="upload-pictures w-full h-full rounded-md shadow-md">
          <Icon src={Photograph} color={iconColor} class="opacity-20" />
        </div>
      </div>s
    </div>
  </div>
</div>




<div class="card-item bg-white rounded-2xl shadow-2xl w-72 2xl:[12rem] xl:w-[10rem] lg:w-[8.2rem] md:w-[9rem] h-[20rem] lg:h-[14rem]    z-2 ">
    <div class="w-full h-[50%] bg-error rounded-t-2xl  ">
      <div class="w-full h-full  p-3">
        <div class="upload-pictures w-full h-full rounded-md shadow-md">
          <Icon src={Photograph} color={iconColor} class="opacity-20" />
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
                  <span class="label-tex text-xs lg:text-[.5rem] md:text-[.6rem] font-bold">Category</span>
                </div>
                <div class="text-xs lg:text-[.5rem] md:text-[.6rem] flex">
                  {category}
                </div>
              </div>
              <div transition:fly class=" flex flex-col flex-1 w-full h-full">
                <div class="flex w-full justify-end">
                  <span class="label-tex text-xs lg:text-[.5rem] md:text-[.6rem] font-bold">Subcategory</span>
                </div>
                <div class="text-xs lg:text-[.5rem] md:text-[.6rem] flex justify-end">
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
                  <span class="label-tex text-xs lg:text-[.5rem] md:text-[.6rem] font-bold">Brand</span>
                </div>
                <div class="text-xs lg:text-[.5rem] md:text-[.6rem] flex">
                  {brand}
                </div>
              </div>
              <div transition:fly class=" flex flex-col flex-1 w-full h-full">
                <div class="flex w-full justify-end">
                  <span class="label-tex text-xs lg:text-[.5rem] md:text-[.6rem] font-bold">Size</span>
                </div>
                <div class="text-xs lg:text-[.5rem] md:text-[.6rem] flex justify-end">
                  {size}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex w-full justify-between my-3 flex-1 lg:hidden">
          <div class="flex w-full justify-between">
            <div class="flex w-full justify-between ">
              <div class=" flex flex-col flex-1 w-full h-full">
                <div class="flex w-full justify-start">
                  <span class="label-tex text-xs lg:text-[.5rem] md:text-[.6rem] font-bold"
                    >Purchased From</span
                  >
                </div>
                <div class="text-xs lg:text-[.5rem] md:text-[.6rem] flex">
                  {purchasedFrom}
                </div>
              </div>
              <div class=" flex flex-col flex-1 w-full h-full">
                <div class="flex w-full justify-end">
                  <span class="label-tex text-xs lg:text-[.5rem] md:text-[.6rem] font-bold"
                    >Purchased Value</span
                  >
                </div>
                <div class="text-xs lg:text-[.5rem] md:text-[.6rem] flex justify-end">
                  {purchasedValue}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex w-full justify-between my-3 flex-1">
          <div class="flex w-full justify-between">
            <div class="flex w-full justify-between ">
              <div class=" flex flex-col flex-1 w-full h-full">
                <!-- <div class="flex w-full justify-start">
                  <span class="label-tex text-xs lg:text-[.5rem] md:text-[.6rem] font-bold">Description</span>
                </div> -->
                <!-- <div class="text-xs lg:text-[.5rem] md:text-[.6rem] flex">
                  {description}
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <style lang='postcss'>
    /* Position the front and back side */
    .flip-box-front, .flip-box-back {
      position: absolute;
      width: 100%;
      height: 100%;
      -webkit-backface-visibility: hidden; /* Safari */
      backface-visibility: hidden;
      box-shadow: -1px 1px 3px black;
    }
  
    /* Style the front side */
    .flip-box-front {
      background-color: #ddd;
      color: black;
      display: flex;
      justify-content: center;
    }
    
    @keyframes revealTextSlowly {
      to { color: white }
    }
    
    .conceal-answer {
      animation: revealTextSlowly .3s forwards;
    }
    
    /* Style the back side */
    .flip-box-back {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #61592F;
      color: #61592F;
  /* 		color: white; */
      font-size: 1.3rem;
      transform: rotateY(180deg);
    }
    </style>