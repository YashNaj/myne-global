<script lang="ts">
  import { sizes } from "./../../size";
  import { myneMasterBrandsAndBreeds } from "./../../index";
  import { createSearchStore, searchHandler } from "$lib/search";
  import { page } from "$app/stores";
  import Select from "svelte-select";
  import { afterUpdate, beforeUpdate, onDestroy, onMount } from "svelte";
  import { enhance } from "$app/forms";
  import CardFlippable from "$lib/components/CardFlippable.svelte";
  import GeneralModal from "$lib/components/GeneralModal.svelte";
  import * as dayjs from "dayjs";
  import focusSlide from "$lib/swiperActions";
  import focusBackTwo from "$lib/swiperCardBackOne";
  import SwiperStandard from "$lib/components/SwiperStandard.svelte";
  import "svelte-select/tailwind.css";
  export let success = false;
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
  } from "../../routes/fieldProps";
  import PrevButton from "$lib/components/PrevButton.svelte";
  import NextButton from "$lib/components/NextButton.svelte";
  import { firstCapital } from "$lib/caps";
  import PageContainer from "$lib/components/PageContainer.svelte";
  import UploadWidget from "$lib/components/UploadWidget.svelte";
  import Carousel from "$lib/components/Carousel.svelte";
  import Swiper from "swiper";
  import { slide } from "svelte/transition";
  let floatingConfig = {
    strategy: "bottom",
  };
  //   let addCardSwiper = new Swiper('.swiper-container-addCard', {
  //     navigation:{
  //         nextEl: '.next',
  //         prevEl: '.previous'
  //     }
  //   })
  let parentEl: HTMLElement;

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
  $: addCardInputs = fieldPropsObject[selectedCategory?.name as unknown as string];
  $: cardProps.category = category;
  $: cardProps = { ...cardProps };

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
  let selectedCategory = myneMasterBrandsAndBreeds.find((object) => object.name === category?.toLowerCase());
  $: selectedCategory = myneMasterBrandsAndBreeds.find((object) => object.name === category?.toLowerCase());
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
  $: console.log("🚀 ~ file: +page.svelte:351 ~ cardProps:", cardProps.category);
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
  let test = "test";
  onMount(() => {
    let addCardSwiper = new Swiper(".swiper-container-addCard", {
      slidesPerView: 1,
      navigation: {
        nextEl: ".next",
        prevEl: ".previous",
      },
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
      },
      allowTouchMove: false,
      observer: true,
      observeParents: true,
      parallax: true,
    });
    const swiper: Swiper = document.querySelector(".swiper-container-addCard").swiper;
    console.log(1, swiper.activeIndex);
  });
  afterUpdate(() => {
    const swiper: Swiper = document.querySelector(".swiper-container-addCard").swiper;
    const slideContent = ["Slide 1", "Slide 2", "Slide 3"];

    addCardInputs?.forEach((value) => {
      const slide = document.createElement("div");
      slide.className = "swiper-slide";
      slide.textContent = value;
      swiper.addSlide(1, slide);
      swiper.slideTo(0);
      swiper.update();
    });
  });

  onDestroy(() => console.log("destroyed"));
</script>

<form
  method="POST"
  action="/add_card"
  class=" h-screen w-screen  form-gradient p-4 flex flex-col justify-between form-container text-white overflow-x-hidden
                          rounded-2xl"
  use:enhance
  class:exitForm={sentCard === true}
  class:comeBack={success === true}
  bind:this={parentEl}
>
  {#if addCardInputs?.length > 0}
    <input hidden name="category" id="categroy" placeholder="categroy" bind:value={cardProps["category"]} />
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
  <h1 class="text-2xl font-semibold w-full justify-start p-2 text-primary">Add a Card</h1>
  <div class="form-input-button wrapper  w-full h-full ">
    <div bind:this={parentEl} class="parent form-slider w-full h-full ">
      <div
        class="w-full h-[90%] swiper-container-addCard relative touch-none mt-2 flex-2 rounded-xl bg-black bg-opacity-20 overflow-x-clip "
      >
        <div class="swiper-wrapper">
          <div class="swiper-slide flex flex-col p-9 w-full h-full">
            <Select
              {floatingConfig}
              placeholder="Category"
              class="select bg-primary text-black"
              items={categories?.map((categories) => firstCapital(categories))}
              on:change={() => {
                category = justValue;
                subcategory = "";
              }}
              bind:justValue
            />
            {#if subcategories?.length > 0}
              <div class="mt-2" transition:slide>
                <Select
                  {floatingConfig}
                  placeholder="Subcategory"
                  class="select text-black w-full my-4 "
                  items={subcategories?.map((subcategories) => firstCapital(subcategories))}
                  on:change={() => {
                    subcategory = justValue;
                  }}
                  bind:justValue={cardProps["subcategory"]}
                />
              </div>
            {:else if breeds?.length > 0}
              <div class="mt-2" transition:slide>
                <Select
                  {floatingConfig}
                  placeholder="Breed"
                  class="select text-black w-full my-4 "
                  items={breeds?.map((breeds) => firstCapital(breeds))}
                  on:change={() => {
                    breed = justValue;
                  }}
                  bind:justValue={cardProps["breed"]}
                />
              </div>
            {/if}
          </div>
          <div class="swiper-slide bg-success  w-full h-full gird grid-row-[1fr_1fr]  p-3">
            <p>Enter a description.</p>
            <input
              placeholder="Description"
              class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
              bind:value={cardProps["description"]}
              use:focusSlide
            />
          </div>

          <div class="swiper-slide bg-success  w-full h-full gird grid-row-[1fr_1fr] general-fields p-3">
            <input
              placeholder="Purchased from"
              class=" text-black text-[16px] font-semibold w-full mt-2 input input-md slide-to-here"
              bind:value={cardProps["purchasedFrom"]}
              use:focusSlide
              on:focus={() => {
                flipped = true;
              }}
            />
            <input
              placeholder="Purchase value"
              class=" text-black text-[16px] font-semibold w-full mt-2 input input-md"
              bind:value={cardProps["purchasedValue"]}
            />
          </div>
          <div class="swiper-slide bg-success w-full h-full gird grid-row-[1fr_1fr]  p-3">
            This slide is for document upload
          </div>

          <div class="swiper-slide bg-success slide-11 w-full h-full flex flex-col content-center   p-3">
            <p class="w-full  flex justify-center p-2 ">
              Myne Global takes no responsibility for incorrect information inputted, and will not vet your entries.
              Please ensure that everything on this card is accurate. Reporting inaccurate ownership information is a
              violation of the usage policy.
            </p>
            <div class="flex justify-center">
              <input
                type="submit"
                class="btn btn-success normal-case shadow-lg w-[90%]"
                value="Submit"
                on:click={() => {}}
              />
            </div>
          </div>
        </div>
        <div class="swiper-pagination" />
      </div>
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
</form>

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
    -webkit-animation: slide-out-bottom 0.5s cubic-bezier(0.755, 0.05, 0.855, 0.06) 100ms both;
    animation: slide-out-bottom 0.5s cubic-bezier(0.755, 0.05, 0.855, 0.06) 100ms both;
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
    -webkit-animation: slide-in-bottom 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 100ms backwards;
    animation: slide-in-bottom 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 100ms backwards;
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
