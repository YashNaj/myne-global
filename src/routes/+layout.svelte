<script lang="ts">
  // register Swiper custom elements
  import { register } from "swiper/element/bundle";
  register();
  import Footer2 from "$lib/components/Footer2.svelte";
  import "./app.css";
  import { page } from "$app/stores";
  import type { LayoutServerData } from "./$types";
  import PageContainer from "$lib/components/PageContainer.svelte";
  import Spinner from "$lib/components/Spinner.svelte";

  import { onMount } from "svelte";
  import { pwaInfo } from "virtual:pwa-info";
  import { browser } from "$app/environment";
  import { QueryClientProvider, QueryClient } from "@tanstack/svelte-query";

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        enabled: browser,
      },
    },
  });

  onMount(async () => {
    if (pwaInfo) {
      const { registerSW } = await import("virtual:pwa-register");
      registerSW({
        immediate: true,
        onRegistered(r) {
          // uncomment following code if you want check for updates
          // r && setInterval(() => {
          //    console.log('Checking for sw update')
          //    r.update()
          // }, 20000 /* 20s for testing purposes */)
          console.log(`SW Registered: ${r}`);
        },
        onRegisterError(error) {
          console.log("SW registration error", error);
        },
      });
    }
    window.scrollTo(1, 0);
  });

  $: webManifest = pwaInfo ? pwaInfo.webManifest.linkTag : "";
</script>

<svelte:head>
  {@html webManifest}
</svelte:head>

<QueryClientProvider client={queryClient}>
  <main class="h-[100dvh]">
    <slot />
  </main>
</QueryClientProvider>
