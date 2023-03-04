<script lang="ts">
	import CardSlider from './../CardSlider.svelte';
  import CardButtonWidget from "$lib/components/CardButtonWidget.svelte";
  import CardCell from "$lib/components/CardCell.svelte";
  import CardCellDescription from "$lib/components/CardCellDescription.svelte";
  import Carousel from "$lib/components/Carousel.svelte";
  import { onDestroy, onMount } from "svelte";
  import {
    Icon,
    ArrowCircleLeft,
    ArrowsExpand,
    ArrowLeft,
    ArrowRight,
  } from "svelte-hero-icons";
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
  import UploadWidget from './UploadWidget.svelte';

  // formFields init
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
    [key: string]: string | boolean | null | bigint;
    category:
      | keyof typeof colors
      | keyof typeof formFieldsObject
      | string
      | null;
  }
  export let pictureUrls; 
  // card external control values
  export let expand = false;
  export let flipped = false;
  export let sentCard = false;
  export let success: boolean | null = null;
  //card variables
  export let category:
    | keyof typeof colors
    | keyof typeof formFieldsObject
    | string
    | null;
  export let subcategory: string | boolean | null | bigint;
  export let brand: string | boolean | null | bigint;
  export let breed: string | boolean | null | bigint;
  export let size: string | boolean | null | bigint;
  export let purchasedFrom: string | boolean | null | bigint;
  export let purchasedValue: string | null | bigint | boolean = "";
  export let reportedStolenDate: string | boolean | null | bigint;
  export let description: string | boolean | null | bigint;
  export let crypto_token_address: string | boolean | null | bigint;
  export let unique_features: string | boolean | null | bigint;
  export let artist: string | boolean | null | bigint;
  export let author: string | boolean | null | bigint;
  export let dob: string | boolean | null | bigint;
  export let body_length: string | boolean | null | bigint;
  export let brand_reference: string | boolean | null | bigint;
  export let caliber: string | boolean | null | bigint;
  export let carat_weight: string | boolean | null | bigint;
  export let case_material: string | boolean | null | bigint;
  export let cOfAuth: string | boolean | null | bigint;
  export let clarity: string | boolean | null | bigint;
  export let color: string | boolean | null | bigint;
  export let cut_shape: string | boolean | null | bigint;
  export let date: string | boolean | null | bigint;
  export let dial: string | boolean | null | bigint;
  export let distinguishing_features: string | boolean | null | bigint;
  export let document_array: string | boolean | null | bigint;
  export let drivetrain: string | boolean | null | bigint;
  export let engine: string | boolean | null | bigint;
  export let engraving: string | boolean | null | bigint;
  export let exchange_address: string | boolean | null | bigint;
  export let exterior_color: string | boolean | null | bigint;
  export let fuel_type: string | boolean | null | bigint;
  export let grading: string | boolean | null | bigint;
  export let grading_reports: string | boolean | null | bigint;
  export let height: string | boolean | null | bigint;
  export let hotstamping: string | boolean | null | bigint;
  export let interior_color: string | boolean | null | bigint;
  export let invoice: string | boolean | null | bigint;
  export let laser_inscription: string | boolean | null | bigint;
  export let manufacturer: string | boolean | null | bigint;
  export let material: string | boolean | null | bigint;
  export let microchip: string | boolean | null | bigint;
  export let mileage: string | boolean | null | bigint;
  export let model: string | boolean | null | bigint;
  export let model_yr: string | boolean | null | bigint;
  export let movement_caliber: string | boolean | null | bigint;
  export let other: string | boolean | null | bigint;
  export let pedigree: string | boolean | null | bigint;
  export let product: string | boolean | null | bigint;
  export let registration_certificate: string | boolean | null | bigint;
  export let release_date: string | boolean | null | bigint;
  export let serial: string | boolean | null | bigint;
  export let serie: string | boolean | null | bigint;
  export let series: string | boolean | null | bigint;
  export let smart_contract_address: string | boolean | null | bigint;
  export let smart_contract_id: string | boolean | null | bigint;
  export let stock_number: string | boolean | null | bigint;
  export let stone: string | boolean | null | bigint;
  export let strap_bracelet: string | boolean | null | bigint;
  export let tattoo: string | boolean | null | bigint;
  export let trademarks: string | boolean | null | bigint;
  export let transaction: string | boolean | null | bigint;
  export let transmission: string | boolean | null | bigint;
  export let url: string | boolean | null | bigint;
  export let valuation_report: string | boolean | null | bigint;
  export let vin: string | boolean | null | bigint;
  export let wallet: string | boolean | null | bigint;
  export let gender: string | boolean | null | bigint;

  export let weight: string | boolean | null | bigint;
  export let year: string | boolean | null | bigint;
  export let pictures: string [] |string|  boolean | null | bigint;
  export let marketPrice: string | boolean | null | bigint;
  export let isStolen: string | boolean | null | bigint;
  export let isHeirloom: string | boolean | null | bigint;
  export let wallet_address: string | boolean | null | bigint;
  export let backgroundColor: string | null | undefined = "";
  export let id;
  export let cardDisplayId:string; 
  $: cardDisplayId = cardDisplayId
  
  export let user_id;
  export let createdOn;
  export let cardProps: IcardProps = {
    id,
    user_id,
    createdOn,
    isStolen,
    isHeirloom,
    pictures,
    category,
    subcategory,
    brand,
    breed,
    size,
    purchasedFrom,
    purchasedValue,
    reportedStolenDate,
    description,
    crypto_token_address,
    unique_features,
    artist,
    author,
    dob,
    body_length,
    brand_reference,
    caliber,
    carat_weight,
    case_material,
    cOfAuth,
    clarity,
    color,
    cut_shape,
    date,
    dial,
    distinguishing_features,
    document_array,
    drivetrain,
    engine,
    engraving,
    exchange_address,
    exterior_color,
    fuel_type,
    grading,
    grading_reports,
    height,
    hotstamping,
    interior_color,
    invoice,
    laser_inscription,
    manufacturer,
    material,
    microchip,
    mileage,
    model,
    model_yr,
    movement_caliber,
    other,
    pedigree,
    product,
    registration_certificate,
    release_date,
    serial,
    serie,
    series,
    smart_contract_address,
    smart_contract_id,
    stock_number,
    stone,
    strap_bracelet,
    tattoo,
    trademarks,
    transaction,
    transmission,
    url,
    valuation_report,
    vin,
    wallet_address,
    weight,
    year,
    marketPrice,
    wallet,
    gender,
  };

  let currency;
  $: currency = purchasedValue;
  $: purchasedValue = currencyFormatter.format(purchasedValue);
  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  $: cardSide = "front";
  $: isStolen = cardProps.isStolen;
  $: isHeirloom = cardProps.isHeirloom;
  $: pictures = cardProps.pictures;
  $: category = cardProps.category;
  $: subcategory = cardProps.subcategory;
  $: brand = cardProps.brand;
  $: breed = cardProps.breed;
  $: size = cardProps.size;
  $: purchasedFrom = cardProps.purchasedFrom;
  $: purchasedValue = cardProps.purchasedValue;
  $: reportedStolenDate = cardProps.reportedStolenDate;
  $: description = cardProps.description;
  $: crypto_token_address = cardProps.crypto_token_address;
  $: unique_features = cardProps.unique_features;
  $: artist = cardProps.artist;
  $: author = cardProps.author;
  $: dob = cardProps.dob;
  $: body_length = cardProps.body_length;
  $: brand_reference = cardProps.brand_reference;
  $: caliber = cardProps.caliber;
  $: carat_weight = cardProps.carat_weight;
  $: case_material = cardProps.case_material;
  $: cOfAuth = cardProps.cOfAuth;
  $: clarity = cardProps.clarity;
  $: color = cardProps.color;
  $: cut_shape = cardProps.cut;
  $: date = cardProps.date;
  $: dial = cardProps.dial;
  $: distinguishing_features = cardProps.distinguishing_features;
  $: document_array = cardProps.document;
  $: drivetrain = cardProps.drivetrain;
  $: engine = cardProps.engine;
  $: engraving = cardProps.engraving;
  $: exchange_address = cardProps.exchange_address;
  $: exterior_color = cardProps.exterior_color;
  $: fuel_type = cardProps.fuel_type;
  $: grading = cardProps.grading;
  $: grading_reports = cardProps.grading_reports;
  $: height = cardProps.height;
  $: hotstamping = cardProps.hotstamping;
  $: interior_color = cardProps.interior_color;
  $: invoice = cardProps.invoice;
  $: laser_inscription = cardProps.laser_inscription;
  $: manufacturer = cardProps.manufacturer;
  $: material = cardProps.material;
  $: microchip = cardProps.microchip;
  $: mileage = cardProps.mileage;
  $: model = cardProps.model;
  $: model_yr = cardProps.model_yr;
  $: movement_caliber = cardProps.movement_caliber;
  $: other = cardProps.other;
  $: pedigree = cardProps.pedigree;
  $: product = cardProps.product;
  $: registration_certificate = cardProps.registration_certificate;
  $: release_date = cardProps.release_date;
  $: serial = cardProps.serial;
  $: serie = cardProps.serie;
  $: series = cardProps.series;
  $: shape = cardProps.shape;
  $: smart_contract_address = cardProps.smart_contract_address;
  $: smart_contract_id = cardProps.smart_contract_id;
  $: stock_number = cardProps.stock_number;
  $: stone = cardProps.stone;
  $: strap_bracelet = cardProps.strap_bracelet;
  $: tattoo = cardProps.tattoo;
  $: trademarks = cardProps.trademarks;
  $: transaction = cardProps.transaction;
  $: transmission = cardProps.transmission;
  $: url = cardProps.url;
  $: valuation_report = cardProps.valuation_report;
  $: vin = cardProps.vin;
  $: wallet_address = cardProps.wallet_address;
  $: weight = cardProps.weight;
  $: year = cardProps.year;
  $: marketPrice = cardProps.marketPrice;
  $: pickedCategory = cardProps.category;

  //add general fields config here
  $: backgroundColor = category?.toLowerCase();
  let categoryKey: keyof typeof colors | keyof typeof formFieldsObject;
  $: categoryKey = category?.toLowerCase() as
    | keyof typeof colors
    | keyof typeof formFieldsObject;
  const colors = {
    jewelry: "bg-gradient-to-r from-[#F192E8] to-[#edd7eb]",
    watch: "bg-gradient-to-r from-[#1b1c1d] to-[#999ba0]",
    art: "bg-gradient-to-r from-[#ffe609] to-[#fffbd7]",
    leather: "bg-gradient-to-r from-[#984E1D] to-[#dbbfad]",
    clothing: "bg-gradient-to-r from-[#456896] to-[#d6e7e8]",
    sneakers: "bg-gradient-to-r from-[#86e8ec] to-[#bbd5d5]",
    firearms: "bg-gradient-to-r to-[#edd49e] via-[#638256] from-[#1d410e]",
    technology: "bg-gradient-to-r from-[#132076]  to-[#c8c5f1]",
    "trading cards":
      "bg-gradient-to-r from-[#ddcd7c] via-[#ddcd7c]  to-[#e8e5d7]",
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
  $: flipped = flipped;
</script>

<div
  class:flipped
  class=" flex flex-col flex-wrap justify-center content-center relative aspect-[5/7] rounded-2xl lg:w-[18rem] sm:w-[15rem] w-[18rem] "
  class:sendCard={sentCard === true && success === null}
  class:comeBack={success === true}
>
  <div
    class="flip-card bg-none [perspective: 1000px] [user-select: none] cursor-pointer w-full rounded-2xl 
    aspect-[5/7]"
  >
    <div class="flip-card-inner aspect-[5/7] rounded-2xl w-full">
      <div class="flip-card-front rounded-2xl aspect-[5/7]  h-full">
        <div
          class="front-parent card-item w-full h-full gradient bg-white whole-card rounded-2xl shadow-2xl aspect-[5/7]  z-1  bg-cover"
        >
          <div
            class:no-display={cardSide === "back"}
            class="flex  top-[.5rem] right-[1rem] z-10 absolute w-justify-end"
          >
            <button
              class="btn  btn-ghost btn-secondary text-white top-[.5rem] right-[1rem] z-10 normal-case"
            >
              <Icon
                size="12px"
                class="opacity-60 cursor-pointer  text-white ml-[1rem]"
                src={ArrowsExpand}
                on:click={() => (expand = !expand)}
              />
              <p>Expand</p>
            </button>
            <button
              class="btn btn-square btn-ghost btn-secondary text-white  top-[.5rem] right-[1rem] z-10 normal-case"
              on:click={() => (flipped = !flipped)}
              on:click={() => (cardSide = "back")}
            >
              <Icon
                size="12px"
                class="opacity-60 cursor-pointer  text-white"
                src={ArrowCircleLeft}
              />
              <p>Flip</p>
            </button>
          </div>

          <div class="front-top rounded-t-2xl {pickedColor} ">
            <div class="w-full h-full px-2 py-3">
              <slot/> 
            </div>
          </div>

          <div class="front-bottom rounded-b-2xl">
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
      <div class="flip-card-back rounded-2xl text-black aspect-[5/7] ">
        <div class="card-item  bg-none rounded-2xl shadow-2xl z-2 aspect-[5/7]">
          <div
            class="flex  top-[.5rem] right-[1rem] z-10 absolute w-justify-end"
          >
            <button
              class="btn  btn-ghost btn-secondary text-black top-[.5rem] right-[1rem] z-10 normal-case"
              on:click={() => (expand = !expand)}
            >
              <Icon
                size="12px"
                class="opacity-60 cursor-pointer  text-black"
                src={ArrowsExpand}
              />
              <p>Expand</p>
            </button>
            <button
              class="btn btn-square btn-ghost btn-secondary text-black  top-[.5rem] right-[1rem`] z-10 normal-case"
              on:click={() => (flipped = !flipped)}
              on:click={() => (cardSide = "front")}
            >
              <Icon
                size="12px"
                class="opacity-60 cursor-pointer  text-black"
                src={ArrowCircleLeft}
              />
              <p>Flip</p>
            </button>
          </div>
          <div
            class=" card-item rounded-2xl w-full h-full justify-between whole-card bg-white  back-card_general-grid p-3 "
          >
            <div class="spacer w-full h-[50%]" />
            <CardSlider cardDisplayId={cardDisplayId} {cardProps} {fieldsBackOneValues} {fieldsBackTwoValues} {fieldsBackThreeValues} {description} {generalFieldsBack} />
            <div class="card-buttons_back back-card_general-3 mt-2">
              <CardButtonWidget  />
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
    transform-style: preserve-3d;
  }

  .flipped .flip-card .flip-card-inner {
    transform: rotateY(180deg);
    width: 100%;
    height: 100%;
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .flip-card-front {
    color: black;
  }

  .flip-card-back {
    transform: rotateY(180deg);
  }
  .upload-picures {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
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
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, 
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  .sendCard {
    -webkit-animation: slide-out-top 0.3s cubic-bezier(0.6, -0.28, 0.735, 0.045)
      forwards;
    animation: slide-out-top 0.3s cubic-bezier(0.6, -0.28, 0.735, 0.045)
      forwards;
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
    -webkit-animation: slide-in-top 0.5s cubic-bezier(0.215, 0.61, 0.355, 1)
      100ms both;
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
