<script lang="ts">
	import { createQuery } from '@tanstack/svelte-query';
  import { page } from "$app/stores";
  import { trpc } from "$lib/trpc/client";
</script>

<div class="tan-stack-query container flex md:p-4 p-3">
  <div class="test-box">Testing</div>
</div>
