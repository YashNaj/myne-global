<script lang="ts">
  import { page } from "$app/stores";
  import Dashboard from "$lib/components/Dashboard.svelte";
  import PaginateFetch from "$lib/components/paginateFetch.svelte";
  import Table from "$lib/components/table.svelte";
  import { fetchJson } from "$lib/utils";

  let data: any[] = [];

  const pageNo = Number($page.url.searchParams.get("page") ?? 1);
  const limit = Number($page.url.searchParams.get("limit") ?? 10);
</script>

<Dashboard/>
