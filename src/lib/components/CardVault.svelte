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
    <div class="flex flex-row w-full h-full justify-center items-center flex-wrap">
      <AddCard {mobile} />
    </div>
  {:else}
    <div
      class:translate-y-full={addCardOpen}
      class:ease-linear={addCardOpen}
      class="h-[80%] rounded-xl justify-center overflow-y-auto w-full overflow-x-hidden transition-shadow duration-75 will-change-transform"
    >
      {#await import("$lib/components/Card.svelte")}
        <div
          bind:clientHeight={h}
          bind:clientWidth={w}
          class="pt-20 w-full h-[100dvh] bg-primary p-1 flex justify-center content-center flex-wrap"
          out:fly|local={{ duration: 200 }}
        >
          <h1 class="text-8xl w-full justify-center flex text-white font-semibold">Card Vault</h1>
          <LoadingScreen {h} {w} />
        </div>
      {:then Module}
        <div
          class="w-full h-[99%] grid grid-rows-none grid-flow-row grid-cols-2 gap-1 overflow-y-auto
        md:grid-cols-4 md:gap-2 relative place-items-center will-change-auto {cardExpanded
            ? 'overflow-x-disabled overflow-y-disabled'
            : ''}"
          in:fade|local={{ duration: 200, delay: 250 }}
          bind:this={scrollContainer}
          on:scroll={() => (scrollTop = scrollContainer.scrollTop)}
        >
          {#if cardsFiltered?.length === 0}
            <div transition:scale|local={{ delay: 10 }}>
              <Module.default>
                <h1 class="w-full h-full grid place-items-center text-primary font-semibold text-2xl">
                  No cards found
                </h1>
              </Module.default>
            </div>
          {/if}
          {#each cardsFiltered as cardProps, i}
            <div transition:scale|local={{ delay: 10 }}>
              <Module.default
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
              </Module.default>
            </div>
          {/each}
        </div>
      {/await}
    </div>
  {/if}
</div>
