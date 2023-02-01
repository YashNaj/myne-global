<script>
    import { horizontalSlide, logicalPropertiesHorizontalSlide } from "$lib/animationActions";
    import { quintOut } from "svelte/easing";
    import { fly } from "svelte/transition";
    export let title = ' ';
  
    import CardFlippable from "./CardFlippable.svelte";
  
  </script>
      <div in:fly={{x:1000, y:0 ,duration:100, delay: 300, }}
      out:fly={{x:-1000, y:0 ,duration: 150,  }} class = 'h-full w-full rounded-3xl  p-4 glass'>
        <div class = ' w-full rounded-3xl k p-4 flex flex-col h-full'>
          <div class = 'title h-auto  min-w-full flex px-4  justify-between'>
            <h1 class = 'font-bold flex justify-start text-white text-[5rem] md:text-[3rem] p-3'>
                {title}
            </h1>
            <div class = 'dropdown dropdown-end dropdown-bottom font-bold justify-start text-white text-[5rem] md:text-[3rem] p-3'>
              </div>
          </div>
          <div class = 'w-full glass h-full rounded-2xl flex justify-center content-center flex-wrap'>
            <div class = 'overflow-y-auto w-full h-[30rem] xl:[40rem] relative flex flex-wrap p-2 justify-center'>
              <CardFlippable />
              <CardFlippable />
              <CardFlippable />
              <CardFlippable />
              <CardFlippable />
              <CardFlippable />
              <CardFlippable />
              <CardFlippable />
              <CardFlippable />
              <CardFlippable />
              <CardFlippable />
              <CardFlippable />
              <CardFlippable />
              <CardFlippable />
              <CardFlippable />
              <CardFlippable />
              <CardFlippable />
              <CardFlippable />
              <CardFlippable />
              <CardFlippable />
              <CardFlippable />
              <CardFlippable />
              <CardFlippable />
              <CardFlippable />
              <CardFlippable />
              <CardFlippable />
              <CardFlippable />
              <CardFlippable />
              <CardFlippable />
            </div>
          </div>
        </div>
      </div>
      <style lang='postcss'>
          .vault  , .vault-content{
            background-color: rgb(87, 87, 87);
          }
          .vault-cards-scroll-content{
            background-color: gray;
          }
        </style>