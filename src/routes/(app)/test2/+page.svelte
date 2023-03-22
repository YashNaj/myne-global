<script lang="ts">
  import CardCell from "$lib/components/CardCell.svelte";
  import UserSelector from "$lib/components/UserSelector.svelte";
  import { draw } from "svelte/transition";
  import type { PageData } from "./$types";
  let description = "";
  let value = "test";
  let label = "test";
  let toggle = false; 
  export let data: PageData;
</script>



<div class = 'w-full h-full flex flex-wrap justify-center content-center relative bg-black bg-opacity-25 backdrop-blur-lg'>
  <UserSelector />
</div> 