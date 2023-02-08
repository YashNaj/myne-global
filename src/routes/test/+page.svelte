<script lang="ts">
	import { fade } from 'svelte/transition';
  import { enhance } from "$app/forms";
  import Carousel from "./../../lib/components/Carousel.svelte";
  import { page } from "$app/stores";
  import { handleSession } from "@lucia-auth/sveltekit/client";
  import type { LayoutData } from "../$types";
  import AddCard from "$lib/components/AddCard.svelte";
  import type { PageData } from "./$types";
  import Stat from "$lib/components/Stat.svelte";
  import { trpc } from '$lib/trpc/client';
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
  let manufacture = stolenWatch?.manufacture;
  let model = stolenWatch?.model;
  let caseSerialNumber = stolenWatch?.caseSerialNumber;
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
  <form class="card w-full h-32 p- text-black" method="POST" use:enhance>
    <input
      id="caseSerialNumber"
      placeholder="Seriala"
      name="caseSerialNumber"
      class="input input-md"
    />
    <input type="submit" value="Submit" class="btn btn-secondary normal-case" />
  </form>
      <Stat {manufacture} {caseSerialNumber} {reference_} {model} />

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

