<script lang="ts">
  import "../app.css";
  import { page } from "$app/stores";
  import { handleSession } from "@lucia-auth/sveltekit/client";
  import { invalidateAll } from "$app/navigation";
  import type { LayoutData } from "./$types";
  import logo from "$lib/images/white_myne_logo.png";
  import Footer2 from "$lib/components/Footer2.svelte";
  import LogOut from "$lib/components/LogOut.svelte";

  export let data: LayoutData;
  const isUser = data?.isUser;

  console.log(1, isUser);
  const authRoutes = ["/signup", "signin"];

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
</script>

<svelte:head>
  <link rel="stylesheet" href="https://use.typekit.net/kaa7gct.css" />
  <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
</svelte:head>

<div class="drawer drawer-end">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col  w-full  lg:w-auto overflow-hidden">
    <div class="navbar bg-primary">
      <div class="px-2 mx-2 font-bold text-white w-full">
        <a href="/">
          <img class="max-w-s w-20 lg:max-w-md " alt="logo" src={logo} />
        </a>
      </div>
      <div class="flex-none lg:hidden">
        <label for="my-drawer-3" class="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            color="white"
            fill="white"
            viewBox="0 0 24 24"
            class="inline-block w-6 h-6 stroke-current"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            /></svg
          >
        </label>
      </div>
      <div class="flex-none hidden lg:block">
        <ul
          class="menu menu-horizontal w-full  flex justify-end content-center flex-wrap z-1 relative text-secondary lg:text-white"
        >
          <!-- Navbar menu content here -->
          <div class="flex">
            {#each menuItems as menuItem}
              <li class="hidden"><a href="/addCard">{menuItem}</a></li>
            {/each}
            {#if data?.isUser}
              <div class=" w-[120px] flex h-[100%] rounded-lg p-1">
                <div
                  class="flex-[2-2-0%] flex justify-center content-centerw-[30%] h-full"
                >
                  <div class="avatar">
                    <div
                      class="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
                    />
                  </div>
                </div>
                <div
                  class="flex w-[70%] h-full justify-center content-center flex-wrap"
                >
                  <h1
                    class="ml-2 font-bold text-white w-full flex h-full justify-start content-center flex-wrap"
                  >
                    Arnaud
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
    <main class=" h-[96vh] w-full lg:relative bg-primary">
      <slot />
    </main> 
    <Footer2/>
  </div>
  

  <div class="drawer-side flex flex-col ">
    <label for="my-drawer-3" class="drawer-overlay" />
    <ul class="menu p-4 w-80 bg-base-100 text-primary">
      <!-- Sidebar content here -->
      {#each menuItems as menuItem}
        <li><a href="/{menuItem}">{menuItem}</a></li>
      {/each}
      <li>
        <LogOut/>
      </li>
    </ul>
  </div>
</div>

<style lang="postcss">
  :global(.gradient-background) {
    font-family: futura-pt;
    background: linear-gradient(
      30deg,
      rgba(0, 45, 114, 1) 10%,
      rgba(255, 255, 255, 1) 10%
    );
  }
</style>
