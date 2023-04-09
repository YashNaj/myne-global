<script lang="ts">
  import { page } from "$app/stores";
  import { template, generalFieldsBack } from "./../../forms";
  import CardSlider from "./CardSlider.svelte";
  import CardButtonWidget from "$lib/components/CardButtonWidget.svelte";
  import CardCell from "$lib/components/CardCell.svelte";
  import Spinner from "$lib/components/Spinner.svelte";
  import { trpc } from "$lib/trpc/client";
  import { spring } from "svelte/motion";
  import { writable } from "svelte/store";
  import { formFieldsObject, fieldPropsObject, colors } from "$lib/utils/cardLogic";
  import { transfer, stolen, documentUpload, certificate, selectedCard } from "$lib/store";
  import StolenBadge from "./StolenBadge.svelte";
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
  export let mobile: boolean;
  $: selected = selected;
  export let scrollTop;

  //card variables
  export let cardDisplayId: number = 1;
  $: cardDisplayId = cardDisplayId;
  export let cardProps = {
    category: "",
  };
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
  $: if (cardProps.pictures.length > 0) {
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
</script>

<div class:flipped class=" lg:w-64 md:w-48 w-44 aspect-[5/7] rounded-2xl">
  <div class="flip-card rounded-2xl aspect-[5/7]">
    <div class="flip-card-inner">
      <div
        class="flip-card-front backface-hidden {flipped
          ? 'opacity-0 transition-opacity ease-out'
          : ''} aspect-[5/7] bg-slate-100 rounded-2xl flex flex-col will-change-transform absolute max-w-full
    shadow-md max-h-full"
      >
        <div class:hidden={flipped} class="flex top-[.5rem] right-[1rem] z-[101] absolute w-justify-end">
          <button
            class="btn btn-ghost btn-secondary text-white top-[.5rem] right-[1rem] z-[101] normal-case"
            on:click={() => {
              toggleExpand();
            }}
          >
            <Icon size="12px" class="opacity-60 cursor-pointer  text-white" src={ArrowsExpand} />
            <p>Expand</p>
          </button>
          <button
            disabled={expanded}
            class="btn btn-square btn-ghost btn-secondary text-white top-[.5rem] right-[1rem] z-[101] normal-case"
            on:click={() => {
              toggleFlipped();
            }}
          >
            <Icon size="12px" class="opacity-60 cursor-pointer  text-white" src={ArrowCircleLeft} />
            <p>Flip</p>
          </button>
        </div>
        <div class="flip-card-front-top p-3 h-full {pickedColor} rounded-t-2xl">
          <slot />
        </div>
        <div class="flip-card-front-bottom flex-3 flex-1">
          <div class="front-fields grid grid-rows-3 grid-cols-2 w-full h-fit p-3">
            {#if fieldsFrontValues?.length > 0}
              {#each fieldsFrontValues.slice(0, mobile ? 2 : undefined) as fieldFront, i}
                <CardCell
                  bind:value={cardProps[fieldFront.value]}
                  label={fieldFront?.label}
                  allignText={i % 2 === 0 ? "left" : "right"}
                />
              {/each}
            {/if}
          </div>
        </div>
      </div>
      <div
        class="flip-card-back rounded-2xl backface-hidden bg-slate-100 z-100 flex flex-col
  "
      >
        <div class="back-content w-full h-full bg-slate-100 z-99 shadow-md rounded-2xl flex flex-col">
          <div class="flex top-[.5rem] right-[1rem] z-[101] absolute w-justify-end">
            <button
              class="btn btn-ghost btn-secondary text-black top-[.5rem] right-[1rem] z-[101] normal-case"
              on:click={() => {
                toggleExpand();
              }}
            >
              <Icon size="12px" class="opacity-60 cursor-pointer  text-black" src={ArrowsExpand} />
              <p>Expand</p>
            </button>
            <button
              disabled={expanded}
              class="btn btn-square btn-ghost btn-secondary text-black top-[.5rem] right-[1rem] z-[101] normal-case"
              on:click={() => {
                toggleFlipped();
              }}
            >
              <Icon size="12px" class="opacity-60 cursor-pointer  text-black" src={ArrowCircleLeft} />
              <p>Flip</p>
            </button>
          </div>
          {#if !expanded}
            <div class="spacer w-full h-[20%]" />
          {/if}
          <div class="w-full p-3 flex-1">
            <CardSlider
              {cardDisplayId}
              {cardProps}
              {fieldsBackOneValues}
              {fieldsBackTwoValues}
              {fieldsBackThreeValues}
              {description}
              {generalFieldsBack}
            />
          </div>

          <div class="card-buttons_back back-card_general-3 mt-2 flex-1">
            <div class="button-container w-full md:h-full h-[30%] grid grid-cols-2 grid-rows-2 gap-[2px] place-items-center">
              <button
                class="btn btn-ghost w-[90%] h-full flex-nowrap z-2 normal-case p-2"
                on:click={() => {
                  selected = true;
                  transfer.set(true);
                  selectedCard.set(cloneDeep(cardProps));
                }}
              >
                <Icon src={SwitchHorizontal} color="purple" class="opacity-90" size="30px" />
                <p class="flex text-xs w-full justify-center text-violet-900">Transfer</p>
              </button>

              <button
                on:click={() => {
                  selected = true;
                  certificate.set(true);
                  selectedCard.set(cloneDeep(cardProps));
                }}
                class="btn btn-ghost w-[90%] h-full flex-nowrap z-2 normal-case p-2"
              >
                <p class="flex text-xs w-full justify-center text-yellow-700">Certificate</p>
                <Icon src={Star} color="gold" class="opacity-90" size="30px" />
              </button>
              <button
                on:click={() => {
                  selected = true;
                  stolen.set(true);
                  console.log(cardProps);
                  selectedCard.set(cloneDeep(cardProps));
                  console.log("on button click selectedCard", $selectedCard);
                }}
                class="btn btn-ghost w-[90%] h-full flex-nowrap z-2 normal-case p-2"
              >
                <Icon src={ShieldExclamation} color="#ff0f0f" class="opacity-90" size="30px" />
                <p class="flex text-xs w-full justify-center text-red-600">Stolen</p>
              </button>
              <button
                on:click={() => {
                  selected = true;
                  documentUpload.set(true);
                  selectedCard.set(cloneDeep(cardProps));
                }}
                class="btn btn-ghost w-[90%] h-full flex-nowrap z-2 normal-case p-2"
              >
                <p class="flex text-xs w-full justify-center text-green-900">Document</p>
                <Icon src={DocumentText} color="green" class="opacity-90" size="30px" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
