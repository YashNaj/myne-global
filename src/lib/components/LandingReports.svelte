<script lang="ts">
  import reportWave from "$lib/images/reportWave.svg";
  import desktopRegister from "$lib/images/desktopWave_5.svg";
  import samplePdf from "$lib/images/samplePdf.png";
</script>

<!--mobile-->
<div
  class="w-full md:h-[95vh] h-[70vh] bg-[rgb(243,250,255)] relative xl:px-16 md:py-6 md:px-10 p-3 overflow-hidden md:hidden"
>
  <div class="w-full h-full overflow-y-hidden absolute top-3 left-10 scale-[130%] z-[0] md:hidden">
    <img src={reportWave} alt="reposrtWave" class="w-full h-full object-cover" />
  </div>
  <div class="w-full h-full absolute top-0 left-0 z-[0] md:block hidden">
    <img src={desktopRegister} alt="desktopDashboard" class="w-full h-full object-cover" />
  </div>
  <h1 class="text-black xl:text-7x md:text-6xl text-3xl font-bold relative">
    History Report <br /> <span class="text-primary"> Be confident with your purchases. </span> <br />
  </h1>
  <h1 class="font-semibold text-primray relative">
    Request a History Report to keep track of ownership history, service & repair records, item status, and more...
    Never again make a purchase without all the information you need.
  </h1>
  <div class="w-fit h-80 overflow-hidden absolute z-[2] top-80 left-10">
    <img src={samplePdf} />
  </div>
</div>
<!--desktop-->
<div
  class="w-full md:h-[95vh] h-[70vh] bg-[rgb(243,250,255)] relative xl:px-16 md:py-6 md:px-10 p-3 overflow-hidden md:block hidden"
>
  <div class="w-full h-full absolute top-20 left-0 z-[0] md:block hidden">
    <img src={desktopRegister} alt="desktopDashboard" class="w-full h-full object-cover" />
  </div>
  <h1 class="text-black xl:text-7x md:text-6xl text-3xl font-bold relative">
    History Report <br /> <span class="text-primary"> Be confident with your purchases. </span> <br />
  </h1>
  <h1 class="font-semibold text-primray relative text-2xl">
    <br />
    Request a History Report to keep track of ownership history, service & repair records, <br /> item status, and
    more....
    <br />
    <br />
    Never again make a purchase without all the information you need.
  </h1>
  <div class="w-[700px] h-auto overflow-hidden absolute z-[2] bottom-[-40rem] right-0">
    <img src={samplePdf} />
  </div>
</div>
