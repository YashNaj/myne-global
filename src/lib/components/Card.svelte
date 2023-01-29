<script>
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
  </script>



<div class="card-item bg-white rounded-2xl shadow-2xl w-72 xl:w-[11rem] lg:w-[10rem] md:w-[9rem] h-[20rem] lg:h-[14rem]    z-2 ">
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