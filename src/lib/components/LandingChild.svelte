<script lang="ts">
  import childwave from "$lib/images/childwave.svg";
  import homeWaveDesktop from "$lib/images/homeWaveDesktop.svg";
  import CardStaticChild from "./CardStaticChild.svelte";
  import CardStaticStolen from "./CardStaticStolen.svelte";
  let staticChild = {
    category: "childid",
    childIdFirstName: "Melanie",
    childIdLastName: "Kanata",
    childIdMiddleName: "Rose",
    eye_color: "Brown",
    hair_color: "Black",
    height: "4ft 2in",
    pictures: ['']
  }
</script>

<div class="w-full md:h-[95vh] h-[60vh] bg-[rgb(243,250,255)] relative xl:px-16 md:py-6 md:px-10 p-3">
  <div class="w-full h-full rotate-80 absolute top-48 left-0 z-1 md:hidden overflow-hidden">
    <img src={childwave} alt="childwave" class="w-full h-full object-cover" />
  </div>
  <div class="w-full h-full rotate-80 absolute top-0 left-0 z-1 md:block hidden overflow-y-hidden">
    <img src={homeWaveDesktop} alt="homeWave" class="w-full h-full object-cover" />
  </div>
  <h1 class="text-black xl:text-7x md:text-6xl text-3xl font-bold relative">
    Child ID <br />
    <span class="text-primary"> Advanced Piece of Mind. </span>
  </h1>
  <h1 class = 'font-semibold'>
    Create an encrypted record of your child's pertinent information, share it with family or in case of emergency.
  </h1>
  <div class=" child-card-container flex justify-center">
    <div class="scale-[70%]">
      <CardStaticChild staticPicture = 'https://images.pexels.com/photos/1096147/pexels-photo-1096147.jpeg'
      cardProps={staticChild}/>
    </div>
  </div>
</div>
