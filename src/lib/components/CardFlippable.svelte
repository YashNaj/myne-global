<script lang="ts">
  import CardButtonWidget from "$lib/components/CardButtonWidget.svelte";
  import CardCell from "$lib/components/CardCell.svelte";
  import CardCellDescription from "$lib/components/CardCellDescription.svelte";
  import Carousel from "$lib/components/Carousel.svelte";
  import { Icon, ArrowCircleLeft, ArrowsExpand } from "svelte-hero-icons";
  import {
    generalFields,
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
    childIdFields,
  } from "../../forms";

  // formFields init
  let formFieldsObject = {
    jewelry: jewelryFields,
    watch: watchFields,
    art: artFields,
    leather: leatherFields,
    clothing: clothingFields,
    sneakers: sneakerFields,
    guns: gunsFields,
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
    other: otherFields,
    childid: childIdFields,
  };
  interface cardProps {
    isStolen?:string
    isHeirloom?:string
    pictures?:string
    category?:string | keyof typeof formFieldsObject
    subcategory?:string
    brand?:string
    breed?:string
    size?:string
    purchasedFrom?:string
    purchasedValue: string | number | null | undefined | bigint ;
    reportedStolenDate?:string
    description?:string
    crypto_token_address?:string
    unique_features?:string
    artist?:string
    author?:string
    dob?:string
    body_length?:string
    brand_reference?:string
    caliber?:string
    carat_weight?:string
    case_material?:string
    cOfAuth?:string
    clarity?:string
    color?:string
    cut?:string
    date?:string
    dial?:string
    distinguishing_features?:string
    document?:string
    drivetrain?:string
    engine?:string
    engraving?:string
    exchange_address?:string
    exterior_color?:string
    fuel_type?:string
    grading?:string
    grading_reports?:string
    height?:string
    hotstamping?:string
    interior_color?:string
    invoice?:string
    laser_inscription?:string
    manufacturer?:string
    material?:string
    microchip?:string
    mileage?:string
    model?:string
    model_yr?:string
    movement_caliber?:string
    other?:string
    pedigree?:string
    product?:string
    registration_certificate?:string,
    release_date?:string
    serial?:string
    serie?:string
    series?:string
    shape?:string
    smart_contract_address?:string
    smart_contract_id?:string
    stock_number?:string
    stone?:string
    strap_bracelet?:string
    tattoo?:string
    trademarks?:string
    transaction?:string
    transmission?:string
    url?:string
    valuation_report?:string
    vin?:string
    wallet_address?:string
    weight?:string
    year?:string
    marketPrice?:string
    childIdFirstName?:string
    childIdMiddleName?:string
    childIdLastName?:string
    eye_color?:string
    hair_color?:string
    parentOneName?:string
    parentTwoName?:string
    contactNumberOne?:string
    contactNumberTwo?:string
    homeAddress?:string
    homeCity?:string
    homeState?:string
    homeCountry?:string
    homeZIP?:string
    age?:string
    gender?:string
    race?:string
    physicalTraits?:string
    allergies?:string
    medicalConditions?:string
    prescription?:string
    backgroundColor?:string
  }
  $: backgroundColor = category?.toLowerCase();
  let colorKey: keyof typeof colors;
  $: colorKey = backgroundColor;
  $: console.log("🚀 ~ file: CardFlippable.svelte:17 ~ colorKey", colorKey);
  const colors = {
    jewelry: "#F192E8",
    watch: "#2B2C31",
    art: "#FFE609",
    leather: "#984E1D",
    clothing: "#59898A",
    sneakers: "#B3F5F7",
    guns: "#3A5130",
    technology: "#080631",
    "trading cards": "#FCF7DE",
    collectibles: "#61E1A3",
    crypto: "#B6B1B1",
    nft: "#7C1EB6",
    vintage: "#FF5F09",
    automobile: "#E10909",
    motorcycle: "#E10909",
    dog: "#278001",
    cat: "#278001",
    bird: "#278001",
    childid: "#00BFFF",
    other: "#ffffff",
  };
  let pickedColor: string;
  $: pickedColor = colors[colorKey];

  // card external control values
  export let expand = false;
  export let flipped = false;
  export let sentCard = false;
  export let success: boolean | null = null;
  //card variablesd

  export let category: keyof typeof formFieldsObject | string = "";
  export let subcategory = "";
  export let brand = "";
  export let breed = "";
  export let size = "";
  export let purchasedFrom = "";
  export let purchasedValue: string | number | null | undefined | bigint = "";
  export let reportedStolenDate = "";
  export let description = "";
  export let crypto_token_address = "";
  export let unique_features = "";
  export let artist = "";
  export let author = "";
  export let dob = "";
  export let body_length = "";
  export let brand_reference = "";
  export let caliber = "";
  export let carat_weight = "";
  export let case_material = "";
  export let cOfAuth = "";
  export let clarity = "";
  export let color = "";
  export let cut = "";
  export let date = "";
  export let dial = "";
  export let distinguishing_features = "";
  export let document = "";
  export let drivetrain = "";
  export let engine = "";
  export let engraving = "";
  export let exchange_address = "";
  export let exterior_color = "";
  export let fuel_type = "";
  export let grading = "";
  export let grading_reports = "";
  export let height = "";
  export let hotstamping = "";
  export let interior_color = "";
  export let invoice = "";
  export let laser_inscription = "";
  export let manufacturer = "";
  export let material = "";
  export let microchip = "";
  export let mileage = "";
  export let model = "";
  export let model_yr = "";
  export let movement_caliber = "";
  export let other = "";
  export let pedigree = "";
  export let product = "";
  export let registration_certificate = "";
  export let release_date = "";
  export let serial = "";
  export let serie = "";
  export let series = "";
  export let shape = "";
  export let smart_contract_address = "";
  export let smart_contract_id = "";
  export let stock_number = "";
  export let stone = "";
  export let strap_bracelet = "";
  export let tattoo = "";
  export let trademarks = "";
  export let transaction = "";
  export let transmission = "";
  export let url = "";
  export let valuation_report = "";
  export let vin = "";
  export let wallet = "";
  export let weight = "";
  export let year = "";
  export let pictures = "";
  export let marketPrice = "";
  export let isStolen = "";
  export let isHeirloom = "";
  export let childIdFirstName = "";
  export let childIdMiddleName = "";
  export let childIdLastName = "";
  export let eye_color = "";
  export let hair_color = "";
  export let parentOneName = "";
  export let parentTwoName = "";
  export let contactNumberOne = "";
  export let contactNumberTwo = "";
  export let homeAddress = "";
  export let homeCity = " ";
  export let homeState = "";
  export let homeCountry = "";
  export let homeZIP = "";
  export let age = "";
  export let gender = "";
  export let race = "";
  export let physicalTraits = "";
  export let allergies = "";
  export let medicalConditions = "";
  export let prescription = "";
  export let wallet_address = ""
  export let cardProps:cardProps = {
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
    cut,
    date,
    dial,
    distinguishing_features,
    document,
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
    shape,
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
    childIdFirstName,
    childIdMiddleName,
    childIdLastName,
    eye_color,
    hair_color,
    parentOneName,
    parentTwoName,
    contactNumberOne,
    contactNumberTwo,
    homeAddress,
    homeCity,
    homeState,
    homeCountry,
    homeZIP,
    age,
    gender,
    race,
    physicalTraits,
    allergies,
    medicalConditions,
    prescription,
    backgroundColor,
  };

   $: pickedCategory = category;
   $:console.log("🚀 ~ file: CardFlippable.svelte:388 ~ pickedCategory:", pickedCategory)

  type values = (typeof formFields)[keyof typeof formFields];
  let formFields = generalFields
  $: formFields = formFieldsObject[cardProps.category as keyof typeof formFieldsObject]
  let fieldsFrontValues: values;
  let fieldsBackOneValues: values;
  let fieldsBackTwoValues: values;
  $: fieldsFrontValues = formFields?.fieldsFront;
  $: fieldsBackOneValues = formFields?.fieldsBackOne;
  $: fieldsBackTwoValues = formFields?.fieldsBackTwo;
  $: fieldsBackThreeValues = formFields?.fieldsBackThree;
  //add general fields config here

  $: console.log(
    "🚀 ~ file: CardFlippable.svelte:94 ~ formFields ~ formFields",
    formFields
  );

  $: formFields = formFields;
  $: console.log(formFields);

  let currency;
  $: currency = purchasedValue;
  $: purchasedValue = currencyFormatter.format(purchasedValue);
  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  console.log("🚀 ~ file: CardFlippable.svelte:72 ~ loading", success);

  $: cardSide = "front";
  $: category = cardProps.category;
  $: cardProps = { ...cardProps };
  $:console.log("🚀 ~ file: CardFlippable.svelte:233 ~ cardProps", cardProps)
</script>

<div class="full w-full h-full flex justify-center">
  <div
    class:flipped
    class=" flex flex-col flex-wrap justify-center content-center relative aspect-[5/7] rounded-2xl lg:w-[18rem] sm:w-[15rem] w-[20rem] "
    class:sendCard={sentCard === true && success === null}
    class:comeBack={success === true}
  >
    <div
      class="flip-card bg-none [perspective: 1000px] [user-select: none] cursor-pointer w-full rounded-2xl  aspect-[5/7]   "
      style="background-color = {pickedColor} "
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

            <div
              class="front-top rounded-t-2xl"
              style="background: {pickedColor};"
            >
              <div class="w-full h-full px-2 py-3">
                <Carousel />
              </div>
            </div>

            <div class="front-bottom rounded-b-2xl">
              <div class="front-fields-grid h-full w-full p-2">
                {#if fieldsFrontValues?.length > 0}
                  {#each fieldsFrontValues as fieldFront}
                    <CardCell
                      gridClass={fieldFront?.location}
                      label={fieldFront?.label}
                      value={fieldFront?.value}
                      justifyCell={fieldFront?.justify}
                    />
                  {/each}
                {/if}
              </div>
            </div>
          </div>
        </div>
        <div class="flip-card-back rounded-2xl text-black aspect-[5/7] ">
          <div
            class="card-item  bg-none rounded-2xl shadow-2xl z-2 aspect-[5/7]"
          >
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
                class="btn btn-square btn-ghost btn-secondary text-black  top-[.5rem] right-[1rem] z-10 normal-case"
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
              class="flex flex-col rounded-2xl w-full h-full justify-between whole-card bg-white [box-shadow: rgba(0, 0, 0, 0.25)_0px_54px_55px,
              rgba(0, 0, 0, 0.12)_0px_-12px_30px, rgba(0, 0, 0, 0.12)_0px_4px_6px,
              rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px-3px_5px;]back-card_general-grid px-2 py-3 "
            >
              <div class="description back-card_general-1">
                <CardCellDescription {description} />
              </div>
              <swiper-container
                class="mySwiper back-card_card-general-2 h-full w-full touch-none"
                scrollbar-hide="false"
                grab-cursor="true"
              >
                {#if fieldsBackOneValues?.length > 0}
                  <swiper-slide
                    class="text-center bg-none flex justify-center content-center "
                  >
                    <div class="w-full h-full back-card_card-fields p-2">
                      {#each fieldsBackOneValues as fieldBackOne}
                        <CardCell
                          gridClass={fieldBackOne.location}
                          label={fieldBackOne.label}
                          value={fieldBackOne.value}
                          justifyCell={fieldBackOne.justify}
                        />
                      {/each}
                    </div>
                  </swiper-slide>
                {/if}

                {#if fieldsBackTwoValues?.length > 0}
                  <swiper-slide>
                    <div class="w-full h-full back-card_card-fields p-2">
                      {#each fieldsBackTwoValues as fieldBackTwo}
                        <CardCell
                          gridClass={fieldBackTwo.location}
                          label={fieldBackTwo.label}
                          value={fieldBackTwo.value}
                          justifyCell={fieldBackTwo.justify}
                        />
                      {/each}
                    </div>
                  </swiper-slide>
                {/if}
                {#if fieldsBackThreeValues?.length > 0}
                  <swiper-slide>
                    <div class="w-full h-full back-card_card-fields p-2">
                      {#each fieldsBackThreeValues as fieldBackTwo}
                        <CardCell
                          gridClass={fieldBackTwo.location}
                          label={fieldBackTwo.label}
                          value={fieldBackTwo.value}
                          justifyCell={fieldBackTwo.justify}
                        />
                      {/each}
                    </div>
                  </swiper-slide>
                {/if}
                {#if category !== "childid"}
                  <swiper-slide>
                    <div class="w-full h-full back-card_card-fields p-2">
                      {#each generalFieldsBack as generalField}
                        <CardCell
                          gridClass={generalField.location}
                          label={generalField.label}
                          value={generalField.value}
                          justifyCell={generalField.justify}
                        />
                      {/each}
                    </div>
                  </swiper-slide>
                {/if}
              </swiper-container>
              <div class="card-buttons_back back-card_general-3 mt-2">
                <CardButtonWidget />
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
  .background-class {
    background-color: #00bfff;
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
    /* background-image: url('src/lib/images/white-paper-texture.jpg');
      background-size: cover; 
      background-repeat: no-repeat; */
  }
  .gradient {
    /* background: rgb(38,82,29);
background: -moz-linear-gradient(90deg, rgba(38,82,29,1) 0%, rgb(40, 68, 42) 100%);
background: -webkit-linear-gradient(90deg, rgba(38,82,29,1) 0%, rgb(41, 78, 44) 100%);
background: linear-gradient(90deg, rgb(115, 134, 111) 0%, rgb(25, 49, 26) 100%); */
    /* background: rgb(180,79,66);
background: -moz-linear-gradient(90deg, rgb(92, 40, 33) 0%, rgba(55,9,3,1) 100%);
background: -webkit-linear-gradient(90deg, rgb(82, 32, 25) 0%, rgb(121, 0, 0) 100%);
background: linear-gradient(90deg, rgb(230, 23, 0) 0%, rgb(54, 13, 13) 100%); */
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

  .top_left {
    grid-area: 1 / 1 / 2 / 2;
  }
  .top_right {
    grid-area: 1 / 2 / 2 / 3;
  }
  .middle_left {
    grid-area: 2 / 1 / 3 / 2;
  }
  .middle_right {
    grid-area: 2 / 2 / 3 / 3;
  }
  .bottom_left {
    grid-area: 3 / 1 / 4 / 2;
  }
  .bottom_right {
    grid-area: 3 / 2 / 4 / 3;
  }

  .back-card_general-grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr auto;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }

  .back-card_general-1 {
    grid-area: 1 / 1 / 2 / 2;
  }
  .back-card_general-2 {
    grid-area: 2 / 1 / 3 / 2;
  }
  .back-card_general-3 {
    grid-area: 3 / 1 / 4 / 2;
  }
  .back-card_card-fields {
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }

  .back_1 {
    grid-area: 1 / 1 / 2 / 2;
  }
  .back_2 {
    grid-area: 1 / 2 / 2 / 3;
  }
  .back_3 {
    grid-area: 2 / 1 / 3 / 2;
  }
  .back_4 {
    grid-area: 2 / 2 / 3 / 3;
  }
  .back_5 {
    grid-area: 3 / 1 / 4 / 2;
  }
  .back_6 {
    grid-area: 3 / 2 / 4 / 3;
  }
  .back_7 {
    grid-area: 1 / 1 / 2 / 2;
  }
  .back_8 {
    grid-area: 1 / 2 / 2 / 3;
  }
  .back_9 {
    grid-area: 2 / 1 / 3 / 2;
  }
  .back_10 {
    grid-area: 2 / 2 / 3 / 3;
  }
  .back_11 {
    grid-area: 3 / 1 / 4 / 2;
  }
  .back_12 {
    grid-area: 3 / 2 / 4 / 3;
  }

  .general_1 {
    grid-area: 1 / 1 / 2 / 2;
  }
  .general_2 {
    grid-area: 1 / 2 / 2 / 3;
  }
  .general_3 {
    grid-area: 2 / 1 / 3 / 2;
  }
  .general_4 {
    grid-area: 2 / 2 / 3 / 3;
  }
  .general_5 {
    grid-area: 3 / 1 / 4 / 2;
  }
  .general_6 {
    grid-area: 3 / 2 / 4 / 3;
  }
</style>
