<script lang="ts">
  import { fade } from "svelte/transition";

</script>
<div transition:fade={{duration: 75}} class= 'w-full h-full min-h-[80vh] flex flex-col flex-wrap justify-center content-start md:flex-row '>
  <slot/>
</div>