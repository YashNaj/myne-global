<script lang="ts">
  import { createQuery } from "@tanstack/svelte-query";
  import { page } from "$app/stores";
  import { trpc } from "$lib/trpc/client";
  import type { PageData } from "./$types";
  export let data: PageData;

  const foo = data.foo();
</script>

<div class="tan-stack-query container flex md:p-4 p-3">
  <div class="test-box">Testing</div>
</div>
<div class = 'w-40 h-40 bg-white'>
  {#if $foo.isLoading}
  Loading...
{:else if $foo.isError}
  {$foo.error}
{:else if $foo.data}
  {$foo.data}
{/if}
<br />
</div>
