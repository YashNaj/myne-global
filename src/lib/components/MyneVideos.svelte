<script script lang="ts">
  import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@rgossiaux/svelte-headlessui";
  import { cubicIn, cubicOut } from "svelte/easing";
  import { writable } from "svelte/store";
  import { fly } from "svelte/transition";
  const duration = 500;
  const delay = duration + 200;
  const x = 10;

  const transitionIn = { easing: cubicOut, duration, delay, opacity: 1 };
  const transitionOut = { easing: cubicIn, duration, opacity: 0 };
  const videos = [
    {
      id: "company",
      src: "https://res.cloudinary.com/di99xndop/video/upload/v1681853488/Myne_Global_Company_nhl580.mp4",
    },
    {
      id: "advantages",
      src: "https://res.cloudinary.com/di99xndop/video/upload/v1681853510/Myne_Global_Advantages_rtrbye.mp4",
    },
    {
      id: "theft",
      src: "https://res.cloudinary.com/di99xndop/video/upload/v1681853503/Myne_Global_Robbery-Burglary_m2djmd.mp4",
    },
    {
      id: "sale",
      src: "https://res.cloudinary.com/di99xndop/video/upload/v1681853485/Myne_Global_Sale_xuj2ot.mp4",
    },
    {
      id: "earthquake_fire",
      src: "https://res.cloudinary.com/di99xndop/video/upload/v1681853496/Myne_Global_Earthquake-Fire_bzhfn2.mp4",
    },
    {
      id: "hurricane_flood",
      src: "https://res.cloudinary.com/di99xndop/video/upload/v1681853495/Myne_Global_Hurricane-Flood_wkvhie.mp4",
    },
  ];
  $: selectedTab = selectedTab;
</script>

<TabGroup
  on:change={(event) => {
    console.log(event);
    selectedTab = event.detail;
    console.log(selectedTab);
  }}
  class="w-full h-full mt-2 flex flex-col"
>
  <TabList class="overflow-x-auto w-full h-full flex">
    <Tab
      class={({ selected }) =>
        selected ? "btn btn-primary text-white normal-case transition-all" : "transition-all btn btn-ghost normal-case"}
      >1. Company</Tab
    >
    <Tab
      class={({ selected }) =>
        selected ? "btn btn-primary text-white normal-case transition-all" : "transition-all btn btn-ghost normal-case"}
      >2. Advantages</Tab
    >
    <Tab
      class={({ selected }) =>
        selected ? "btn btn-primary text-white normal-case transition-all" : "transition-all btn btn-ghost normal-case"}
      >3. Theft</Tab
    >
    <Tab
      class={({ selected }) =>
        selected ? "btn btn-primary text-white normal-case transition-all" : "transition-all btn btn-ghost normal-case"}
      >4. Sale</Tab
    >
    <Tab
      class={({ selected }) =>
        selected ? "btn btn-primary text-white normal-case transition-all" : "transition-all btn btn-ghost normal-case"}
      >5. Earthquake & fire</Tab
    >
    <Tab
      class={({ selected }) =>
        selected ? "btn btn-primary text-white normal-case transition-all" : "transition-all btn btn-ghost normal-case"}
      >6. Hurricane & flood</Tab
    >
  </TabList>
  {#key selectedTab}
    <div in:fly={transitionIn} out:fly={transitionOut}>
      <TabPanels class="w-full h-fit mt-2 object-cover flex justify-center ">
        {#each videos as video}
          <TabPanel class="w-full max-h-full md:flex md:justify-center inline-block">
            <div class="container md:w-[80%] flex justify-center object-cover">
              <!-- svelte-ignore a11y-media-has-caption -->
              <video class="w-full" id="player-{video.id}" playsinline controls>
                <source src={video.src} type="video/mp4" />

                <!-- Captions are optional -->
              </video>
            </div>
          </TabPanel>
        {/each}
      </TabPanels>
    </div>
  {/key}
</TabGroup>
