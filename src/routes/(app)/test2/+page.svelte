<script lang="ts">
  import type { PageData } from "./$types";
  import Card from "$lib/components/Card.svelte";
  import { userCards } from "$lib/utils/store";
  import CardCell from "$lib/components/CardCell.svelte";
  import UserSelector from "$lib/components/UserSelector.svelte";
  import { draw } from "svelte/transition";
  import type Swiper from "swiper";
  import { onMount } from "svelte";
  import PageContainer from "$lib/components/PageContainer.svelte";
  import PdfUpload from "$lib/components/PdfUpload.svelte";

  export let data: PageData;
  let cards;
  console.log($userCards);
  let swiperEl;
</script>

<PdfUpload />
