<script lang="ts">
  import { sizes } from "./../../size";
  import { myneMasterBrandsAndBreeds } from "./../../index";
  import { Transition } from "@rgossiaux/svelte-headlessui";
  import { createSearchStore, searchHandler } from "$lib/search";
  import { page } from "$app/stores";
  import Select from "svelte-select";
  import { onDestroy, onMount } from "svelte";
  import { enhance } from "$app/forms";
  import CardFlippable from "$lib/components/CardFlippable.svelte";
  import GeneralModal from "$lib/components/GeneralModal.svelte";
  import * as dayjs from "dayjs";
  import addCardSwiperAction from "$lib/utils/addCardSwiperActions";
  import focusBackTwo from "$lib/swiperCardBackOne";
  import SwiperStandard from "$lib/components/SwiperStandard.svelte";
  import {formResult} from "$lib/stores"
  export let success = false
  $:console.log("🚀 ~ file: AddCard.svelte:18 ~ success:", success)

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
  } from "../../routes/fieldProps";
  import PrevButton from "$lib/components/PrevButton.svelte";
  import NextButton from "$lib/components/NextButton.svelte";
  import { firstCapital } from "$lib/caps";
  import PageContainer from "$lib/components/PageContainer.svelte";
  import UploadWidget from "$lib/components/UploadWidget.svelte";
  import Carousel from "$lib/components/Carousel.svelte";
  import Swiper from "swiper";
  import { slide } from "svelte/transition";
  import SwiperPictures from "./SwiperPictures.svelte";
  let floatingConfig = {
    strategy: "bottom",
  };
  let parentEl: HTMLElement;
  onMount(() => {
    console.log(parentEl);
    if (parentEl) {
      parentEl.addEventListener("click", (event) => {
        const targetEl = event.target as HTMLElement;
        if (targetEl.classList.contains("next")) {
          const swiperEl = parentEl.querySelector(".swiper-container") as any;
          const swiper = swiperEl.swiper;
          if (swiper) {
            swiper.slideNext();
          }
        } else if (targetEl.classList.contains("previous")) {
          const swiperEl = parentEl.querySelector(".swiper-container") as any;
          const swiper = swiperEl.swiper;
          if (swiper) {
            swiper.slidePrev();
          }
        }
      });
    }
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
    "other animal": animalProps,
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
  export let pictures: any = [];
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
  export let trademarkss = "";
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
  export let gender = "";
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
    trademarkss,
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
    gender,
  };
  let addCardInputs: string[] = [];
  $: addCardInputs =
    fieldPropsObject[selectedCategory?.name as unknown as string];
  $: cardProps.category = category;
  $: cardProps = { ...cardProps };


  export let formData = {
    ...cardProps,
    message: "",
    success: false,
  };

  $: formData = formData = {
    ...cardProps,
    message,
    success: false,
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
  $: console.log(
    "🚀 ~ file: +page.svelte:351 ~ cardProps:",
    cardProps.category
  );
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
      success: false,
    };
  }

  success = false;
  $: success = form?.success;
  $: console.log(form);
  if (success === true) {
    resetValues();
  }
  $: cardProps.pictures = pictures;
  $: console.log("🚀 ~ file: +page.svelte:388 ~ pictures:", pictures);
  $: console.log(formData)
</script>

<div
  class=" w-full h-full grid grid-cols-2 grid-rows-1 px-2 pb-4 content-center rounded-lg bg-black bg-opacity-20 from-white  relative"
>
  <div class="flex justify-center w-full h-full content-center order-2">
    <div class="card-sizer w-[66%] flex  top-[4rem] justify-center">
      <CardFlippable {flipped} {cardProps} {pictures}>
        <SwiperPictures
          on:picturesuploaded={(event) => {
            pictures = event.detail;
          }}
        />
      </CardFlippable>
    </div>
  </div>
  <div class="w-full flex justify-center h-full">
    <form
      method="POST"
      action="/add_card"
      class="h-full w-full form-gradient p-4 flex flex-col justify-between form-container text-white 
                        rounded-2xl"
      use:enhance={()=> {
         if(formData.success = true){
          success = true 
         }
      }}
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
        <div class=" hidden w-40 h-80">
          {#each addCardInputs as hiddenInput}
            <input
              hidden
              name={hiddenInput}
              id={hiddenInput}
              placeholder={hiddenInput}
              bind:value={cardProps[`${hiddenInput}`]}
            />
          {/each}
        </div>
        {#each pictures as picture, i}
          <input
            hidden
            type="array"
            name="pictures[{i}]"
            id={picture}
            placeholder="pictures"
            bind:value={cardProps["pictures"]}
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
      <div class="form-box w-full h-full flex flex-col place-items-center">
        <h1
          class="text-2xl font-semibold w-full justify-start p-2 text-primary"
        >
          Add a Card
        </h1>

        <div class="form-input-button-wrapper  w-full h-full ">
          <div bind:this={parentEl} class="parent form-slider w-full h-full ">
            <swiper-container
              allow-touch-move="false"
              no-sliding={true}
              class="w-full h-[90%] swiper-container touch-none mt-2 flex-2 rounded-xl bg-black bg-opacity-20 "
              pagination={true}
              observer={true}
              observe-parents={true}
            >
              <swiper-slide
                class="slide-0 w-full h-8 p-3 grid place-items-center"
              >
                <div class="w-full  place-items-center">
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
                      {floatingConfig}
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
                  {:else if cardProps.category?.toLowerCase() == "collectibles"}
                    <div transition:slide>
                      <input
                        placeholder="Product"
                        class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                        bind:value={cardProps["product"]}
                      />
                    </div>
                  {:else if cardProps.category?.toLowerCase() === "bird" || cardProps.category?.toLowerCase() === "cat" || cardProps.category?.toLowerCase() === "dog" || cardProps.category?.toLowerCase() === "other animal"}
                    <input
                      id="date"
                      type="date"
                      placeholder="Date of Birth"
                      class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                      bind:value={cardProps["dob"]}
                    />
                  {/if}
                </div>
              </swiper-slide>

              <swiper-slide
                class="slide-1 w-full h-full gird grid-row-[1fr_1fr] p-3"
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
                {:else if cardProps.category?.toLowerCase() === "watch" || cardProps.category?.toLowerCase() === "vintage" || cardProps.category?.toLowerCase() === "trading cards" || cardProps.category?.toLowerCase() === "technology" || cardProps.category?.toLowerCase() === "firearms" || cardProps.category?.toLowerCase() === "jewelry" || cardProps.category?.toLowerCase() === "automobile" || cardProps.category?.toLowerCase() === "motorcycle" || cardProps.category?.toLowerCase() === "clothing" || cardProps.category?.toLowerCase() === "collectibles" || cardProps.category?.toLowerCase() === "crypto" || cardProps.category?.toLowerCase() === "clothing" || cardProps.category?.toLowerCase() === "collectibles" || cardProps.category?.toLowerCase() === "nft" || cardProps.category?.toLowerCase() === "leather" || cardProps.category?.toLowerCase() === "other" || cardProps.category?.toLowerCase() === "sneakers"}
                  {#if cardProps.category?.toLowerCase() === "vintage" || cardProps.category?.toLowerCase() === "nft" || cardProps.category?.toLowerCase() === "leather" || cardProps.category?.toLowerCase() === "trading cards" || cardProps.category?.toLowerCase() === "sneakers" || cardProps.category?.toLowerCase() === "clothing" || cardProps.category?.toLowerCase() === "collectibles" || cardProps.category?.toLowerCase() === "other"}
                    <input
                      placeholder="Brand "
                      class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                      bind:value={cardProps["brand"]}
                    />
                  {:else}
                    <Select
                      placeholder="Brand"
                      class="select text-black w-full mt-2 "
                      items={brands?.map((brand) => firstCapital(brand))}
                      on:change={() => {
                        brand = justValue;
                      }}
                      bind:justValue={cardProps["brand"]}
                    />
                  {/if}
                  {#if cardProps.category?.toLowerCase() === "nft"}
                    <input
                      placeholder="Author"
                      class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                      bind:value={cardProps["author"]}
                    />
                  {:else}
                    <input
                      placeholder="Brand reference"
                      class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                      bind:value={cardProps["brand_reference"]}
                    />
                  {/if}
                {:else if cardProps.category?.toLowerCase() === "bird" || cardProps.category?.toLowerCase() === "cat" || cardProps.category?.toLowerCase() === "dog" || cardProps.category?.toLowerCase() === "other animal"}
                  {#if cardProps.category?.toLowerCase() === "other animal"}
                    <input
                      placeholder="Breed"
                      class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                      bind:value={cardProps["breed"]}
                    />
                    <input
                      placeholder="Color"
                      class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                      bind:value={cardProps["color"]}
                    />
                  {:else}
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
                    <input
                      placeholder="Color"
                      class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                      bind:value={cardProps["color"]}
                    />
                  {/if}
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
                {:else if cardProps.category?.toLowerCase() === "watch" || cardProps.category?.toLowerCase() === "jewelry" || cardProps.category?.toLowerCase() === "other"}
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
                {:else if cardProps.category?.toLowerCase() === "automobile" || cardProps.category?.toLowerCase() === "motorcycle" || cardProps.category?.toLowerCase() === "technology" || cardProps.category?.toLowerCase() === "vintage"}
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
                {:else if cardProps.category?.toLowerCase() === "clothing" || cardProps.category?.toLowerCase() === "sneakers"}
                  <input
                    placeholder="Model"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["model"]}
                  />
                  <input
                    placeholder="Size"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["size"]}
                  />
                {:else if cardProps.category?.toLowerCase() === "collectibles"}
                  <input
                    placeholder="Model"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["model"]}
                  />
                  <input
                    placeholder="Year"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["year"]}
                  />
                {:else if cardProps.category?.toLowerCase() === "crypto" || cardProps.category?.toLowerCase() === "nft"}
                  <input
                    placeholder="Model"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["model"]}
                  />
                {:else if cardProps.category?.toLowerCase() === "firearms"}
                  <input
                    placeholder="Model"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["model"]}
                  />
                  <input
                    placeholder="Caliber"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["caliber"]}
                  />
                {:else if cardProps.category?.toLowerCase() === "leather"}
                  <input
                    placeholder="Model"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["model"]}
                  />
                  <input
                    placeholder="Material"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["material"]}
                  />
                {:else if cardProps.category?.toLowerCase() === "trading cards"}
                  <input
                    placeholder="Model"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["model"]}
                  />
                  <input
                    placeholder="Grading"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["grading"]}
                  />
                {/if}
                {#if cardProps.category?.toLowerCase() === "bird" || cardProps.category?.toLowerCase() === "cat" || cardProps.category?.toLowerCase() === "dog" || cardProps.category?.toLowerCase() === "other animal"}
                  <input
                    placeholder="Body length"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["body_length"]}
                  />
                  <input
                    placeholder="Weight"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["weight"]}
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
                    placeholder="Brand reference"
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
                {:else if cardProps.category?.toLowerCase() === "automobile" || cardProps.category?.toLowerCase() === "motorcycle"}
                  <input
                    placeholder="VIN"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["vin"]}
                    on:focus={() => (flipped = true)}
                  />
                  <input
                    placeholder="Mileage"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["mileage"]}
                  />
                {:else if cardProps.category?.toLowerCase() === "clothing" || cardProps.category?.toLowerCase() === "sneakers"}
                  <input
                    placeholder="Serial"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["serial"]}
                    on:focus={() => (flipped = true)}
                  />
                  <input
                    placeholder="Material"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["material"]}
                  />
                {:else if cardProps.category?.toLowerCase() === "collectibles"}
                  <input
                    placeholder="Serial"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["serial"]}
                    on:focus={() => (flipped = true)}
                  />
                  <input
                    placeholder="Grading"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["grading"]}
                  />
                {:else if cardProps.category?.toLowerCase() === "trading cards"}
                  <input
                    placeholder="Serial"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["serial"]}
                    on:focus={() => (flipped = true)}
                  />
                  <input
                    placeholder="Condition"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["manufacturer"]}
                  />
                {:else if cardProps.category?.toLowerCase() === "crypto"}
                  <input
                    placeholder="Exchange address"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["exchange_address"]}
                    on:focus={() => (flipped = true)}
                  />
                  <input
                    placeholder="Serial"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["serial"]}
                  />
                {:else if cardProps.category?.toLowerCase() === "nft"}
                  <input
                    placeholder="Smart contract address "
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["smart_contract_address"]}
                    on:focus={() => (flipped = true)}
                  />
                  <input
                    placeholder="URL"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["url"]}
                  />
                {:else if cardProps.category?.toLowerCase() === "firearms"}
                  <input
                    placeholder="Serial"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["serial"]}
                    on:focus={() => (flipped = true)}
                  />
                  <input
                    placeholder="Case material"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["case_material"]}
                  />
                {:else if cardProps.category?.toLowerCase() === "leather"}
                  <input
                    placeholder="Serial"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["serial"]}
                    on:focus={() => (flipped = true)}
                  />
                  <input
                    placeholder="Size"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["size"]}
                  />
                {:else if cardProps.category?.toLowerCase() === "technology"}
                  <input
                    placeholder="Serial"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["serial"]}
                    on:focus={() => (flipped = true)}
                  />
                  <input
                    placeholder="Case material"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["case_material"]}
                  />
                {:else if cardProps.category?.toLowerCase() === "other"}
                  <input
                    placeholder="Material"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["material"]}
                    on:focus={() => (flipped = true)}
                  />
                  <input
                    placeholder="Size"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["size"]}
                    on:focus={() => (flipped = true)}
                  />
                {:else if cardProps.category?.toLowerCase() === "vintage"}
                  <input
                    placeholder="Artist"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["artist"]}
                    on:focus={() => (flipped = true)}
                  />
                  <input
                    placeholder="Serial"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["serial"]}
                  />
                {:else if cardProps.category?.toLowerCase() === "watch"}
                  <input
                    placeholder="Case Material"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["case_material"]}
                    on:focus={() => (flipped = true)}
                  />
                  <input
                    placeholder="Size"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["size"]}
                  />
                {/if}
                {#if cardProps.category?.toLowerCase() === "bird" || cardProps.category?.toLowerCase() === "cat" || cardProps.category?.toLowerCase() === "dog" || cardProps.category?.toLowerCase() === "other animal"}
                  <input
                    placeholder="Microchip "
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["microchip"]}
                    on:focus={() => setFlip()}
                    on:focus={() => (flipped = true)}
                  />
                  <input
                    placeholder="Tattoo"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["tattoo"]}
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
                  <input
                    placeholder="Size"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["size"]}
                  />
                {:else if cardProps.category?.toLowerCase() === "trading cards"}
                  <input
                    placeholder="Product"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["product"]}
                  />
                  <input
                    placeholder="Serie"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["series"]}
                  />
                {:else if cardProps.category?.toLowerCase() === "vintage"}
                  <input
                    placeholder="Material"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["material"]}
                  />
                  <input
                    placeholder="Size"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["size"]}
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
                {:else if cardProps.category?.toLowerCase() === "automobile" || cardProps.category?.toLowerCase() === "motorcycle"}
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
                {:else if cardProps.category?.toLowerCase() === "watch"}
                  <input
                    placeholder="Movement/Caliber"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["movement_caliber"]}
                  />
                  <input
                    placeholder="Dial"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["dial"]}
                  />
                {:else if cardProps.category?.toLowerCase() === "clothing"}
                  <input
                    placeholder="Unique features"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["other"]}
                  />
                {:else if cardProps.category?.toLowerCase() === "sneakers"}
                  <input
                    placeholder="Serie"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["serie"]}
                  />
                  <input
                    type="date"
                    placeholder="Year"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["year"]}
                  />
                {:else if cardProps.category?.toLowerCase() === "collectibles"}
                  <input
                    placeholder="Condition"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["manufacturer"]}
                  />
                  <input
                    placeholder="Series"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["series"]}
                  />
                {:else if cardProps.category?.toLowerCase() === "crypto"}
                  <input
                    placeholder="Transaction ID "
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["transaction"]}
                  />
                  <input
                    placeholder="Address"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["crypto_token_address"]}
                  />
                {:else if cardProps.category?.toLowerCase() === "nft"}
                  <input
                    placeholder="Smart contract ID "
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["smart_contract_id"]}
                  />
                  <input
                    placeholder="Serial"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["serial"]}
                  />
                {:else if cardProps.category?.toLowerCase() === "firearms"}
                  <input
                    placeholder="Size"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["size"]}
                  />
                  <input
                    placeholder="Engraving"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["engraving"]}
                  />
                {:else if cardProps.category?.toLowerCase() === "leather"}
                  <input
                    placeholder="Hot stamping"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["hotstamping"]}
                  />
                  <input
                    placeholder="Unique features"
                    class=" text-black text-[16px] font-semibold w-full mHt-2 input input-md"
                    bind:value={cardProps["other"]}
                  />
                {:else if cardProps.category?.toLowerCase() === "technology"}
                  <input
                    placeholder="Size"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["size"]}
                  />
                  <input
                    placeholder="Engraving"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["engraving"]}
                  />
                {:else if cardProps.category?.toLowerCase() === "other"}
                  <input
                    placeholder="Other"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["other"]}
                  />
                  <input
                    placeholder="Unique features"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["unique_features"]}
                  />
                {/if}
                {#if cardProps.category?.toLowerCase() === "bird" || cardProps.category?.toLowerCase() === "cat" || cardProps.category?.toLowerCase() === "dog" || cardProps.category?.toLowerCase() === "other animal"}
                  <input
                    placeholder="Height "
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["height"]}
                  />
                  <input
                    placeholder="Gender"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["gender"]}
                  />
                {/if}
              </swiper-slide>

              <swiper-slide
                class="slide-5 w-full h-full gird grid-row-[1fr_1fr]  p-3"
                class:hidden={cardProps?.category?.toLowerCase() ===
                  "clothing" ||
                  cardProps?.category?.toLowerCase() === "leather" ||
                  cardProps?.category?.toLowerCase() === "other"}
              >
                {#if cardProps.category?.toLowerCase() === "art"}
                  <input
                    placeholder="Engraving"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["engraving"]}
                  />
                  <input
                    placeholder="Marks"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["trademarks"]}
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
                    items={clarities?.map((clarity) => firstCapital(clarity))}
                    on:change={() => {
                      clarity = justValue;
                    }}
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md select"
                    bind:justValue={cardProps["clarity"]}
                  />
                {:else if cardProps.category?.toLowerCase() === "vintage"}
                  <input
                    placeholder="Engraving"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["engraving"]}
                  />
                  <input
                    placeholder="Marks"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["trademarks"]}
                  />
                {:else if cardProps.category?.toLowerCase() === "automobile" || cardProps.category?.toLowerCase() === "motorcycle"}
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
                {:else if cardProps.category?.toLowerCase() === "watch"}
                  <input
                    placeholder="Strap/Bracelet"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["strap_bracelet"]}
                  />
                  <input
                    placeholder="Engraving"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["engraving"]}
                  />
                {:else if cardProps.category?.toLowerCase() === "collectibles"}
                  <input
                    placeholder="Unique features"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["other"]}
                  />
                {:else if cardProps.category?.toLowerCase() === "crypto"}
                  <input
                    placeholder="Wallet address "
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["wallet_address"]}
                  />
                {:else if cardProps.category?.toLowerCase() === "firearms" || cardProps.category?.toLowerCase() === "nft" || cardProps.category?.toLowerCase() === "sneakers" || cardProps.category?.toLowerCase() === "technology"}
                  <input
                    placeholder="Unique features"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["other"]}
                  />
                {:else if cardProps.category?.toLowerCase() === "trading cards"}
                  <input
                    type="date"
                    placeholder="Year"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["year"]}
                  />
                  <input
                    placeholder="Unique features"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["other"]}
                  />
                {/if}
                {#if cardProps.category?.toLowerCase() === "bird" || cardProps.category?.toLowerCase() === "cat" || cardProps.category?.toLowerCase() === "dog" || cardProps.category?.toLowerCase() === "other animal"}
                  <input
                    placeholder="Pedigree "
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["pedigree"]}
                  />
                  <input
                    placeholder="Unique features"
                    class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                    bind:value={cardProps["other"]}
                  />
                {/if}
              </swiper-slide>

                <swiper-slide
                  class="slide-6 w-full h-full gird grid-row-[1fr_1fr]  p-3"
                  class:hidden={cardProps.category?.toLowerCase() === "bird" ||
                    cardProps.category?.toLowerCase() === "cat" ||
                    cardProps.category?.toLowerCase() === "dog" ||
                    cardProps.category?.toLowerCase() === "other animal" ||
                    cardProps.category?.toLowerCase() === "clothing" ||
                    cardProps.category?.toLowerCase() === "collectibles" ||
                    cardProps.category?.toLowerCase() === "crypto" ||
                    cardProps.category?.toLowerCase() === "nft" ||
                    cardProps.category?.toLowerCase() === "firearms" ||
                    cardProps.category?.toLowerCase() === "leather" ||
                    cardProps.category?.toLowerCase() === "sneakers" ||
                    cardProps.category?.toLowerCase() === "technology" ||
                    cardProps?.category?.toLowerCase() === "trading cards" ||
                    cardProps?.category?.toLowerCase() === "other" ||
                    cardProps?.category?.toLowerCase() === "vintage"}
                >
                  {#if cardProps.category?.toLowerCase() === "art"}
                    <input
                      placeholder="Unique features"
                      class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                      bind:value={cardProps["other"]}
                      use:addCardSwiperAction
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
                      placeholder="Laser marking"
                      class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                      bind:value={cardProps["laser_inscription"]}
                    />
                  {:else if cardProps.category?.toLowerCase() === "watch"}
                    <input
                      placeholder="Unique features"
                      class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                      bind:value={cardProps["other"]}
                      use:addCardSwiperAction
                    />
                    <input
                      placeholder="Grading"
                      class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                      bind:value={cardProps["grading"]}
                    />
                  {:else if cardProps.category?.toLowerCase() === "automobile" || cardProps.category?.toLowerCase() === "motorcycle"}
                    {#if cardProps.category?.toLowerCase() === "motorcycle"}
                      <input
                        placeholder="Color"
                        class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                        bind:value={cardProps["exterior_color"]}
                        use:addCardSwiperAction
                      />
                    {:else}
                      <input
                        placeholder="Exterior color"
                        class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                        bind:value={cardProps["exterior_color"]}
                        use:addCardSwiperAction
                      />
                    {/if}

                    {#if cardProps.category?.toLowerCase() === "automobile"}
                      <input
                        placeholder="Interior color"
                        class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                        bind:value={cardProps["interior_color"]}
                        use:addCardSwiperAction
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
              {#if cardProps.category?.toLowerCase() === "watch" || cardProps.category?.toLowerCase() === "jewelry" || cardProps.category?.toLowerCase() === "automobile" || cardProps.category?.toLowerCase() === "motorcycle"}
                <swiper-slide
                  class="slide-7 w-full h-full gird grid-row-[1fr_1fr]  p-3"
                  class:hidden={cardProps.category.toLowerCase() ===
                    "clothing" ||
                    cardProps.category.toLowerCase() === "leather" ||
                    cardProps.category.toLowerCase() === "trading cards"}
                >
                  {#if cardProps.category?.toLowerCase() === "jewelry"}
                    <input
                      placeholder="Engraving"
                      class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                      bind:value={cardProps["engraving"]}
                    />
                    <input
                      placeholder="Marks"
                      class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                      bind:value={cardProps["trademarks"]}
                    />
                  {:else if cardProps.category?.toLowerCase() === "automobile" || cardProps.category?.toLowerCase() === "motorcycle"}
                    <input
                      placeholder="Stock number "
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
                      placeholder="Unique features"
                      class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                      bind:value={cardProps["other"]}
                    />
                  {:else if cardProps.category?.toLowerCase() === "watch"}
                    <input
                      placeholder="Valuation report"
                      class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                      bind:value={cardProps["valuation_report"]}
                    />
                  {/if}
                </swiper-slide>
              {/if}
              {#if category !== null}
              <swiper-slide
                class="slide-10 w-full h-full gird grid-row-[1fr_1fr]  p-3"
              >
                <p>Enter a description.</p>
                <input
                  placeholder="Description"
                  class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                  bind:value={cardProps["description"]}
                  use:addCardSwiperAction
                />
              </swiper-slide>

              <swiper-slide
                class="slide-8 w-full h-full gird grid-row-[1fr_1fr] general-fields p-3"
              >
                <input
                  placeholder="Purchased from"
                  class=" text-black text-[16px] font-semibold w-full mt-2 input input-md slide-to-here"
                  bind:value={cardProps["purchasedFrom"]}
                  use:addCardSwiperAction
                  on:focus={() => {
                    flipped = true;
                  }}
                />
                <input
                  placeholder="Purchase value"
                  class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
                  bind:value={cardProps["purchasedValue"]}
                />
              </swiper-slide>
              <swiper-slide
                class="w-full h-full gird grid-row-[1fr_1fr]  p-3"
              >
                This slide is for document upload
              </swiper-slide>
              {/if}
              <swiper-slide
                class="slide-11 w-full h-full flex flex-col content-center   p-3"
              >
                <p class="w-full  flex justify-center p-2 ">
                  Myne Global takes no responsibility for incorrect information
                  inputted, and will not vet your entries. Please ensure that
                  everything on this card is accurate. Reporting inaccurate
                  ownership information is a violation of the usage policy.
                </p>
                <div class="flex justify-center">
                  <input
                    type="submit"
                    class="btn btn-success normal-case shadow-lg w-[90%]"
                    value="Submit"
                    on:click={() => {}}
                  />
                </div>
              </swiper-slide>
            </swiper-container>
            <div class="pagination-btns flex w-full mt-2 ">
              <div class="w-full  flex flex-col justify-end px-2">
                <PrevButton />
              </div>
              <div class="w-full flex flex-col justify-end px-2">
                <NextButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>

{#if success === true}
  <GeneralModal bind:success on:click={resetValues} />
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
</style>
