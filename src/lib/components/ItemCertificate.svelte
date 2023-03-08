<script lang="ts">
  import { onMount } from "svelte";
  import { Download, UserAdd } from "@steeze-ui/heroicons";
  import Select from "svelte-select";
  import Swiper from 'swiper'; 
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
  import { fade, scale, slide } from "svelte/transition";
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
  let guideOpen = false;
  let heightScale = 35;
  let drawerHeight = tweened(heightScale, {
    duration: 200,
    easing: backOut,
    delay: 100,
  });
  function guideOpenSet(guideOpen) {
    if (guideOpen) {
      drawerHeight.set(70);
    } else {
      drawerHeight.set(35);
    }
  }
  let categories = Object.keys(fieldPropsObject);
  console.log("🚀 ~ file: +page.svelte:69 ~ categories:", categories);
  // $: categories = categories.sort();
  let selectedCategory: string = "Art";
  let categoryKey: string;
  $: categoryKey = selectedCategory?.toLowerCase();
  let tableProps: string[] = [];
  $: tableProps = fieldPropsObject[categoryKey as unknown as string];
  $: console.log(tableProps);
  $: if (selectedCategory === undefined) {
    guideOpen = false;
    guideOpenSet(guideOpen);
  }
</script>

<div class="wrapper w-full h-full flex flex-col " transition:slide={{ duration: 200, delay: 200 }}>
  <h1 class="flex justify-start text-primary font-semibold text-4xl text left w-full h-fit md:pl-4 md:pt-4">
    Item Certificate
  </h1>
  <div class="item-certificate-area flex flex-col w-full h-full  rounded-2xl px-2">
    <div class="item-certificate-slider w-full h-[60%] bg-slate-100 shadow-md rounded-2xl my-2">
      <swiper-container class="mySwiper w-full h-full" pagination="true" effect="coverflow" grab-cursor="true" centered-slides="true"
      slides-per-view="auto" coverflow-effect-rotate="10" coverflow-effect-stretch="0" coverflow-effect-depth="100"
      coverflow-effect-modifier="1" coverflow-effect-slide-shadows="true" observer = {true } observerParents = {true} css = {true}>
      {#each myneCards as myneCard}
      <swiper-slide class = 'w-32 aspect-[5/7] hover:transform-gpu hover:translate-y-4'>
        <div class = 'w-32 aspect-[5/7] hover:translate-y-5 '>
          <CardFlippable {...myneCard}>
          
            <SwiperPictures/> 
          </CardFlippable>        
        </div>
      </swiper-slide>
      {/each}

    </swiper-container>

    </div>
    <div class = 'item-certificate-controls w-full h-[40%]  bg-slate-200 rounded-2xl my-2 shadow-lg'>


    </div>
  </div>
</div>
