<script lang="ts">
	import { template, generalFieldsBack } from '$lib/utils/forms';
  import { page } from "$app/stores";
  import CardButtonWidget from "$lib/components/CardButtonWidget.svelte";
  import Spinner from "$lib/components/Spinner.svelte";
  import { trpc } from "$lib/trpc/client";
  import { spring } from "svelte/motion";
  import { writable } from "svelte/store";
  import { formFieldsObject, fieldPropsObject, colors } from "$lib/utils/cardLogic";
  import { transfer, stolen, documentUpload, certificate, selectedCard } from "$lib/utils/store";
  import StolenBadge from "$lib/components/StolenBadge.svelte";

  import { cloneDeep } from "lodash";
  import { beforeUpdate, createEventDispatcher, onMount } from "svelte";
  import { supabase } from "$lib/utils/supabaseClient";
  import CardCellExpanded from "$lib/components/CardCellExpanded.svelte";
  let isCardPropsInitialized = false;
  $: isCardPropsInitialized = !!cardProps;
  export let myneCard;
  $: console.log("is mobile", mobile);

  // box height for expanding cards
  export let w: number;
  export let h: number;

  // card external control values
  export let expanded = false;
  export let flipped = false;
  export let sentCard = false;
  export let success: boolean | null = null;
  export let selected;
  export let inAddCard = false;
  export let mobile = false;
  export let mobileExpanded = false;
  $: selected = selected;
  export let scrollTop;
  //card variables
  export let cardDisplayId: number = 1;
  $: cardDisplayId = cardDisplayId;
  export let cardProps: typeof selectedCard = $selectedCard;
  $: cardProps = $selectedCard;
  export let description;
  let currency;
  $: currency = purchasedValue;
  $: purchasedValue = currencyFormatter.format(purchasedValue);
  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  let cardSide = writable("front");

  export let selectedFields;

  $: if (cardProps) {
    formFieldsObject[cardProps?.category];
  }
  $: cardProps = cardProps;

  //expansion logic
  let expandWidth = 250;
  let expandHeight = (expandWidth * 7) / 5;

  if (mobile) {
    expandWidth = 150;
    expandHeight = 300;
  }

  let expandedWidth = spring(expandWidth, {
    stiffness: 0.15,
    damping: 0.5,
  });
  $: console.log("is mobile", mobile);

  export let pictures = [];
  $: if (cardProps?.pictures?.length > 0) {
    pictures = cardProps.pictures;
  }

  $: console.log("pictures array ", pictures);
  //add general fields config here  let categoryKey: keyof typeof colors | keyof typeof formFieldsObject;
  $: categoryKey = cardProps?.category?.toLowerCase() as keyof typeof colors | keyof typeof formFieldsObject;
  let pickedColor: string;
  $: pickedColor = colors[categoryKey as keyof typeof colors];

  type formValues = (typeof formFields)[keyof typeof formFields];
  type cardValues = (typeof cardProps)[keyof typeof cardProps];
  let formFields = template;
  let fieldsFrontValues: formValues = template.fieldsFront;
  let fieldsBackOneValues: formValues = template.fieldsBackOne;
  let fieldsBackTwoValues: formValues = template.fieldsBackTwo;
  let fieldsBackThreeValues: formValues = template.fieldsBackThree;

  $: formFields = formFieldsObject[categoryKey];
  $: if (formFields != undefined) {
    (fieldsFrontValues = formFields?.fieldsFront),
      (fieldsBackOneValues = formFields?.fieldsBackOne),
      (fieldsBackTwoValues = formFields?.fieldsBackTwo),
      (fieldsBackThreeValues = formFields?.fieldsBackThree);
  }
  let cardId: string;
  export let cardFrontSwiperId = 1;
  export let cardBackSwiperId = 1;
  let pictureSwiper;
  let singleCard;
  let uploading = false;
  let files: FileList;
  let uploadButton: HTMLInputElement;
  const dispatch = createEventDispatcher();

  const gridClasses = ["row-1 col-1 ", "row-1 col-2 ", "row-2 col-1 ", "row-2 col-2 ", "row-3 col-1", "row-3 col-2"];

  // Define a function to determine the grid class for each cell based on its index
  function getGridClass(index) {
    return gridClasses[index];
  }
  let layoutSlides: number | string = "auto";
  $: if (!mobile) {
    layoutSlides = 3;
  }
  const downloadImage = async (path: string) => {
    try {
      const { data, error } = await supabase.storage.from("card-images").download(path);
      if (error) {
        throw error;
      }
      const url = URL.createObjectURL(data);

      return url;
    } catch (error) {
      if (error instanceof Error) {
      }
    }
  };

  let tiltElement;

  import type { LayoutData, PageData } from "./$types";
  import { cubicIn, cubicOut } from "svelte/easing";
  import SwiperPictures from "$lib/components/SwiperPictures.svelte";
  import CardFunctionModals from "$lib/components/CardFunctionModals.svelte";
  export let data: PageData;
  $: pathname = data.pathname;
  const duration = 300;
  const delay = duration + 100;
  const y = 10;

  const transitionIn = { easing: cubicOut, y, duration, delay };
  const transitionOut = { easing: cubicIn, y: -y, duration };
  const getCard = async() => {
    const card = await trpc($page).cards.singleCard.query(data.cardId)
  };
</script>

{#key pathname}
  {#if isCardPropsInitialized}
  <CardFunctionModals/> 
    <div class="h-full w-screen bg-black bg-opacity-10 flex flex-col">
      <div class="w-full h-[400px] {pickedColor} pt-20 pb-4 backdrop-blur-lg">
        <SwiperPictures {pictures} expanded = {true} />
      </div>
      <div class="container-content w-full text-primary h-full z-[90] overflow-y-auto relative backdrop-blur-lg backdrop-saturate-50 bg-transparent">
        <div
          class="atribute-container p-3 flex md:flex-row flex-col w-full justify-between px-3 py-1 font-semibold text-4xl [text-shadow:0px_1px_1px_#d5deeb]"
        >
          <div class="flex">
            <h1 class="text-4xl">{cardProps.brand}</h1>
            <h1 class="mx-3 text-4xl italic">{cardProps.model}</h1>
          </div>
          <div class="flex">
            <CardButtonWidget />
          </div>
        </div>
        <div class="front-fields grid grid-rows-none grid-flow-row grid-cols-2 p-3 w-full h-fit">
          {#if fieldsFrontValues?.length > 0}
            {#each fieldsFrontValues?.slice(0, mobileExpanded ? 2 : undefined) as fieldFront, i}
              <CardCellExpanded
                bind:value={cardProps[fieldFront.value]}
                label={fieldFront?.label}
                allignText={i % 2 === 0 ? "left" : "right"}
              />
            {/each}
          {/if}
        </div>
        {#if fieldsBackOneValues?.length > 0}
          <div class=" front-fields grid grid-rows-none grid-flow-row grid-cols-2 p-3 w-full h-fit">
            {#each fieldsBackOneValues as fieldBackOne, i}
              <CardCellExpanded
                bind:value={cardProps[fieldBackOne.value]}
                label={fieldBackOne.label}
                allignText={i % 2 === 0 ? "left" : "right"}
              />
            {/each}
          </div>
        {/if}
        {#if fieldsBackTwoValues?.length > 0}
          <div class=" front-fields grid grid-rows-none grid-flow-row grid-cols-2 p-3 w-full h-fit">
            {#each fieldsBackTwoValues as fieldBackTwo, i}
              <CardCellExpanded
                bind:value={cardProps[fieldBackTwo.value]}
                label={fieldBackTwo.label}
                allignText={i % 2 === 0 ? "left" : "right"}
              />
            {/each}
          </div>
        {/if}
        {#if fieldsBackThreeValues?.length > 0}
          <div class=" front-fields grid grid-rows-none grid-flow-row grid-cols-2 p-3 w-full h-fit">
            {#each fieldsBackThreeValues as fieldBackThree, i}
              <CardCellExpanded
                bind:value={cardProps[fieldBackThree.value]}
                label={fieldBackThree.label}
                allignText={i % 2 === 0 ? "left" : "right"}
              />
            {/each}
          </div>
        {/if}

        <div class=" front-fields flex flex-col p-3 w-full">
          <h1 class="card-field-label label py-0 font-bold text-lg w-full flex h-fit mb-2">Description</h1>
          <div class="card-field-value label py-0 flex">
            <textarea disabled class="textarea bg-none md:w-[75%] w-full h-full P-0" placeholder="Description"
              >{description}</textarea
            >
          </div>
        </div>

        <div class="front-fields grid grid-rows-none grid-flow-row grid-cols-2 p-3 w-full h-fit">
          {#each generalFieldsBack as generalFields, i}
            <CardCellExpanded
              bind:value={cardProps[generalFields.value]}
              label={generalFields.label}
              allignText={i % 2 === 0 ? "left" : "right"}
            />
          {/each}
        </div>
      </div>
      <div class="document-pdf container h-[50vh] w-full p-3">Document Display incoming ...</div>
    </div>
  {/if}
{/key}
