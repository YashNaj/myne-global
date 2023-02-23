{#if pageCount === 0}
<div class="w-full h-full relative">
  <div
    class="first-selects w-full h-full absolute flex flex-col"
    transition:fly={{ x: -100 }}
  >
    <!-- <div class="select-group "> -->
    <Select
      placeholder="Category"
      class="select text-black w-full mt-2 "
      items={categories.map((categories) =>
        firstCapital(categories)
      )}
      on:change={() => {
        category = justValue;
        subcategory = "";
      }}
      bind:justValue
    />

    <div in:fly|local={{ duration: duration }} out:fly|local>
      <div class="select-group">
        <Select
          placeholder="Subcategory"
          class="select text-black w-full mt-2 "
          items={subcategories?.map((subcategories) =>
            firstCapital(subcategories)
          )}
          on:change={() => {
            subcategory = justValue;
          }}
          bind:justValue
        />
      </div>
    </div>
  </div>
</div>
{:else if pageCount === 1}
<div class="w-full h-full relative flex flex-col ">
  <div
    class="brand-breed h-full w-full flex flex-col  absolute"
    transition:fly={{ x: -100 }}
  >
    <Select
      placeholder="Breed"
      class="select text-black w-full mt-2 "
      items={breeds?.map((breed) => firstCapital(breed))}
      on:change={() => {
        breed = justValue;
      }}
      bind:justValue
    />
    <!-- <ComboBox formName="brand" options={brands} id="brand" /> -->
    <Select
      placeholder="Brand"
      class="select text-black w-full mt-2 "
      items={brands?.map((brand) => firstCapital(brand))}
      on:change={() => {
        brand = justValue;
      }}
      bind:justValue
    />
    <Select
    placeholder="Size" class="select text-black w-full mt-2 " items={sizes?.map(
      (size) => firstCapital(size)
    )}
    on:change={() => {
      size = justValue;
    }}
    bind:justValue on:focus={() => (flipped = false)}
    on:focus={() => (brandFilterOpen = false)}
    />
  </div>
</div>
{:else if pageCount === 2}
<div class="w-full h-full relative">
  <div
    class="purchased h-[100px] w-full flex flex-col absolute"
    transition:fly={{ x: -100 }}
  >
    <input
      type="text"
      name="purchasedFrom"
      id="purchasedFrom"
      placeholder="Purchased From"
      class="input input-md mt-2 "
      bind:value={purchasedFrom}
      on:focus={() => (flipped = true)}
      on:abort={() => (flipped = false)}
    />
    <input
      type="string"
      name="purchasedValue"
      id="purchasedValue"
      placeholder="Purchased Value"
      class="input input-md mt-2 "
      bind:value={purchasedValue}
      on:focus={() => (flipped = true)}
      on:abort={() => (flipped = false)}
    />
  </div>
</div>
{:else if pageCount === 3}
<div class="w-full h-full relative">
  <div
    class="description absolute  h-full w-full flex flex-col  "
    transition:fly={{ x: -100 }}
  >
    <input
      type="text"
      name="description"
      id="description"
      placeholder="Description"
      class="input input-md mt-2 "
      bind:value={description}
      on:focus={() => (flipped = true)}
      on:abort={() => (flipped = false)}
    />
  </div>
</div>
{:else if pageCount === 4}
<div
  class="w-full h-full relative flex justify-center flex-wrap content-center"
>
  <div
    class="document-upload absolute"
    transition:fly={{ x: -100 }}
  >
    <input
      type="file"
      class="file-input w-full flex justify-center"
    />
  </div>
</div>
{:else if pageCount === 5}
<div class="w-full h-full relative flex justify-center">
  <div
    class="submit absolute  h-full w-full flex flex-col font-bold  text-primary text-center"
  >
    Please review your data before submitting, Myne takes no
    responsibility for incorrect or fraudulent values submitted
  </div>
</div>
{/if}