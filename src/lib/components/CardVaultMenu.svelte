<script lang="ts">
  import { firstCapital } from "$lib/caps";
  import { addCard } from "$lib/store";
  import { Icon, Plus } from "svelte-hero-icons";

  export let categoryFilter;
  export let inputText;
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
</script>

<div class="navbar rounded-t-2xl mb-2 relative top-0 z-99 w-screen bg-[rgb(243,250,255)]">
  <div class="navbar-start">
    <div class="dropdown">
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label tabindex="0" class="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"
          ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg
        >
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
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
        <input
          bind:value={inputText}
          type="text"
          placeholder="Search…"
          class="input md:input-md md:flex hidden shadow-sm bg-slate-100 border-none"
        />
        <button class="btn btn-ghost bg-slate-100 p-2 hidden md:flex">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
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
        let open = $addCard;
        addCard.set(!open);
      }}
      class="btn btn-success flex normal-case text-white md:text-md md:p-3 text-xs p-1 md:mr-5"
    >
      <Icon src={Plus} color="white" size="12px" class="mr-1" />
      Add a Card
    </button>
    <button class="btn btn-ghost btn-circle">
      <div class="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"
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
