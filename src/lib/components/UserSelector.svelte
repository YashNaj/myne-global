<script lang="ts">
  import { selectedCard, transfer, currentUser} from "$lib/utils/store";
  import { page } from "$app/stores";
  import { trpc } from "$lib/trpc/client";
  import type { User } from "lucia-auth";
  import { writable } from "svelte/store";
  import { fly, scale, slide } from "svelte/transition";
  import Spinner from "./Spinner.svelte";
  import UserBadge from "./UserBadge.svelte";
  import Swiper from "swiper";
  import { afterUpdate, beforeUpdate, onMount } from "svelte";
  import { ArrowCircleRight, ArrowRight, Home, Icon, SwitchHorizontal } from "svelte-hero-icons";
  import { goto } from "$app/navigation";
  import { redirect } from "@sveltejs/kit";
  let cardId = "";
  console.log("currentUserId", currentUserId);
  $: cardId = $selectedCard.id
  $: user_id = $selectedCard.user_id
  $: currentUserId = user_id

  let selectedUserSwitch = false;
  let selectedUser;
  let newUserId: string;
  $: if (selectedUser) {
    newUserId = selectedUser.id;
  }
  let users: {}[] = [];
  let asd;

  let userInput: string = "";
  let loadingTransfer: boolean = false;
  let userLoading: boolean = false;
  let userStore = writable([{}]);
  let getTransferResult = false;
  let transferSuccess = false;

  function selectUser(user: any) {
    selectedUser = user;
  }
  const loadUsers = async () => {
    userStore.set([]);
    userLoading = true;
    if (userInput === "" || userInput === null) {
      return userStore.set([]);
    } else {
      const users = await trpc($page).findUser.load.query(userInput);
      userStore.set(users);
    }
    userLoading = false;
  };
  const transferCard = async () => {
    loadingTransfer = true;
    await trpc($page)
      .cards.transfer.mutate({ cardId, currentUserId, newUserId })
      .then(async (result) => {
        transferSuccess = true;
        loadingTransfer = false;

        console.log(result);
      })
      .catch((error) => {
        loadingTransfer = false;
        console.log(error);
      });
  };

  let swiperEl;
  onMount(() => {
    swiperEl = document.querySelector(".transfer-swiper-select");
    swiperEl.swiper.update();
  });
  $: console.log("selectUser", selectedUser);
  function goHome() {
    redirect(302, "/");
  }
  function reloadPage() {
    location.reload();
  }
  export let selected;
</script>

<div class="w-80 h-[30rem] shadow-lg card  relative flex flex-col p-3 bg-primary" transition:scale|local>
  <button
    on:click={() => {
      selected = false;
      transfer.set(false);
    }}
    class="absolute top-1 right-1 btn btn-square bg-primary font-semilbold text-white border-none z-[99] "
  >
    X
  </button>
  <h1 class="font-semibold text-2xl w-full h-fit justify-center text-white bg- z-3 relative  p-1">
    Choose an account to transfer to
  </h1>
  <div class="w-full h-full container-for-badges flex flex-col justify-center content-center flex-nowrap">
    <swiper-container
      id="user-select-form-slider"
      class="transfer-swiper-select w-full h-full flex justify-center content-center  rounded-2xl my"
      centered-slides="true"
      slides-per-view="1"
      observer="true"
      observer-parents="true"
      virtual="true"
      allow-touch-move="false"
    >
      <swiper-slide class="w-full h-full flex flex-col  text-white p-1">
        <p class="text-left px-1 text-2x; ">Type below to search for users.</p>
        <div class="w-auto h-full overflow-x auto snap-x flex flex-col justify-center content-center flex-wrap ">
          {#await loadUsers()}
            <div
              class="w-full h-full flex justify-center content-center flex-wrap text-2xl"
              in:scale|local={{ delay: 100 }}
            >
              No such users found
            </div>
          {:then}
            {#if $userStore.length > 0}
              {#each $userStore as user}
                <div class="badge-wrapper w-fit h-fit snap-center flex justify-center content-center flex-wrap">
                  <UserBadge {user} />
                </div>
                <button
                  on:click={() => {
                    selectUser(user);
                    swiperEl.swiper.slideNext();
                  }}
                  class="btn btn-ghost text-white normal-case z-99 border-white"
                >
                  Select
                </button>
              {/each}
            {:else}
              <div class="w-full h-full flex justify-center content-center flex-wrap text-white">
                No users found with that information...
              </div>
            {/if}
          {/await}
        </div>
      </swiper-slide>
      <swiper-slide class="w-full h-full text-white flex-flex-col p-1">
        <h1 class="text-white font-semibold">You have chosen:</h1>
        <div class="w-full h-fit flex justify-center content-center flex-wrap relative">
          <UserBadge selected={true} user={selectedUser} />
        </div>
        <h1 class="text-white font-medium p-1 text-center">
          Are you sure this is who you want to send your card to? This process is not reversible.
        </h1>
        <div class="button-container flex justify-around w-full absolute bottom-2 left-0">
          <button
            class="btn btn-error normal-case flex-1"
            on:click={() => {
              swiperEl.swiper.slidePrev();
              selectedUser = "";
            }}
          >
            Go Back
          </button>

          <button class="btn btn-success normal-case flex-1" on:click={() => swiperEl.swiper.slideNext()}>
            Confirm
          </button>
        </div>
      </swiper-slide>
      <swiper-slide class="w-full h-full text-white p-1 flex flex-col">
        <h1 class="text-white font-semibold">Final notice...</h1>
        <div class="w-full h-fit grid grid-cols-3  justify-center content-center flex-wrap relative">
          <UserBadge user={{ id: user_id }} userName="YOU " />
          <div class="icon-holder grid place-items-center">
            <Icon class="animate-pulse" src={ArrowRight} color="white" size="60px" />
          </div>
          <UserBadge selected={true} user={selectedUser} />
        </div>
        <h1 class="text-white font-medium p-2 text-center text-xs">
          Clicking the button on this page will confirm this irreversible action, Myne Global is not responsible for
          accidental information exchanges, review these details and click send.
        </h1>
        <div class="button-container flex justify-around w-full absolute bottom-2 left-0">
          <button
            class="btn btn-error normal-case flex-5 text-white"
            on:click={() => {
              swiperEl.swiper.slidePrev();
              selectedUser = "";
            }}
          >
            Go Back
          </button>
          <button
            class="btn btn-violet normal-case flex-1 bg-violet-500 border-violet-500 text-white"
            on:click={async () => {
              swiperEl.swiper.slideNext();

              transferCard();
            }}
          >
            Transfer
          </button>
        </div>
      </swiper-slide>
      <swiper-slide class="w-full h-full text-white p-1  flex flex-col">
        {#if loadingTransfer}
          <div class="w-full h-full grid place-items-center">
            <Spinner />
          </div>
        {:else if !transferSuccess}
          <div class="w-full h-fit font-bold flex justify-center content-center flex-wrap text-white">
            An Unkown error occured
          </div>
        {:else}
          <div class="w-full h-full font-bold  justify-start content-center flex-wrap text-white relative">
            <h1 in:slide|local class="text-2xl w-full h-fit font-semibold p-2">Success!</h1>
            <div class="w-full h-fit justify-center flex flex-col flex-wrap content-center font-medium ">
              <p class="font-medium">You sent your card to</p>
              <div class="w-fit h-full">
                <UserBadge user={selectedUser} />
              </div>
            </div>
            <p class="font-medium">
              On : {Date.now().toLocaleString()}
            </p>

            <button
              on:click={() => {
                reloadPage();
              }}
              class="btn btn-success text-white border-none flex-no-wrap normal-case absolute bottom-2 left-0 w-full p-1"
            >
              <Icon src={Home} size="12px" />
              Go Home
            </button>
          </div>
        {/if}
      </swiper-slide>
    </swiper-container>

    <input
      class="input input-md bg-white bg-opacity-10 backdrop-blur-lg placeholder-white text-white focus:input-bordered"
      placeholder="Enter MyneID or email"
      bind:value={userInput}
      on:input={() => {
        loadUsers();
      }}
    />
  </div>
</div>
