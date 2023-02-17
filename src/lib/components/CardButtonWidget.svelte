<script lang="ts">
  import { Icon, DocumentText, ShieldExclamation,SwitchHorizontal, Star } from "svelte-hero-icons";

</script>

<div class="button-container w-full h-full flex ">
  <div class="flex flex-col justify-center content-center flex-1">
    <div class="flex w-full justify-center">
      <button class="btn btn-square z-2">
      <Icon src = {ShieldExclamation} color= 'black' class = 'opacity-12' size = '30px'/>
        
      </button>
    </div>
    <label class="flex text-xs w-full justify-center" for="button">
      Stolen
    </label>
  </div>
  <div class="flex flex-col justify-center content-center flex-1">
    <div class="flex w-full justify-center">
      <button class="btn btn-square z-2">
        <Icon src = {SwitchHorizontal} color= 'black' class = 'opacity-12' size = '30px'/>


      </button>
    </div>
    <label class="flex text-xs w-full justify-center" for="button">
      Transfer
    </label>
  </div>
  <div class="flex flex-col justify-center content-center flex-1">
    <div class="flex w-full justify-center">
      <button class="btn btn-square z-2">
        <Icon src = {Star} color= 'black' class = 'opacity-12' size = '30px'/>


      </button>
    </div>
    <label class="flex text-xs w-full justify-center" for="button">
      Certificate
    </label>
  </div>
  <div class="flex flex-col justify-center content-center flex-1">
    <div class="flex w-full justify-center">
      <button class="btn btn-square z-2">
        <Icon src = {DocumentText} color= 'black' class = 'opacity-12' size = '30px'/>


      </button>
    </div>
    <label class="flex text-xs w-full justify-center" for="button">
      Document
    </label>
  </div>
</div>

<style lang="postcss">
</style>
