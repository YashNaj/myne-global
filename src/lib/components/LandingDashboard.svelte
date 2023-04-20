<script lang="ts">
  import dashWave from "$lib/images/dashWave.svg";
  import desktopRegister from "$lib/images/desktopRegister.svg";
</script>

<div
  class="w-full md:h-[95vh] h-[100svh] bg-[rgb(243,250,255)] relative xl:px-16 md:py-6 md:px-10 p-3 flex flex-col overflow--hidden"
>
  <div class="w-full h-full absolute top-10 left-0 z-[0] md:hidden overflow-hidden">
    <img src={dashWave} alt="dashboardWave" class="w-full h-full object-cover" />
  </div>
  <div class="w-full h-full absolute top-0 left-0 z-[0] md:block hidden">
    <img src={desktopRegister} alt="desktopDashboard" class="w-full h-full object-cover" />
  </div>
  <div class="relative z-[2] flex flex-col">
    <h1
      class="h-full w-full b-2 text-black xl:text-7x md:text-6xl text-3xl font-bold z-[50] overflow-y-clip flex flex-col"
    >
      Myne Dashboard <br />
      <span class="text-primary"> Manage, Transfer, Report </span>
    </h1>
    <div class="flex p-2 w-full h-full  mt-2">
      <div class="flex justify-between">
        <div class="flex flex-col p-2 w-full h-full">
          <h1 class="font-semibold">Features including</h1>
          <ul>
            <li class="list-disc list-inside">Transfer cards to diffirent owners on sale</li>
            <li class="list-disc list-inside">Report lost or stolen cards</li>
            <li class="list-disc list-inside">Import inventories from recent purchases</li>
            <li class="list-disc list-inside">+ More</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="mockup-phone absolute scale-[40%] z-[1] left-[10rem] bottom-[-190px]">
    <div class="camera" />
    <div class="display">
      <div
        class="artboard artboard-demo phone-1 'bg-white/20 w-full h-full backdrop-blur-[300px] backdrop-brightness-105"
      >
        Hi.
      </div>
    </div>
  </div>
  <div class="absolute w-[400px] bottom-5 left-[4rem] z-[0]">
    <figure
      class="ml-auto mr-20 relative z-[1] max-w-full w-[50rem] h-auto rounded-b-lg shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] dark:shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)]"
    >
      <div class="relative flex items-center max-w-[50rem] bg-gray-800 rounded-t-lg py-2 px-24 dark:bg-gray-700">
        <div class="flex space-x-1 absolute top-2/4 left-4 -translate-y-1">
          <span class="w-2 h-2 bg-gray-600 rounded-full dark:bg-gray-600" />
          <span class="w-2 h-2 bg-gray-600 rounded-full dark:bg-gray-600" />
          <span class="w-2 h-2 bg-gray-600 rounded-full dark:bg-gray-600" />
        </div>
        <div
          class="flex justify-center items-center w-full h-full bg-gray-700 text-[.25rem] text-gray-400 rounded-sm sm:text-[.5rem] dark:bg-gray-600 dark:text-gray-400"
        >
          www.myneglobal.com
        </div>
      </div>

      <div class="bg-gray-800 rounded-b-lg h-[200px]">
        <div class="bg-white/20 w-full h-full backdrop-blur-[300px] backdrop-brightness-105 rounded-b-md" />
      </div>
    </figure>
  </div>
  <div class="flex p-2 w bg-transparent mt-2">
    <div class="flex justify-between">
      <div class="flex bg-transparent flex-col p-2 w-full h-fit relative ">
        <h1 class="font-semibold">Categories including</h1>
        <ul >
          <li class="list-disc list-inside">Jewlery</li>
          <li class="list-disc list-inside">Watches</li>
          <li class="list-disc list-inside">Tech</li>
          <li class="list-disc list-inside">Crypto</li>
          <li class="list-disc list-inside">Pets</li>
          <li class="list-disc list-inside">+ Much more</li>
        </ul>
      </div>
    </div>
  </div>
</div>
