<script lang="ts">
  import { fade, slide } from "svelte/transition";
  import { enhance } from "$app/forms";
  import { page } from "$app/stores";
  import type { LayoutData } from "../$types";
  import type { PageData } from "./$types";
  import { myneMasterBrandsAndBreeds } from "../../index";
  // import { trpc } from "$lib/trpc/client";
  let brandFilterOpen = false; 
  let input = '';
  const brands = ['Apple', 'Samsung', 'Nokia', 'Huawei', 'Motorola'];

  $: filteredBrands = brands.filter(brand => brand.toLowerCase().includes(input.toLowerCase()));


  //trpc test environment :
  // let greeting = 'press the button to load data';
  // let loading = false;

  // const loadData = async () => {
  //   loading = true;
  //   greeting = await trpc($page).greeting.query();
  //   loading = false;
  // };
</script>

<!-- <h6>Loading data in<br /><code>+page.svelte</code></h6>

<a
  href="#load"
  role="button"
  class="secondary"
  aria-busy={loading}
  on:click|preventDefault={loadData}>Load</a
>
<p>{greeting}</p> -->
<input
type="text"
name="brand"
id="brand"
placeholder="brand"
class="input-md "
bind:value={brand}
on:focus={() => (flipped = false)}/>

{#if brandFilterOpen}
{#if filteredBrands.length > 0}
  <ul>
    {#each filteredBrands as brand}
      <li>{brand}</li>
    {/each}
  </ul>
{/if}
{/if}
