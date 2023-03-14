<script lang='ts'>
  import RequestInventory from "$lib/components/RequestInventory.svelte"    
  import { page } from "$app/stores";
  import type { PageData } from "./$types";

  let data: PageData = $page.data

</script>

<RequestInventory {data} />
