<script lang="ts">
  import LoadingScreen from "./LoadingScreen.svelte";
  import { firstCapital } from "$lib/caps";
  export let size = "9";
  import logo from "$lib/images/myne_logo.svg";
  import { TabPanel } from "@rgossiaux/svelte-headlessui";
  import { Icon, Plus } from "svelte-hero-icons";
  import { fade, fly, scale, slide } from "svelte/transition";
  import AddCard from "./AddCard.svelte";
  import CardFlippable from "./CardFlippable.svelte";
  import Spinner from "./Spinner.svelte";
  import SwiperPictures from "./SwiperPictures.svelte";
  import { addCard, certificate, documentUpload, stolen, transfer, userCards } from "$lib/store";
  import UserSelector from "./UserSelector.svelte";
  import ReportStolen from "./ReportStolen.svelte";
  import MakeCertificate from "./MakeCertificate.svelte";
  import CardButtonDocumentUpload from "./CardButtonDocumentUpload.svelte";
  import CardFunctionModals from "./CardFunctionModals.svelte";
  import CardVaultMenu from "./CardVaultMenu.svelte";
  import { backOut } from "svelte/easing";
  import CardCell from "./CardCell.svelte";
  import Card from "./Card.svelte";
  export let data;
  export let categoryFilter: string;

  let addCardOpen = false;
  let loading = false;
  let cardExpanded: boolean = false;
  $: cardExpanded = cardExpanded;
  $: categoryFilter = categoryFilter;
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

  let isLoading;
  $: filteredCards = $userCards;
  $: categories = categories.sort();
  let cardsFiltered;
  $: cardsFiltered = filteredCards.filter((item) => {
    if (categoryFilter === "All") {
      return $userCards;
    }
    if (!inputText) {
      return item.category === categoryFilter;
    } else if (inputText) {
      const inputFilter = filterByTextInput($userCards, inputText);
      return (cardsFiltered = inputFilter);
    }
  });
  $: console.log(categoryFilter);
  $: {
    if (inputText != null && inputText !== "") {
      cardsFiltered = filterByTextInput($userCards, inputText);
    } else {
      console.log("The string is null or empty");
    }
  }
  let scrollContainer;
  let h;
  let w;
  let scrollTop;
  export let mobile: boolean = false;
  $: console.log(
    "check if the card is expanded and use that switch to disable the scroll in the cardvault",
    cardExpanded
  );
</script>

<div class="w-full h-full">
  {#if $addCard}
    <div
      class="flex flex-row w-full h-fit justify-start items-center flex-wrap"
      in:slide|local={{ duration: 200, delay: 250, easing: backOut }}
      out:slide|local={{ duration: 200, easing: backOut }}
    >
      <AddCard {mobile} />
    </div>
  {:else}
    <div
      class:translate-y-full={addCardOpen}
      class:ease-linear={addCardOpen}
      class="h-[80%] rounded-xl justify-center overflow-y-auto w-full overflow-x-hidden transition-shadow duration-75 will-change-transform"
      in:slide|local={{ duration: 200, delay: 250, easing: backOut }}
      out:slide|local={{ duration: 200, easing: backOut }}
    >
        <div
          class="w-full h-[99%] grid grid-rows-none grid-flow-row grid-cols-2 gap-1 overflow-y-auto
        md:grid-cols-4 md:gap-2 relative place-items-center will-change-auto {cardExpanded
            ? 'overflow-x-disabled overflow-y-disabled'
            : ''}"
          bind:this={scrollContainer}
          on:scroll={() => (scrollTop = scrollContainer.scrollTop)}
        >
          {#if cardsFiltered?.length === 0}
            <div transition:scale|local={{ delay: 10 }}>
              <Card>
                <h1 class="w-full h-full grid place-items-center text-primary font-semibold text-2xl">
                  No cards found
                </h1>
              </Card>
            </div>
          {/if}
          {#each cardsFiltered as cardProps, i}
            <div transition:scale|local={{ delay: 10 }}>
              <Card
                {w}
                {h}
                {scrollTop}
                cardDisplayId={i}
                cardProps={structuredClone({ ...cardProps })}
                {mobile}
                cardFrontSwiperId={i}
                bind:expanded={cardExpanded}
              >
                <SwiperPictures {mobile} pictures={structuredClone(cardProps.pictures)} />
              </Card>
            </div>
          {/each}
        </div>
    </div>
  {/if}
</div>
