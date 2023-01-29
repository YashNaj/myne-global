<script lang="ts">
  import Dashboard from "$lib/components/Dashboard.svelte";
  import DashboardFunctions from "$lib/components/DashboardFunctions.svelte";
  import PaginateFetch from "$lib/components/paginateFetch.svelte";
  import ProfileCard from "$lib/components/ProfileCard.svelte";
  import { page } from "$app/stores";
  import { handleSession } from "@lucia-auth/sveltekit/client";
  import Card from "$lib/components/Card.svelte";
  handleSession(page);
</script>

<div class="lg:hidden">
  <ProfileCard />
  <Dashboard />
  <DashboardFunctions />
</div>
  <div class="lg:flex hidden w-full h-full">
    <div class=" flex flex-col h-full w-[30%]">
      <div class = 'h-full w-fullrounded-3xl p-4'>
        <div class = 'h-full w-full shadow-lg glass rounded-3xl'>
          <h1 class = 'font-bold text-3xl p-2 flex justify-center text-white'> Coming Soon</h1>
        </div>
      </div>
    </div>
    <div class = ' h-full w-full'>
      <div class = 'vault h-full w-full rounded-3xl k p-4'>
        <div class = 'vault-content h-full m: flex flex-col w-full rounded-2xl '>
          <div class = 'vault-title  min-w-full flex h-36 px-4  justify-between'>
            <h1 class = 'font-bold flex flex-col justify-end text-white text-[5rem] md:text-[3rem] p-3'>
              Card Vault 
            </h1>
            <div class="dropdown dropdown-end flex flex-col content-end flex-wrap justify-end">
              <label  tabindex="0" for = 'categoriesSelect' class="btn normal-case btn-ghost flex flex-col  h-full p-3 md:pt-14 text-white text-[5rem] md:text-[3rem] ">All Categories</label>
              <ul name = 'categoriesSelect' tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a href = '/'>Item 1</a></li>
                <li><a href= '/'>Item 2</a></li>
              </ul>
            </div>
          </div>
          <div class = 'vault-cards bg-white h-[40rem] w-full rounded-3xl flex-grow'>
            <div class = 'vault-cards-scroll w-full h-full rounded-2xl flex-grow px-8 py-5 overflow-hidden'>
              <div class = 'vault-cards-scroll-content bg-vault h-full w-full grid grid-cols-4 grid-rows-auto 2xl:gap-1 xl:gap-1.5 lg:gap-[.8rem] xl:grid-cols-5 place-items-center rounded-xl p-3 glass overflow-y-auto'>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>                
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
    <div />
  </div>
<style lang='postcss'>
  .vault-cards, .vault-content{
    background-color: rgb(87, 87, 87);
  }
  .vault-cards-scroll-content{
    background-color: gray;
  }
</style>