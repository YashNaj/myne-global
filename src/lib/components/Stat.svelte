<script lang="ts">
  export let brand = "";
  export let reference_ = "";
  export let model = "";
  export let serialNumber = "";
  let stolen = false
  import test_watch_placeholder from '../images/test_watch_placeholder.png'
</script>

<div class="stats h-64 xl:h-96 lg:h-80 xl:w-[50rem] md:w-[30rem] sm:w-[2] lg:w-[50rem] shadow shadow-custom relative">
  <div class = 'w-full h-full flex-wrap'>
    <div class="stat">
      <div class = 'flex w-full h-full'> 
        <div class="stat-value h-full xl:text-[4rem] lg:text-[2.5rem] text-primary font-bold text-left text-[1.5rem] flex-1 flex flex-col justify-center content-start flex-wrap pt-3">
          {brand}
        </div>
        <div class= ' flex flex-col justify-center content-center flex-wrap'>
          <div class="badge badge-primary w-full badge-outline ">
            Watch
          </div>
          {#if stolen}
          <div class="badge badge-error">STOLEN</div>
          {/if}
  
        </div>
    
      </div>
      <div class = 'spacer h-3 xl:h-14 lg:h-10'></div>
      <div class = 'relative flex flex-col'>
        <div class="stat-labels xl:text-3xl lg:text-xl  font-bold text-primary stat-title">Serial</div>
        <div class="stat-title  xl:text-3xl lg:text-xl text-primary">{serialNumber}</div>
        <div class="stat-labels xl:text-3xl lg:text-xl  font-bold text-primary stat-title">Model</div>
        <div class="stat-title  xl:text-3xl lg:text-xl text-primary">{model}</div>
        <div class="stat-labels xl:text-3xl lg:text-xl  font-bold text-primary stat-title">Reference</div>
        <div class="stat-title  xl:text-3xl lg:text-xl text-primary">{reference_}</div>
        <div class = 'flex justify-end nded-3xl w-[8.75rem] h-[8.75rem] xl:h-[20rem] xl:w-[20rem] lg:h-[13rem] lg:w-[13rem] absolute lg:bottom-[-.8rem] xl:bottom-[-1rem] bottom-0 right-6'>
          <img src={test_watch_placeholder} alt = 'test_watch_placeholder' class="max-w-full max-h-full" />
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  .shadow-custom {
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  }
</style>
