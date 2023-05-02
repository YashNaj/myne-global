<script lang="ts">
  import { firstCapital } from "$lib/utils/caps";
  export let size = "9";
  import { fade, fly, scale, slide } from "svelte/transition";
  import SwiperPictures from "./SwiperPictures.svelte";
  import { userCards } from "$lib/utils/store";
  import { cubicIn, cubicOut } from "svelte/easing";
  import Card from "./Card.svelte";
  import Spinner from "./Spinner.svelte";
  export let cards;
  let filteredCards;
  let categories = [
    "jewelry",
    "watch",
    "art",
    "leather",
    "clothing",
    "sneakers",
    "firearms",
    "technology",
    "trading cards",
    "collectibles",
    "crypto",
    "nft",
    "dog",
    "cat",
    "bird",
    "other animal",
    "vintage",
    "automobile",
    "motorcycle",
    "other",
  ];
  export let inputText: string;
  function filterByTextInput(array, inputText) {
    return array.filter((item) => {
      return Object.values(item).some((value) => String(value).toLowerCase().includes(inputText.toLowerCase()));
    });
  }

  // let isLoading;
  // $: filteredCards = $userCards;
  // $: categories = categories.sort();
  // let cardsFiltered;
  // $: cardsFiltered = filteredCards.filter((item) => {
  //   if (categoryFilter === "All") {
  //     return $userCards;
  //   }
  //   if (!inputText) {
  //     return item.category === categoryFilter;
  //   } else if (inputText) {
  //     const inputFilter = filterByTextInput($userCards, inputText);
  //     return (cardsFiltered = inputFilter);
  //   }
  // });
  // $: console.log(categoryFilter);
  // $: {
  //   if (inputText != null && inputText !== "") {
  //     cardsFiltered = filterByTextInput($userCards, inputText);
  //   } else {
  //     console.log("The string is null or empty");
  //   }
  // }
</script>

<div
  class=" grid md:grid-cols-5 grid-cols-2 gird-rows-none grid-flow-row md:gap-2 gap-5 place-items-center p-4 w-full h-full pt-20 z-10 overflow-x-disabled bg-transparent backdrop-blur-xl"
>
  {#if $cards.isLoading}
    <Spinner />
  {:else if $cards.isError}
    {$cards.error}
  {:else if $cards.data}
    {#if $cards.data.length > 0}
      {#each $cards.data as card}
        <div
          in:fly={{ y: -10, duration: 300, delay: 400, easing: cubicIn, opacity: 1 }}
          out:fly={{ y: 10, duration: 300, delay: 400, easing: cubicOut, opacity: 0 }}
        >
          <Card inAddCard={false} cardProps={structuredClone(card)} />
        </div>
      {/each}
    {:else}
      <div class="w-full h-full flex justify-center content-center flex-wrap">No Cards Found</div>
    {/if}
  {/if}
</div>
