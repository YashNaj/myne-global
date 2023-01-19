<script lang='ts'>
	import {
		Listbox,
		ListboxButton,
		ListboxOptions,
		ListboxOption
	} from '@rgossiaux/svelte-headlessui';
	import { slide } from 'svelte/transition';

	const categories = [
		{ id: 1, name: 'All' },
		{ id: 2, name: 'Jewlery' },
		{ id: 3, name: 'Watches' },
		{ id: 4, name: ' NFT' },
		{ id: 5, name: ' Guns' },
		{ id: 6, name: 'Leather Goods' },
		{ id: 7, name: ' Technology' },
		{ id: 8, name: 'Trading Cards' },
		{ id: 9, name: 'Crypto' },
		{ id: 10, name: 'Vintage' },
		{ id: 11, name: 'Automobile' },
		{ id: 12, name: 'Animal' },
		{ id: 13, name: 'Child ID' },
		{ id: 14, name: 'Other' }
	];

	export let selectedCategory = categories[0];
</script>

<div class="listbox" transition:slide>
	<Listbox
		class={' h-10  z-1 text-[40px] rounded-large w-full font-bold drop-menu-title z-99'}
		value={selectedCategory}
		on:change={(e) => (selectedCategory = e.detail)}
	>
		<ListboxButton>{selectedCategory.name}</ListboxButton>
		<ListboxOptions >
			{#each categories as category (category.id)}
				<ListboxOption value={category}>
					{category.name}
				</ListboxOption>
			{/each}
		</ListboxOptions>
	</Listbox>
</div>
  