
<script lang="ts">
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
  console.log("🚀 ~ file: CardFlippable.svelte:13 ~ documentUpload:", documentUpload)
  import StolenBadge from "./StolenBadge.svelte";
  import {
    Icon,
    DocumentText,
    ShieldExclamation,
    SwitchHorizontal,
    Star,
    ArrowCircleLeft,
    ArrowsExpand,
  } from "svelte-hero-icons";
  import { cloneDeep } from "lodash";

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
  $: console.log("card,expanded", expanded)
  $: selected = selected;
  $: console.log("selected", selected);
  export let scrollTop;

  //card variables
  export let cardDisplayId: string;
  $: cardDisplayId = cardDisplayId;
  export let cardProps = {
    categoy: "",
    pictures: [''],
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
    expandHeight= 300; 
  }

  let expandedWidth = spring(expandWidth, {
    stiffness: 0.15,
    damping: 0.5,
  });
  $:console.log("is mobile", mobile)
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
  export let pictures = cardProps?.pictures
  console.log("pictures array ",  pictures)
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
  $: cardProps.pictures = pictures;

</script>

<div
  class:flipped
  class={expanded
    ? "absolute expanded-view-cards top: { 0  + `${scrollTop}`"
    : '"wrapper rounded-xl  relative laspect-[2/3]" '}
  class:sendCard={sentCard === true && success === null}
  class:comeBack={success === true}
  style="height: {$expandedHeight}px; width: {$expandedWidth}px; z-index: {$zIndex}; position: {$expandedPosition}; top: {$scrollPosition}px; left:0px"
>
  <div class="flip-card bg-none  [perspective:1000px] [user-select:none] cursor-pointer rounded-xl h-full">
    <div class="flip-card-inner rounded-xl w-full h-full relative">
      <div class="flip-card-front rounded-xl">
        {#if cardProps?.isStolen}
        <div class = 'absolute z-[99] animate-pulse '>

          <StolenBadge/>
        </div>
        {/if}
        <div
          class="front-parent card-item grid grid-rows-2 w-full gradient bg-white whole-card rounded-xl shadow-2xl z-1  bg-cover "
          style="height: {$expandedHeight}px; width: {$expandedWidth}px; z-index: {$zIndex}; position: {$expandedPosition};"
        >
          {#key pickedColor}
            <div class="front-top-top rounded-t-xl {pickedColor} transition-colors duration-200 ease-linear ">
              <div
                class={expanded
                  ? "w-full h-full flex justify-center content-center flex-nowrap rounded-xl p-2"
                  : "flex w-full h-full justify-center content-center flex-nowrap rounded-xl p-2"}
              >
                <slot />
              </div>
            </div>
          {/key}
          <div class="front-bottom w-full rounded-b-2xl relative">
            <div class="front-fields-grid w-full h-full p-2 bg-white">
              {#if fieldsFrontValues?.length > 0}
                {#each fieldsFrontValues as fieldFront}
                  <CardCell
                    {mobile}
                    bind:value={cardProps[fieldFront.value]}
                    gridClass={fieldFront?.location}
                    label={fieldFront?.label}
                    justifyCell={fieldFront?.justify}
                  />
                {/each}
              {/if}
            </div>
          </div>
        </div>
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
            class="btn btn-square btn-ghost btn-secondary text-white  top-[.5rem] right-[1rem] z-[101] normal-case"
            on:click={() => {
              toggleFlipped();
            }}
          >
            <Icon size="12px" class="opacity-60 cursor-pointer  text-white" src={ArrowCircleLeft} />
            <p>Flip</p>
          </button>
        </div>
      </div>
      <div class="flip-card-back rounded-xl text-white  ">
        <div class="w-full h-full absolute top-0 right-0">
          <StolenBadge />
        </div>
        <div
          class="card-item  bg-none rounded-xl shadow-xl z-1"
          style="height: {$expandedHeight}px; width: {$expandedWidth}px; z-index: {$zIndex}; position: {$expandedPosition};"
        >
          <div class="flex top-[.5rem] right-[1rem] z-[101] absolute w-justify-end">
            <button
              disabled={flipped}
              class="btn btn-ghost btn-secondary text-black top-[.5rem] right-[1rem] z-[101] normal-case"
              on:click={() => {
                toggleExpand();
              }}
            >
              <Icon size="12px" class="opacity-60 cursor-pointer  text-black" src={ArrowsExpand} />
              <p>Expand</p>
            </button>
            <button
              class="btn btn-square btn-ghost btn-secondary text-black  top-[.5rem] right-[1rem] z-[101] normal-case"
              on:click={() => {
                toggleFlipped();
              }}
            >
              <Icon size="12px" class="opacity-60 cursor-pointer  text-black" src={ArrowCircleLeft} />
              <p>Flip</p>
            </button>
          </div>
          <div
            class=" card-item rounded-xl w-full h-full justify-between whole-card bg-white  back-card_general-grid p-3 "
          >
            {#if !expanded}
              <div class="spacer w-full h-[50%]" />
            {/if}
            <CardSlider
              {cardDisplayId}
              {cardProps}
              {fieldsBackOneValues}
              {fieldsBackTwoValues}
              {fieldsBackThreeValues}
              {description}
              {generalFieldsBack}
            />
            <div class="card-buttons_back back-card_general-3 mt-2">
              <div class="button-container w-full h-[90%] grid grid-cols-2 grid-rows-2 gap-[2px] place-items-center">
                <button
                  class="btn btn-ghost w-[90%] h-full  flex-nowrap z-2 normal-case p-2"
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
                  class="btn btn-ghost w-[90%] h-full  flex-nowrap z-2 normal-case p-2"
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
                  class="btn btn-ghost  w-[90%] h-full  flex-nowrap z-2 normal-case p-2"
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
                  class="btn btn-ghost  w-[90%] h-full flex-nowrap z-2 normal-case p-2"
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
</div>

<style lang="postcss">
  .no-display {
    display: none;
  }
  .swiper-pagination {
    top: 40px;
  }
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    -webkit-transition: transform 0.6s;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }

  .flipped .flip-card .flip-card-inner {
    -webkit-transform: translateZ(0);
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
    width: 100%;
    height: 100%;
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-transform: translateZ(0);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .flip-card-front {
  }

  .flip-card-back {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
  .text-box {
    margin: 0 auto;
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -pre-wrap;
    white-space: -o-pre-wrap;
    word-wrap: break-word;
    display: box;
  }

  .sendCard {
    -webkit-animation: slide-out-top 0.3s cubic-bezier(0.6, -0.28, 0.735, 0.045) forwards;
    animation: slide-out-top 0.3s cubic-bezier(0.6, -0.28, 0.735, 0.045) forwards;
  }
  /* ----------------------------------------------
 * Generated by Animista on 2023-2-13 23:12:6
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

  /**
 * ----------------------------------------
 * animation slide-out-top
 * ----------------------------------------
 */
  @-webkit-keyframes slide-out-top {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: translateY(-1000px);
      transform: translateY(-1000px);
      opacity: 0;
    }
  }
  @keyframes slide-out-top {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: translateY(-1000px);
      transform: translateY(-1000px);
      opacity: 0;
    }
  }

  .comeBack {
    -webkit-animation: slide-in-top 0.5s cubic-bezier(0.215, 0.61, 0.355, 1) 100ms both;
    animation: slide-in-top 0.5s cubic-bezier(0.215, 0.61, 0.355, 1) 100ms both;
  }

  /* ----------------------------------------------
 * Generated by Animista on 2023-2-13 23:49:40
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

  /**
 * ----------------------------------------
 * animation slide-in-top
 * ----------------------------------------
 */
  @-webkit-keyframes slide-in-top {
    0% {
      -webkit-transform: translateY(-1000px);
      transform: translateY(-1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes slide-in-top {
    0% {
      -webkit-transform: translateY(-1000px);
      transform: translateY(-1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }
  .front-parent {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }

  .front-top {
    grid-area: 1 / 1 / 2 / 2;
  }
  .front-bottom {
    grid-area: 2 / 1 / 3 / 2;
  }

  .front-fields-grid {
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
  .back-card_general-grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 5fr 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
  .back-card_card-fields {
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
</style>
