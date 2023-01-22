<script lang="ts">
  import Navbar from "$lib/components/navbar.svelte";
  import "../app.css";
  import { page } from "$app/stores";
  import { handleSession } from "@lucia-auth/sveltekit/client";

  handleSession(page);
</script>

<svelte:head>
	<link rel="stylesheet" href="https://use.typekit.net/kaa7gct.css" />
	<meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
</svelte:head>

<header>
</header>

<main class="mx-3 my-4">
  <slot />
</main>
<style lang='postcss'>
  :global(html){
    font-family: futura-pt;
  }
</style>