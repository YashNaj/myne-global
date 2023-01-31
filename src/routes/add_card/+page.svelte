
<script lang="ts">
    import { onMount } from "svelte";
    import { fade, fly, slide } from "svelte/transition";
    import { Icon, Photograph } from "svelte-hero-icons";
    import { enhance } from "$app/forms";
  import AddCard from "$lib/components/AddCard.svelte";
    export let selectedCategory = null;
    export let subcategories = [];
    export let form : {message?:string};
    let page = 0;
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
    ];
    onMount(() => {
      subcategories = categories[0].subCategories;
      selectedCategory = categories[0].name;
    });
  
    function handleCategoryChange(e) {
      selectedCategory = e.target.value;
      subcategories = categories.find(
        (category) => category.name === selectedCategory
      ).subCategories;
    }
  
    let category = "Category";
    let subCategory = "Subcategory";
    let brand = "Brand";
    let size = "Size";
    let purchasedFrom = "Purchased from";
    let purchasedValue = "Purchased value";
    let description = "Keep the description to a few words";
    let iconColor = "black";
  </script>
  <div class = 'flex justify-center flex-wrap content-center w-full h-full'>
      <AddCard/>
    </div>
  <style lang="postcss">
    .upload-pictures {
      background: rgba(44, 41, 41, 0.514);
    }
  </style>
  