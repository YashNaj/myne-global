<script lang="ts">
  import { page } from "$app/stores";
  export const csr = true;
  import VanillaTilt, { type HTMLVanillaTiltElement } from "vanilla-tilt";
  import { template, generalFieldsBack } from "$lib/utils/forms";
  import StolenBadge from "./StolenBadge.svelte";
  import CardCell from "$lib/components/CardCell.svelte";
  import Spinner from "$lib/components/Spinner.svelte";
  import { trpc } from "$lib/trpc/client";
  import { spring } from "svelte/motion";
  import { writable } from "svelte/store";
  import { formFieldsObject, fieldPropsObject, colors } from "$lib/utils/cardLogic";
  import { selectedCard } from "$lib/utils/store";
  import { Icon } from "@steeze-ui/svelte-icon";
  import { ArrowsPointingOut } from "@steeze-ui/heroicons";
  import { cloneDeep } from "lodash";
  import { onMount } from "svelte";
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
  export let selectedFields;
  $: if (cardProps) {
    formFieldsObject[cardProps?.category];
  }
  $: cardProps = cardProps;

  export let pictures = [];
  $: if (cardProps?.pictures.length > 0) {
    pictures = cardProps.pictures;
  }

  //add general fields config here  let categoryKey: keyof typeof colors | keyof typeof formFieldsObject;
  $: categoryKey = cardProps?.category?.toLowerCase() as keyof typeof colors | keyof typeof formFieldsObject;
  let pickedColor: string;
  $: pickedColor = colors[categoryKey as keyof typeof colors];

  type formValues = (typeof formFields)[keyof typeof formFields];
  type cardValues = (typeof cardProps)[keyof typeof cardProps];
  let formFields = template;
  let fieldsFrontValues: formValues = template.fieldsFront;

  $: formFields = formFieldsObject[categoryKey];
  $: if (formFields != undefined) {
    fieldsFrontValues = formFields?.fieldsFront;
  }
  let cardId: string;
  export let cardFrontSwiperId = 1;
  const gridClasses = ["row-1 col-1 ", "row-1 col-2 ", "row-2 col-1 ", "row-2 col-2 ", "row-3 col-1", "row-3 col-2"];

  // Define a function to determine the grid class for each cell based on its index
  function getGridClass(index) {
    return gridClasses[index];
  }
  let tiltElement: HTMLVanillaTiltElement;

  onMount(() => {
    if (tiltElement) {
      VanillaTilt.init(tiltElement, {
        max: 5,
        speed: 200,
        glare: true,
        "max-glare": 0.5,
        transition: false,
        gyroscope: true,
      });
    }
  });
  let isStatic = true;
</script>

<div
  bind:this={tiltElement}
  class=" lg:w-64 md:w-48 md:h-96 h-96 rounded-2xl z-1 [transform-style:preserve-3d;] [perspective:1000px;] select-none shadow-2xl"
>
  <div class="flip-card rounded-2xl aspect-[5/7]">
    <div class="flip-card-inner">
      <div
        class="flip-card-front backface-hidden {flipped
          ? 'opacity-0 transition-opacity ease-out'
          : ''} bg-slate-100 rounded-2xl flex flex-col will-change-transform absolute max-w-full
      shadow-md max-h-full"
      >
        <div class="flip-card-front-top p-3 h-full {pickedColor} rounded-t-2xl backdrop-blur-[30px] backdrop-saturate-200 [transformZ:20px;]">
          <SwiperPictures {isStatic} {pictures} />
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
