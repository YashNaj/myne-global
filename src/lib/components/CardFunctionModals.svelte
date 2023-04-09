<script lang="ts">
  import { fade } from "svelte/transition";
  import { certificate, documentUpload, stolen, transfer } from "$lib/store";
  import CardButtonDocumentUpload from "./CardButtonDocumentUpload.svelte";
  import MakeCertificate from "./MakeCertificate.svelte";
  import ReportStolen from "./ReportStolen.svelte";
  import UserSelector from "./UserSelector.svelte";
</script>

<div>
  {#if $transfer}
    <div
      class="w-full h-full flex flex-wrap justify-center content-center absolute bg-black bg-opacity-25 z-[998] backdrop-blur-lg rounded-2xl top-0 left-0"
      transition:fade|local
    >
      <UserSelector />
    </div>
  {/if}
  {#if $stolen}
    <div
      class="w-full h-full flex flex-wrap justify-center content-center absolute bg-black bg-opacity-25 z-[998] backdrop-blur-lg top-0 rounded-2xl top-0 left-0"
      transition:fade|local
    >
      <ReportStolen />
    </div>
  {/if}
  {#if $documentUpload}
    <div
      class="w-full h-full flex flex-wrap justify-center content-center absolute bg-black bg-opacity-25 z-[998] backdrop-blur-lg rounded-2xl top-0 left-0"
      transition:fade|local
    >
      <CardButtonDocumentUpload />
    </div>
  {/if}
  {#if $certificate}
    <div
      class="w-full h-full flex flex-wrap justify-center content-center absolute bg-black bg-opacity-25 z-[998] backdrop-blur-lg rounded-2xl top-0 left-0"
      transition:fade|local
    >
      <MakeCertificate />
    </div>
  {/if}
</div>
