<script lang="ts">
  import { Icon, ArrowCircleLeft, ArrowsExpand } from "svelte-hero-icons";

  import { childIdFields } from "../../forms";
  import CardButtonWidget from "./CardButtonWidget.svelte";
  import CardCell from "./CardCell.svelte";
  import Carousel from "./Carousel.svelte";
  //external card controls
  export let expand = false;
  export let flipped = false;
  export let sentCard = false;
  export let success: boolean | null = null;
  $: cardSide = "front";

  //formField init
  type values = (typeof formFields)[keyof typeof formFields];
  let formFields: typeof childIdFields = childIdFields;
  let fieldsFrontValues = formFields.fieldsFront;
  let fieldsBackOneValues = formFields.fieldsBackOne;
  let fieldsBackTwoValues = formFields.fieldsBackTwo;
  let fieldsBackThreeValues = formFields.fieldsBackThree;

  $: console.log(
    "🚀 ~ file: CardFlippable.svelte:94 ~ formFields ~ formFields",
    formFields
  );
</script>

<div
  class:flipped
  class=" flex flex-col flex-wrap justify-center content-center relative aspect-[5/7] rounded-2xl lg:w-[18rem] sm:w-[15rem] w-[20rem] "
  class:sendCard={sentCard === true && success === null}
  class:comeBack={success === true}
>
  <div
    class="flip-card bg-gradient-to-r [perspective: 1000px] [user-select: none] cursor-pointer w-full rounded-2xl  aspect-[5/7]"
  >
    <div class="flip-card-inner aspect-[5/7] rounded-2xl w-full">
      <div class="flip-card-front rounded-2xl aspect-[5/7]  h-full">
        <div
          class="front-parent card-item w-full h-full  whole-card rounded-2xl shadow-2xl aspect-[5/7]  z-1  bg-cover"
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
            class="front-top rounded-t-2xl bg-gradient-to-r from-cyan-500 to-cyan-100"
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
          > <div class = 'spacer w-full h-16'>
            
          </div>
            <swiper-container
              class="mySwiper back-card_card-general h-full w-full touch-none"
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

</style>
