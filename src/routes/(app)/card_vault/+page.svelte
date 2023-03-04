<script lang="ts">

  import PageContainer from "$lib/components/PageContainer.svelte";
  import { fade } from "svelte/transition";

</script>
<PageContainer>
    <h1 transition:fade={{duration:75}}
        class="flex justify-start text-primary font-semibold text-4xl text left w-full h-fit md:pl-4 md:pt-4 fixed"
      >
        Card Vault
      </h1>
      

  </PageContainer>
  