<script lang="ts">
  import Select from "svelte-select";

  import Transition from "./../../lib/components/Transition.svelte";
  import { page } from "$app/stores";
  import type { LayoutServerData } from "../$types";
  import { onDestroy } from "svelte";
  import { createSearchStore, searchHandler } from "$lib/search";
  import { enhance } from "$app/forms";
  import CardFlippable from "$lib/components/CardFlippable.svelte";
  import { myneMasterBrandsAndBreeds } from "../../index";
  import { fly, slide } from "svelte/transition";
  import { firstCapital } from "$lib/caps";
  import ComboBox from "$lib/components/ComboBox.svelte";
  import {sizes} from '$lib/size'
  export let data: PageData;
  export let form: { message?: string };
  export let flipped = false;
  export let brandFilterOpen = false;
  let duration = 300;

  let pageCount = 0;
  function pageUp() {
    pageCount++;
  }
  function pageDown() {
    pageCount--;
  }
  $: console.log(pageCount);
  //testing button
  function setFlip() {
    flipped = !flipped;
  }
  function setFilterOpen() {
    brandFilterOpen = true;
  }
  function brandFocus() {
    setFilterOpen();
  }

  type Brand = {
    brand: string;
    searchTerms: string;
  };
  //initialize the category and subcategory fields
  export let category: any = "";
  export let subcategory: any = "";
  export let breed: any = "";
  export let brand: any = "";
  export let size: any = "";
  export let purchasedFrom: any = "";
  export let purchasedValue: any = "";
  export let description: any = "";

  export let justCategory: any = "";
  export let justSubcategory: any = "";
  export let justBreed: any = "";
  export let justBrand: any = "";
  export let justSize: any = "";
  export let justPurchasedFrom: any = "";
  export let justPurchasedValue: any = "";
  export let justDescription: any = "";

  $:category = justCategory
  $: console.log("🚀 ~ file: AddCard.svelte:66 ~ category", category)
  $:subcategory  = justSubcategory;


  $: console.log("🚀 ~ file: AddCard.svelte:66 ~ category", category)
  //set hidden input values//refactor later
  let categoryHidden = "";
  let subcategoryHidden = "";
  let breedHidden = "";
  //pull cats from object, then use them to set other properties
  let categories = myneMasterBrandsAndBreeds.map((object) => {
    return object.name;
  });
  //this allows the select boxes to set values, do not delete until proper refactor  $: brandInput = brand;
  let selectedCategory = myneMasterBrandsAndBreeds.find(
    (object) => object.name === category
  );
  $: selectedCategory = myneMasterBrandsAndBreeds.find(
    (object) => object.name === category
  );
  //pull subCats
  let subcategories: [] | string[] | undefined | null;
  $: subcategories = selectedCategory?.subcategories;
  let breeds: [] | string[] | undefined | null;
  $: breeds = selectedCategory?.breeds;
  let brands: [] | string[] | undefined | null;
  $: brands = selectedCategory?.brands;
  $: filteredBrands = brands?.filter((brand: string) =>
    brand.toLowerCase().includes(brandInput.toLowerCase())
  );

  let searchBrands: [];
  $: searchBrands = brands;
  $: console.log("🚀 ~ file: +page.svelte:55 ~ searchBrands", searchBrands);
  $: console.log(
    "🚀 ~ file: +page.svelte:27 ~ selectedCategory",
    selectedCategory
  ); //reset values on category change
  function resetValues() {
    breed = "";
    subcategory = "";
    flipped = false;
  }

  let searchProducts: Brand[] = searchBrands?.map((item: string) => ({
    brand: item,
    searchTerms: `${searchBrands}`,
  }));
  let searchStore = createSearchStore(searchProducts);
  $: searchStore = createSearchStore(searchProducts);
  console.log("🚀 ~ file: +page.svelte:80 ~ searchStore", searchStore);
  const unsubscribe = searchStore.subscribe((model) => searchHandler(model));
  onDestroy(() => {
    unsubscribe();
  });
  //log stores
  $: console.log("🚀 ~ file: +page.svelte:14 ~ category", category);
  $: console.log("🚀 ~ file: +page.svelte:14 ~ subcategory", subcategory);
  $: console.log("🚀 ~ file: +page.svelte:15 ~ breed", breed);

  let backgroundColor: string;
  $: backgroundColor = category;
  $: console.log(
    "🚀 ~ file: +page.svelte:88 ~ backgroundColor",
    backgroundColor
  );
  function brandSelect() {
    brand = options;
    setFilterOpen();
  }

  //initialize the brands array

  // initialize fuzzy brand search
  let justValue: string;
</script>
<!-- a -->
<div class=" w-full px-2 h-[80vh] relative rounded-lg">
  <h1 class="flex text-white font-bold">Add A Card | Enter Card Info</h1>
  <div
    class="card-list w-full flex justify-center pt-10 content-center relative h-80 "
  >
    <CardFlippable
    {category}
    {subcategory}
    {breed}
    {brand}
    {size}
    {purchasedFrom}
    {purchasedValue}
    {description}
    {brands}
    {breeds}
    {flipped}
    />
  </div>
  <div class="flex w-full justify-center">
    <form
      method="POST"
      action="/add_card"
      class="h-[23rem] w-full p-4 pt-40 bg-white text-black flex flex-col justify-between  rounded-lg md:w-[30rem] lg:w-[40rem]"
      use:enhance={({ data, cancel }) => {
        form = {};
        const category = data.get("category")?.toString() || "";
        $: console.log("🚀 ~ file: AddCard.svelte:154 ~ category", category);
        const subcategory = data.get("subcategory")?.toString() || "";
        const brand = data.get("brand")?.toString() || "";
        const size = data.get("size")?.toString() || "";
        const breed = data.get("breed")?.toString() || "";
        const purchasedFrom = data.get("purchasedFrom")?.toString() || "";
        const purchasedValue = data.get("purchasedValue")?.toString() || "";
        const description = data.get("description")?.toString() || "";
        console.log(form);
        if (
          !!category ||
          !!subcategory ||
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
      {#if pageCount === 0}
        <div class="w-full h-full relative">
          <div class="first-selects w-full h-full absolute flex flex-col">
            <!-- <div class="select-group "> -->
            <input hidden bind:value={categoryHidden} />
            <ComboBox
              items={categories}
              field={category}
              justValue={justCategory}
              placeholder= "Category "
            />
            <!-- <Select
              on:focus={resetValues}
              name="category"
              placeholder="Category"
              itemId="category"
              items={categories.map((category) => firstCapital(category))}
              class="select text-black w-full mt-2 "
              bind:justValue
              on:change={() => {
                category = justValue;
              }}
            /> -->
            {#if subcategories?.length > 0}
              <div in:fly|local={{ duration: duration }} out:fly|local>
                <div class="select-group">
                  <input hidden bind:value={subcategoryHidden} />
                  <ComboBox
                  items={categories}
                  field={category}
                  justValue={justSubcategory}
                  placeholder= "Category "
                />
                  <!-- <Select
                    items={subcategories}
                    on:focus={() => (breed = "")}
                    name="subcategory"
                    placeholder="Subcategory"
                    id="subcategory"
                    class="select text-black w-full mt-2 "
                  /> -->
                </div>
              </div>
            {/if}
          </div>
        </div>
      {:else if pageCount === 1}
        <div class="w-full h-full relative flex flex-col ">
          <div class="brand-breed h-full w-full flex flex-col  absolute">
            {#if breeds?.length > 0}

              <Select
                name="breed"
                class="input select input-md text-black border"
                items={breeds}
                placeholder="Breed"
              />
            {/if}
            {#if brands?.length > 0}
              <!-- <ComboBox formName="brand" options={brands} id="brand" /> -->
              <Select
                name="brand"
                class="input select input-md text-black border "
                placeholder="Brand"
                items={brands}
                clearable
              />
            {/if}
            <Select
            name="size"
            class="input select input-md text-black border "
            placeholder="Size"
            items={sizes}
            clearable
          />
          </div>
        </div>
      {:else if pageCount === 2}
        <div class="w-full h-full relative">
          <div class="purchased h-full w-full flex flex-col absolute">
            <input
              type="text"
              name="purchasedFrom"
              id="purchasedFrom"
              placeholder="Purchased From"
              class="input input-md mt-2 "
              bind:value={purchasedFrom}
              on:focus={() => (flipped = true)}
              on:abort={() => (flipped = false)}
            />
            <input
              type="string"
              name="purchasedValue"
              id="purchasedValue"
              placeholder="Purchase Value"
              class="input input-md mt-2 "
              bind:value={purchasedValue}
              on:focus={() => (flipped = true)}
              on:abort={() => (flipped = false)}
            />
          </div>
        </div>
      {:else if pageCount === 3}
        <div class="w-full h-full relative">
          <div class="description absolute  h-full w-full flex flex-col  ">
            <input
              type="text"
              name="description"
              id="description"
              placeholder="description"
              class="input input-md mt-2 "
              bind:value={description}
              on:focus={() => (flipped = true)}
              on:abort={() => (flipped = false)}
            />
          </div>
        </div>
      {:else if pageCount === 4}
        <div
          class="w-full h-full relative flex justify-center flex-wrap content-center"
        >
          <div class="document-upload absolute">
            <input type="file" class="file-input w-full flex justify-center" />
          </div>
        </div>
      {:else if pageCount === 5}
        <div class="w-full h-full relative flex justify-center">
          <div
            class="submit absolute  h-full w-full flex flex-col font-bold  text-primary text-center"
          >
            Please review your data before submitting, Myne takes no
            responsibility for incorrect or fraudulent values submitted
          </div>
        </div>
      {/if}
      <div class="pagination-buttons mt-2 w-full flex self-end">
        <div class="pagination-btns flex w-full self-end">
          {#if pageCount > 0}
            <button
              type="button"
              on:click={pageDown}
              class="btn btn-secondary normal-case shadow-sm flex-1 "
            >
              Back</button
            >
          {/if}
          {#if pageCount === 0 || pageCount < 5}
            <button
              type="button"
              on:click={pageUp}
              class="btn btn-primary normal-case shadow-sm flex-1 "
            >
              Next
            </button>
          {/if}

          {#if pageCount === 5}
            <input
              type="submit"
              class="btn btn-success normal-case shadow-sm flex-1"
              value="Submit"
            />
          {/if}
        </div>
      </div>
    </form>
  </div>
</div>

<style lang="postcss">
  .upload-pictures {
    background: rgba(44, 41, 41, 0.514);
    border-radius: 4;
  }
  input {
    color: black;
    background-color: white;
    border: 1px solid #002d72;
  }
  select {
    background-color: white;
    border: 1px solid #002d72;
  }
</style>
