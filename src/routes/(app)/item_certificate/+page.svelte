<script lang="ts">  
  import { page } from "$app/stores";
  import type { PageData } from "./$types";
  import ItemCertificate from "$lib/components/ItemCertificate.svelte";
  export let myneCards;
  export let data: PageData = $page.data;
  let loading = false;
  export let getMyneCards = data.getMyneCards
  export let addCardOpen = false;
  export let categoryFilter: string = "All";

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
</script>

<ItemCertificate myneCards = {getMyneCards} />
