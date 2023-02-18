<script lang="ts">
  import Select from "svelte-select";

  import { page } from "$app/stores";
  import type { LayoutServerData } from "../$types";
  import { onDestroy } from "svelte";
  import { createSearchStore, searchHandler } from "$lib/search";
  import { myneMasterBrandsAndBreeds } from "./../../../index";
  import { enhance } from "$app/forms";
  import CardFlippable from "$lib/components/CardFlippable.svelte";
  import type { PageData, Snapshot } from "./$types";
  import { fly, slide } from "svelte/transition";
  import { firstCapital } from "$lib/caps";
  import { sizes } from "$lib/size";
  import GeneralModal from "$lib/components/GeneralModal.svelte";

  export let data: PageData;
  export let flipped = false;
  export let brandFilterOpen = false;

  let sentCard = false;

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

  function setFilterOpen() {
    brandFilterOpen = true;
  }
  function brandFocus() {
    setFilterOpen();
  }
  function setFlip() {
    flipped = !flipped;
  }
  type Brand = {
    brand: string;
    searchTerms: string;
  };
  async function onSubmit() {
    await fetch("http://localhost:5174/api/addCard", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  }
  //initialize the category and subcategory fields
  export let category: string = "";
  export let subcategory: string = "";
  export let breed: string = "";
  export let brand: string = "";
  export let size: string = "";
  export let purchasedFrom: string = "";
  export let purchasedValue: string = "";
  export let description: string = "";
  export let message: string = "";
  export let success: boolean | null | undefined = false;
  interface FormData {
    category: string | never;
    subcategory: string | never;
    brand: string | never;
    breed: string | never;
    size: string | never;
    purchasedFrom: string | never;
    purchasedValue: string | never;
    description: string | never;
    message: string | never;
    success: boolean | null | undefined;
  }

  export let formData = {
    category: "",
    subcategory: "",
    brand: "",
    breed: "",
    size: "",
    purchasedFrom: "",
    purchasedValue: "",
    description: "",
    message: "",
    success: null,
  };

  $: formData = formData = {
    category,
    subcategory,
    brand,
    breed,
    size,
    purchasedFrom,
    purchasedValue,
    description,
    message,
    success: null,
  };
  $: sentCard = sentCard;
  export let form: {
    category?: string;
    subcategory?: string;
    brand?: string;
    breed?: string;
    purchasedFrom?: string;
    purchasedValue?: string;
    description?: string;
    size?: string;
    message?: string;
    success?: boolean | null | undefined;
  };
  export const snapshot: Snapshot = {
    capture: () => formData,
    restore: (value) => formData,
  };
  //pull cats from object, then use them to set other properties
  let categories = myneMasterBrandsAndBreeds.map((object) => {
    return object.name;
  });
  categories = categories.sort();
  //this allows the select boxes to set values, do not delete until proper refactor  $: brandInput = brand;
  let selectedCategory = myneMasterBrandsAndBreeds.find(
    (object) => object.name === category.toLowerCase()
  );
  $: selectedCategory = myneMasterBrandsAndBreeds.find(
    (object) => object.name === category.toLowerCase()
  );
  //pull subCats
  let subcategories: [] | string[] | undefined | null;
  $: subcategories = selectedCategory?.subcategories.sort();
  let breeds: [] | string[] | undefined | null;
  $: breeds = selectedCategory?.breeds;
  let brands: [] | string[] | undefined | null;
  $: brands = selectedCategory?.brands;

  function resetValues() {
    return {
      category: " ",
      subcategory: " ",
      breed: " ",
      brand: " ",
      size: " ",
      purchasedFrom: " ",
      purchasedValue: " ",
      description: " ",
    };
  }

  let backgroundColor: string;
  $: backgroundColor = category;
  let justValue: string;
  success = false;
  $: success = form?.success;
  $: console.log(form);
  if (success === true) {
    resetValues();
  }
</script>

<div class="w-full h-full flex flex-col pt-4 justify-start  relative">
  <h1 class="flex text-primary font-bold text-3xl pl-3 ">
    Add A Card | Enter Card Info
  </h1>
  <div class="w-full h-full absolute " transition:slide>
    <div
      class=" w-full flex flex-col justify-center px-2 pb-4 h-[90%] content-center  relative rounded-lg "
    >
      <div
        class="flex justify-center w-full pt-10 content-center relative h-80 "
      >
        <div class="card-sizer w-[80%] flex absolute top-[4rem] justify-center">
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
            {subcategories}
            {flipped}
            {sentCard}
            {success}
          />
        </div>
      </div>
      <div class="flex w-full justify-center">
        <form
          method="POST"
          class="h-[23rem] form-gradient w-full p-4 pt-40 form-g text-white flex flex-col justify-between  rounded-lg md:w-[30rem] lg:w-[40rem]"
          use:enhance
          class:exitForm={sentCard === true}
          class:comeBack={success === true}
        >
          <input
            hidden
            name="category"
            id="category"
            placeholder="Test"
            bind:value={category}
          />
          <input
            hidden
            name="subcategory"
            id="subcategory"
            placeholder="Test"
            bind:value={subcategory}
          />
          <input
            hidden
            name="brand"
            id="brand"
            placeholder="brand"
            bind:value={brand}
          />
          <input
            hidden
            name="breed"
            id="breed"
            placeholder="breed"
            bind:value={breed}
          />
          <input
            hidden
            name="size"
            id="size"
            placeholder="Test"
            bind:value={size}
          />
          <input
            hidden
            name="purchasedFrom"
            id="purchasedFrom"
            placeholder="purchasedFrom"
            bind:value={purchasedFrom}
          />
          <input
            hidden
            name="purchasedValue"
            id="purchasedValue"
            placeholder="purchasedValue"
            bind:value={purchasedValue}
          />
          <input
            hidden
            name="description"
            id="description"
            placeholder="Test"
            bind:value={description}
          />
          {#if pageCount === 0}
            <div class="w-full h-full relative">
              <div
                class="first-selects w-full h-full absolute flex flex-col"
                transition:fly={{ x: -100 }}
              >
                <!-- <div class="select-group "> -->
                <Select
                  placeholder="Category"
                  class="select text-black w-full mt-2 "
                  items={categories.map((categories) =>
                    firstCapital(categories)
                  )}
                  on:change={() => {
                    category = justValue;
                    subcategory = "";
                  }}
                  bind:justValue
                />

                {#if subcategories?.length > 0}
                  <div in:fly|local={{ duration: duration }} out:fly|local>
                    <div class="select-group">
                      <Select
                        placeholder="Subcategory"
                        class="select text-black w-full mt-2 "
                        items={subcategories?.map((subcategories) =>
                          firstCapital(subcategories)
                        )}
                        on:change={() => {
                          subcategory = justValue;
                        }}
                        bind:justValue
                      />

                    </div>
                  </div>
                {/if}
              </div>
            </div>
          {:else if pageCount === 1}
            <div class="w-full h-full relative flex flex-col ">
              <div
                class="brand-breed h-full w-full flex flex-col  absolute"
                transition:fly={{ x: -100 }}
              >
                {#if breeds?.length > 0}
                  <Select
                    placeholder="Breed"
                    class="select text-black w-full mt-2 "
                    items={breeds?.map((breed) => firstCapital(breed))}
                    on:change={() => {
                      breed = justValue;
                    }}
                    bind:justValue
                  />
                {/if}
                {#if brands?.length > 0}
                  <!-- <ComboBox formName="brand" options={brands} id="brand" /> -->
                  <Select
                    placeholder="Brand"
                    class="select text-black w-full mt-2 "
                    items={brands?.map((brand) => firstCapital(brand))}
                    on:change={() => {
                      brand = justValue;
                    }}
                    bind:justValue
                  />
                {/if}
                <Select
                  placeholder="Size"
                  class="select text-black w-full mt-2 "
                  items={sizes?.map((size) => firstCapital(size))}
                  on:change={() => {
                    size = justValue;
                  }}
                  bind:justValue
                  on:focus={() => (flipped = false)}
                  on:focus={() => (brandFilterOpen = false)}
                />
              </div>
            </div>
          {:else if pageCount === 2}
            <div class="w-full h-full relative">
              <div
                class="purchased h-[100px] w-full flex flex-col absolute"
                transition:fly={{ x: -100 }}
              >
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
                  placeholder="Purchased Value"
                  class="input input-md mt-2 "
                  bind:value={purchasedValue}
                  on:focus={() => (flipped = true)}
                  on:abort={() => (flipped = false)}
                />
              </div>
            </div>
          {:else if pageCount === 3}
            <div class="w-full h-full relative">
              <div
                class="description absolute  h-full w-full flex flex-col  "
                transition:fly={{ x: -100 }}
              >
                <input
                  type="text"
                  name="description"
                  id="description"
                  placeholder="Description"
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
              <div
                class="document-upload absolute"
                transition:fly={{ x: -100 }}
              >
                <input
                  type="file"
                  class="file-input w-full flex justify-center"
                />
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
                  class="btn btn-secondary normal-case shadow-lg flex-1 "
                >
                  Back</button
                >
              {/if}
              {#if pageCount === 0 || pageCount < 5}
                <button
                  type="button"
                  on:click={pageUp}
                  class="btn btn-primary normal-case shadow-lg flex-1 "
                >
                  Next
                </button>
              {/if}

              {#if pageCount === 5}
                <input
                  type="submit"
                  class="btn btn-success normal-case shadow-sm flex-1"
                  value="Submit"
                  on:click={() => {
                    sentCard = !sentCard;
                  }}
                />
              {/if}
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

{#if success === true}
  <GeneralModal {success} on:click={resetValues} />
{/if}

<style lang="postcss">
  .upload-pictures {
    background: rgba(44, 41, 41, 0.514);
    border-radius: 4;
  }
  input {
    color: black;
    background-color: white;
  }
  select {
    background-color: white;
  }
  .exitForm {
    -webkit-animation: slide-out-bottom 0.5s
      cubic-bezier(0.755, 0.05, 0.855, 0.06) 100ms both;
    animation: slide-out-bottom 0.5s cubic-bezier(0.755, 0.05, 0.855, 0.06)
      100ms both;
  }
  /* ----------------------------------------------
 * Generated by Animista on 2023-2-13 23:25:1
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

  /**
 * ----------------------------------------
 * animation slide-out-bottom
 * ----------------------------------------
 */
  @-webkit-keyframes slide-out-bottom {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: translateY(1000px);
      transform: translateY(1000px);
      opacity: 0;
    }
  }
  @keyframes slide-out-bottom {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: translateY(1000px);
      transform: translateY(1000px);
      opacity: 0;
    }
  }
  .comeBack {
    -webkit-animation: slide-in-bottom 0.5s
      cubic-bezier(0.68, -0.55, 0.265, 1.55) 100ms backwards;
    animation: slide-in-bottom 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 100ms
      backwards;
  }
  /* ----------------------------------------------
 * Generated by Animista on 2023-2-14 0:6:42
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

  /**
 * ----------------------------------------
 * animation slide-in-bottom
 * ----------------------------------------
 */
  /* ----------------------------------------------
 * Generated by Animista on 2023-2-14 0:6:42
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

  /**
 * ----------------------------------------
 * animation slide-in-bottom
 * ----------------------------------------
 */
  @-webkit-keyframes slide-in-bottom {
    0% {
      -webkit-transform: translateY(1000px);
      transform: translateY(1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes slide-in-bottom {
    0% {
      -webkit-transform: translateY(1000px);
      transform: translateY(1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }
  .form-gradient {
    background: hsla(216, 74%, 79%, 1);

    background: linear-gradient(
      225deg,
      hsla(216, 74%, 79%, 1) 0%,
      hsla(206, 100%, 91%, 1) 100%
    );

    background: -moz-linear-gradient(
      225deg,
      hsla(216, 74%, 79%, 1) 0%,
      hsla(206, 100%, 91%, 1) 100%
    );

    background: -webkit-linear-gradient(
      225deg,
      hsla(216, 74%, 79%, 1) 0%,
      hsla(206, 100%, 91%, 1) 100%
    );

    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
</style>
