<script lang="ts">
  import "../app.css";
  import { page } from "$app/stores";
  import { handleSession } from "@lucia-auth/sveltekit/client";
  import type { LayoutData } from "../$types";
  import logo from "$lib/images/white_myne_logo.png";
  import Footer2 from "$lib/components/Footer2.svelte";
  import LogOut from "$lib/components/LogOut.svelte";
  import { Icon, Plus } from "svelte-hero-icons";
  import type { LayoutServerData, PageServerLoad } from "./$types";
  import type { PageData } from "@lucia-auth/sveltekit/types";
  import Desktop from "$lib/components/Desktop.svelte";
  import PageContainer from "$lib/components/PageContainer.svelte";
  import Spinner from "$lib/components/Spinner.svelte";
  import { goto } from "$app/navigation";
  import { TabGroup, TabList, TabPanels, Tab } from "@rgossiaux/svelte-headlessui";
  import { preloadData } from '$app/navigation';

  export let addCardOpen = false;
  export let data: PageData = $page.data;
  const profile = data.profile;
  export let loading = data.loading;
  $: console.log(loading);
  let menuItems = [
    "Import",
    "Request History Reports",
    "Request Item Certificate",
    "Download Inventory",
    "Insurance Claim",
    "Add A Card",
    "Delete A Card",
  ];
  handleSession(page);
  const tabList = ["Card Vault", "Import", "History Reports", "Item Certificate", "Request Inventory"];
  function transformString(str: string): string {
    return str.toLowerCase().split(" ").join("_");
  }
  function transFormTab(tab: string) {
    return transformString(tab);
  }
</script>

<svelte:head>
  <link rel="stylesheet" href="https://use.typekit.net/kaa7gct.css" />
  <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
</svelte:head>
{#if loading}
  <div class="w-full h-full relative">
    <Spinner />
  </div>
{:else}
  <div class="drawer drawer-end ">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content bg-[f5f9ff]   w-full  h-auto lg:w-auto overflow-hidden">
      <div class="navbar bg-primary sticky top-0 z-50">
        <div class="px-2 mx-2 font-bold text-white w-full">
          <a href="/">
            <img class="max-w-s w-20 lg:max-w-md " alt="logo" src={logo} />
          </a>
        </div>
        <div class="flex-none lg:hidden">
          <label for="my-drawer-3" class="btn btn-square btn-ghost text-white">
            <svg
              xmlns="http://www.w3.org/200`0/svg"
              color="white"
              fill="white"
              viewBox="0 0 24 24"
              class="inline-block w-6 h-6 stroke-current"
              ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg
            >
          </label>
        </div>
        <div class="flex-none hidden lg:block">
          <ul
            class="menu menu-horizontal w-full  bg-primary flex justify-end content-center flex-wrap z-1 relative text-secondary lg:text-white"
          >
            <!-- Navbar menu content here -->
            <div class="flex">
              {#if data?.isUser}
                <div class=" w-[120px] flex h-[100%] rounded-lg p-1">
                  <div class="flex-[2-2-0%] flex justify-center content-centerw-[30%] h-full">
                    <div class="avatar">
                      <div class="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2" />
                    </div>
                  </div>
                  <div class="flex w-[70%] h-full justify-center content-center flex-wrap">
                    <h1 class="ml-2 font-bold text-white w-full flex h-full justify-start content-center flex-wrap">
                      {profile?.firstName}
                    </h1>
                  </div>
                </div>
              {/if}
              <li>
                <LogOut />
              </li>
            </div>
          </ul>
        </div>
      </div>
      {#if loading}
        <PageContainer>
          <Spinner />
        </PageContainer>
      {/if}
      <div class="hidden lg:flex flex-col justify-center content-center flex-wrap">
        <PageContainer>
          <TabGroup class=" w-full h-fit overflow-x-hidden">
            <TabList class="w-full h-fit my-2 rounded-3xl flex justify-between px-2">
              {#each tabList as tab, i}
                <Tab
                  class={({ selected }) =>
                    selected
                      ? "flex flex-col flex-wrap content-center justify-center rounded-lg flex-1 bg-primary text-secondary p-1  transform translate-x-2 duration-100 xl:text-lg lg:text-md font-semibold"
                      : "flex flex-col flex-wrap flex-1  content-center justify-center rounded-lg p-1 translate-x-[-2] transform duration-100 ease-in-out origin-center  xl:text-lg lg:text-md font-semibold"}
                >
                  <a data-sveltekit-preload-data="hover" href="/{transFormTab(tab)}">{(tab)}</a>
                </Tab>
              {/each}
            </TabList>
            <TabPanels class="w-full h-[80vh]  mt-2 swiper-wrapper">
              <slot />
            </TabPanels>
          </TabGroup>
        </PageContainer>
      </div>
      <div class=" md:hidden">
        <slot />
      </div>
    </div>
    <div class="drawer-side flex flex-col ">
      <label for="my-drawer-3" class="drawer-overlay" />
      <ul class="menu p-4 w-80 bg-base-100 text-primary">
        <!-- Sidebar content here -->
        {#each menuItems as menuItem}
          <li><a href="/{menuItem}">{menuItem}</a></li>
        {/each}
        <li>
          <LogOut />
        </li>
      </ul>
    </div>
  </div>
{/if}

<style lang="postcss">
  :global(html) {
    overflow: scroll;
  }
  ::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
  /* Optional: show position indicator in red */
  ::-webkit-scrollbar-thumb {
    background: #0062ff;
  }

  :global(body) {
    font-family: futura-pt;
    background: linear-gradient(30deg, rgba(0, 45, 114, 1) 10%, rgba(255, 255, 255, 1) 10%);
  }
  :global(main) {
    background-color: #f5f9ff;
  }
</style>
