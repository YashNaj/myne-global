<script lang="ts">
  import CardSlider from "./CardSlider.svelte";
  import CardButtonWidget from "$lib/components/CardButtonWidget.svelte";
  import CardCell from "$lib/components/CardCell.svelte";
  import { Icon, ArrowCircleLeft, ArrowsExpand } from "svelte-hero-icons";
  import Spinner from "$lib/components/Spinner.svelte";
  import { trpc } from "$lib/trpc/client";
  import { spring } from "svelte/motion";
  import { writable } from "svelte/store";
  // formFields initv
  import {
    template,
    generalFieldsBack,
    jewelryFields,
    watchFields,
    artFields,
    leatherFields,
    clothingFields,
    sneakerFields,
    gunsFields,
    technologyFields,
    tradingCardFields,
    colectibleFields,
    cryptoFields,
    nftFields,
    vintageFields,
    autoFields,
    motoFields,
    catFields,
    dogFields,
    birdFields,
    otherFields,
    otherAnimalFields,
    childIdFields,
  } from "../../forms";
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
  let formFieldsObject = {
    jewelry: jewelryFields,
    watch: watchFields,
    firearms: gunsFields,
    art: artFields,
    leather: leatherFields,
    clothing: clothingFields,
    sneakers: sneakerFields,
    fir: gunsFields,
    technology: technologyFields,
    "trading cards": tradingCardFields,
    collectibles: colectibleFields,
    crypto: cryptoFields,
    nft: nftFields,
    vintage: vintageFields,
    automobile: autoFields,
    motorcycle: motoFields,
    cat: catFields,
    dog: dogFields,
    bird: birdFields,
    "other animal": otherAnimalFields,
    other: otherFields,
    childid: childIdFields,
  };
  interface IcardProps {
    [key: string]: string | boolean | null | bigint | string[];
    category: keyof typeof colors | keyof typeof formFieldsObject | string | null;
  }
  interface IfieldsPropsObject {
    [key: string]: string[];
  }

  export let myneCard: IcardProps;

  // card external control values
  export let expanded = false;
  

  export let flipped = false;
  export let sentCard = false;
  export let success: boolean | null = null;
  export let description;
  export let pictures;

  //card variables
  export let cardDisplayId: string;
  $: cardDisplayId = cardDisplayId;
  export let cardProps: IcardProps = {
    category: "",
    description: "",
    ...myneCard,
  };

  export let selectedFields = formFieldsObject[cardProps.category];

  let currency;
  $: currency = purchasedValue;
  $: purchasedValue = currencyFormatter.format(purchasedValue);
  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  $: cardProps = cardProps;
  let cardSide = writable("front");

  //expansion logic
  let expandWidth = 250;
  let expandHeight = 350;
  let expandedWidth = spring(expandWidth, {
    stiffness: 0.15,
    damping: 0.5,
  });
  export let w: number;
  export let h: number;
  let expandedHeight = spring(expandHeight, {
    stiffness: 0.15,
    damping: 0.5,
  });
  let expandedPosition = writable("relative");
  let zIndex = writable(1); 

  function toggleExpand() {
    expanded = !expanded;
    if (!expanded ) {
      expandedHeight.set(expandHeight);
      expandedWidth.set(expandWidth);
      expandedPosition.set("relative");
      zIndex.set(1);
    }else {

      expandedHeight.set(h);
      expandedWidth.set(w);
      expandedPosition.set("absolute");
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
  $: console.log("flipped", flipped);
  $: console.log("expanded", expanded);
$: console.log("cardSide fF")
  //add general fields config here  let categoryKey: keyof typeof colors | keyof typeof formFieldsObject;
  $: categoryKey = cardProps.category?.toLowerCase() as keyof typeof colors | keyof typeof formFieldsObject;
  const colors = {
    jewelry: "bg-gradient-to-r from-[#F192E8] to-[#edd7eb]",
    watch: "bg-gradient-to-r from-[#1b1c1d] to-[#999ba0]",
    art: "bg-gradient-to-r from-[#ffe609] to-[#fffbd7]",
    leather: "bg-gradient-to-r from-[#984E1D] to-[#dbbfad]",
    clothing: "bg-gradient-to-r from-[#456896] to-[#d6e7e8]",
    sneakers: "bg-gradient-to-r from-[#86e8ec] to-[#bbd5d5]",
    firearms: "bg-gradient-to-r to-[#edd49e] via-[#638256] from-[#1d410e]",
    technology: "bg-gradient-to-r from-[#132076]  to-[#c8c5f1]",
    "trading cards": "bg-gradient-to-r from-[#ddcd7c] via-[#ddcd7c]  to-[#e8e5d7]",
    collectibles: "bg-gradient-to-r from-[#6bf7b3]  to-[#c9e8d9]",
    crypto: "bg-gradient-to-r from-[#8d8b8b]  to-[#efefef]",
    nft: "bg-gradient-to-r from-[#582577]  to-[#e3d1ee",
    vintage: "bg-gradient-to-r from-[#FF5F09]  to-[#f8e6de]",
    automobile: "bg-gradient-to-r from-[#ff2800]  to-[#601204]",
    motorcycle: "bg-gradient-to-r from-[#ff2800]  to-[#601204]",
    dog: "bg-gradient-to-r from-[#2e9a00]  to-[#d1ffbb]",
    cat: "bg-gradient-to-r from-[#2e9a00]  to-[#d1ffbb]",
    bird: "bg-gradient-to-r from-[#2e9a00]  to-[#d1ffbb]",
    "other animal": "bg-gradient-to-r from-[#2e9a00]  to-[#d1ffbb]",
    other: "bg-gradient-to-r from-[#f3efef]  to-[#767976]",
  };
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
  $: console.log(myneCard);
  $: console.log("card-side", cardSide);
</script>
<div
  class:flipped
  class={expanded ? 'absolute' : '"wrapper rounded-2xl h-fit  w-fit relative " '}
  class:sendCard={sentCard === true && success === null}
  class:comeBack={success === true}
>
  <div
    class:expanded={expanded ? "absolute" : "relative"}
    class="flip-card bg-none [perspective:1000px] [user-select:none] cursor-pointer rounded-2xl 
    "
    style="height: {$expandedHeight}px; width: {$expandedWidth}px; z-index: {$zIndex}; position: {$expandedPosition};"
  >
    <div class="flip-card-inner rounded-2xl w-fit relative"     style="height: {$expandedHeight}px; width: {$expandedWidth}px; z-index: {$zIndex}; position: {$expandedPosition};"
    >
      <div class="flip-card-front rounded-2xl   h-full">
        <div class="absolute w-fit top-0 z-10 right-0">
          <div
            class:no-display={$cardSide === "back"}
            class="flex  top-[.5rem] right-[1rem] z-10 absolute w-justify-end"
          >
            <button
            on:click={() => {
              toggleExpand();
            }}
              class="btn relative p-0 pr-3 w-fit btn-ghost btn-secondary text-white top-[.5rem] right-[1rem] z-[99]  normal-case"
            >
              <Icon
                size="12px"
                class="opacity-60 cursor-pointer  text-white ml-[1rem] "
                src={ArrowsExpand}
             
              />
              <p>Expand</p>
            </button>
            <button 
              disabled={expanded}
              class="btn btn-square relative btn-ghost btn-secondary text-white  top-[.5rem] right-[1rem] normal-case"
              on:click={() => {
                toggleFlipped();
              }}
            >
              <Icon size="12px" class="opacity-60 cursor-pointer  text-white" src={ArrowCircleLeft} />
              <p>Flip</p>
            </button>
          </div>
        </div>

        <div
          class="front-parent card-item w-full h-full gradient bg-white whole-card rounded-2xl shadow-2xl  flex   z-1  bg-cover"
          
        >
          {#key pickedColor}
            <div class="front-top rounded-t-2xl {pickedColor} transition-colors duration-200 ease-linear ">
              <div class={expanded  ? 'w-full h-full object-cover flex justify-center content-center flex-nowrap py-2 ' : ' w-full h-full aspect-[3/2] object-cover flex justify-center content-center flex-nowrap py-2' } >
                <slot />
              </div>
            </div>
          {/key}
          <div class="front-bottom rounded-b-2xl h-[100%]">
            <div class="front-fields-grid h-full w-full p-2">
              {#if fieldsFrontValues?.length > 0}
                {#each fieldsFrontValues as fieldFront}
                  <CardCell
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
      </div>
      <div class="flip-card-back rounded-2xl text-black  "
      >
        <div class="card-item  bg-none rounded-2xl shadow-2xl z-1"
        style="height: {$expandedHeight}px; width: {$expandedWidth}px; z-index: {$zIndex}; position: {$expandedPosition};"
        >
          <div class="flex  top-[.5rem] right-[1rem] z-[110] absolute w-justify-end">
            <button
              class="btn btn-ghost btn-secondary text-black top-[.5rem] right-[1rem] z-[110] normal-case"
              on:click={() => {
                toggleExpand();
              }}
            >
              <Icon size="12px" class="opacity-60 cursor-pointer  text-black" src={ArrowsExpand} />
              <p>Expand</p>
            </button>
            <button
              class="btn btn-square btn-ghost btn-secondary text-black  top-[.5rem] right-[1rem`] z-[110] normal-case"
              on:click={() => {
                toggleFlipped();
              }}
            >
              <Icon size="12px" class="opacity-60 cursor-pointer  text-black" src={ArrowCircleLeft} />
              <p>Flip</p>
            </button>
          </div>
          <div
            class=" card-item rounded-2xl w-full h-full justify-between whole-card bg-white  back-card_general-grid p-3 "
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
              <CardButtonWidget />
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
    color: black;
  }

  .flip-card-back {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
  .upload-picures {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
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
  .whole-card {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
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
