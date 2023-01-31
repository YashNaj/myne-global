<script>
    import { horizontalSlide, logicalPropertiesHorizontalSlide } from "$lib/animationActions";
    import { quintOut } from "svelte/easing";
    import { fly } from "svelte/transition";
    export let title = ' ';
  
    import CardFlippable from "./CardFlippable.svelte";
  
  </script>
      <div in:fly={{x:-1000, duration: 200, delay: 250, easing:quintOut }}
      out:fly={{x:1000, duration: 250, easing:quintOut}} class = 'h-[60rem] lg:h-[39rem] w-full rounded-3xl  p-4 glass'>
        <div class = 'content flex flex-col w-full rounded-2xl '>
          <div class = 'title h-auto  min-w-full flex px-4  justify-between'>
            <h1 class = 'font-bold flex justify-start text-white text-[5rem] md:text-[3rem] p-3'>
                {title}
            </h1>
            <div class = 'dropdown dropdown-end dropdown-bottom font-bold justify-start text-white text-[5rem] md:text-[3rem] p-3'>
              </div>
          </div>
        </div>
        <div class = 'h-auto w-full bg-black relative'/>

      </div>
      <style lang='postcss'>
          .vault  , .vault-content{
            background-color: rgb(87, 87, 87);
          }
          .vault-cards-scroll-content{
            background-color: gray;
          }
        </style>