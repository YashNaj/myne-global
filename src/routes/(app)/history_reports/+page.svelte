<script lang="ts">
  import { page } from "$app/stores";
  import type { PageData } from "./$types";
  import HistoryReports from "$lib/components/HistoryReports.svelte";
export let data: PageData = $page.data
</script>
<HistoryReports {data} />