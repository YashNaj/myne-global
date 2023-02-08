<script lang="ts">
  import Dashboard from "$lib/components/Dashboard.svelte";
  import DashboardFunctions from "$lib/components/DashboardFunctions.svelte";
  import { page } from "$app/stores";
  import { handleSession } from "@lucia-auth/sveltekit/client";
  import HomeTabs from "$lib/components/HomeTabs.svelte";
  handleSession(page);
</script>

<div class="lg:hidden md:hidden xl:hidden 2xl:hidden p-2">
  <Dashboard />
  <DashboardFunctions />
</div>
<div class = 'hidden md:flex w-full h-full justify-center px-2'>
  <HomeTabs/>
</div>
<!--  -->