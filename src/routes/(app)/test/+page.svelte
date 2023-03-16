<script lang="ts">
  import { page } from '$app/stores';
  import Spinner from '$lib/components/Spinner.svelte';
  import { trpc } from '$lib/trpc/client';
  let greeting = 'press the button to load data';
  let myneCardTest;
  let loading = false;

  const loadData = async () => {
    loading = true;
    greeting = await trpc($page).greeting.query();
    myneCardTest = await trpc($page).getMyneCards.query();
    loading = false;
  };
  console.log("🚀 ~ file: +page.svelte:11 ~ loadData ~ myneCardTest:", myneCardTest)
  let expanded = false; 
  $:console.log(expanded)
</script>
<div class = 'w-full h-full flex flex-col p-3 bg-slate-50'  >

  <h1 class = 'flex justify-start w-fit flex-1 font-semibold text-2xl p-3'>
    
    OFFICAL MYNE TEST ENVIORMENT 
    
  
  
  </h1>

  <div class = 'workspace-containe w-full h-full rounded-2xl relative border border-dashed border-spacing-5 border-primary '>
    <div class ='h-full w-full opacity-10 text bold text-black flex justfiy-center content-center z-0 absolute'>
      <h1 class = 'w-full h-full font-bold text-[10rem] flex justify-center content-center flex-wrap'>
          TEST AREA 
      </h1>
    </div>
    <!-- component-container -->
    <div class  = 'container w-full h-full p-3 relative'>
      <!-- build or import component -->
      <div class:expanded={expanded ? 'w-full h-full bg-black rounded-xl grid place-items-center'  :'aspect-[5/7] w-64 bg-slate-50 rounded-xl grid place-items-center' }>
        <button class = 'expand btn btn-primary' on:click={()=>{
          return expanded = !expanded;
        }}>
          Expand
        </button>
      </div>
    </div>
  </div>

</div>
