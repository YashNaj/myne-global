<script lang="ts">
  import MyneVideos from "$lib/components/MyneVideos.svelte";

</script>
<div class="w-screen h-full flex flex-col">
  <div class="w-full md:h-[80vh] h-[44vh] bg-[rgb(243,250,255)] relative md:py-6 md:px-10 p-3">
    <h1 class="text-black md:text-7xl text-3xl font-bold">
      Think <span class="text-primary"> Safety. </span><br />
      Your valuables secured.
    </h1>
  </div>
  <div class="w-full md:h-[80vh] h-[44vh] bg-[rgb(243,250,255)] relative md:py-6 md:px-10 p-3">
    <h1 class="text-black md:text-7xl text-3xl font-bold">
      If it matters <br />
      <span class="text-primary"> Register it. </span>
    </h1>
  </div>
  <div class="w-full md:h-[80vh] h-[44vh] bg-[rgb(243,250,255)] relative md:py-6 md:px-10 p-3">
    <h1 class="text-black md:text-7xl text-3xl font-bold">
      Myne Dashboard <br />
      <span class="text-primary"> Manage, Transfer, Report </span>
    </h1>
  </div>
  <div class="w-full md:h-[80vh] h-[44vh] bg-[rgb(243,250,255)] relative md:py-6 md:px-10 p-3">
    <h1 class="text-black md:text-7xl text-3xl font-bold">
      Buy With <span class="text-primary"> Confidence </span> <br />
    </h1>
  </div>
  <div class="w-full md:h-[80vh] h-[44vh] bg-[rgb(243,250,255)] relative md:py-6 md:px-10 p-3">
    <h1 class="text-black md:text-7xl text-3xl font-bold">
      Child ID <br />
      <span class="text-primary"> Advanced Piece of Mind. </span>
    </h1>
  </div>
  <div class="w-full md:h-[80vh] h-full bg-[rgb(243,250,255)] relative md:py-6 md:px-10 p-3 overflow-x-hidden">
    <h1 class="text-black md:text-7xl text-3xl font-bold">
      Guides <br />
    </h1>
    <p class = 'font-semibold mt-2'>
      A curated list of videos to help you understand the Myne platform and how to use it.
    </p>
    <MyneVideos />
  </div>
 

  <div class="w-full h-[44vh] bg-green-100">ok</div>
  <div class="w-full h-[44vh] bg-blue-100">ok</div>
</div>
