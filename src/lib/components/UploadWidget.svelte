<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { supabase } from '$lib/supabaseClient';

  export let size = 10;

  let pictures: string[] = [];
  let uploading = false;
  let files: FileList;
  let uploadButton: HTMLInputElement;

  const dispatch = createEventDispatcher();

  const downloadImage = async (path: string) => {
    try {
      const { data, error } = await supabase.storage.from('card-images').download(path);
      if (error) {
        throw error;
      }

      const url = URL.createObjectURL(data);
      return url;
    } catch (error) {
      if (error instanceof Error) {
        console.log('Error downloading image: ', error.message);
      }
    }
  };

  const uploadCardPicture = async () => {
    try {
      uploading = true;

      if (!files || files.length === 0) {
        throw new Error('You must select an image to upload.');
      }

      if (pictures.length >= 10) {
        throw new Error('You cannot upload more than 10 pictures.');
      }

      const file = files[0];
      const fileExt = file.name.split('.').pop();
      const filePath = `${Math.random()}.${fileExt}`;

      let { error } = await supabase.storage.from('card-images').upload(filePath, file);

      if (error) {
        throw error;
      }

      pictures = [...pictures, filePath];
      dispatch('picturesuploaded', pictures);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      uploading = false;
      files = null;
      uploadButton.value = '';
    }
  };

  $: {
    for (const picture of pictures) {
      downloadImage(picture).then((url) => {
        const imgElement = document.getElementById(`img-${picture}`);
        imgElement.setAttribute('src', url);
      });
    }
  }
</script>

  <div class="rounded-2xl w-64 h-64 carousel">
    {#each pictures as picture}
    <div class = 'carousel-item bg-primary w-full'>
      {#if picture}
        <img id={`img-${picture}`} src="" alt="Uploaded picture" class = 'max-w-full h-full' />
      {:else}
        <div class="no-image" style="width: 100%; height: 100%;" />
      {/if}
    </div>
    {/each}
  <div class = 'carousel-item'>
    <div class = 'w-full h-full gird place-items-center'>
      <label class="button primary block" for="single">
        {uploading ? 'Uploading ...' : 'Upload'}
      </label>
      <input
        style="visibility: hidden; position:absolute;"
        type="file"
        id="single"
        accept="image/*"
        bind:files
        on:change="{uploadCardPicture}"
        disabled="{uploading || pictures.length >= 10}"
        bind:this={uploadButton}
      />
    </div>
  </div>
</div>
