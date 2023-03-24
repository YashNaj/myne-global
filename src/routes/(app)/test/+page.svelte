<script lang="ts">
  import { writable } from "svelte/store";
  import { quintOut } from "svelte/easing";
  import { spring } from "svelte/motion";
  import { page } from "$app/stores";

  import Spinner from "$lib/components/Spinner.svelte";
  import { trpc } from "$lib/trpc/client";
  import CardFlippable from "$lib/components/CardFlippable.svelte";
  import SwiperPictures from "$lib/components/SwiperPictures.svelte";
  import { json } from "@sveltejs/kit";
  import UserBadge from "$lib/components/UserBadge.svelte";
  import { scale } from "svelte/transition";
  import { beforeUpdate, onMount } from "svelte";
  import type Swiper from "swiper";
  let selectedUser;
  function selectUser(user) {
    selectedUser = user;
  }
  let expanded = false;
  let scrollContainer;
  let expandWidth = 250;
  let expandHeight = 350;
  let expandedWidth = spring(expandWidth, {
    stiffness: 1.0,
    damping: 1.0,
  });
  let w: number;
  let h: number;
  export let scrollTop;
  let expandedHeight = spring(expandHeight, {
    stiffness: 0.15,
    damping: 0.5,
  });
  let expandedPosition = writable("relative");
  let zIndex = writable(1);

  function toggleExpand() {
    if (expanded === true) {
      expandedHeight.set(h);
      expandedWidth.set(w);
      expandedPosition.set("absolute");
      zIndex.set(99);
    } else {
      expandedHeight.set(expandHeight);
      expandedWidth.set(expandWidth);
      expandedPosition.set("relative");
      zIndex.set(1);
    }
  }

  let cardWidth = "";

  let greeting = "press the button to load data";
  let users = {
    email: "",
  };
  $: users = JSON.stringify(users);
  let myneCardTest;
  let emailInput: string;
  let loading = false;
  let cardLoading = false;
  let actionLoading = false;

  $: expanded = expanded;
  const loadData = async () => {
    loading = true;
    greeting = await trpc($page).greeting.load.query();
    loading = false;
  };
  const loadCards = async () => {
    cardLoading = true;
    myneCardTest = await trpc($page).cards.list.query();
    cardLoading = false;
  };
  const loadUsers = async () => {
    actionLoading = true;
    if (emailInput === "") {
      return (users = [{}]);
    } else users = await trpc($page).findUser.load.query(emailInput);

    actionLoading = false;
  };
  let pictures = [];
  let userSlider;
  let inputFocusStore = writable(false);
  let inputFocus = $inputFocusStore;
</script>

<div class="w-full h-full flex flex-col p-3 bg-slate-50">
  <h1 class="flex justify-start w-fit flex-1 font-semibold text-2xl p-3">OFFICAL MYNE TEST ENVIORMENT</h1>

  <div
    class="workspace-container flex w-full h-full rounded-2xl relative border border-dashed border-spacing-5 border-primary p-3"
  >
    <div
      bind:this={scrollContainer}
      bind:clientHeight={h}
      bind:clientWidth={w}
      on:scroll={() => (scrollTop = scrollContainer.scrollTop)}
      class="w-full h-[97%] grid  grid-rows-auto grid-cols-3 gap-2 relative overflow-y-auto"
    >
      <div class="test-column w-full h-full flex flex-col">
        <h1 class="w-full h-full flex-1 label">
          Label
          <h1>
            <button
              on:click={() => {
                loadData();
              }}
              class="normal-case btn btn-primary"
            >
              Get
            </button>
          </h1>
        </h1>
        <div class="flex-8 w-full h-full rounded-xl">
          <pre>
          {#if loading}
              Loading...
            {:else}
              {greeting}
            {/if}
          </pre>
        </div>
      </div>
      <div class="test-column w-full h-full flex flex-col">
        <h1 class="w-full h-full flex-1 label">
          Label
          <h1>
            <button
              on:click={() => {
                loadCards();
              }}
              class="normal-case btn btn-primary"
            >
              Get
            </button>
          </h1>
        </h1>
        <div class="flex-8 overflow-y-auto w-full h-full rounded-xl">
          {#if cardLoading}
            Loading. . .
          {:else}
            <pre class="flex flex-col h-[99%] p-2 code text-wrap whitespace-pre-line overflow-y-auto">
            {JSON.stringify(myneCardTest)}     
          </pre>
          {/if}
        </div>
      </div>
      <div class="test-column w-full h-full flex flex-col">
        <h1 class="w-full h-full flex-1 label">
          Label
          <h1>
            <button class="normal-case btn btn-primary"> Get </button>
          </h1>
        </h1>
        <div class="flex-8 w-full h-full rounded-xl">
          <input
            class="input input-md"
            bind:value={emailInput}
            on:input={() => {
              loadUsers();
            }}
          />
         

         
          </div>
          <div class = 'w-full h-full'> 
            {#if selectedUser}
            {JSON.stringify(selectedUser)}
            {/if}
        </div>
        </div>
      </div>
    </div>
  </div>

