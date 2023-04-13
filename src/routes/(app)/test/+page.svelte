<script lang="ts">
  import { generalFieldsBack, template } from "./../../../forms";
  import { page } from "$app/stores";
  import CardSlider from "$lib/components/CardSlider.svelte";
  import CardButtonWidget from "$lib/components/CardButtonWidget.svelte";
  import CardCell from "$lib/components/CardCell.svelte";
  import Spinner from "$lib/components/Spinner.svelte";
  import { trpc } from "$lib/trpc/client";
  import { spring } from "svelte/motion";
  import { writable } from "svelte/store";
  import { formFieldsObject, fieldPropsObject, colors } from "$lib/utils/cardLogic";
  import { transfer, stolen, documentUpload, certificate, selectedCard } from "$lib/store";
  import StolenBadge from "$lib/components/StolenBadge.svelte";
  import {
    Icon,
    DocumentText,
    ShieldExclamation,
    SwitchHorizontal,
    Star,
    ArrowCircleLeft,
    ArrowsExpand,
    ArrowCircleRight,
    CloudUpload,
  } from "svelte-hero-icons";
  import { cloneDeep } from "lodash";
  import { beforeUpdate, createEventDispatcher, onMount } from "svelte";
  import { supabase } from "$lib/supabaseClient";
  import CardCellExpanded from "$lib/components/CardCellExpanded.svelte";
  import { fly } from "svelte/transition";
  import { cubicIn } from "svelte/easing";
  let isCardPropsInitialized = false;
  $: isCardPropsInitialized = !!cardProps;
  export let myneCard;

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
  beforeUpdate(() => {
    $: for (let picture of pictures) {
      if (pictures?.length > 0 && pictures[0] !== "")
        downloadImage(picture).then((url) => {
          const imgElement = document.getElementById(`img-${picture}`);
          imgElement?.setAttribute("src", url);
        });
    }
  });
</script>

{#if isCardPropsInitialized}
  <div class="h-screen w-screen bg-black bg-opacity-10 flex flex-col pt-[4rem] ">
    <div class="carousel carousel-center w-full p-4 space-x-4 {pickedColor}  overflow-x-auto overflow-y-hidden flex-2">
      {#if pictures?.length > 0}
        {#each pictures as picture}
          <div class="swiperpictures carousel-item rounded-2xl object-contain aspect-[16/9] w-80">
            <div class="w-full h-full">
              <img alt="img" id={`img-${picture}`} class="rounded-box max-w-full" />
            </div>
          </div>
        {/each}
      {/if}
    </div>
    <div class="container-content w-full text-primary h-full z-[90] overflow-y-auto relative">
      <div class="hidden md:flex w-80 h-40 absolute right-[1rem] top-[1rem]">
        <CardButtonWidget />
      </div>
      <h1 class="w-full flex justify-start px-3 py-1 font-semibold text-4xl [text-shadow:0px_1px_1px_#d5deeb]">{cardProps.category}</h1>
      <div class="atribute-container p-3 flex w-full justify-start">
        <h1 class="text-2xl">{cardProps.brand}</h1>
        <div class="border-l-2 border-primary w-[5px] h-full" />

        <h1 class="mx-3 text-2xl italic">{cardProps.model}</h1>
      </div>
      <div class="front-fields grid grid-rows-none grid-flow-row grid-cols-2 p-3 aspect-[1/1] md:w-[50%] w-full h-fit">
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
        <div class=" front-fields grid grid-rows-none grid-flow-row grid-cols-2 p-3 aspect-[1/1] md:w-[50%] w-full h-fit">
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
        <div class=" front-fields grid grid-rows-none grid-flow-row grid-cols-2 p-3 aspect-[1/1] md:w-[50%] w-full h-fit">
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
        <div class=" front-fields grid grid-rows-none grid-flow-row grid-cols-2 p-3 aspect-[1/1] md:w-[50%] w-full h-fit">
          {#each fieldsBackThreeValues as fieldBackThree, i}
            <CardCellExpanded
              bind:value={cardProps[fieldBackThree.value]}
              label={fieldBackThree.label}
              allignText={i % 2 === 0 ? "left" : "right"}
            />
          {/each}
        </div>
      {/if}

      <div class=" front-fields flex flex-col p-3 aspect-[1/1] md:w-[50%] w-full">
        <h1 class="card-field-label label py-0 font-bold text-lg w-full flex h-fit mb-2">Description</h1>
        <div class="card-field-value label py-0 flex">
          <textarea disabled class="textarea bg-none w-full h-full" placeholder="Description">{description}</textarea>
        </div>
      </div>

      <div class="front-fields grid grid-rows-none grid-flow-row grid-cols-2 p-3 aspect-[1/1] md:w-[50%] w-full h-fit">
        {#each generalFieldsBack as generalFields, i}
          <CardCellExpanded
            bind:value={cardProps[generalFields.value]}
            label={generalFields.label}
            allignText={i % 2 === 0 ? "left" : "right"}
          />
        {/each}
      </div>
    </div>
    <div
      in:fly|local={{ duration: 200, easing: cubicIn }}
      class="md:hidden w-full h-40 right-[1rem] top-[1rem] p-3 flex justify-center"
    >
      <CardButtonWidget />
    </div>
  </div>
{/if}
