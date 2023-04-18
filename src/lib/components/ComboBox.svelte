<script lang='ts'>
    import Select from 'svelte-select';
    import { myneMasterBrandsAndBreeds } from '$lib/utils/myneMasterBrandsAndBreeds';  
    let jewlery = myneMasterBrandsAndBreeds[0].brands
    let collection = [
 
        'one', 'two', 'three'
    ];
    export let items: string[]
    export let justValue:string;
    export let field: string; 
    export let placeholder: string; 
</script>


<Select placeholder = {placeholder} class="select text-black w-full mt-2 " items={items} on:change={()=>{field = justValue}} bind:justValue />

<p>justValue: {justValue}</p>
<p>category: {field}</p>
<style lang='postcss'>

</style>