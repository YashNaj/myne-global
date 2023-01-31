<script>
  import { horizontalSlide, logicalPropertiesHorizontalSlide } from "$lib/animationActions";
  import { quintOut } from "svelte/easing";
  import { fly } from "svelte/transition";


  import CardFlippable from "./CardFlippable.svelte";

</script>
    <div  in:fly={{x:-1000, duration: 100, delay: 150 }}
    out:fly={{x:1000, duration: 150}} class = 'vault h-[60rem] lg:h-[39rem]  w-full rounded-3xl k p-4'>
      <div class = 'vault-content h-[100%] flex flex-col w-full rounded-2xl '>
        <div class = 'vault-title h-auto  min-w-full flex px-4  justify-between'>
          <h1 class = 'font-bold flex justify-start text-white text-[5rem] md:text-[3rem] p-3'>
            Card Vault 
          </h1>
          <div class = 'dropdown dropdown-end dropdown-bottom font-bold justify-start text-white text-[5rem] md:text-[3rem] p-3'>
            <label    tabindex="0" for = 'categoriesSelect' class="btn normal-case btn-ghost flex flex-col  h-full  text-white text-[5rem] md:text-[3rem] ">All Categories</label>
            <ul name = 'categoriesSelect' tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><a href = '/'>Item 1</a></li>
              <li><a href= '/'>Item 2</a></li>
            </ul>
            </div>
        </div>
        <div class = 'vault-cards w-full h-[100%] rounded-3xl'>
          <div class = 'vault-cards-scroll w-full h-[90%] relative rounded-2xl overflow-hidden px-8 py-5 '>
            <div class = 'max-h-full vault-cards-scroll-content bg-vault relative w-full 
            grid grid-cols-4 grid-rows-auto 2xl:gap-1 xl:gap-2 lg:gap-[1rem] 2xl:grid-cols-7 xl:grid-cols-7 lg:grid=cols-7 md:grid-cols-7 place-items-center rounded-xl p-3 glass overflow-y-auto'>
              <CardFlippable/>
              <CardFlippable/>
              <CardFlippable/>
              <CardFlippable/>
              <CardFlippable/>
              <CardFlippable/>
              <CardFlippable/>
              <CardFlippable/>
              <CardFlippable/>
              <CardFlippable/>
              <CardFlippable/>
              <CardFlippable/>
              <CardFlippable/>
              <CardFlippable/>

      <!--         <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>        -->         
            </div>
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