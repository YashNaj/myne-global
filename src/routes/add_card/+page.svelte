<script lang="ts">
  import { enhance } from "$app/forms";
  import AddCard from "$lib/components/AddCard.svelte";
  import CardFlippable from "$lib/components/CardFlippable.svelte";
  export let selectedCategory = null;

  const categories = {
    jewelry: {
      subcategory: [
        "bracelet",
        "brooch",
        "charm",
        "cufflinks",
        "earrings",
        "engagement ring",
        "high jewelry",
        "necklace",
        "pendant",
        "ring",
        "wedding band",
        "other jewelry",
      ],
      brand: "default",
    },
    watch: { subcategory: "default", brand: "default" },
    art: {
      subcategory: [
        "bowl",
        "table art",
        "painting",
        "sculpture",
        "vase",
        "other art",
      ],
      brand: "default",
    },
    leather_goods: {
      subcategory: [
        "briefcase",
        "evening bag",
        "exotic",
        "handbag",
        "made to order",
        "purse",
        "shoulder bag",
        "tote",
        "travel bag",
        "trunk",
        "other leather goods",
      ],
      brand: "default",
    },
    guns: {
      subcategory: [
        "assault riffle",
        "machine gun",
        "revolver",
        "rifle/carbine",
        "pistol",
        "shotgun",
        "sub-machine gun",
        "other gun",
      ],
      brand: "default",
    },
    technology: {
      subcategory: [
        "camera",
        "cell phone",
        "computer",
        "Headphones/Earphones/Audio",
        "tablets",
        "watch",
        "drone",
        "other technology",
      ],
      brand: "default",
    },
    trading_card: {
      subcategory: [
        "baseball",
        "basketball",
        "football",
        "hockey",
        "soccer",
        "other trading card",
      ],
      brand: "default",
    },
    collectibles: {
      subcategory: [],
      brand: "default",
    },
    crypto: {
      subcategory: ["coin", "token", "other crypto"],
      brand: "default",
    },
    nft: {
      subcategory: [
        "nft digital artwork",
        "nft game asset",
        "nft music",
        "nft video",
        "other nft",
      ],
      brand: "default",
    },

    vintage: { subcategory: "default", brand: "default" },
    motor_vehicle: {
      subcategory: ["automobile", "motorcycle"],
      brand: "default",
    },
    animal: {
      subcategory: ["bird", "cat", "dog", "other animal"],
      brand: "default",
    },
    child_id_kit: { subcategory: ["child id kit"], brand: "default" },
    clothing: {
      brand: [""],
    },
    sneakers: {
      brand: [""],
    },
    other: { subcategory: "default", brand: "default" },
  };  
    function handleCategoryChange(e) {
    selectedCategory = e.target.value;
  }
  function getCapitalizedKeys(obj: any) {
    return Object.keys(obj).map((key) => {
      let capitalizedKey = key.replace(/_/g, " ");
      capitalizedKey = capitalizedKey
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      return capitalizedKey;
    });
  }
  function getSubcategory(obj, key) {
  const subcategory = obj[key]?.subcategory || "default";
  return Array.isArray(subcategory)
    ? subcategory.map((word) => word.toLowerCase().replace(/\b(\w)/g, (letter) => letter.toUpperCase()))
    : subcategory;
}


  export let form: { message?: string };
  let category = "Category";
  let subCategory = "Subcategory";
  let brand = "Brand";
  let size = "Size";
  let purchasedFrom = "Purchased from";
  let purchasedValue = "Purchased value";
  let description = "Keep the description to a few words";
  const addCardFields = [

    "brand",
    "size",
    "purchasedFrom",
    "purchasedValue",
    "description",
  ];
  const categoryArray = getCapitalizedKeys(categories);

const subcategoryArray = getSubcategory(categories, category); 
const colors = new Map
  ([  ['Jewlery', 'jewlery'],
  ['Watches', 'watches'],
  ['Art', 'art'],
  ['Leather Goods', 'leather'],
  ['Clothes', 'clothes'],
  ['Sneakers', 'sneakers'],
  ['Guns', 'gun'],
  ['Technology', 'technology'],
  ['Trading Cards', 'trading'],
  ['Collectibles', '#collectibles'],
  ['Crypto', 'crypto'],
  ['NFT', 'nft'],
  ['Vintage', 'vintage'],
  ['Motor Vehicles', 'motor'],
  ['Animal', 'animal'],
  ['Child ID', 'childId'],
  ['Other', 'other']
]);

  let flipped = false;
</script>

<div
  class="w-full h-full flex flex-col justify-start  content-center p-3"
>
  <div class="add-card-form-container w-[90%] h-[90%] bg-black">
    <CardFlippable
      {category}
      {subCategory}
      {brand}
      {size}
      {purchasedFrom}
      {purchasedValue}
      {description}

    />
  </div>
  <form method="POST" use:enhance class="flex flex-col">
    <select
              bind:value={category}
              id="dropdown-add-card"
              class="select flex-1 w-full"
              name="category"
              placeholder="Category"
              on:change={handleCategoryChange}
            >
              <option selected disabled placeholder="Category">Category</option>

              {#each categoryArray as category}
                <option value={category}>{category}</option>
              {/each}
            </select>
            <select bind:value={subCategory} class="select flex-1 w-full">
              <option selected disabled placeholder="Subcategory"
                >Subcategory</option
              >

              {#each subcategoryArray as subcategory}
                <option selected value={subcategory}>{subcategory}</option>
              {/each}
            </select>
    {#each addCardFields as addCardField}
      <input
        name={addCardField}
        id={addCardField}
        placeholder={addCardField}
        class="input-md "
      />
    {/each}
    <input type = 'submit' name = 'submit' value = 'Add Card' class='btn btn-primary normal-case'/>
  </form>
</div>

<style lang="postcss">
</style>
