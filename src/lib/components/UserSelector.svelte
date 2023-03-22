<script lang="ts">
	import { selectedCardId } from './../../store';
  import { page } from "$app/stores";
  import { trpc } from "$lib/trpc/client";
  import type { User } from "lucia-auth";
  import { writable } from "svelte/store";
  import { fly, scale, slide } from "svelte/transition";
  import { transfer, currentUser } from "../../store";
  import Spinner from "./Spinner.svelte";
  import UserBadge from "./UserBadge.svelte";
  
  let  currentUserId  = $currentUser;
  let cardId = $selectedCardId
  $: cardId = $selectedCardId
  let selectedUser;
  let newUserId: string;
  $: if (selectedUser) {newUserId = selectedUser.id};
  let users;
  let selectedCard;

  let userInput: string = "";
  let loadingTransfer: boolean = false;
  let userLoading: boolean = false;
  let userStore = writable([{}]);

  function selectUser(user: any) {
    selectedUser = user;
  }
  const loadUsers = async () => {
    userLoading = true;
    if (userInput === "") {
      return (users = [{}]);
    } else users = await trpc($page).findUser.load.query(userInput);
    userStore.set(users);
    userLoading = false;
  };
  const transferCard = async () => {
    loadingTransfer = true;
    await trpc($page)
      .cards.transfer.mutate({ cardId ,currentUserId, newUserId })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  $: console.log('Transfer Data', {newUserId, cardId, currentUserId})

</script>

<div class="w-80 h-[30rem] shadow-lg card  relative flex flex-col p-3 bg-primary" transition:scale|local>
  <button
    on:click={() => {
      let transferSwitch = $transfer;
      transferSwitch = !transferSwitch;
      selectedCardId.set('')
      transfer.set(transferSwitch);
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
      class="item-certificate-slider w-full h-full flex justify-center content-center  rounded-2xl my"
      navigation="true"
      pagination="true"
      grab-cursor="true"
      centered-slides="true"
      slides-per-view="1"
      coverflow-effect-slide-shadows="false"
      observer-parents="true"
      virtual="true"
    >
      <div class="w-full h-full swiper-wrapper">
        {#if !selectedUser}
          {#if userLoading}
            <div class="w-full h-full flex justify-center content-center flex-wrap">
              <Spinner />
            </div>
          {:else if $userStore.length > 0}
            {#each $userStore as user, i}
              <swiper-slide
                id="user-{i}"
                class="w-full h-full flex flex-col  flex-wrap content-center justify-center p-1 "
              >
                <div class="lg:w-[200px] lg:h-[200px] flex flex-col rounded-lg justify-center  conent-center flex-wrap">
                  <UserBadge {user} />
                  <div class="button-container flex justify-center">
                    <button
                      on:click={() => {
                        selectUser(user);
                      }}
                      class="btn btn-ghost border-secondary text-white w-fit btn-primary normal-case "
                    >
                      Select
                    </button>
                  </div>
                </div>
              </swiper-slide>
            {/each}
          {:else}
            <swiper-slide class="w-full h-fit flex flex-col  justify-center content-center flex-wrap p-1">
              <div class="lg:w-[300px] lg:h-[300px] flex flex-col  rounded-lg justify-center  conent-center flex-wrap">
                <UserBadge user={{ id: "Not found" }} />
              </div>
            </swiper-slide>
          {/if}
        {:else}
          <div class="w-full h-full flex-flex-col">
            <h1 class="text-white font-medium text-xl flex w-full justify-center h-fit p-2 text-left" in:fly|local>
              You Have Selected the following account
            </h1>
            <UserBadge user={selectedUser} selected={true} />

            <p class="w-full h-fit text-left text-white font-medium  p-2">
              Are you sure you want to proceed? Transfers are not reversible;
            </p>
            <div class="w-full h-fit justify-center flex p-3">
              <button
                on:click={() => {
                  selectedUser = !selectedUser;
                }}
                class="normal-case btn btn-error flex-1"
              >
                Go Back
              </button>
              <button
                class="normal-case btn btn-success flex-1"
                on:click={() => {
                  transferCard();
                }}
              >
                Confirm Transfer
              </button>
            </div>
          </div>
        {/if}
      </div>

      <swiper-pagination />
      <swiper-navigation />
    </swiper-container>
  </div>
  <input
    class="input input-md bg-white bg-opacity-10 backdrop-blur-lg placeholder-white text-white focus:input-bordered"
    placeholder="Enter MyneID or email"
    bind:value={userInput}
    on:input={() => {
      loadUsers();
    }}
  />
</div>
