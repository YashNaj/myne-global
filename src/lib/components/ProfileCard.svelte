<script lang="ts">
  import { Icon, Cog } from "svelte-hero-icons";

    export let user = {
        firstName: "Arnaud",
        lastName: "Pinel",

    }; 

</script>

<div class = 'flex w-32 h-auto bg-secondary p-3 rounded-lg shadow-lg'>
    <div class="avatar flex-1">
        <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src="https://placeimg.com/192/192/people" />
        </div>
      </div>  
      <div class = 'text-primary  flex-1 p-2 m-2 flex w-full text-xl content-center flex-wrap'>
        Welcome &nbsp; <span class = 'font-bold '>
            {user.firstName}
        </span> 
      
      </div>
      <div class = 'flex   h-auto w-10 flex-wrap content-end justify-center'>
        <a href = '/settings'>
          <Icon src = {Cog} color= '#002d72' size = '30'/>
        </a>
      </div>
</div>