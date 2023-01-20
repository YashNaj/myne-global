<script>
  import { fade, slide } from "svelte/transition";
</script>

<div class = 'flex-col justify-center content-center' in:slide={{ delay: 200, duration: 200 }}
out:slide={{delay:200}}>
    <slot/>
</div>
