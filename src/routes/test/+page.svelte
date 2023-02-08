<script lang="ts">
  import { fade } from "svelte/transition";
  import { enhance } from "$app/forms";
  import Carousel from "./../../lib/components/Carousel.svelte";
  import { page } from "$app/stores";
  import { handleSession } from "@lucia-auth/sveltekit/client";
  import type { LayoutData } from "../$types";
  import AddCard from "$lib/components/AddCard.svelte";
  import type { PageData } from "./$types";
  import Stat from "$lib/components/Stat.svelte";
  import { trpc } from "$lib/trpc/client";
  //trpc test environment :
  // let greeting = 'press the button to load data';
  // let loading = false;

  // const loadData = async () => {
  //   loading = true;
  //   greeting = await trpc($page).greeting.query();
  //   loading = false;
  // };
  console.log(1, $page);
  export let data: PageData;
  console.log(5, data?.stolenWatches);
  let stolenWatch = data?.stolenWatches[0].stolenWatch;
  console.log(6, stolenWatch);
  let brand = stolenWatch?.brand;
  let model = stolenWatch?.model;
  let serialNumber = stolenWatch?.serialNumber;
  let reference_ = stolenWatch?.reference_;
  export let form;

  console.log(5, form);
</script>

<!-- 
<ul>
  {#each countries as country}
    <li>{country.name}</li>
  {/each}
</ul> -->
<div class="w-full h-full flex flex-col justify-around p-3">
  <h1 class="flex w-full justify-center text-white text-3xl font-bold">
    Find a Stolen Watch
  </h1>

  <form class="card w-full h-64 text-black" method="POST" use:enhance>
    <input
      id="category"
      placeholder="Category"
      name="category"
      class="input input-md text-primary mt-2 "
    />
    <input
    id="brand"
    placeholder="Brand"
    name="brand"
    class="input input-md text-primary mt-2"
  />

    <input
      id="serialNumber"
      placeholder="Serial"
      name="serialNumber"
      class="input input-md text-primary mt-2"
    />

    <input type="submit" value="Submit" class="btn btn-primary normal-case mt-2" />
  </form>
  <Stat {brand} {serialNumber} {reference_} {model} />

</div>
<!-- <h6>Loading data in<br /><code>+page.svelte</code></h6>

<a
  href="#load"
  role="button"
  class="secondary"
  aria-busy={loading}
  on:click|preventDefault={loadData}>Load</a
>
<p>{greeting}</p> -->
