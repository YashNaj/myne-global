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
  let isCardPropsInitialized = false;
  $: isCardPropsInitialized = !!cardProps;
  import VanillaTilt from "vanilla-tilt";
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
  export let mobile = true;
  export let mobileExpanded = true;
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
  let expandedHeight = spring(expandHeight, {
    stiffness: 0.15,
    damping: 0.5,
  });
  let expandedPosition = writable("relative");
  let zIndex = writable(1);
  let scrollPosition = writable(0);
  function toggleExpand() {
    expanded = !expanded;
    if (!expanded) {
      expandedHeight.set(expandHeight);
      expandedWidth.set(expandWidth);
      expandedPosition.set("relative");
      scrollPosition.set(0);
      zIndex.set(1);
    } else {
      expandedHeight.set(h);
      expandedWidth.set(w);
      expandedPosition.set("absolute");
      scrollPosition.set(scrollTop);
      zIndex.set(99);
    }
  }
  function toggleFlipped() {
    flipped = !flipped;
    if (!flipped) {
      cardSide.set("front");
    } else {
      cardSide.set("back");
    }
  }
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
    layoutSlides = "3";
  }

  let tiltElement;
</script>

{#if isCardPropsInitialized}
  <div class="w-full h-auto pb-12 bg-black bg-opacity-10 overflow-y-hidden">
    <div class="w-full h-screen flex flex-col">
      <div class="w-full h-[33%] {pickedColor} relative">
        <swiper-container
          id="expanded-picture-slider"
          slides-per-view={layoutSlides}
          observer-parents="true"
          observer="true"
          class="w-full h-full p-3"
        >
          <swiper-slide class="h-full aspect-[16/9] bg-black bg-opacity-10 backdrop-blur-10 mx-1 rounded-2xl" />
          <swiper-slide
            class="h-full aspect-[16/9] bg-black bg-opacity-10 backdrop-blur-10 mx-1 rounded-2xl"
          /><swiper-slide class="h-full aspect-[16/9] bg-black bg-opacity-10 backdrop-blur-10 mx-1 rounded-2xl" />
          <swiper-slide class="h-full aspect-[16/9] bg-black bg-opacity-10 backdrop-blur-10 mx-1 rounded-2xl" />
          <swiper-slide
            class="h-full aspect-[16/9] bg-black bg-opacity-10 backdrop-blur-10 mx-1 rounded-2xl"
          /><swiper-slide class="h-full aspect-[16/9] bg-black bg-opacity-10 backdrop-blur-10 mx-1 rounded-2xl" />
        </swiper-container>
      </div>
      <div class="w-full h-auto overflow-y-">
        <h1 class="w-full flex justify-start px-3 py-1 font-semibold text-4xl">{cardProps.category}</h1>
        <div class="atribute-container p-3 flex w-full justify-start">
          <h1 class="text-2xl">{cardProps.brand}</h1>
          <div class="border-l-2 border-primary w-[5px] h-full" />

          <h1 class="mx-3 text-2xl italic">{cardProps.model}</h1>
        </div>
        <div class="front-fields grid grid-rows-none grid-flow-row grid-cols-2 w-full h-full p-3">
          {#if fieldsFrontValues?.length > 0}
            {#each fieldsFrontValues?.slice(0, mobileExpanded ? 2 : undefined) as fieldFront, i}
              <CardCellExpanded
                bind:value={cardProps[fieldFront.value]}
                label={fieldFront?.label}
                allignText={i % 2 === 0 ? "left" : "right"}
                gridClass={inAddCard ? "" : getGridClass(i)}
              />
            {/each}
          {/if}
        </div>
      </div>
    </div>
  </div>
{/if}
