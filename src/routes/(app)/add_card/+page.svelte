<script lang="ts">
  import { Transition } from "@rgossiaux/svelte-headlessui";
  import { createSearchStore, searchHandler } from "$lib/search";
  import { page } from "$app/stores";
  import type { LayoutServerData } from "../$types";
  import Select from "svelte-select";
  import { onDestroy, onMount } from "svelte";
  import type { IcardProps } from "./../../../cardProps";
  import { myneMasterBrandsAndBreeds } from "./../../../index";
  import { enhance } from "$app/forms";
  import CardFlippable from "$lib/components/CardFlippable.svelte";
  import type { PageData, Snapshot } from "./$types";
  import { slide } from "svelte/transition";
  import GeneralModal from "$lib/components/GeneralModal.svelte";
  import { sizes } from "../../../size";
  import SwiperStandard from "$lib/components/SwiperStandard.svelte";

  //initialize fieldProps

  // function handleFilter(e) {
  //       if (e.detail.length === 0 && filterText.length > 0) {
  //           const prev = items.filter((i) => !i.created);
  //           items = [...prev, { value: filterText, label: filterText, created: true }];
  //       }
  //   }

  //   function handleChange(e) {
  //       items = items.map((i) => {
  //           delete i.created;
  //           return i;
  //       });
  //   }

  import {
    jewelryProps,
    watchProps,
    artProps,
    leatherProps,
    clothingProps,
    sneakerProps,
    firearmsProps,
    technologyProps,
    tradingCardsProps,
    collectiblesProps,
    cryptoProps,
    nftProps,
    animalProps,
    vintageProps,
    autoProps,
    motoProps,
    otherProps,
  } from "../../fieldProps";
  import PrevButton from "$lib/components/PrevButton.svelte";
  import NextButton from "$lib/components/NextButton.svelte";
  import { firstCapital } from "$lib/caps";

  let floatingConfig = {
    strategy: "bottom",
  };

  onMount(() => {
    const swiperEl = document.querySelector(".swiper-container");
    const nextEl = document.querySelector(".next");
    const previousEl = document.querySelector(".previous");
    console.log(
      "🚀 ~ file: +page.svelte:65 ~ onMount ~ previousEl:",
      previousEl
    );
    nextEl?.addEventListener("click", () => {
      swiperEl?.swiper.slideNext();
    });
    previousEl?.addEventListener("click", () => {
      swiperEl?.swiper.slidePrev();
    });
  });
  interface IfieldsPropsObject {
    [key: string]: string[];
  }
  const fieldPropsObject: IfieldsPropsObject = {
    jewelry: jewelryProps,
    watch: watchProps,
    art: artProps,
    leather: leatherProps,
    clothing: clothingProps,
    sneakers: sneakerProps,
    firearms: firearmsProps,
    technology: technologyProps,
    "trading cards": tradingCardsProps,
    collectibles: collectiblesProps,
    crypto: cryptoProps,
    nft: nftProps,
    dog: animalProps,
    cat: animalProps,
    bird: animalProps,
    vintage: vintageProps,
    automobile: autoProps,
    motorcycle: motoProps,
    other: otherProps,
  };
  let data: PageData;
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
  export let color = "";
  export let cut_shape = "";
  export let date = "";
  export let dial = "";
  export let distinguishing_features = "";
  export let document_array = "";
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
  export let clarity = "";
  let cardProps: IcardProps = {
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
    cut_shape,
    date,
    dial,
    distinguishing_features,
    document_array,
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
    backgroundColor,
  };
  let addCardInputs: string[] = [];
  $: addCardInputs =
    fieldPropsObject[selectedCategory?.name as unknown as string];
  $: console.log("🚀 ~ file: +page.svelte:312 ~ addCardInputs:", addCardInputs);
  $: cardProps.category = category;
  $: cardProps = { ...cardProps };

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
  //pull various cats arrays
  let subcategories: [] | string[] | undefined | null;
  $: subcategories = selectedCategory?.subcategories.sort();
  let stones: [] | string[] | undefined | null;
  $: stones = selectedCategory?.stone?.sort();
  let colors: [] | string[] | undefined | null;
  $: colors = selectedCategory?.color?.sort();
  let cut_shapes: [] | string[] | undefined | null;
  $: cut_shapes = selectedCategory?.cut_shape?.sort();
  let carat_weights: [] | string[] | undefined | null;
  $: carat_weights = selectedCategory?.carat_weight?.sort();
  let clarities: [] | string[] | undefined | null;
  $: clarities = selectedCategory?.clarity?.sort();
  let breeds: [] | string[] | undefined | null;
  $: breeds = selectedCategory?.breeds;
  let brands: [] | string[] | undefined | null;
  $: brands = selectedCategory?.brands;

  $: cardProps = cardProps;
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

<div
  class="w-full mg:h-[90%] h-full flex flex-col pt-4 justify-start  relative  "
>
  <h1 class="flex text-primary font-bold text-3xl pl-3">
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
          <CardFlippable {flipped} {cardProps} />
        </div>
      </div>
      <div class="flex w-full justify-center">
        <form
          method="POST"
          class="h-[30rem] form-gradient w-full p-4 pt-[15rem] flex  justify-between  md:w-[30rem] lg:w-[40rem] form-container text-white bg-gradient-to-b from-[#002d72] to-[#a3c7fa] rounded-2xl 
          [box-shadow:rgba(0,_0,_0,_0.09)_0px_2px_1px,_rgba(0,_0,_0,_0.09)_0px_4px_2px,_rgba(0,_0,_0,_0.09)_0px_8px_4px,_rgba(0,_0,_0,_0.09)_0px_16px_8px,_rgba(0,_0,_0,_0.09)_0px_32px_16px;]"
          use:enhance
          class:exitForm={sentCard === true}
          class:comeBack={success === true}
        >
          {#if addCardInputs?.length > 0}
            <input
              hidden
              name="category"
              id="categroy"
              placeholder="categroy"
              bind:value={cardProps["category"]}
            />
            {#each addCardInputs as hiddenInput}
              <input
                hidden
                name={hiddenInput}
                id={hiddenInput}
                placeholder={hiddenInput}
                bind:value={cardProps[`${hiddenInput}`]}
              />
            {/each}
          {/if}

          <!-- <SwiperStandard
            {selectedCategory}
            {subcategories}
            {brands}
            {breeds}
            {colors}
            {cut_shapes}
            {clarities}
            {stones}
            {addCardInputs} -->
          <div
            class="form-box w-full h-full grid grid-rows-[3fr_1fr] place-items-center"
          >
            <div class="form-input-button-wrapper  w-full h-full ">
              <div
                class="form-slider w-full h-full grid grid-cols-1 grid-rows-[3fr_1fr"
              >
                <swiper-container
                  allow-touch-move="false"
                  no-sliding={true}
                  class="w-full h-full swiper-container touch-none"
                >
                  <swiper-slide class="slide-0 w-full h-full    p-3">
                    <div class="w-full h-full place-items-center">
                      <div>
                        <Select
                          {floatingConfig}
                          placeholder="Category"
                          class="select text-black w-full my-4 "
                          items={categories?.map((categories) =>
                            firstCapital(categories)
                          )}
                          on:change={() => {
                            category = justValue;
                            subcategory = "";
                          }}
                          bind:justValue
                        />
                      </div>
                      {#if subcategories?.length > 0}
                        <div transition:slide>
                          <Select
                            placeholder="Subcategory"
                            class="select text-black w-full my-4 "
                            items={subcategories?.map((subcategories) =>
                              firstCapital(subcategories)
                            )}
                            on:change={() => {
                              subcategory = justValue;
                            }}
                            bind:justValue={cardProps["subcategory"]}
                          />
                        </div>
                      {/if}
                      {#if breeds?.length > 0}
                        <div transition:slide>
                          <Select
                            {floatingConfig}
                            placeholder="Breed"
                            class="select text-black w-full my-4"
                            items={breeds?.map((breed) => firstCapital(breed))}
                            on:change={() => {
                              breed = justValue;
                            }}
                            bind:justValue={cardProps["breed"]}
                          />
                        </div>
                      {/if}
                    </div>
                  </swiper-slide>

                  <swiper-slide
                    class="slide-1 w-full h-full gird grid-row-[1fr_1fr]  p-3"
                  >
                    {#if cardProps.category?.toLowerCase() === "art"}
                      <input
                        placeholder="Artist"
                        class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                        bind:value={cardProps["artist"]}
                      />
                      <input
                        placeholder="Model"
                        class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                        bind:value={cardProps["model"]}
                      />
                    {:else if cardProps.category?.toLowerCase() === "jewelry" || "automobile" || "motorcycle"}
                      <Select
                        placeholder="Brand"
                        class="select text-black w-full mt-2 "
                        items={brands?.map((brand) => firstCapital(brand))}
                        on:change={() => {
                          brand = justValue;
                        }}
                        bind:justValue={cardProps["brand"]}
                      />
                      <input
                        placeholder="Brand Reference"
                        class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                        bind:value={cardProps["brand_reference"]}
                      />
                    {/if}
                  </swiper-slide>
                  <swiper-slide
                    class="slide-2 w-full h-full gird grid-row-[1fr_1fr]  p-3"
                  >
                    {#if cardProps.category?.toLowerCase() === "art"}
                      <input
                        placeholder="Material"
                        class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                        bind:value={cardProps["material"]}
                      />
                      <input
                        type="month"
                        placeholder="Year"
                        class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                        bind:value={cardProps["year"]}
                      />
                    {:else if cardProps.category?.toLowerCase() === "jewelry"}
                      <input
                        placeholder="Model"
                        class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                        bind:value={cardProps["model"]}
                      />
                      <input
                        placeholder="Serial"
                        class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                        bind:value={cardProps["serial"]}
                      />
                    {:else if cardProps.category?.toLowerCase() === "automobile" || "motorcycle"}
                      <input
                        placeholder="Model"
                        class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                        bind:value={cardProps["model"]}
                      />
                      <input
                        type="month"
                        placeholder="Year"
                        class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                        bind:value={cardProps["year"]}
                      />
                    {/if}
                  </swiper-slide>
                  <swiper-slide
                    class="slide-3 w-full h-full gird grid-row-[1fr_1fr]  p-3"
                  >
                    {#if cardProps.category?.toLowerCase() === "art"}
                      <input
                        placeholder="Brand"
                        class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                        bind:value={cardProps["brand"]}
                        on:focus={() => setFlip()}
                      />
                      <input
                        placeholder="Brand Reference"
                        class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                        bind:value={cardProps["brand_reference"]}
                      />
                    {:else if cardProps.category?.toLowerCase() === "jewelry"}
                      <input
                        placeholder="Material"
                        class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                        bind:value={cardProps["material"]}
                        on:focus={() => setFlip()}
                      />
                      <Select
                        placeholder="Stone"
                        items={stones?.map((stone) => firstCapital(stone))}
                        on:change={() => {
                          stone = justValue;
                        }}
                        class=" text-black text-[16px] font-semibold w-full mt-2 input input-md select"
                        bind:justValue={cardProps["stone"]}
                      />
                    {:else if cardProps.category?.toLowerCase() === "automobile" || "motorcycle"}
                      <input
                        placeholder="VIN"
                        class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                        bind:value={cardProps["vin"]}
                        on:focus={() => setFlip()}
                      />
                      <input
                        placeholder="Mileage"
                        class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                        bind:value={cardProps["mileage"]}
                      />
                    {/if}
                  </swiper-slide>
                  <swiper-slide
                    class="slide-4 w-full h-full gird grid-row-[1fr_1fr]  p-3"
                  >
                    {#if cardProps.category?.toLowerCase() === "art"}
                      <input
                        placeholder="Serial"
                        class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                        bind:value={cardProps["serial"]}
                      />
                      <Select
                        placeholder="Size"
                        class="select text-black w-full mt-2 "
                        items={sizes?.map((size) => firstCapital(size))}
                        on:change={() => {
                          cut_shape = justValue;
                        }}
                        bind:justValue={cardProps["size"]}
                      />
                    {:else if cardProps.category?.toLowerCase() === "jewelry"}
                      <Select
                        placeholder="Carat/Weight"
                        items={carat_weights?.map((carat_weight) =>
                          firstCapital(carat_weight)
                        )}
                        on:change={() => {
                          carat_weight = justValue;
                        }}
                        class=" text-black text-[16px] font-semibold w-full mt-2 input input-md select"
                        bind:justValue={cardProps["carat_weight"]}
                      />
                      <Select
                        placeholder="Cut/Shape"
                        items={cut_shapes?.map((cut_shape) =>
                          firstCapital(cut_shape)
                        )}
                        on:change={() => {
                          cut_shape = justValue;
                        }}
                        class=" text-black text-[16px] font-semibold w-full mt-2 input input-md select"
                        bind:justValue={cardProps["cut_shape"]}
                      />
                    {:else if cardProps.category?.toLowerCase() === "automobile" || "motorcycle"}
                      <input
                        placeholder="Drivetrain"
                        class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                        bind:value={cardProps["drivetrain"]}
                      />
                      <input
                        placeholder="Fuel Type"
                        class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                        bind:value={cardProps["fuel_type"]}
                      />
                    {/if}
                  </swiper-slide>

                  <swiper-slide
                    class="slide-5 w-full h-full gird grid-row-[1fr_1fr]  p-3"
                  >
                    {#if cardProps.category?.toLowerCase() === "art"}
                      <input
                        placeholder="Engraving"
                        class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                        bind:value={cardProps["engraving"]}
                      />
                      <input
                        placeholder="Trademarks"
                        class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                        bind:value={cardProps["trademark"]}
                      />
                    {:else if cardProps.category?.toLowerCase() === "jewelry"}
                      <Select
                        placeholder="Color"
                        items={colors?.map((color) => firstCapital(color))}
                        on:change={() => {
                          color = justValue;
                        }}
                        class=" text-black text-[16px] font-semibold w-full mt-2 input input-md select"
                        bind:justValue={cardProps["color"]}
                      />
                      <Select
                        placeholder="Clarity"
                        items={clarities?.map((clarity) =>
                          firstCapital(clarity)
                        )}
                        on:change={() => {
                          clarity = justValue;
                        }}
                        class=" text-black text-[16px] font-semibold w-full mt-2 input input-md select"
                        bind:justValue={cardProps["clarity"]}
                      />
                    {:else if cardProps.category?.toLowerCase() === "automobile" || "motorcycle"}
                      <input
                        placeholder="Transmission"
                        class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                        bind:value={cardProps["transmission"]}
                      />
                      <input
                        placeholder="Engine"
                        class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                        bind:value={cardProps["engine"]}
                      />
                    {/if}
                  </swiper-slide>

                  <swiper-slide
                    class="slide-6 w-full h-full gird grid-row-[1fr_1fr]  p-3"
                  >
                    {#if cardProps.category?.toLowerCase() === "art"}
                      <input
                        placeholder="Unique Features"
                        class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                        bind:value={cardProps["other"]}
                      />
                    {:else if cardProps.category?.toLowerCase() === "jewelry"}
                      <Select
                        placeholder="Size"
                        class="select text-black w-full mt-2 "
                        items={sizes?.map((size) => firstCapital(size))}
                        on:change={() => {
                          cut_shape = justValue;
                        }}
                        bind:justValue={cardProps["size"]}
                      />
                      <input
                        placeholder="Laser Markings"
                        class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                        bind:value={cardProps["laser_inscription"]}
                      />
                    {:else if cardProps.category?.toLowerCase() === "automobile" || "motorcycle"}
                      <input
                        placeholder="Exterior Color"
                        class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                        bind:value={cardProps["exterior_color"]}
                      />
                      {#if cardProps.category?.toLowerCase() === "automobile"}
                        <input
                          placeholder="Interior Color"
                          class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                          bind:value={cardProps["interior_color"]}
                        />
                      {/if}
                      {#if cardProps.category?.toLowerCase() === "motorcycle"}
                        <input
                          placeholder="Size"
                          class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                          bind:value={cardProps["size"]}
                        />
                      {/if}
                    {/if}
                  </swiper-slide>
                  {#if cardProps.category?.toLowerCase() === "jewelry" || "automobile" || "motorcycle"}
                    <swiper-slide
                      class="slide-7 w-full h-full gird grid-row-[1fr_1fr]  p-3"
                    >
                      {#if cardProps.category?.toLowerCase() === "jewelry"}
                        <input
                          placeholder="Engraving"
                          class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                          bind:value={cardProps["engraving"]}
                        />
                        <input
                          placeholder="Trademarks"
                          class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                          bind:value={cardProps["trademarks"]}
                        />
                      {:else if cardProps.category?.toLowerCase() === "automobile" || "motorcycle"}
                        <input
                          placeholder="Stock Number "
                          class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                          bind:value={cardProps["stock_number"]}
                        />
                        {#if cardProps.category?.toLowerCase() === "automobile"}
                          <input
                            placeholder="Size"
                            class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                            bind:value={cardProps["size"]}
                          />
                        {/if}
                          <input
                            placeholder="Unique Features"
                            class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                            bind:value={cardProps["other"]}
                          />
                      {/if}
                    </swiper-slide>
                  {/if}
                  <swiper-slide
                    class="slide-8 w-full h-full gird grid-row-[1fr_1fr]  p-3"
                  >
                    <input
                      placeholder="Purchased From"
                      class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                      bind:value={cardProps["purchasedFrom"]}
                    />
                    <input
                      placeholder="Purchase Value"
                      class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                      bind:value={cardProps["purchasedValue"]}
                    />
                  </swiper-slide>
                  <swiper-slide
                    class="slide-9 w-full h-full gird grid-row-[1fr_1fr]  p-3"
                  >
                    This slide is for document upload
                  </swiper-slide>
                  <swiper-slide
                    class="slide-10 w-full h-full gird grid-row-[1fr_1fr]  p-3"
                  >
                    <p>Enter a description.</p>
                    <input
                      placeholder="Description"
                      class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                      bind:value={cardProps["description"]}
                    />
                  </swiper-slide>
                  <swiper-slide
                    class="slide-1 w-full h-full flex flex-col justify-center content-center   p-3"
                  >
                    <p class ='w-full h-full flex justify-center p-2 '>
                      Myne Global takes no responsibility for incorrect
                      information inputted, and will not vet your entries.
                      Please ensure that everything on this card is accurate.
                      Reporting inaccurate ownership information is a violation
                      of the usage policy.
                    </p>
                    <div class = "flex justify-center">
                    
                      <input
                      type="submit"
                      class="btn btn-success normal-case shadow-lg w-[90%]"
                      value="Submit"
                      on:click={() => {}}
                    />
                    
                    </div>

                  </swiper-slide>
                </swiper-container>
              </div>
            </div>
            <div
              class="pagination-btns w-full h-ful grid grid-cols-2 place-items-center"
            >
              <PrevButton />
              <NextButton />
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
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
</style>
