<script lang="ts">
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
  } from "../../fieldProps";
  import { fade, scale, slide } from "svelte/transition";
  import type { PageData } from "./$types";
  import { backInOut, backOut, quintInOut, quintOut } from "svelte/easing";
  import { tweened } from "svelte/motion";
  import { Icon, Plus, CloudUpload, Minus } from "svelte-hero-icons";
  import PageContainer from "$lib/components/PageContainer.svelte";
  import { firstCapital } from "$lib/caps";
  import logo from "$lib/images/myne_logo_512.png";
  import { category } from "../../../cardProps";
  import GenerateImportCsv from "$lib/components/GenerateImportCSV.svelte";
  export let data: PageData;
  export let csvFile: File;

  let dropZone;

  onMount(() => {
    dropZone.addEventListener("dragover", handleDragOver);
    dropZone.addEventListener("drop", handleDrop);
    dropZone.addEventListener("click", handleClick);
  });

  function handleDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = "copy";
  }

  function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    const files = e.dataTransfer.files;
    handleFiles(files);
  }

  function handleClick(e) {
    const input = dropZone.querySelector('input[type="file"]');
    input.click();
  }

  function handleFiles(files) {
    // Handle selected files here
    console.log(files);
  }

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
      drawerHeight.set(140);
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

<PageContainer>
  <h1
      class="flex justify-start text-primary font-semibold text-4xl text left w-full h-fit md:pl-4 md:pt-4"
    >
      Import
    </h1>
  <div
    class="flex flex-col md:flex-row md:justify-center w-full h-full px-2 py-6 text-primary 
  [box-shadow:_rgba(50,_50,_93,_0.25)0px_30px_60px-12px_inset,_rgba(0,_0,_0,_0.3)0px_18px_36px-18px_inset;]"
  >
    
    <div
      style="height: {$drawerHeight}vh"
      class="import-guide w-full text-primary bg-slate-300 px-2 py-4 md:mt-0 md:mr-2  rounded-2xl mt-4 relative flex flex-col md:flex-1 md:max-w-prose md:max-h-[80vh] md:overflow-y-scroll"
    >
      <!--         this will expand to show import guides for our distribution customers
        ---- initially show a general guide then ---- allow them to pick a
        category ---- add specifics based on categories ---- allow them to
        import their csv to generate a bunch of cards below this dialogue box
 -->
      {#if !guideOpen}
        <div transition:slide={{ duration: 100, delay: 100 }}>
          <h1 class="guide-heading font-semibold text-2xl p-2 italic">
            Import Guide
          </h1>
          <p class="w-full py-1 px-4 text-sm">
            Before you can import your inventory to Myne Global, you'll have to
            correctly format your document to match the fields that Myne Global
            collects. <br />
            <span class="font-semibold ">
              This guide is in Beta, values are subject to change.
            </span>
          </p>
        </div>
      {/if}
      <div
        class="category-select flex flex-col relative w-full justify-start py-1 px-4"
      >
        {#if !guideOpen}
          <p transition:fade={{ duration: 75 }} class="my-2 text-sm">
            Select a Category for specific information, or expand the guide for454 nhbbbbbbbbbbbbbbbbbbbbbbbhbnhnbbbbbbbbbbbbbbbbbbgv
          </p>
        {/if}
        <div class = 'flex justify-center md:justify-start'>
          <div class = 'w-[50%]'>
            <Select
            placeholder="Category"
            class="select text-primary w-10 bg-slate-500 mt-2 z-10"
            items={categories?.map((category) => firstCapital(category))}
            bind:justValue={selectedCategory}
            on:change={() => {
              guideOpen = true;
              guideOpenSet(guideOpen);
            }}
          />
          </div>
        </div>
      </div>
      {#if guideOpen && selectedCategory != undefined}
        <div
          transition:slide={{ delay: 100, duration: 100, easing: quintOut }}
          class="px-4 py-1 max-w-prose h-full flex flex-col justify-start"
        >
          <div class="w-full">
            <h1 class="font-semibold">Table structure</h1>
            <p class="text-sm">
              You can map your values as you wish to Myne Global's general
              structure, this will ensure painless importing into our database,
              as well as generate the most complete cards. None of these fields
              are required, though it is recommended to map values as completely
              as possible. For example <span class="font-bold">
                puchaseValue
              </span>
              can become the <span class="font-bold">MSRP </span>of your
              product.
            </p>
          </div>
          <div
            transition:slide={{ delay: 100, duration: 100, easing: quintOut }}
            class="overflow-x-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent scrollbar-rounded rounded-2xl mt-2"
          >
            <table
              class="table w-full"
              transition:slide={{ delay: 200, duration: 200, easing: quintOut }}
            >
              <!-- head -->
              <thead>
                <tr>
                  <th />
                  {#if tableProps?.length > 0}
                    {#each tableProps as prop}
                      <th class="normal-case">{prop}</th>
                    {/each}
                  {/if}
                </tr>
              </thead>
              <tbody>
                <!-- row 1 -->
                <tr>
                  <th>
                    {firstCapital(categoryKey)}
                  </th>
                  {#each tableProps as prop}
                    <td class="text-left">Value</td>
                  {/each}
                </tr>
              </tbody>
            </table>
          </div>
          <div class="code-box instructions w-full mt-2">
            <h1 class="font-semibold">Code</h1>
            <p class="text-sm">
              To make transfer simple for advanced users, we have provided an
              array of the properties. Feel free to use your preferred
              methodology to map values programatically.
            </p>
          </div>
          <div class="code-box mt-2 rounded-2xl card bg-priamry">
            <div class=" text-sm p-3  w-fit h-fit">
              <pre class="text-sm" data-prefix=">"><code
                  >const {selectedCategory.toLowerCase()} = [</code
                ></pre>
              {#each tableProps as prop}
                <pre class="text-sm" data-prefix=">"><code>"{prop}",</code
                  ></pre>
              {/each}
              <pre class="text-sm" data-prefix=">"><code>]</code></pre>
            </div>
          </div>
          <div class="template instructions w-full mt-2">
            <h1 class="font-semibold">Template</h1>
            <p class="text-sm">
              Download a template of the specified category, and copy and paste
              your columns into the template, this is not recommended but the
              option is yours.
            </p>
          </div>
         <GenerateImportCsv {categoryKey} {tableProps}/>
        </div>
      {/if}
      <button
        on:click={() => {
          guideOpen = !guideOpen;
          guideOpenSet(guideOpen);
        }}
        class="btn btn-square btn-ghost absolute top-[0] right-[0] py-4 z-10"
      >
        {#if guideOpen}
          <Icon
            src={Minus}
            class="text-primary transition ease-in-out hover:scale-[130%]"
            size="22px"
          />
        {:else}
          <Icon
            src={Plus}
            class="text-primary transition ease-in-out hover:scale-[130%]"
            size="22px"
          />
        {/if}
      </button>
    </div>
    <label>
      <input type="file" hidden bind:value={csvFile} on:change={() => handleFiles(event.target.files)} />
      <div
        class="md:flex-1 md:mt-0 w-full mt-4 bg-gradient-to-r from-bg-slate-300 to-bg-slate-500 hover:bg-slate-500 group hover:transition-colors 
        h-80 rounded-2xl flex flex-wrap justify-center content-center
        [box-shadow:_rgba(50,_50,_93,_0.25)0px_30px_60px-12px_inset,_rgba(0,_0,_0,_0.3)0px_18px_36px-18px_inset;]"
        bind:this={dropZone}
      >
        <div class="w-full flex flex-col justify-center content-center ">
          <input type="file" class="hidden" bind:value={csvFile} />
          <div class="w-full h-full flex justify-center">
            <Icon
              src={CloudUpload}
              size="128px"
              class="transition ease-out group-hover:translate-y-[-2rem] text-primary group-hover:text-slate-900"
            />
          </div>
          <p class="text-center group-hover:text-white font-semibold text-xl">
            Drag & Drop, or Click to upload your .csv
          </p>
        </div>
        <p class="underline italic text-xs mt-4 group-hover:text-white">
          Expand the above guide if you have any questions.
        </p>
      </div>
      
    </label>
  </div>
</PageContainer>
