<script lang="ts">
  import { page } from '$app/stores';
  import Spinner from '$lib/components/Spinner.svelte';
  import { trpc } from '$lib/trpc/client';
  let greeting = 'press the button to load data';
  let myneCardTest;
  let loading = false;

  const loadData = async () => {
    loading = true;
    greeting = await trpc($page).greeting.query();
    myneCardTest = await trpc($page).getMyneCards.query();
    loading = false;
  };
  console.log("🚀 ~ file: +page.svelte:11 ~ loadData ~ myneCardTest:", myneCardTest)
  
</script>

<h6>Loading data in<br /><code>+page.svelte</code></h6>




<a
  href="#load"
  role="button"
  class="secondary btn btn-error"
  aria-busy={loading}
  on:click|preventDefault={loadData}>Load</a
>
{#if loading }
  <Spinner/>
{:else}
<p>{ myneCardTest} {greeting}</p>
{/if}