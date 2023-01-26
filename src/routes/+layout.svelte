<script lang="ts">
  import "../app.css";
  import { page } from "$app/stores";
  import { handleSession } from "@lucia-auth/sveltekit/client";
  import MobileNav from "$lib/components/MobileNav.svelte";
  import { invalidateAll } from "$app/navigation";
  import { signOut } from "@lucia-auth/sveltekit/client";
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
  async function logOut ()  {
            await signOut();
            invalidateAll();
  }
</script>

<svelte:head>
  <link rel="stylesheet" href="https://use.typekit.net/kaa7gct.css" />
  <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
</svelte:head>

<div class="drawer drawer-end">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col">
    <div class="navbar bg-primary">
      <div class="flex-1 px-2 mx-2 font-bold text-white">Quick Actions</div>
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
        <ul class="menu menu-horizontal">
          <!-- Navbar menu content here -->
          {#each menuItems as menuItem}
            <li><a href="/addCard">{menuItem}</a></li>
          {/each}
          <li class="w-full">
            <button
              class="btn btn-primary text-accent"
              on:click={logOut}
              >Sign out</button
            >
          </li>
        </ul>
      </div>
    </div>
    <main class="mx-3 my-4 order-last">
      <slot />
    </main>
  </div>
  <div class="drawer-side flex flex-col ">
    <label for="my-drawer-3" class="drawer-overlay" />
    <ul class="menu p-4 w-80 bg-base-100">
      <!-- Sidebar content here -->
      {#each menuItems as menuItem}
        <li><a href="/{menuItem}">{menuItem}</a></li>
      {/each}
      <li>
        <button
          class="bg-accent"
          on:click={logOut}
          >Sign out</button
        >
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
      rgba(255, 255, 255, 1) 10%,
    );

  }
  
</style>
