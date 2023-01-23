<script lang="ts">
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
</script>

<div class="drawer overflow- w-full">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
  <div class="drawer-content flex flex-col">
    <!-- Navbar -->
    <div class="w-full navbar bg-primary">
      <div class="flex-1 px-2 mx-2 font-bold text-white">Quick Actions</div>
      <div class="flex-none lg:hidden">
        <label for="my-drawer-3" class="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" color="white" fill="white" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div class="flex-none hidden lg:block">
        <ul class="menu menu-horizontal">
          <!-- Navbar menu content here -->
          {#each menuItems as menuItem}
          <li><a href="/addCard">{menuItem}</a></li>
        {/each}
        <li class ='w-full'>
          <button class = 'btn btn-primary text-accent'
            on:click={async () => {
              await signOut();
              invalidateAll();
            }}>Sign out</button
          >
        </li>
        </ul>
      </div>
    </div>
    Content
  </div> 
  <div class="drawer-side flex flex-col ">
    <label for="my-drawer-3" class="drawer-overlay"></label> 
    <ul class="menu p-4 w-80 bg-base-100">
      <!-- Sidebar content here -->
      {#each menuItems as menuItem}
      <li><a href="/{menuItem}">{menuItem}</a></li>
   {/each}
   <li>
    <button class = 'bg-accent'
      on:click={async () => {
        await signOut();
        invalidateAll();
      }}>Sign out</button
    >
  </li>
    </ul>
    
  </div>
</div>
