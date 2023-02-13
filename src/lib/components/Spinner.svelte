<script lang="ts">
 import { Chasing  } from 'svelte-loading-spinners'
 let toggle = false
 import logo from "$lib/images/white_icon.png"
</script>

<button class = 'btn btn-secondary' on:click={()=> {toggle  = !toggle }}>
SPIN IT     
</button>

<div class = 'spinner container flex justify-center bg-black '>
    <div class  = 'estimate w-9 h-9 rounded-full'>
        <img alt ='myne-logo' src = {logo} class = 'max-w-full'/>
    </div>  
    <Chasing image={logo} size="60" color="#002d72" unit="px" duration="1s" />
</div>



<style lang="postcss">
.estimate{
    border-radius: 100%;
}
</style>