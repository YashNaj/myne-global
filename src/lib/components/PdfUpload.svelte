<script lang="ts">
  import { supabase } from "$lib/utils/supabaseClient";
  import { onMount } from "svelte";
  import PageContainer from "./PageContainer.svelte";

  let pdfUrl: string;
  let uploading = false;

  const downloadPdf = async (path: string) => {
    try {
      const { data, error } = await supabase.storage.from("pdf").download(path);
      if (error) {
        throw error;
      }
      const url = URL.createObjectURL(data);
      console.log(url)
      pdfUrl = url;
    } catch (error) {
      console.log("Error downloading PDF: ", error.message);
    }
  };

  const uploadPdf = async (event: Event) => {
    try {
      uploading = true;

      const target = event.target as HTMLInputElement;
      if (!target.files || target.files.length === 0) {
        throw new Error("You must select a PDF to upload.");
      }

      const file = target.files[0];
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      let { error: uploadError } = await supabase.storage.from("pdf").upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      pdfUrl = filePath;
    } catch (error) {
      alert(error.message);
    } finally {
      uploading = false;
    }
  };

  onMount(() => {
    if (pdfUrl) {
      downloadPdf(pdfUrl);
      console.log(pdfUrl);
    }
  });
</script>

<PageContainer>
  <div>
    {#if pdfUrl}
      <iframe title="pdf" src={pdfUrl} style="width: 100%; height: 500px;" />
    {:else}
      <p>No PDF selected.</p>
    {/if}

    {#if uploading}
      <p>Uploading...</p>
    {:else}
      <input class="btn btn-green" type="file" accept="application/pdf" on:change={uploadPdf} />
    {/if}
  </div>
</PageContainer>
