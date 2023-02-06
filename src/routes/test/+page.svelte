<script lang='ts'>
	import Carousel from './../../lib/components/Carousel.svelte';
    import { page } from "$app/stores";
    import { handleSession } from "@lucia-auth/sveltekit/client";
    import type { LayoutData } from '../$types';
  console.log($page)
  export let data:LayoutData;
  console.log(data)
  console.log(data.isUser);
</script>
<!-- 
<ul>
  {#each countries as country}
    <li>{country.name}</li>
  {/each}
</ul> -->
<div>
  <Carousel/>
</div>