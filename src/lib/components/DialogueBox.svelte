<script lang="ts">

  import { onMount } from 'svelte';
  export let selectedCategory = null;
  export let subcategories = [];


 
  const categories = [
    {
      name: "Jewlery",
      subCategories: ["High Jewlery", "Fine Jewlery", "Fashion Jewelry"],
    },

    {
      name: "Watches",
      subCategories: ["Women's Watches", "Men's Watches"],
    },

    {
      name: "Art",
      subCategories: ["Paintings", "Sculptures", "Table Art"],
    },
    {
      name: "Leather Goods",
      subCategories: [
        "Totes",
        "Purses",
        "Evening Bags",
        "Handbags",
        "Shoulder Bags",
        "Travel Bags",
        "Trunks",
        "Briefcase",
        "Other",
      ],
    },
    {
      name: "Guns",
      subCategories: [
        "Revolvers",
        "Pistols",
        "Shotguns",
        "Rifles/Carbines",
        "Assault Rifles",
        "Sub Machine Guns",
        "Machine Guns",
        "Other",
      ],
    },
    {
      name: "Technology",
      subCategories: [
        "Computers",
        "Tablets",
        "Watches",
        "Cell Phones",
        "Cameras",
        "Earphones",
      ],
    },
    {
      name: "Trading Cards",
      subCategories: ["Baseball", "Football", "Basketball", "Soccer", "Hockey"],
    },
    {
      name: "Crypto",
      subCategories: ["CryptoCurrency", "Tokens"],
    },
    {
      name: "NFT",
      subCategories: [
        "NFT Digital Works",
        "NFT Videos",
        "NFT Game Assets",
        "NFT Music",
      ],
    },
    { name: "Vintage", subCategories: [] },
    { name: "Automobile", subCategories: [] },
    { name: "Animal", subCategories: ["Dog", "Cat", "Bird", "Other"] },
    { name: "Child ID Kit", subCategories: [] },
  ]
  onMount(() => {
    subcategories = categories[0].subCategories;
    selectedCategory = categories[0].name;
  });

  function handleCategoryChange(e) {
    selectedCategory = e.target.value;
    subcategories = categories.find(category => category.name === selectedCategory).subCategories;
  }

</script>
<div class ='z-2 flex  justify-between w-full'>

    
    <select class ='select flex-1 w-full' on:change={handleCategoryChange}>
      {#each categories as category}
        <option  value={category.name}>{category.name}</option>
      {/each}
    </select>
    <select class = 'select flex-1 w-full'>
      {#each subcategories as subcategory}
        <option  value={subcategory}>{subcategory}</option>
      {/each}
    </select>
    
      
      
</div>


<style lang='postcss'>
    :global(){
        display: flex; 
        overflow-y: auto ;
        overflow-x: hidden;
    }
</style>