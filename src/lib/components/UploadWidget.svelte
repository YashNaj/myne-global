<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import { supabase } from '$lib/supabaseClient'

  export let size = 10
  export let url: string

  let avatarUrl: string | null = null
  let uploading = false
  let files: FileList

  const dispatch = createEventDispatcher()

  const downloadImage = async (path: string) => {
    try {
      console.log(path)
      const { data, error } = await supabase.storage.from('avatars').download(path)
      console.log(data)
      if (error) {
        throw error
      }

      const url = URL.createObjectURL(data)
      avatarUrl = url
    } catch (error) {
      if (error instanceof Error) {
        console.log('Error downloading image: ', error.message)
      }
    }
  }

  const uploadAvatar = async () => {
    try {
      uploading = true

      if (!files || files.length === 0) {
        throw new Error('You must select an image to upload.')
      }

      const file = files[0]
      const fileExt = file.name.split('.').pop()
      const filePath = `${Math.random()}.${fileExt}`

      let { error } = await supabase.storage.from('avatars').upload(filePath, file)

      if (error) {
        throw error
      }

      url = filePath
      dispatch('upload')
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      uploading = false
    }
  }

  $: if (url) downloadImage(url)
</script>

<div>
  {#if avatarUrl} <img src={avatarUrl} alt={avatarUrl ? 'Avatar' : 'No image'} class="avatar image"
  style="height: {size}em; width: {size}em;" /> {:else}
  <div class="avatar no-image" style="height: {size}em; width: {size}em;" />
  {/if}

  <div style="width: {size}em;">
    <label class="button primary block" for="single">
      {uploading ? 'Uploading ...' : 'Upload'}
    </label>
    <input
      style="visibility: hidden; position:absolute;"
      type="file"
      let pictures = [];
    
      const handleFileInput = async (event) => {
        const files = event.target.files;
    
        for (const file of files) {
          const { data, error } = await supabase.storage.from('your-storage-bucket').upload(`pictures/${file.name}`, file, {
            cacheControl: '3600',
            upsert: true,
          });
    
          if (error) {
            console.error(error);
          } else {
            pictures = [...pictures, data.Key];
          }
        }
    
        // pass the array of links to parent component
        $: if (pictures.length > 0) {
          $parent.onPicturesUploaded(pictures);
        }
      };
    </script>
    
    <label>
      Select pictures to upload:
      <input type="file" accept="image/*" multiple on:change={handleFileInput} />
    </label>
    
      id="single"
      accept="image/*"
      bind:files
      on:change="{uploadAvatar}"
      disabled="{uploading}"
    />
  </div>
</div>