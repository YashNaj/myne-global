<script lang="ts">
 import { Chasing  } from 'svelte-loading-spinners'
 let toggle = false
 import logo from "$lib/images/white_icon.png"
</script>

<div class = 'spinner container flex justify-center '>
    <div class  = 'flex flex-col justify-center content-center flex-wrap w-9 h-9 rounded-full'>
        <img alt ='myne-logo' src = {logo} class = 'max-w-full animate-spin'/>
        <p class = 'ml-1'>Loading...</p>
    </div>  
</div>
<style lang="postcss">
.estimate{
    border-radius: 100%;
}
</style>