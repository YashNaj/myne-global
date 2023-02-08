<script lang="ts">
  import { onMount } from "svelte";
  import { fade, fly, slide } from "svelte/transition";
  import { Icon, Photograph } from "svelte-hero-icons";
  import { enhance } from "$app/forms";
  import CardFlippable from "./CardFlippable.svelte";
  export let selectedCategory = null;
  export let subcategories = [];
  export let form: { message?: string };
  let page = 0;
  const categories = {
    jewelry: {
      subcategory: [
        "bracelet",
        "brooch",
        "charm",
        "cufflinks",
        "earrings",
        "engagement ring",
        "high jewelry",
        "necklace",
        "pendant",
        "ring",
        "wedding band",
        "other jewelry",
      ],
      brand: "default",
    },
    watch: { subcategory: "default", brand: "default" },
    art: {
      subcategory: [
        "bowl",
        "table art",
        "painting",
        "sculpture",
        "vase",
        "other art",
      ],
      brand: "default",
    },
    leather_goods: {
      subcategory: [
        "briefcase",
        "evening bag",
        "exotic",
        "handbag",
        "made to order",
        "purse",
        "shoulder bag",
        "tote",
        "travel bag",
        "trunk",
        "other leather goods",
      ],
      brand: "default",
    },
    guns: {
      subcategory: [
        "assault riffle",
        "machine gun",
        "revolver",
        "rifle/carbine",
        "pistol",
        "shotgun",
        "sub-machine gun",
        "other gun",
      ],
      brand: "default",
    },
    technology: {
      subcategory: [
        "camera",
        "cell phone",
        "computer",
        "Headphones/Earphones/Audio",
        "tablets",
        "watch",
        "drone",
        "other technology",
      ],
      brand: "default",
    },
    trading_card: {
      subcategory: [
        "baseball",
        "basketball",
        "football",
        "hockey",
        "soccer",
        "other trading card",
      ],
      brand: "default",
    },
    collectibles: {
      subcategory: [],
      brand: "default",
    },
    crypto: {
      subcategory: ["coin", "token", "other crypto"],
      brand: "default",
    },
    nft: {
      subcategory: [
        "nft digital artwork",
        "nft game asset",
        "nft music",
        "nft video",
        "other nft",
      ],
      brand: "default",
    },

    vintage: { subcategory: "default", brand: "default" },
    motor_vehicle: {
      subcategory: ["automobile", "motorcycle"],
      brand: "default",
    },
    animal: {
      subcategory: ["bird", "cat", "dog", "other animal"],
      brand: "default",
    },
    child_id_kit: { subcategory: ["child id kit"], brand: "default" },
    clothing: {
      brand: [""],
    },
    sneakers: {
      brand: [""],
    },
    other: { subcategory: "default", brand: "default" },
  };  

  function handleCategoryChange(e) {
    selectedCategory = e.target.value;
  }
  function getCapitalizedKeys(obj: any) {
    return Object.keys(obj).map((key) => {
      let capitalizedKey = key.replace(/_/g, " ");
      capitalizedKey = capitalizedKey
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      return capitalizedKey;
    });
  }
  function getSubcategory(obj, key) {
  const subcategory = obj[key]?.subcategory || "default";
  return Array.isArray(subcategory)
    ? subcategory.map((word) => word.toLowerCase().replace(/\b(\w)/g, (letter) => letter.toUpperCase()))
    : subcategory;
}



  let category = "Category";
  let subCategory = "Subcategory";
  let brand = "Brand";
  let size = "Size";
  let purchasedFrom = "Purchased from";
  let purchasedValue = "Purchased value";
  let description = "Keep the description to a few words";
  let iconColor = "black";
  
  const categoryArray = getCapitalizedKeys(categories);
  const subcategoryArray = getSubcategory(categories, category); 
  console.log(1, categoryArray, subcategoryArray);

</script>

<div class=" w-full px-2 h-[80vh] relative rounded-lg">
  <h1 class="flex text-white font-bold">Add A Card | Enter Card Info</h1>
  <div
    class="card-list w-full flex justify-center pt-10 content-center relative h-80 "
  >
  <CardFlippable
  {category}
  {subCategory}
  {brand}
  {size}
  {purchasedFrom}
  {purchasedValue}
  {description}/>
  </div>
  <div class="flex w-full justify-center">
    <form
      method="POST"
      action="/add_card"
      class="h-auto w-full p-4 pt-40 bg-white text-black flex flex-col justify-between flex-wrap rounded-lg md:w-[30rem] lg:w-[40rem]"
      use:enhance={({ data, cancel }) => {
        form = {};
        const category = data.get("category")?.toString() || "";
        const subCategory = data.get("subCategory")?.toString() || "";
        const brand = data.get("brand")?.toString() || "";
        const size = data.get("size")?.toString() || "";
        const purchasedFrom = data.get("purchasedFrom")?.toString() || "";
        const purchasedValue = data.get("purchasedValue")?.toString() || "";
        const description = data.get("description")?.toString() || "";
        console.log(form);
        if (
          !!category ||
          !!subCategory ||
          !!brand ||
          !!size ||
          !!size ||
          !!purchasedFrom ||
          !!purchasedValue ||
          !!description
        ) {
          form.message = "Invalid input";
          cancel();
        }
      }}
    >
      <div class="w-full  flex  justify-between  ">
        {#if page === 0}
          <div
            class="flex w-full "
            in:slide={{ delay: 100, duration: 100 }}
            out:slide={{ delay: 100 }}
          >
            <select
              bind:value={category}
              id="dropdown-add-card"
              class="select flex-1 w-full"
              name="category"
              placeholder="Category"
              on:change={handleCategoryChange}
            >
              <option selected disabled placeholder="Category">Category</option>

              {#each categoryArray as category}
                <option value={category}>{category}</option>
              {/each}
            </select>
            <select bind:value={subCategory} class="select flex-1 w-full">
              <option selected disabled placeholder="Subcategory"
                >Subcategory</option
              >

              {#each subcategoryArray as subcategory}
                <option selected value={subcategory}>{subcategory}</option>
              {/each}
            </select>
          </div>
        {/if}
      </div>
      {#if page === 1}
        <div class="w-full  flex  justify-between  ">
          <div
            class="flex"
            in:slide={{ delay: 100, duration: 100 }}
            out:slide={{ delay: 100 }}
          >
            <div class="form-control w-full max-w-xs flex-1 mx-1">
              <label class="label" for="brand">
                <span class="label-text font-bold ">Brand</span>
              </label>
              <input
                type="text"
                name="brand"
                placeholder="Rolex ... etc"
                class=" input input-sm shadow-sm input-bordered w-full max-w-xs"
                bind:value={brand}
              />
            </div>
            <div class="form-control w-full max-w-xs flex-1 mx-1 ">
              <label class="label flex w-full justiy-end text-right" for="size">
                <span
                  class="label-text font-bold flex w-full justiy-end text-right"
                  >Size</span
                >
              </label>
              <input
                type="text"
                name="size"
                placeholder="Size"
                class=" input input-sm shadow-sm input-bordered w-full max-w-xs"
                bind:value={size}
              />
            </div>
          </div>
        </div>
      {/if}
      {#if page === 2}
        <div class="w-full  flex  justify-between  ">
          <div
            class="flex"
            in:slide={{ delay: 100, duration: 100 }}
            out:slide={{ delay: 100 }}
          >
            <div class="form-control w-full max-w-xs flex-1 mx-1">
              <label class="label" for="purchasedFrom">
                <span class="label-text font-bold ">Purchased From</span>
              </label>
              <input
                type="text"
                name="purchasedFrom"
                placeholder="Rolex ... etc"
                class=" input input-sm shadow-sm input-bordered w-full max-w-xs"
                bind:value={purchasedFrom}
              />
            </div>
            <div class="form-control w-full max-w-xs flex-1 mx-1">
              <label class="label flex w-full justiy-end text-right" for="size">
                <span
                  class="label-text font-bold flex w-full justiy-end text-right"
                  >Purchased Value</span
                >
              </label>
              <input
                type="text"
                name="purchasedValue"
                placeholder="Size"
                class=" input input-sm shadow-sm input-bordered w-full max-w-xs"
                bind:value={purchasedValue}
              />
            </div>
          </div>
        </div>
      {/if}

      {#if page === 3}
        <div class="flex w-full justify-between ">
          <div
            class="form-control w-full max-w-xs flex-1 mx-1"
            in:slide={{ delay: 100, duration: 100 }}
            out:slide={{ delay: 100 }}
          >
            <label class="label" for="description">
              <span class="label-text font-bold ">Description</span>
            </label>
            <input
              type="text"
              name="decription"
              placeholder="Keep it short!"
              class=" input input-sm shadow-sm input-bordered w-full max-w-xs"
              bind:value={description}
            />
          </div>
        </div>
      {/if}

      {#if page === 4}
        <div
          class="flex flex-col w-full"
          in:slide={{ delay: 100, duration: 100 }}
          out:slide={{ delay: 100 }}
        >
          <h1 class="flex w-full justify-center font-bold">
            Upload Cetificates or Reciepts if necessary
          </h1>
          <input type="file" class="file-input w-full max-w-xs normal-case" />
        </div>
      {/if}
      {#if page === 5}
        <h1 class="flex justify-center w-full font-bold">
          Review Your Details and Submit!
        </h1>
      {/if}

      <div class="w-full flex self-end my-2">
        <div />
        {#if page > 0}
          <button
            type="button"
            on:click={() => {
              page === page--;
            }}
            class="btn ghost flex-1 normal-case shadow-s bg-"
            >Previous page</button
          >
        {/if}
        {#if page === 0 || page < 5}
          <button
            type="button"
            on:click={() => {
              page === page++;
            }}
            class="btn ghost flex-1 normal-case shadow-sm">Next</button
          >
        {/if}
        {#if page === 5}
          <button
            type="submit"
            on:click={() => {}}
            class="btn btn-success ghost flex-1 normal-case shadow-sm"
            >Submit</button
          >
        {/if}
      </div>
    </form>
  </div>
</div>

<style lang="postcss">
  .upload-pictures {
    background: rgba(44, 41, 41, 0.514);
  }
</style>
