<script lang="ts">
  export const csr = true;
  import VanillaTilt, { type HTMLVanillaTiltElement } from "vanilla-tilt";
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
  import SwiperPictures from "./SwiperPictures.svelte";

  export let myneCard;

  // box height for expanding cards

  // card external control values
  export let expanded = false;
  export let flipped = false;
  export let sentCard = false;
  export let success: boolean | null = null;
  export let inAddCard = false;
  export let mobile: boolean;
  //card variables
  export let cardDisplayId: number = 1;
  $: cardDisplayId = cardDisplayId;
  export let cardProps = {
    category: "",
    pictures: [""],
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
  $: if (cardProps?.pictures.length > 0) {
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
  let tiltElement: HTMLVanillaTiltElement;

  onMount(() => {
    if (tiltElement) {
      VanillaTilt.init(tiltElement, {
        max: 10,
        speed: 200,
        glare: true,
        "max-glare": 0.5,
        transition: false,
      });
    }
  });
</script>

<div bind:this={tiltElement} class=" lg:w-64 md:w-48 {inAddCard ? 'w-48' : 'w-44'} md:h-96 h-64 rounded-2xl z-1">
  <div class="flip-card rounded-2xl aspect-[5/7]">
    <div class="flip-card-inner">
      <div
        class="flip-card-front backface-hidden {flipped
          ? 'opacity-0 transition-opacity ease-out'
          : ''} bg-slate-100 rounded-2xl flex flex-col will-change-transform absolute max-w-full
    shadow-md max-h-full"
      >
        <div class:hidden={flipped} class="flex top-[.5rem] right-[1rem] z-[101] absolute w-justify-end">
          <a
            href="/test"
            class="btn btn-ghost btn-secondary text-white top-[.5rem] right-[1rem] z-[101] normal-case"
            on:click={() => {
              selectedCard.set(structuredClone(cardProps));
            }}
          >
            <Icon size="12px" class="opacity-60 cursor-pointer  text-white" src={ArrowsExpand} />
            <p>Expand</p>
          </a>
        </div>
        <div class="flip-card-front-top p-3 h-full {pickedColor} rounded-t-2xl backdrop-blur-lg">
          <SwiperPictures {pictures} />
        </div>
        <div class="flip-card-front-bottom flex-3 flex-1">
          <div class="front-fields grid grid-rows-3 grid-cols-2 w-full h-fit p-3">
            {#if fieldsFrontValues?.length > 0}
              {#each fieldsFrontValues?.slice(0, mobile ? 2 : undefined) as fieldFront, i}
                <CardCell
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
  </div>
</div>
