<script lang="ts">
  import Dashboard from "$lib/components/Dashboard.svelte";
  import DashboardFunctions from "$lib/components/DashboardFunctions.svelte";
  import { page } from "$app/stores";
  import { handleSession } from "@lucia-auth/sveltekit/client";
  import HomeTabs from "$lib/components/HomeTabs.svelte";
  import type { PageData, PageServerData } from "./$types";
  export let data: PageData;
  handleSession(page);
  export let myneCards = data?.myneCards;
  console.log("🚀 ~ file: +page.svelte:12 ~ myneCards", myneCards)
  
</script>

<div class="lg:hidden md:hidden xl:hidden 2xl:hidden p-2">
  <Dashboard myneCards = {myneCards} />
  <DashboardFunctions />
</div>
<div class = 'hidden md:flex w-full h-full justify-center px-2'>
  <HomeTabs myneCards = {myneCards}/>
</div>
<!--  -->