<script lang="ts">
  import { page } from "$app/stores";
  import CardVault from "$lib/components/CardVault.svelte";
  import type { PageData } from "./$types";
  import PageContainer from "$lib/components/PageContainer.svelte";
  import { TabPanel } from "@rgossiaux/svelte-headlessui";
  import { fade } from "svelte/transition";
  import { json } from "@sveltejs/kit";
  const tabList = ["Card Vault", "Import", "History Reports", "Item Certificate", "Request Inventory"];

  export let categories = [
    "jewelry",
    "watch",
    "art",
    "leather",
    "clothing",
    "sneakers",
    "firearms",
    "technology",
    "trading cards",
    "collectibles",
    "crypto",
    "nft",
    "dog",
    "cat",
    "bird",
    "other animal",
    "vintage",
    "automobile",
    "motorcycle",
    "other",
  ];

  export let data: PageData = $page.data;
  let loading = false;
  export let getMyneCards = data.getMyneCards
  export let addCardOpen = false;
  export let categoryFilter: string = "All";

  
</script>

  <CardVault {categories} {data}  myneCards = {getMyneCards} />
