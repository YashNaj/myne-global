<script lang="ts">
  import { page } from "$app/stores";
  import type { PageData } from "./$types";
  import { TabPanel } from "@rgossiaux/svelte-headlessui";

  import Import from "$lib/components/Import.svelte";   
  export let data: PageData = $page.data;
  let loading = false;
  export let getMyneCards = data.getMyneCards
  export let addCardOpen = false;
  export let categoryFilter: string = "All";


</script>
    <Import myneCards = {getMyneCards}/>
