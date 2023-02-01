<script lang='ts'>
    import { page } from "$app/stores";
    import { handleSession } from "@lucia-auth/sveltekit/client";
    import type { LayoutData } from '../$types';

  export let data:LayoutData;
  let { countries } = data;
  $: ({ countries } = data);
  console.log(data.isUser);
</script>
<!-- 
<ul>
  {#each countries as country}
    <li>{country.name}</li>
  {/each}
</ul> -->