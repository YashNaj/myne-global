<script lang="ts">
 import { Chasing  } from 'svelte-loading-spinners'
 let toggle = false
 export let size = '9'
 import logo from "$lib/images/white_icon.png"
</script>

<div class = 'spinner container flex justify-center '>
    <div class  = 'flex flex-col justify-center content-center flex-wrap w-{size} h-{size} rounded-full'>
        <img alt ='myne-logo'  src = {logo} class = 'w-full h-full max-w-full animate-spin'/>
    </div>  
</div>
<style lang="postcss">
.estimate{
    border-radius: 100%;
}
</style>