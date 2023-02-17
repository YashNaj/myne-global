<script lang="ts">
  import Tooltip from "./../../../lib/components/Tooltip.svelte";
  import CardButtonWidget from "$lib/components/CardButtonWidget.svelte";
  import CardCell from "$lib/components/CardCell.svelte";
  import CardCellDescription from "$lib/components/CardCellDescription.svelte";
  import CardFlippable from "$lib/components/CardFlippable.svelte";
  import Carousel from "$lib/components/Carousel.svelte";
  import DesktopWidget from "$lib/components/DesktopWidget.svelte";
  import { Icon, ArrowCircleLeft, ArrowsExpand } from "svelte-hero-icons";
  let expand = false;
  //card field box variabes
  let padding = "";
  let justifyCell = "justify-start";
  let label = "This is a test";
  let value = "Testing Value";
  //card variables
  let isStolen = "";
  let isHeirloom = "";
  let pictures = "";
  let category = "";
  let subcategory = "";
  let brand = "";
  let breed = "";
  let size = "";
  let purchasedFrom = "";
  let purchasedValue = "";
  let reportedStolenDate = "";
  let description = "";
  let crypto_token_address = "";
  let unique_features = "";
  let artist = "";
  let author = "";
  let dob = "";
  let body_length = "";
  let brand_reference = "";
  let caliber = "";
  let carat_weight = "";
  let case_material = "";
  let cOfAuth = "";
  let clarity = "";
  let color = "";
  let cut = "";
  let date = "";
  let dial = "";
  let distinguishing_features = "";
  let document = "";
  let drivetrain = "";
  let engine = "";
  let engraving = "";
  let exchange_address = "";
  let exterior_color = "";
  let fuel_type = "";
  let grading = "";
  let grading_reports = "";
  let height = "";
  let hotstamping = "";
  let interior_color = "";
  let invoice = "";
  let laser_inscription = "";
  let manufacturer = "";
  let material = "";
  let microchip = "";
  let mileage = "";
  let model = "";
  let model_yr = "";
  let movement_caliber = "";
  let other = "";
  let pedigree = "";
  let product = "";
  let registration_certificate = "";
  let release_date = "";
  let serial = "";
  let serie = "";
  let series = "";
  let shape = "";
  let smart_contract_address = "";
  let smart_contract_id = "";
  let stock_number = "";
  let stone = "";
  let strap_bracelet = "";
  let tattoo = "";
  let trademarks = "";
  let transaction = "";
  let transmission = "";
  let url = "";
  let valuation_report = "";
  let vin = "";
  let wallet = "";
  let weight = "";
  let year = "";
  let success: boolean | null = null;
  let marketPrice = ''
  let jewelryFieldsFront = [
    {
      label: "Category",
      location: "top_left",
      value: category,
      justify: 'justify-start'
    },
    {
      label: "Subcategory",
      location: "top_right",
      value: subcategory,
      justify: 'justify-end'

    },
    {
      label: "Brand",
      location: "middle_left",
      value: brand,
      justify: 'justify-start'

    },
    {
      label: "Brand Reference",
      location: "middle_right",
      value: brand_reference,
      justify: 'justify-end'

    },
    {
      label: "Model",
      location: "bottom_left",
      value: model,
      justify: 'justify-start'

    },
    {
      label: "Serial",
      location: "bottom_right",
      value: serial,
      justify: 'justify-end'

    }
  ]
  let jewelryFieldsBackOne = [
    {
      label: "Material",
      location: "back_1",
      value: material,
      justify: 'justify-start'

    },
    {
      label: "Size",
      location: "back_2",
      value: size,
      justify: 'justify-end'

    },
    {
      label: "Carat/Weight",
      location: "back_3",
      value: carat_weight,
      justify: 'justify-start'

    },
    {
      label: "Cut/Shape",
      location: "back_4",
      value: cut,
      justify: 'justify-end'

    },
    {
      label: "Color",
      location: "back_5",
      value: color,
      justify: 'justify-start'

    },
    {
      label: "Clarity",
      location: "back_6",
      value: clarity,
      justify: 'justify-end'

    }
  ]
  let jewelryFieldsBackTwo =[
    {
      label: "Stone",
      location: "back_7",
      value: stone,
      justify: 'justify-start'

    },
    {
      label: "Laser Marking",
      location: "back_8",
      value: laser_inscription,
      justify: 'justify-end'

    },
    {
      label: "Engraving",
      location: "back_9",
      value: engraving,
      justify: 'justify-start'

    },
    {
      label: "Trademarks",
      location: "back_10",
      value: trademarks,
      justify: 'justify-end'

    },
    {
      label: "Grading Report",
      location: "DOCUMENT",
      value: grading_reports,
    },
  ]
  let generalFields  = [ 
    {
      label: "Purchased From",
      location: "general_1",
      value: purchasedFrom,
      justify: 'justify-start'

    },
    {
      label: "Purchase Value",
      location: "general_2",
      value: purchasedValue,
      justify: 'justify-end'

    },
    {
      label: "Market Price",
      location: "general_3",
      value: marketPrice,
      justify: 'justify-start'

    },
    {
      label: "Pictures",
      location: "general_3",
      value: marketPrice,
      justify: 'justify-start'
      
    },
    ]

  
  export let backgroundColor: keyof typeof colors;
  $: backgroundColor = category.toLowerCase();
  let colorKey: keyof typeof colors;
  $: colorKey = backgroundColor;
  $: console.log("🚀 ~ file: CardFlippable.svelte:17 ~ colorKey", colorKey);
  export let flipped = false;
  const colors = {
    jewelry: "#F192E8",
    watch: "#2B2C31",
    art: "#FFE609",
    leather: "#984E1D",
    clothing: "#59898A",
    sneakers: "#B3F5F7",
    firearms: "#3A5130",
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
    childId: "#00BFFF",
    other: "#ffffff",
  };
  let pickedColor: string;
  $: pickedColor = colors[colorKey];
  let currency: string;
  $: currency = purchasedValue;
  $: purchasedValue = currencyFormatter.format(purchasedValue);
  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  export let sentCard = false;
  console.log("🚀 ~ file: CardFlippable.svelte:72 ~ loading", success);

  $: cardSide = 'front'
  $: console.log("🚀 ~ file: +page.svelte:287 ~ cardSide", cardSide)

</script>

<a href="/test2" class="btn btn-error normal-case"> test 2</a>
<div class="full w-full h-full flex justify-center">
  <div
    class:flipped
    class=" flex flex-col flex-wrap justify-center content-center relative aspect-[5/7] rounded-2xl lg:w-[18rem] sm:w-[15rem] w-[20rem] "
    class:sendCard={sentCard === true && success === null}
    class:comeBack={success === true}
  >
    <div
      class="flip-card  w-full rounded-2xl  aspect-[5/7]   "
      style="background-color = white "
    >
      <div class="flip-card-inner aspect-[5/7] rounded-2xl w-full">
        <div class="flip-card-front rounded-2xl aspect-[5/7]  h-full">
          <div
            class="front-parent card-item w-full h-full gradient whole-card rounded-2xl shadow-2xl aspect-[5/7]  z-1 bg-white"
          >
            <div
            class:no-display='{cardSide === 'back'}'
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
                on:click={()=> cardSide = 'back'}

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
              <div class="front-fields-grid h-full w-full px-2 py-1">
                {#each jewelryFieldsFront as jewelryFieldFront }
                <CardCell
                gridClass= {jewelryFieldFront.location}
                label={jewelryFieldFront.label}
                value={jewelryFieldFront.value}
                justifyCell={jewelryFieldFront.justify}
              />
                {/each}
              </div>
            </div>
          </div>
        </div>
        <div class="flip-card-back rounded-2xl text-black aspect-[5/7] ">
          <div
            class="card-item  bg-white rounded-2xl shadow-2xl z-2 aspect-[5/7]"
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
                on:click={()=> cardSide = 'front'}
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
              class="flex flex-col rounded-2xl w-full h-full justify-between whole-card back-card_general-grid px-2 py-3 "
            >
              <div class="description back-card_general-1">
                <CardCellDescription {description} />
              </div>
              <swiper-container
                class="mySwiper back-card_card-general-2 h-full"
                scrollbar-hide="false"
                grab-cursor="true"
              >
              <swiper-slide>
                <div class="w-full h-full back-card_card-fields-1 px-2">
                  {#each jewelryFieldsBackOne as jewelryField }
                  <CardCell
                  gridClass= {jewelryField.location}
                  label={jewelryField.label}
                  value={jewelryField.value}
                  justifyCell={jewelryField.justify}
                />
                  {/each}
                </div>
              </swiper-slide>
                <swiper-slide>
                  <div class="w-full h-full back-card_card-fields-1 px-2">

                  {#each jewelryFieldsBackTwo as jewelryField }
                  <CardCell
                  gridClass= {jewelryField.location}
                  label={jewelryField.label}
                  value={jewelryField.value}
                  justifyCell={jewelryField.justify}
                />
                  {/each}
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="w-full h-full back-card_card-fields-1 px-2">

                  {#each generalFields as generalField }
                  <CardCell
                  gridClass= {generalField.location}
                  label={generalField.label}
                  value={generalField.value}
                  justifyCell={generalField.justify}
                />
                  {/each}
                  </div>
                </swiper-slide>

    
              </swiper-container>
              <div class="card-buttons_back back-card_general-3">
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
  .no-display{
    display:none
  }
  swiper-container {
    width: 100%;
    touch-action: none;
  }
  swiper-slide {
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
  }

  .flip-card {
    background-color: transparent;
    perspective: 2000px;
    cursor: pointer;
    user-select: none;
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
    grid-template-columns: repeat(2, 1fr);
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
  .back-card_card-fields-1 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
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
  .back_3{
    grid-area: 2 / 1 / 3 / 2;
  }
  .back_4{
    grid-area: 2 / 2 / 3 / 3;
  }
  .back_5{
    grid-area: 3 / 1 / 4 / 2;
  }
  .back_6{
    grid-area: 3 / 2 / 4 / 3;
  }
  .back_7 {
    grid-area: 1 / 1 / 2 / 2;
  }
  .back_8 {
    grid-area: 1 / 2 / 2 / 3;
  }
  .back_9{
    grid-area: 2 / 1 / 3 / 2;
  }
  .back_10 {
    grid-area: 2 / 2 / 3 / 3;
  }
  .back_11{
    grid-area: 3 / 1 / 4 / 2;
  }
  .back_12{
    grid-area: 3 / 2 / 4 / 3;
  }

  .general_1 {
    grid-area: 1 / 1 / 2 / 2;
  }
  .general_2{
    grid-area: 1 / 2 / 2 / 3;
  }
  .general_3{
    grid-area: 2 / 1 / 3 / 2;
  }
  .general_4{
    grid-area: 2 / 2 / 3 / 3;
  }
  .general_5{
    grid-area: 3 / 1 / 4 / 2;
  }
  .general_6{
    grid-area: 3 / 2 / 4 / 3;
  }
  swiper-container {
    width: 100%;
    height: 100%;
  }

  swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
