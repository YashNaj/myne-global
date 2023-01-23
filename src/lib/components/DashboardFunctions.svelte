<script lang="ts">
	import {  Database , DocumentAdd, Search, UserAdd } from "svelte-hero-icons";
	import { slide } from "svelte/transition";
	import DashboardSquareButton from "./DashboardSquareButton.svelte";

 
</script>
<div 
transition:slide={{duration:100, delay: 100}}
class= " h-auto relative w-full my-2"> 
    <div 
    transition:slide={{duration:100, delay: 100}}

    class = ' w-full rounded-lg grid grid-cols-2 grid-rows-auto h-auto gap-4'> 
        <!-- <a 
            href = '/api/import' 
            class = 'square h-full rounded-lg w-full relative'>
            <h1 class = 'h-full w-full mx-1'> 
                Import Your Cards 
            </h1>
            <Icon src = {Database} color = 'white' size = '90px' class = {'absolute bottom-0 right-0'}/>
        </a> -->
        <DashboardSquareButton  background = 'bg-error'  title = 'Import Your Cards' icon = {Database} link = 'import'/>
        <DashboardSquareButton   background = 'bg-success' title = 'Add a Card' icon = {DocumentAdd} link = 'addCard'/>
        <DashboardSquareButton   background = 'bg-warning' title = 'Search For Items' icon = {Search} link = 'search'/>
        <DashboardSquareButton   background = 'bg-info' title = 'Child ID' icon = {UserAdd} link = 'import'/>

    </div>    
 </div>
 <style lang='postcss'>
    .square{
        width: 100%; 
        aspect-ratio: 1/1; 
        backdrop-filter: blur(40px) ;
    }
    h1{
        font-size: 30px;
        font-weight: 600;

    }
 </style>
