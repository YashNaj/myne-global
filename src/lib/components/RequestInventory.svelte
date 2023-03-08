  
<script lang="ts">
	import RequestInventory from './RequestInventory.svelte';
    import { onMount } from "svelte";
    import { Download, UserAdd } from "@steeze-ui/heroicons";
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
  <div class = 'wrapper w-full h-full flex flex-col ' transition:slide={{duration: 200, delay:200}} >
    <h1  transition:slide|local={{duration: 200,delay:200}}
        class="flex justify-start text-primary font-semibold text-4xl text left w-full h-fit md:pl-4 md:pt-4"
      >
        Request Inventory
      </h1>

    </div>
  