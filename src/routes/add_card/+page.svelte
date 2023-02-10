<script lang="ts">
  import { page } from "$app/stores";
  import type { LayoutServerData } from "../$types";
  import { onDestroy } from "svelte";
  import { createSearchStore, searchHandler } from "$lib/search";
  import { enhance } from "$app/forms";
  import CardFlippable from "$lib/components/CardFlippable.svelte";
  import { myneMasterBrandsAndBreeds } from "../../index";
  import type { PageData } from "./$types";
  import { slide } from "svelte/transition";
  import { firstCapital } from "$lib/caps";
  export let data: PageData;
  export let form: { message?: string };
  export let flipped = false;
  export let brandFilterOpen = false;
  
  //testing button  
  function setFlip() {
    flipped = !flipped;
  }
  function setFilterOpen() {
    brandFilterOpen = !brandFilterOpen;
  }
  function brandFocus() {
    setFilterOpen();
  }
  function brandSelect(){
    brand = options;
    setFilterOpen();
  }
  type Brand = {
    brand: string;
    searchTerms: string;
  };
  //initialize the category and subcategory fields
  export let category = "";
  export let subcategory = "";
  export let breed = "";
  export let brand = "";
  export let size = "";
  export let purchasedFrom = "";
  export let purchasedValue = "";
  export let description = "";
  //set hidden input values//refactor later
  let categoryHidden = "";
  let subcategoryHidden = "";
  let breedHidden = "";
  //pull cats from object, then use them to set other properties
  let categories = myneMasterBrandsAndBreeds.map((object) => {
    return object.name;
  });
  //this allows the select boxes to set values, do not delete until proper refactor
  $: category = categoryHidden.toLowerCase();
  $: subcategory = subcategoryHidden.toLowerCase();
  $: breed = breedHidden.toLowerCase();
  $: brandInput = brand;
  let selectedCategory = myneMasterBrandsAndBreeds.find(
    (object) => object.name === category
  );
  $: selectedCategory = myneMasterBrandsAndBreeds.find(
    (object) => object.name === category
  );
  //pull subCats
  let subcategories: [];
  $: subcategories = selectedCategory?.subcategories;
  let breeds: [];
  $: breeds = selectedCategory?.breeds;
  let brands: [];
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

  //initialize the brands array

  // initialize fuzzy brand search
</script>

  <div class=" flex flex-col justify-center content-center  p-3">
    <CardFlippable
      {category}
      {subcategory}
      {brand}
      {size}
      {purchasedFrom}
      {purchasedValue}
      {description}
      {flipped}
      {backgroundColor}
    />

    <div class="add-card-form-container w-[90%] h-[90%] bg-black" />
    <form
      method="POST"
      use:enhance={({ data, cancel }) => {
        form = { message: "" };
        const category = data.get("category")?.toString().toLocaleLowerCase();
        const subcategory = data
          .get("subcategory")
          ?.toString()
          .toLocaleLowerCase();
        const breed = data.get("breed")?.toString().toLocaleLowerCase();
      }}
    >
      <div class="select-group">
        <input hidden bind:value={categoryHidden} />
        <select
          on:focus={resetValues}
          on:click={() => (category = categoryHidden)}
          bind:value={categoryHidden}
          name="category"
          placeholder="Category"
          title="Category"
          id="category"
          class="select text-black w-full max-w-xs"
        >
          <option disabled selected>Categories</option>
          {#each categories as options}toString().toLocaleLowerCase();
            <option>{firstCapital(options)}</option>
          {/each}
        </select>
      </div>
      {#if subcategories?.length > 0}
        <div transition:slide>
          <div class="select-group">
            <input hidden bind:value={subcategoryHidden} />
            <select
              on:focus={() => (breed = "")}
              on:click={() => (subcategory = subcategoryHidden)}
              bind:value={subcategoryHidden}
              name="subcategory"
              placeholder="Subcategory"
              id="subcategory"
              class="select text-black w-full max-w-xs"
            >
              <option disabled selected>Subcategories</option>
              {#each subcategories as options}
                <option>{firstCapital(options)}</option>
              {/each}
            </select>
          </div>
        </div>
      {/if}
      {#if breeds?.length > 0}
        <div transition:slide>
          <div class="select-group">
            <input hidden bind:value={breedHidden} />
            <select
              on:focus={() => (subcategory = "")}
              on:click={() => (breed = breedHidden)}
              bind:value={breedHidden}
              name="breed"
              placeholder="Breeds"
              id="breed"
              class="select text-black w-full max-w-xs"
            >
              <option disabled selected>Breeds</option>
              {#each breeds as options}
                <option>{firstCapital(options)}</option>
              {/each}
            </select>
          </div>
        </div>
      {/if}
      {#if brands?.length > 0}
        <input
          type="text"
          name="brand"
          id="brand"
          placeholder="brand"
          class="input-md "
          bind:value={brand}
          on:focus={brandFocus}
        />
        {#if brandFilterOpen}
          {#if filteredBrands.length > 0}
            {#each filteredBrands as options}
              <option
              on:click={()=> brand = options}
              on:click = {()=> brandFilterOpen = !brandFilterOpen }>
                {options}
              </option>
            {/each}
          {/if}
        {/if}
      {/if}
      <input
        type="text"
        name="size"
        id="size"
        placeholder="size"
        class="input-md "
        bind:value={size}
        on:focus={() => (flipped = false)}
      />
      <input
        type="text"
        name="purchasedFrom"
        id="purchasedFrom"
        placeholder="purchasedFrom"
        class="input-md "
        bind:value={purchasedFrom}
        on:focus={() => (flipped = true)}
        on:abort={() => (flipped = false)}
      />
      <input
        type="money"
        name="purchasedValue"
        id="purchasedValue"
        placeholder="purchasedValue"
        class="input-md "
        bind:value={purchasedValue}
        on:focus={() => (flipped = true)}
        on:abort={() => (flipped = false)}
      />
      <input
        type="text"
        name="description"
        id="description"
        placeholder="description"
        class="input-md "
        bind:value={description}
        on:focus={() => (flipped = true)}
        on:abort={() => (flipped = false)}
      />
      <input
        type="submit"
        name="submit"
        value="Add Card"
        class="btn btn-primary normal-case"
      />
    </form>
  </div>

<style lang="postcss">
  input{
    color: black;
  }
</style>
