<script lang="ts">
  import Dashboard from "$lib/components/Dashboard.svelte";
  import DashboardFunctions from "$lib/components/DashboardFunctions.svelte";
  import PaginateFetch from "$lib/components/paginateFetch.svelte";
  import ProfileCard from "$lib/components/ProfileCard.svelte";
  import { page } from "$app/stores";
	import { handleSession } from "@lucia-auth/sveltekit/client";
	handleSession(page);
</script>
<ProfileCard/>
<Dashboard/>
<DashboardFunctions/>