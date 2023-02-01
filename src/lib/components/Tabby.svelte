<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import Tabs from './Tabs.svelte';
	import Slide from "./Slide.svelte";
	import CardVault from "$lib/components/CardVault.svelte";
  import DesktopWidget from "$lib/components/DesktopWidget.svelte";
  import {
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
  } from "@rgossiaux/svelte-headlessui";
  import { quintOut } from "svelte/easing";
  let open = false;
  let tabs = [
    "Card Vault",
    "Import",
    "Request History Report",
    "Request Item Certificate",
    "Download Inventory",
    "Search",
  ];
  let contents = [
    "Card Vault",
    "Import",
    "Request History ",
    "Request Item Certificate",
    "Download Inventory",
  ];

	let name = 'Tabby';

	let tabItems = [
		{ id: 1, label: 'Tab1', back: 'red' },
		{ id: 2, label: 'Tab2', back: 'blue' },
		{ id: 3, label: 'Tab3', back: 'green' },
	];
	let activeTab = 0, state = 0;

	let slideWrapper, anim;

	function animController() {
		if(activeTab == state) return;
	
		const nodeWidth = slideWrapper.offsetWidth; 
		const currentMultiplier = activeTab > state ? 1 : -1;

		console.log(`activeTab ${activeTab > state ? ">" : "<"} state`);

		anim = {
			in: nodeWidth * currentMultiplier,
			out: nodeWidth * -currentMultiplier,
		};
	}

	$: if (slideWrapper) {
		animController();
		state = activeTab;
	}
	$: currentTab = tabItems[activeTab];
	$: slideWrapper && console.log(slideWrapper.offsetWidth);
</script>

<h1>Hello {name}!</h1>
 <TabGroup defaultIndex={0} class="flex flex-col w-full h-full justify-center rounded-lg">
      <TabList
        class={"flex font-bold justify-center bg-accent rounded-lg mb-2 p-1 text-primary"}
      >
        <div class="flex justify-center content-center w-full shadow-sm">
          {#each tabs as tab}
            <Tab
              class={({ selected }) =>
                selected
                  ? "flex flex-col flex-wrap content-center justify-center rounded-lg flex-1 bg-primary text-secondary p-1"
                  : "flex flex-col flex-wrap flex-1  content-center justify-center rounded-lg p-1"}
            >
              {tab}
            </Tab>
          {/each}
        </div>
      </TabList>

      <TabPanels class="w-full h-full rounded-lg p-2">
        {#each contents as content}
            <TabPanel class="h-full w-full">
              {#if content != "Card Vault"}
                <DesktopWidget title={content} />
              {:else}

                <CardVault />
                {/if}
            </TabPanel>
        {/each}
      </TabPanels>
    </TabGroup>

<main>
	{#key currentTab.id}
		<div
				 style="--back: {currentTab.back}"

				 bind:this={slideWrapper}
				 in:fly={{ x: anim.in, duration: 500, opacity: 1 }}
				 out:fly={{ x: anim.out, duration: 500, opacity: 1 }}
		>
			<Slide text={currentTab.label} />
		</div>
	{/key}

	<Tabs bind:activeTab items={tabItems} />
</main>

<style>
	main {overflow: hidden; position: relative}
	div {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		background: var(--back);
		overflow: hidden;
		color: white;
		text-align: center;
	}
</style>
