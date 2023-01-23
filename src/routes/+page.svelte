<script lang="ts">
  import { page } from "$app/stores";
  import Dashboard from "$lib/components/Dashboard.svelte";
  import DashboardFunctions from "$lib/components/DashboardFunctions.svelte";
  import PaginateFetch from "$lib/components/paginateFetch.svelte";
  import ProfileCard from "$lib/components/ProfileCard.svelte";
  import Table from "$lib/components/table.svelte";
  import { fetchJson } from "$lib/utils";
  import { getUser } from "@lucia-auth/sveltekit/client";
  let data: any[] = [];
</script>
<ProfileCard/>
<Dashboard/>
<DashboardFunctions/>