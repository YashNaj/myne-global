<script lang="ts">
  // register Swiper custom elements
  import { register } from "swiper/element/bundle";
  register();
  import Footer2 from "$lib/components/Footer2.svelte";
  import "./app.css";
  import { page  } from '$app/stores';
  import type { LayoutServerData } from "./$types";
  import PageContainer from "$lib/components/PageContainer.svelte";
  import Spinner from "$lib/components/Spinner.svelte";
  let data: LayoutServerData = $page.data;
  let loading: boolean;
  $: loading = $page.data.loading;
  $:console.log(loading)
</script>
{#if !loading}
  <slot />
{:else}
<div class = 'w-screen h-screen grid place-items-center'>
  <Spinner/>
</div>
{/if}
