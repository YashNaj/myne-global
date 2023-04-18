<script lang="ts">
  import { fade, fly } from "svelte/transition";
  import { addCard, certificate, documentUpload, stolen, transfer } from "$lib/utils/store";
  import CardButtonDocumentUpload from "./CardButtonDocumentUpload.svelte";
  import MakeCertificate from "./MakeCertificate.svelte";
  import ReportStolen from "./ReportStolen.svelte";
  import UserSelector from "./UserSelector.svelte";
  import AddCard from "./AddCard.svelte";
import { cubicIn, cubicOut } from "svelte/easing";
  const duration = 300;
  const y = 1000;
  const delay = duration + 100;
  const easeIn = cubicOut;
  const easeOut = cubicIn;
  const transitionIn = { duration, y: -y, easing: easeIn, opacity: 1 };
  const transitionOut = { duration, y: -y, easing: easeOut, opacity: 0 };
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
