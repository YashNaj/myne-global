<script lang="ts">
  import reportWave from "$lib/images/reportWave.svg";
  import desktopRegister from "$lib/images/desktopRegister.svg";
</script>

<div class="w-full md:h-[95vh] h-[60vh] bg-[rgb(243,250,255)] relative xl:px-16 md:py-6 md:px-10 p-3">
  <div class="w-full h-full overflow-y-hidden absolute top-3 left-10 scale-[130%] z-[0] md:hidden">
    <img src={reportWave} alt="reposrtWave" class="w-full h-full object-cover" />
  </div>
  <div class="w-full h-full absolute top-0 left-0 z-[0] md:block hidden">
    <img src={desktopRegister} alt="desktopDashboard" class="w-full h-full object-cover" />
  </div>
  <h1 class="text-black xl:text-7x md:text-6xl text-3xl font-bold relative">
    History Reports <br /> <span class="text-primary"> Avoid the headaches. </span> <br />
  </h1>
  <h1 class = 'font-semibold text-primray relative'>
    Purchase reports to track repair history, sales, owners and more. Generate certificates for your own items. Never make an uniformed purchase again. 
  </h1>
</div>
