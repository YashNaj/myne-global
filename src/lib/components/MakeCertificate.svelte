<script lang="ts">
    import { scale } from "svelte/transition";
    import { selectedCard, certificate, userCards } from "$lib/store";
    import { trpc } from "$lib/trpc/client";
    let cardId = $selectedCard.id; 
    let card = $userCards.find((obj)=> {
      return obj.id === cardId; 
    })
    let loading = false; 
    export let selected 
    async function downloadCertificate() {
    console.log("body certificate", card);

    const response = await fetch("/api/mynePdf", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: card
    });

    if (response.ok) {
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `certificate_${card.id}.pdf`;
      a.click();
      URL.revokeObjectURL(url);
    } else {
      // Handle the error response
      console.error("Error generating certificate");
    }
  }

  </script>
  
  <div class="w-80 h-fit shadow-lg card  relative flex flex-col p-3 bg-yellow-700" transition:scale|local>
    <button
      on:click={() => {
        selected = false; 
        selectedCard.set(null);
        certificate.set(false);
      }}
      class="absolute top-1 right-1 btn btn-square bg-yellow-700 font-semilbold text-white border-none z-[99] "
    >
      X
    </button>
    <h1 class="font-semibold text-2xl w-full h-fit justify-center text-white bg- z-3 relative  p-1">Get an Item Certificate</h1>
    <div class="w-full h-full container-for-badges flex flex-col justify-center content-center flex-nowrap">
      <div class="w-full h-full text-white flex-flex-col p-1">
          <h1 class="text-white font-semibold">Download a PDF with your items pertinet information, the same kind of document that would be served as a histroy report</h1>
 
         
          <div class="button-container flex justify-around w-full absolute bottom-2 left-0">
          </div>
        </div>
        <button on:click={downloadCertificate}  class = 'btn btn-warning text-white normal-case'>
          Generate Certificate
        </button>
    </div>
  </div>
  