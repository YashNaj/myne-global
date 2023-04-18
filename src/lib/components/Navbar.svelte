<script lang="ts">
  import { firstCapital } from "$lib/utils/caps";
  import { cartItems, currentUser, cartTotal } from "$lib/utils/store";
  import { page } from "$app/stores";
  import { trpc } from "$lib/trpc/client";
  import { beforeUpdate, onMount } from "svelte";
  import logo from "$lib/images/white_myne_logo.png";
  import type { Profile } from "@prisma/client";
  import LogOut from "./LogOut.svelte";
  import { offset, flip, shift } from "svelte-floating-ui/dom";
  import { createFloatingActions } from "svelte-floating-ui";

  const [floatingRef, floatingContent] = createFloatingActions({
    strategy: "absolute",
    placement: "top",
    middleware: [offset(6), flip(), shift()],
  });

  // // const getProfile = async () => {
  // //   const profileFetch = await trpc($page).profile.load.query();
  // //   return profileFetch;
  // // };
  // const profile = createQuery<Profile, Error>({
  //   queryKey: ["profile"],
  //   queryFn: () => getProfile(),
  // });
  // console.log("navbar load", { $profile, $cartItems });
</script>

<div class="navbar bg-primary fixed top-0 left-0 z-[99] w-screen">
  <div class="flex-1">
    <a href="/" class="btn btn-ghost normal-case text-xl">
      <div class="logo-container w-20 grid place-items-center">
        <img alt="logo" class="max-w-full" src={logo} />
      </div>
    </a>
  </div>
  <div class="flex-none">
    <div class="dropdown dropdown-bottom flex justify-end content-end flex-wrap">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <label on:click={() => {}} tabindex="0" class="btn btn-ghost btn-circle">
        <div class="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            /></svg
          >
          {#key $cartItems}
            <span class="badge badge-sm indicator-item">{$cartItems}</span>
          {/key}
        </div>
      </label>
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <div tabindex="0" class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div class="card-body shadow-md">
          <span class="font-bold text-lg">{$cartItems}</span>
          <span class="text-info">Subtotal: ${$cartTotal}</span>
          <div class="card-actions">
            <a href="/cart" class="btn btn-primary btn-block">View cart</a>
          </div>
        </div>
      </div>
    </div>

    <div class="dropdown dropdown-end">
      <div class="flex items-center">
        <h1 class="text-left px-1 text-lg text-white font-semibold">
          <!-- {#if $profile}
            {$profile?.data?.firstName?.toLowerCase()}
          {:else if $profile?.isLoading}
            Loading...
          {:else if $profile?.data.isError}
            Error
          {/if} -->
        </h1>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full object-contain">
            <img
              alt="avatar"
              src="https://loremflickr.com/640/360
            "
            />
          </div>

          <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a href="/profile" class="justify-between normal-case">
                Profile
                <span class="badge">New</span>
              </a>
            </li>
            <li><LogOut /></li>
          </ul>
        </label>
      </div>
    </div>
  </div>
</div>
