<script lang="ts">
  import { onMount } from "svelte";
  import { fade, fly, slide } from "svelte/transition";
  import { Icon, Photograph } from "svelte-hero-icons";
  import { enhance } from "$app/forms";
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

<div class=" w-full px-2 h-[80vh] relative rounded-lg">
  <h1 class = 'flex text-white font-bold'>
    Add A Card | Enter Card Info
  </h1>
  <div
    class="card-list w-full flex justify-center pt-10 content-center relative h-80 "
  >
    <div class="card-item bg-white rounded-lg shadow-lg w-72 h-[26rem] z-2 ">
      <div class="w-full h-[50%] bg-error rounded-t-lg  ">
        <div class="w-full h-full  p-3">
          <div class="upload-pictures w-full h-full rounded-md shadow-md">
            <Icon src={Photograph} color={iconColor} class="opacity-20" />
          </div>
        </div>
        <div
          class="w-full h-full rounded-b-lg p-3 px-5 flex flex-col  justify-start"
        >
          <div class="flex w-full justify-between flex-1">
            <div class="flex w-full justify-between">
              <div class="flex w-full justify-between ">
                <div class=" flex flex-col flex-1 w-full h-full">
                  <div class="flex w-full justify-start">
                    <span class="label-tex text-xs font-bold">Category</span>
                  </div>
                  <div class="text-xs flex">
                    {category}
                  </div>
                </div>
                <div transition:fly class=" flex flex-col flex-1 w-full h-full">
                  <div class="flex w-full justify-end">
                    <span class="label-tex text-xs font-bold">Subcategory</span>
                  </div>
                  <div class="text-xs flex justify-end">
                    {subCategory}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex w-full justify-between my-3 flex-1">
            <div class="flex w-full justify-between">
              <div class="flex w-full justify-between ">
                <div class=" flex flex-col flex-1 w-full h-full">
                  <div class="flex w-full justify-start">
                    <span class="label-tex text-xs font-bold">Brand</span>
                  </div>
                  <div class="text-xs flex">
                    {brand}
                  </div>
                </div>
                <div transition:fly class=" flex flex-col flex-1 w-full h-full">
                  <div class="flex w-full justify-end">
                    <span class="label-tex text-xs font-bold">Size</span>
                  </div>
                  <div class="text-xs flex justify-end">
                    {size}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex w-full justify-between my-3 flex-1">
            <div class="flex w-full justify-between">
              <div class="flex w-full justify-between ">
                <div class=" flex flex-col flex-1 w-full h-full">
                  <div class="flex w-full justify-start">
                    <span class="label-tex text-xs font-bold"
                      >Purchased From</span
                    >
                  </div>
                  <div class="text-xs flex">
                    {purchasedFrom}
                  </div>
                </div>
                <div class=" flex flex-col flex-1 w-full h-full">
                  <div class="flex w-full justify-end">
                    <span class="label-tex text-xs font-bold"
                      >Purchased Value</span
                    >
                  </div>
                  <div class="text-xs flex justify-end">
                    {purchasedValue}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex w-full justify-between my-3 flex-1">
            <div class="flex w-full justify-between">
              <div class="flex w-full justify-between ">
                <div class=" flex flex-col flex-1 w-full h-full">
                  <div class="flex w-full justify-start">
                    <span class="label-tex text-xs font-bold">Description</span>
                  </div>
                  <div class="text-xs flex">
                    {description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class = 'flex w-full justify-center'>
    <form
    use:enhance={({data})=>{
        form = {}
        category      = data.get('category')?.toString() || ''
        subCategory   = data.get('subCategory')?.toString() || ''
        brand         = data.get('brand')?.toString() || ''
        size          = data.get('size')?.toString() || ''
        purchasedFrom = data.get('purchasedFrom')?.toString() || ''
        purchasedValue= data.get('purchasedValue')?.toString() || ''
        description   = data.get('description')?.toString() || ''
       console.log(form)
    }}
    method = 'POST' 
    action = "/api/addCards"
   class="h-auto w-full p-4 pt-40 bg-white flex flex-col justify-between flex-wrap rounded-lg md:w-[30rem] lg:w-[40rem]"
   >
 
     <div class="w-full  flex  justify-between  ">
       {#if page === 0}
       <div class="flex w-full "       in:slide={{delay: 100, duration: 100}}
       out:slide={{delay:100}}  >
     
       <select
       bind:value={category}
   
       id="dropdown-add-card"
       class="select flex-1 w-full"
       name="category"
       placeholder="Category"
       on:change={handleCategoryChange}
     >
       <option selected disabled placeholder="Category">Category</option>
 
       {#each categories as category}
         <option value={category.name}>{category.name}</option>
       {/each}
     </select>
     <select bind:value={subCategory} class="select flex-1 w-full"  >
       <option selected disabled placeholder="Subcategory"
         >Subcategory</option
       >
 
       {#each subcategories as subcategory}
         <option selected value={subcategory}>{subcategory}</option>
       {/each}
     </select>
       </div>
         
       {/if}
     </div>
     {#if page === 1}
     <div class="w-full  flex  justify-between  "     >
       <div class="flex"
       in:slide={{delay: 100, duration: 100}}
       out:slide={{delay:100}}      >
         <div class="form-control w-full max-w-xs flex-1 mx-1">
           <label class="label" for = "brand">
             <span class="label-text font-bold ">Brand</span>
           </label>
           <input
             type="text"
             name = "brand"
             placeholder = '"Rolex ... etc"'
             class=" input input-sm shadow-sm input-bordered w-full max-w-xs"
             bind:value={brand}
 
           />
         </div>
         <div class="form-control w-full max-w-xs flex-1 mx-1 ">
           <label class="label flex w-full justiy-end text-right" for = 'size'>
             <span class="label-text font-bold flex w-full justiy-end text-right">Size</span>
           </label>
           <input
             type="text"
             name="size"
             placeholder="Size"
             class=" input input-sm shadow-sm input-bordered w-full max-w-xs"
             bind:value={size}
           />
         </div>
       </div>
       </div>
     {/if}
     {#if page === 2}
     <div class="w-full  flex  justify-between  "     >
       <div class="flex"
       in:slide={{delay: 100, duration: 100}}
       out:slide={{delay:100}}      >
         <div class="form-control w-full max-w-xs flex-1 mx-1">
           <label class="label" for = "purchasedFrom">
             <span class="label-text font-bold ">Purchased From</span>
           </label>
           <input
             type="text"
             name = "purchasedFrom"
             placeholder = '"Rolex ... etc"'
             class=" input input-sm shadow-sm input-bordered w-full max-w-xs"
             bind:value={purchasedFrom}
 
           />
         </div>
         <div class="form-control w-full max-w-xs flex-1 mx-1">
           <label class="label flex w-full justiy-end text-right" for = 'size'>
             <span class="label-text font-bold flex w-full justiy-end text-right">Purchased Value</span>
           </label>
           <input
             type="text"
             name="purchasedValue"
             placeholder="Size"
             class=" input input-sm shadow-sm input-bordered w-full max-w-xs"
             bind:value={purchasedValue}
           />
         </div>
       </div>
       </div>
     {/if}
 
     {#if page === 3}
     <div class="flex w-full justify-between "
     >
       <div class="form-control w-full max-w-xs flex-1 mx-1"
       in:slide={{delay: 100, duration: 100}}
       out:slide={{delay:100}}>
         <label class="label" for = "description" >
           <span class="label-text font-bold ">Description</span>
         </label>
         <input
           type="text"
           name = "decription"
           placeholder = 'Keep it short!'
           class=" input input-sm shadow-sm input-bordered w-full max-w-xs"
           bind:value={description}
         />
       </div>
     </div>
     {/if}
 
     {#if page === 4 }
     <div class = 'flex flex-col w-full'
     in:slide={{delay: 100, duration: 100}}
     out:slide={{delay:100}} 
     >
       <h1 class = 'flex w-full justify-center font-bold'>Upload Cetificates or Reciepts if necessary</h1>
       <input type="file" class="file-input w-full max-w-xs normal-case" />
     </div>
     {/if}
     {#if page ===5}
      <h1 class = 'flex justify-center w-full font-bold'>
       Review Your Details and Submit! 
     </h1>
     {/if}
 
 
     <div class="w-full flex self-end my-2">
       <div>
         
       </div>
       {#if page > 0}
         <button
         type="button"
           on:click={() => {
             page === page--;
           }}
           class="btn ghost flex-1 normal-case shadow-s bg-error">Previous page</button
         >
       {/if}
       {#if page === 0 || page < 5}
       <button
         type="button"
         on:click={() => {
           page === page++;
         }}
         class="btn ghost flex-1 normal-case shadow-sm">Next</button
       >
       {/if}
       {#if page === 5 }
             <button
         type="submit"
         on:click={() => {
         }}
         class="btn btn-success ghost flex-1 normal-case shadow-sm">Submit</button>
       {/if}
     </div>
   </form>
    </div>
 
</div>

<style lang="postcss">
  .upload-pictures {
    background: rgba(44, 41, 41, 0.514);
  }
</style>
