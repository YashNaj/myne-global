<script>
  import { slide } from "svelte/transition";
</script>

<div transition:slide={{ delay: 200, duration: 200 }}>
    <slot/>
</div>
