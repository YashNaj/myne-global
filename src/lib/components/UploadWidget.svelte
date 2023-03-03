<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { supabase } from '$lib/supabaseClient';
  import { CloudUpload, Icon } from 'svelte-hero-icons';
  import Spinner from './Spinner.svelte';

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

  <div class="rounded-box carousel w-full h-full cursor-pointer">
    {#each pictures as picture, i}
    <div class = 'carousel-item  w-full h-full ' id ={`item-${i}`}>
      {#if picture}
        <img id={`img-${picture}`} src="" alt="Uploaded picture" class = 'object-fill bg-black bg-opacity' />
      {:else}
        <div class="no-image" style="width: 100%; height: 100%;" />
      {/if}
    </div>
    {/each}
  <div class = 'carousel-item w-full h-full rounded-box'>
    <div class = 'w-full h-full gird place-items-center'>
      <label class="w-full h-full text-white bg-black bg-opacity-40 btn btn-ghost bg-200 normal-case flex-nowrap" for="single">
        {#if uploading}
        <Spinner/>
        {:else}
          <Icon src={CloudUpload} color = 'white' size = '24px'/> 
          Upload a picture
        {/if}
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
