<script lang="ts">
  import PageContainer from "$lib/components/PageContainer.svelte";

  import ChildId from "$lib/components/ChildId.svelte";
  import CardFlippable from "$lib/components/CardFlippable.svelte";
  import SwiperStandard from "$lib/components/SwiperStandard.svelte";
</script>

  <PageContainer>
    <div class = 'flex flex-col relative w-fit h-fit justify-center content-center flex-wrap pt-10'>
     <div class = 'flex justify-center pt-10'>
      <CardFlippable/>
     </div>
    <SwiperStandard/>
  
    </div>
    
  </PageContainer>
