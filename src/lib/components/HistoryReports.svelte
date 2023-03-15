<script lang="ts">
  import { onMount } from "svelte";
  import { Download, Search, SearchCircle, UserAdd } from "@steeze-ui/heroicons";
  import Select from "svelte-select";
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
  export let data: PageData;
  let csvFile: File;

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
  
  let categories = Object.keys(fieldPropsObject);
  console.log("🚀 ~ file: +page.svelte:69 ~ categories:", categories);
  // $: categories = categories.sort();
  let selectedCategory: string = "Art";
  let categoryKey: string;
  $: categoryKey = selectedCategory?.toLowerCase();
  let tableProps: string[] = [];
  $: tableProps = fieldPropsObject[categoryKey as unknown as string];
  $: console.log(tableProps);

</script>

<div class="flex flex-col w-full h-[80vh]" transition:fade|local={{delay:100, duration: 100}}>
  <h1 class="flex justify-start text-primary font-semibold text-4xl text left w-full h-fit md:pl-4 md:pt-4">
    History Reports
  </h1>
  <div  class="w-full h-full flex flex-col rounded-2xl my-1">
    <div class="search-bar-area w-full h-fit flex p-2 justify-center">
      <div class="input-container flex justiy-center content-center bg-slate-100 rounded-2xl w-full shadow-md ">
        <div class="icon-container flex flex-wrap justify-center content-center bg-none text-xs p-2 ">
          <Icon src={SearchCircle} color="#002d72" size="24px" />
        </div>
        <input 
          class="input input-md text-primary w-full bg-slate-50 outline-none border-none  placeholder-primary"
          placeholder="Search for items"
        />
      </div>
    </div>
    <div class="history-report-area w-full h-full rounded-2xl px-2">
        <div class = 'history-reports w-full h-full bg-slate-200 shadow-lg rounded-2xl'>
        </div>
    </div>
  </div>
</div>
