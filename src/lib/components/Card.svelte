<script>
  import { fly } from "svelte/transition";

  import { Icon, Photograph } from "svelte-hero-icons";

  let category = "Category";
  let subCategory = "Subcategory";
  let brand = "Brand";
  let size = "Size";
  let purchasedFrom = "Purchased from";
  let purchasedValue = "Purchased value";
  let description = "Keep the description to a few words";
  let iconColor = "black";
  </script>



<div class="card-item bg-white rounded-2xl shadow-lg w-72 h-[20rem] z-2 ">
    <div class="w-full h-[50%] bg-error rounded-t-lg  ">
      <div class="w-full h-full  p-3">
        <div class="upload-pictures w-full h-full rounded-md shadow-md">
          <Icon src={Photograph} color={iconColor} class="opacity-20" />
        </div>
      </div>
      <div
        class="w-full h-full rounded-b-lg p-3 px-5 flex flex-col  justify-start"
      >
        <div class="flex w-full justify-between flex-1">
          <div class="flex w-full justify-between">
            <div class="flex w-full justify-between ">
              <div class=" flex flex-col flex-1 w-full h-full">
                <div class="flex w-full justify-start">
                  <span class="label-tex text-xs font-bold">Category</span>
                </div>
                <div class="text-xs flex">
                  {category}
                </div>
              </div>
              <div transition:fly class=" flex flex-col flex-1 w-full h-full">
                <div class="flex w-full justify-end">
                  <span class="label-tex text-xs font-bold">Subcategory</span>
                </div>
                <div class="text-xs flex justify-end">
                  {subCategory}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex w-full justify-between my-3 flex-1">
          <div class="flex w-full justify-between">
            <div class="flex w-full justify-between ">
              <div class=" flex flex-col flex-1 w-full h-full">
                <div class="flex w-full justify-start">
                  <span class="label-tex text-xs font-bold">Brand</span>
                </div>
                <div class="text-xs flex">
                  {brand}
                </div>
              </div>
              <div transition:fly class=" flex flex-col flex-1 w-full h-full">
                <div class="flex w-full justify-end">
                  <span class="label-tex text-xs font-bold">Size</span>
                </div>
                <div class="text-xs flex justify-end">
                  {size}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex w-full justify-between my-3 flex-1">
          <div class="flex w-full justify-between">
            <div class="flex w-full justify-between ">
              <div class=" flex flex-col flex-1 w-full h-full">
                <div class="flex w-full justify-start">
                  <span class="label-tex text-xs font-bold"
                    >Purchased From</span
                  >
                </div>
                <div class="text-xs flex">
                  {purchasedFrom}
                </div>
              </div>
              <div class=" flex flex-col flex-1 w-full h-full">
                <div class="flex w-full justify-end">
                  <span class="label-tex text-xs font-bold"
                    >Purchased Value</span
                  >
                </div>
                <div class="text-xs flex justify-end">
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
                  <span class="label-tex text-xs font-bold">Description</span>
                </div> -->
                <!-- <div class="text-xs flex">
                  {description}
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>