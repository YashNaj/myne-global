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
  export let message: string = " ";
  let backgroundColor: string;
  $: backgroundColor = category;
  let justValue: string;

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
  export let isStolen = "";
  export let isHeirloom = "";
  export let pictures = "";
  export let category = "";
  export let subcategory = "";
  export let brand = "";
  export let breed = "";
  export let size = "";
  export let purchasedFrom = "";
  export let purchasedValue = "";
  export let reportedStolenDate = "";
  export let description = "";
  export let crypto_token_address = "";
  export let unique_features = "";
  export let artist = "";
  export let author = "";
  export let dob = "";
  export let body_length = "";
  export let brand_reference = "";
  export let caliber = "";
  export let carat_weight = "";
  export let case_material = "";
  export let cOfAuth = "";
  export let clarity = "";
  export let color = "";
  export let cut = "";
  export let date = "";
  export let dial = "";
  export let distinguishing_features = "";
  export let document = "";
  export let drivetrain = "";
  export let engine = "";
  export let engraving = "";
  export let exchange_address = "";
  export let exterior_color = "";
  export let fuel_type = "";
  export let grading = "";
  export let grading_reports = "";
  export let height = "";
  export let hotstamping = "";
  export let interior_color = "";
  export let invoice = "";
  export let laser_inscription = "";
  export let manufacturer = "";
  export let material = "";
  export let microchip = "";
  export let mileage = "";
  export let model = "";
  export let model_yr = "";
  export let movement_caliber = "";
  export let other = "";
  export let pedigree = "";
  export let product = "";
  export let registration_certificate = "";
  export let release_date = "";
  export let serial = "";
  export let serie = "";
  export let series = "";
  export let shape = "";
  export let smart_contract_address = "";
  export let smart_contract_id = "";
  export let stock_number = "";
  export let stone = "";
  export let strap_bracelet = "";
  export let tattoo = "";
  export let trademarks = "";
  export let transaction = "";
  export let transmission = "";
  export let url = "";
  export let valuation_report = "";
  export let vin = "";
  export let wallet_address = "";
  export let weight = "";
  export let year = "";
  export let marketPrice = "";
  export let childIdFirstName = "";
  export let childIdMiddleName = "";
  export let childIdLastName = "";
  export let eye_color = "";
  export let hair_color = "";
  export let parentOneName = "";
  export let parentTwoName = "";
  export let contactNumberOne = "";
  export let contactNumberTwo = "";
  export let homeAddress = "";
  export let homeCity = " ";
  export let homeState = "";
  export let homeCountry = "";
  export let homeZIP = "";
  export let age = "";
  export let gender = "";
  export let race = "";
  export let physicalTraits = "";
  export let allergies = "";
  export let medicalConditions = "";
  export let prescription = "";
  interface cardProps {
    isStolen?:string
    isHeirloom?:string
    pictures?:string
    category?:string | keyof typeof formFieldsObject
    subcategory?:string
    brand?:string
    breed?:string
    size?:string
    purchasedFrom?:string
    purchasedValue?:string
    reportedStolenDate?:string
    description?:string
    crypto_token_address?:string
    unique_features?:string
    artist?:string
    author?:string
    dob?:string
    body_length?:string
    brand_reference?:string
    caliber?:string
    carat_weight?:string
    case_material?:string
    cOfAuth?:string
    clarity?:string
    color?:string
    cut?:string
    date?:string
    dial?:string
    distinguishing_features?:string
    document?:string
    drivetrain?:string
    engine?:string
    engraving?:string
    exchange_address?:string
    exterior_color?:string
    fuel_type?:string
    grading?:string
    grading_reports?:string
    height?:string
    hotstamping?:string
    interior_color?:string
    invoice?:string
    laser_inscription?:string
    manufacturer?:string
    material?:string
    microchip?:string
    mileage?:string
    model?:string
    model_yr?:string
    movement_caliber?:string
    other?:string
    pedigree?:string
    product?:string
    registration_certificate?:string,
    release_date?:string
    serial?:string
    serie?:string
    series?:string
    shape?:string
    smart_contract_address?:string
    smart_contract_id?:string
    stock_number?:string
    stone?:string
    strap_bracelet?:string
    tattoo?:string
    trademarks?:string
    transaction?:string
    transmission?:string
    url?:string
    valuation_report?:string
    vin?:string
    wallet_address?:string
    weight?:string
    year?:string
    marketPrice?:string
    childIdFirstName?:string
    childIdMiddleName?:string
    childIdLastName?:string
    eye_color?:string
    hair_color?:string
    parentOneName?:string
    parentTwoName?:string
    contactNumberOne?:string
    contactNumberTwo?:string
    homeAddress?:string
    homeCity?:string
    homeState?:string
    homeCountry?:string
    homeZIP?:string
    age?:string
    gender?:string
    race?:string
    physicalTraits?:string
    allergies?:string
    medicalConditions?:string
    prescription?:string
    backgroundColor?:string
  }
    let cardProps:cardProps = {
    isStolen,
    isHeirloom,
    pictures,
    category,
    subcategory,
    brand,
    breed,
    size,
    purchasedFrom,
    purchasedValue,
    reportedStolenDate,
    description,
    crypto_token_address,
    unique_features,
    artist,
    author,
    dob,
    body_length,
    brand_reference,
    caliber,
    carat_weight,
    case_material,
    cOfAuth,
    clarity,
    color,
    cut,
    date,
    dial,
    distinguishing_features,
    document,
    drivetrain,
    engine,
    engraving,
    exchange_address,
    exterior_color,
    fuel_type,
    grading,
    grading_reports,
    height,
    hotstamping,
    interior_color,
    invoice,
    laser_inscription,
    manufacturer,
    material,
    microchip,
    mileage,
    model,
    model_yr,
    movement_caliber,
    other,
    pedigree,
    product,
    registration_certificate,
    release_date,
    serial,
    serie,
    series,
    shape,
    smart_contract_address,
    smart_contract_id,
    stock_number,
    stone,
    strap_bracelet,
    tattoo,
    trademarks,
    transaction,
    transmission,
    url,
    valuation_report,
    vin,
    wallet_address,
    weight,
    year,
    marketPrice,
    childIdFirstName,
    childIdMiddleName,
    childIdLastName,
    eye_color,
    hair_color,
    parentOneName,
    parentTwoName,
    contactNumberOne,
    contactNumberTwo,
    homeAddress,
    homeCity,
    homeState,
    homeCountry,
    homeZIP,
    age,
    gender,
    race,
    physicalTraits,
    allergies,
    medicalConditions,
    prescription,
    backgroundColor,
  };
  $: cardProps.category = category;
  $: cardProps = {...cardProps} ;

  $: console.log("🚀 ~ file: +page.svelte:260 ~ cardProps", cardProps)

  export let success: boolean | null | undefined = false;

  export let formData = {
    ...cardProps, 
    message: "",
    success: null,
  };

  $: formData = formData = {
  ...cardProps, 
    message,
    success: null,
  };
    console.log("🚀 ~ file: +page.svelte:373 ~ formData", formData)

  $: sentCard = sentCard;
  export let form: {
//
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
    (object) => object.name === category?.toLowerCase()
  );
  $: selectedCategory = myneMasterBrandsAndBreeds.find(
    (object) => object.name === category?.toLowerCase()
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
          <CardFlippable cardProps = {cardProps}/>
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
              </div>
            </div>
          {:else if pageCount === 1}
            <div class="w-full h-full relative flex flex-col ">
              <div
                class="brand-breed h-full w-full flex flex-col  absolute"
                transition:fly={{ x: -100 }}
              >
                <Select
                  placeholder="Breed"
                  class="select text-black w-full mt-2 "
                  items={breeds?.map((breed) => firstCapital(breed))}
                  on:change={() => {
                    breed = justValue;
                  }}
                  bind:justValue
                />
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
                <Select
                placeholder="Size" class="select text-black w-full mt-2 " items={sizes?.map(
                  (size) => firstCapital(size)
                )}
                on:change={() => {
                  size = justValue;
                }}
                bind:justValue on:focus={() => (flipped = false)}
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
