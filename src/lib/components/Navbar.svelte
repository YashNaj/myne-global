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
  export let role = "";
  export let isUser = false; 
  // $: pathname = data.pathname
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

<div class="navbar bg-primary fixed top-0 left-0 z-[1000] w-screen">
  <div class="flex-1 flex justify-start w-fit">
    <div class="flex">
      <a href="/" class="btn btn-ghost normal-case text-xl">
        <div class="logo-container w-20 grid place-items-center">
          <img alt="logo" class="max-w-full" src={logo} />
        </div>
      </a>
      {#if role !== ""}
        <h1 class=" text-baseline flex justify-center content-center flex-wrap pl-1 text-white font-semibold">
          {role}
        </h1>
      {/if}
    </div>
  </div>
  <slot />
</div>
