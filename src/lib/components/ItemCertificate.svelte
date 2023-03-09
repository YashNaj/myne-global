<script lang="ts">
  import { myneMasterBrandsAndBreeds } from "./../../index";
  import { beforeUpdate, onMount } from "svelte";
  import { Download, SearchCircle, UserAdd } from "@steeze-ui/heroicons";
  import Select from "svelte-select";
  import Swiper from "swiper";
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
  import { draw, fade, fly, scale, slide } from "svelte/transition";
  import { backInOut, backOut, quintInOut, quintOut } from "svelte/easing";
  import { tweened } from "svelte/motion";
  import { Icon, Plus, CloudUpload, Minus } from "svelte-hero-icons";
  import PageContainer from "$lib/components/PageContainer.svelte";
  import { firstCapital } from "$lib/caps";
  import GenerateImportCsv from "$lib/components/GenerateImportCSV.svelte";
  import CardFlippable from "./CardFlippable.svelte";
  import SwiperPictures from "./SwiperPictures.svelte";
  export let data: PageData;
  export let csvFile: File;
  export let myneCards;
  let certificateSlider;
  let justValue;
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
  let categories = Object.keys(fieldPropsObject).sort();
  console.log("🚀 ~ file: +page.svelte:69 ~ categories:", categories);
  // $: categories = categories.sort();

  let tableProps: string[] = [];
  $: console.log("🚀 ~ file: ItemCertificate.svelte:71 ~ swiperEl:", swiperEl);

  let categoryFilter: string = "";
  $: categoryFilter = categoryFilter?.toLowerCase();
  let floatingConfig = {
    strategy: "bottom",
  };
  let selectedCategory = myneMasterBrandsAndBreeds.find((object) => object.name === categoryFilter?.toLowerCase());
  $: selectedCategory = myneMasterBrandsAndBreeds.find((object) => object.name === categoryFilter?.toLowerCase());
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
  let filteredCards: [];
  let swiperEl;
  $: if (categoryFilter === "") {
    filteredCards = myneCards;
  } else {
    filteredCards = filterCards(categoryFilter);
  }
  $: console.log("🚀 ~ file: ItemCertificate.svelte:100 ~ filteredCards:", filteredCards);
  $: console.log("🚀 ~ file: ItemCertificate.svelte:100 ~ filteredCards:", filterCards);
  $: console.log("🚀 ~ file: ItemCertificate.svelte:109 ~ beforeUpdate ~ swiperEl:", swiperEl);
  $: console.log("🚀 ~ file: ItemCertificate.svelte:100 ~ categoryFilter:", categoryFilter);
</script>

<div class="wrapper w-full h-full flex flex-col " transition:slide={{ duration: 200, delay: 220 }}>
  <h1 class="flex justify-start flex-col text-primary font-semibold text-4xl text-left w-full h-fit pl-4 pt-4">
    Item Certificate
  </h1>
  <div class="w-full flex justify-start font-semibold text-2xl pl-4 pt-4">
    <h1>Select a card</h1>
  </div>
  <div class="item-certificate-area flex  w-full h-full  rounded-2xl px-2">
    <div class="item-certificate-slider flex h-full w-[60%] bg-slate-100 shadow-md rounded-2xl my mx-1 relative">
      <swiper-container
        bind:this={swiperEl}
        transition:fade={{duration:100}}
        class="certificate-swiper w-full h-fit p-4 flex bg-slate-100 shadow-md rounded-2xl my mx-1"
        navigation="true"
        pagination="true"
        effect="coverflow"
        grab-cursor="true"
        centered-slides="true"
        slides-per-view="auto"
        coverflow-effect-rotate="10"
        coverflow-effect-stretch="10"
        coverflow-effect-depth="100"
        coverflow-effect-modifier="1"
        coverflow-effect-slide-shadows="false"
        observer-parents = "true"
        observer="true"
        css='true'
      >
        {#if filteredCards?.length > 0}
          {#each filteredCards as myneCard}
            <swiper-slide class="w-fit h-fit " transition:scale|local={{duration:100}}>
              <div class="wrapper w-fit h-fit flex flex-col ">
                <div class="w-fit h-fit aspect-[5/7]">
                  
                  <CardFlippable {...myneCard}>
                    <SwiperPictures pictures={myneCard.pictures} />
                  </CardFlippable>
                </div>
              </div>
            </swiper-slide>
          {/each}
          {:else}
          <swiper-slide class="w-fit h-fit " >
            <div class="wrapper w-fit h-fit flex flex-col ">
              <div class="w-fit h-fit">
                <CardFlippable>
                  <div class = 'p-3 w-full h-full'>

                    <div class = 'text-3xl flex flex-col justify-center content-cener flex-wrap h-full w-full text-primary bg-black bg-opacity-10 rounded-2xl '>
                      <p class = 'text-4xl text-primary font-semibold'> No cards found </p>
                    </div>

                  </div>
                </CardFlippable>
              </div>
            </div>
          </swiper-slide>
        {/if}
      </swiper-container>
    </div>
    <div class="item-certificate-controls h-full w-[40%]  bg-slate-200 rounded-2xl  mx-1 shadow-lg flex flex-col">
      <div class="input-container flex justiy-center content-center rounded-2xl w-full px-2 py-4">
        <div class="icon-container flex flex-wrap justify-center content-center bg-none text-xs p-2 ">
          <Icon src={SearchCircle} color="#002d72" size="24px" />
        </div>
        <input
          class="input input-md text-primary w-full bg-slate-50 outline-none border-none shadow-md  placeholder-primary"
          placeholder="Custom Search"
        />
      </div>
      <div class="select-container flex flex-col px-4 pt-4">
        <div class="w-full flex justify-start font-semibold text-2xl ">
          <h1>Filter by</h1>
        </div>
        <div class="my-4 shadow-md">
          <Select
            {floatingConfig}
            placeholder="Category"
            class="select placeholder-primary text-primary w-full my-4 rounded-2xl bg-slate-100"
            items={categories?.map((categories) => firstCapital(categories))}
            on:change={() => {
              categoryFilter = justValue;
            }}
            on:clear={() => categoryFilter = ''}
            bind:justValue
          />
        </div>
        {#if subcategories?.length > 0}
          <div transition:scale|local={{ duration: 200, delay: 120, easing: backOut }} class="my-1 shadow-md">
            <Select
              {floatingConfig}
              placeholder="Subcategory"
              class="select text-black w-full rounded-2xl bg-slate-100"
              items={subcategories?.map((value) => firstCapital(value)).sort()}
              bind:justValue
            />
          </div>
        {/if}
        {#if breeds?.length > 0}
          <div transition:scale|local={{ duration: 200, delay: 120, easing: backOut }} class="my-1 shadow-md">
            <Select
              {floatingConfig}
              placeholder="Breeds"
              class="select text-black w-full rounded-2xl bg-slate-100"
              items={breeds?.map((value) => firstCapital(value)).sort()}
              bind:justValue
            />
          </div>
        {/if}
      </div>
      <div class = 'w-full h-fit flex justify-center '>
        <button class = 'btn btn-primary generate-certificate w-[90%] normal-case'> 
          Generate Certificate
          </button>
      </div> 
    </div>
  </div>
</div>
