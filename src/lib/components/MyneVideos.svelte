<script lang="ts">
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
      id: "advantages",
      src: "https://res.cloudinary.com/di99xndop/video/upload/v1681853510/Myne_Global_Advantages_rtrbye.mp4",
    },
    {
      id: "company",
      src: "https://res.cloudinary.com/di99xndop/video/upload/v1681853488/Myne_Global_Company_nhl580.mp4",
    },
    {
      id: "earthquake_fire",
      src: "https://res.cloudinary.com/di99xndop/video/upload/v1681853496/Myne_Global_Earthquake-Fire_bzhfn2.mp4",
    },
    {
      id: "hurricane_flood",
      src: "https://res.cloudinary.com/di99xndop/video/upload/v1681853495/Myne_Global_Hurricane-Flood_wkvhie.mp4",
    },
    {
      id: "sale",
      src: "https://res.cloudinary.com/di99xndop/video/upload/v1681853485/Myne_Global_Sale_xuj2ot.mp4",
    },
    {
      id: "theft",
      src: "https://res.cloudinary.com/di99xndop/video/upload/v1681853503/Myne_Global_Robbery-Burglary_m2djmd.mp4",
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
    <Tab class="btn btn-ghost normal-case ">Company</Tab>
    <Tab class="btn btn-ghost normal-case ">Abvantages</Tab>
    <Tab class="btn btn-ghost normal-case ">Sale</Tab>
    <Tab class="btn btn-ghost normal-case ">Earthquake & Fire</Tab>
    <Tab class="btn btn-ghost normal-case ">Hurricane & Flood</Tab>
    <Tab class="btn btn-ghost normal-case ">Theft</Tab>
  </TabList>
  {#key selectedTab}
    <div in:fly={transitionIn} out:fly={transitionOut}>
      <TabPanels class="w-full h-fit mt-2 object-cover block ">
        {#each videos as video}
          <TabPanel class="w-full max-h-full">
            <div class="object-cover">
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
