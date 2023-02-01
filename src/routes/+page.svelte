<script lang="ts">
  import Dashboard from "$lib/components/Dashboard.svelte";
  import DashboardFunctions from "$lib/components/DashboardFunctions.svelte";
  import PaginateFetch from "$lib/components/paginateFetch.svelte";
  import ProfileCard from "$lib/components/ProfileCard.svelte";
  import { page } from "$app/stores";
  import { handleSession } from "@lucia-auth/sveltekit/client";
  import Card from "$lib/components/Card.svelte";
  import CardFlippable from "$lib/components/CardFlippable.svelte";
  import HomeTabs from "$lib/components/HomeTabs.svelte";
  handleSession(page);
  export let data;
    let { countries } = data;
    $: ({ countries } = data);
</script>

<div class="lg:hidden md:hidden xl:hidden 2xl:hidden">
  <ProfileCard />
  <Dashboard />
  <DashboardFunctions />
</div>
<div class = 'hidden md:flex w-full h-full justify-center px-2'>
  <HomeTabs/>
</div>
