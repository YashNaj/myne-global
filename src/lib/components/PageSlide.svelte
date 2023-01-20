<script>
  import { slide } from "svelte/transition";
</script>

<div class = 'flex-col justify-center content-center' transition:slide={{ delay: 200, duration: 200 }}>
    <slot/>
</div>
