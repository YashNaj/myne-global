<script lang="ts">
  import { firstCapital } from "$lib/caps";


  import { TabPanel } from "@rgossiaux/svelte-headlessui";
  import { Icon, Plus } from "svelte-hero-icons";
  import { fade } from "svelte/transition";
  import AddCard from "./AddCard.svelte";
  import CardFlippable from "./CardFlippable.svelte";
  import Spinner from "./Spinner.svelte";
  import SwiperPictures from "./SwiperPictures.svelte";
  export let data; 
  export let categoryFilter;
  export let filteredCards;
  export let categories; 
  export let addCardOpen = false; 
  export let loading = false; 
  export let myneCards; 

  $: console.log("🚀 ~ file: Desktop.svelte:54 ~ filteredCards:", filteredCards);
  let isLoading;
  $: filteredCards = myneCards.map((card) => {
    card.category === categoryFilter;
  });
$: categories = categories.sort();
  let cardsFiltered;
  $: cardsFiltered = filteredCards;
</script>

<div class="w-full h-[80vh] p-2 rounded-2xl" >
  <div class="navbar bg-white w-full rounded-2xl mb-2">
    <div class="navbar-start">
      <div class="dropdown">
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h7"
            /></svg
          >
        </label>
        <ul
          tabindex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><a>Add Cards</a></li>
          <li><a>Delete Cards</a></li>
          <li><a>About</a></li>
        </ul>
      </div>
      <select
        bind:value={categoryFilter}
        class="select w-full max-w-xs bg-transparent text-center px-2 flex justify-start text-xl"
      >
        <option class="bg-transparent" selected>All</option>
        {#each categories as category}
          <option class="bg-transparent" value={category}>
            {firstCapital(category)}
          </option>
        {/each}
      </select>
    </div>
    <div class="navbar-center">
      <div class="form-control">
        <div class="input-group">
          <input type="text" placeholder="Search…" class="input input-md shadow-sm bg-slate-100 border-none" />
          <button class="btn btn-ghost bg-slate-100 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              /></svg
            >
          </button>
        </div>
    </div>
    </div>
    <div class="navbar-end">
      <button
        on:click={() => {
          addCardOpen = !addCardOpen;
        }}
        class="btn btn-success flex normal-case text-white mr-5"
      >
        <Icon src={Plus} color="white" size="12px" class="mr-1" />
        Add a Card
      </button>
      <button class="btn btn-ghost btn-circle">
        <div class="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            /></svg
          >
          <span class="badge badge-xs badge-primary indicator-item" />
        </div>
      </button>
    </div>
  </div>
  {#if addCardOpen}
    <div class=" flex flex-row w-full h-[89%] justify-center items-center flex-wrap">
      <AddCard />
    </div>
  {:else}
    <div
      class:translate-y-full={addCardOpen}
      class:ease-linear={addCardOpen}
      class="h-[89%]  bg-black bg-opacity-25  rounded-xl grid grid-rows-auto grid-cols-4 gap-4 justify-center overflow-y-auto p-1 w-full overflow-x-hidden shadow-lg transition-shadow duration-75"
    >

      {#if loading}
      <Spinner/>
      {:else if filteredCards?.length > 0}
      {#await import("$lib/components/CardFlippable.svelte") then Module}
      {#each myneCards as myneCard, i}
        <div class="w-fit h-fit">
          <Module.default cardDisplayId="flippable-card-{i}" cardProps={{...myneCard}} pictures = {myneCard.pictures}>
            <SwiperPictures pictures={myneCard.pictures} />
          </Module.default>
        </div>
      {/each}
    {:catch}
    <div class = 'w-full h-[80vh] bg-primary grid place-items-center'>
      <Spinner/>
    </div>
    {/await}
      {:else}
        <div class="w-fit h-fit">
          <CardFlippable>
            <div class="p-3 w-full h-full">
              <div
                class="text-3xl flex flex-col justify-center content-cener flex-wrap h-full w-full text-primary bg-black bg-opacity-10 rounded-2xl "
              >
                <p class="text-4xl text-primary font-semibold">No cards found</p>
              </div>
            </div>
          </CardFlippable>
        </div>
      {/if}
    </div>
  {/if}
</div>
