<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import springPress, { horizontalSlide } from '$lib/animationActions';
	import { signOut } from '@lucia-auth/sveltekit/client';
	import { spring } from 'svelte/motion';
	import { quintOut } from 'svelte/easing';
	import { fade, fly, slide, blur } from 'svelte/transition';
	import Listbox from '../../lib/components/Listbox.svelte';
	import { Icon, Archive, X } from 'svelte-hero-icons';
	export let user;
	let isOpen = false;
	let heightScale = 20;
	let drawerHeight = spring(heightScale, {
		stiffness: 0.15,
		damping: 0.5
	});

	function setOpen() {
		isOpen = !isOpen;
		if (isOpen) {
			drawerHeight.set(75);
		} else {
			drawerHeight.set(20);
		}
		console.log(isOpen);
		console.log($drawerHeight);
	}
	let duration = 200; 
</script>

<div
	in:slide={{ delay: duration, duration, easing: quintOut}}
	out:slide={{delay:duration}}
	class="container flex-col h-auto w-auto m-2 "
>
	<div
		in:blur={{ delay: duration, duration }}
		out:blur={{delay: duration}}
		class="dashboard  flex-col p-2 justify-center  align-center  relative rounded-lg"
		style="height: {$drawerHeight}vh"
	>
		{#if isOpen}
			<div transition:slide class=" flex-col h-full w-full">
				<div
					in:slide={{duration, delay: duration}}
					out:slide={{ delay: duration }}
					class="relative px-4 fixed  h-20 w-full flex align-center justify center z-1"
				>
					<Listbox />
				</div>
				<div
					class="card-container place-items-center grid gap-2 grid-cols-2 grid-rows-auto w-full h-auto"
				>
					<div transition:blur={{ delay: 300, duration:350}} class=" square rounded-lg" />
					<div transition:blur={{ delay: 300, duration:350 }} class=" square rounded-lg  " />
					<div transition:blur={{ delay: 300, duration:350 }} class=" square rounded-lg" />
					<div transition:blur={{ delay: 300, duration:350 }} class=" square rounded-lg  " />
					<div transition:blur={{ delay: 300, duration:350 }} class=" square rounded-lg" />
					<div transition:blur={{ delay: 300, duration:350 }} class=" square rounded-lg  " />
					<div transition:blur={{ delay: 300, duration:350 }} class=" square rounded-lg" />
					<div transition:blur={{ delay: 300, duration:350 }} class=" square rounded-lg  " />
					<div transition:blur={{ delay: 300, duration:350 }} class=" square rounded-lg" />
					<div transition:blur={{ delay: 300, duration:350 }} class=" square rounded-lg  " />
					<div transition:blur={{ delay: 300, duration:350 }} class=" square rounded-lg" />
					<div transition:blur={{ delay: 300, duration:350 }} class=" square rounded-lg  " />
			</div>
				<button
					in:slide|local={{ delay: duration, duration }}
					out:slide|local={{delay: duration}}
					use:springPress
					on:click={() => setOpen()}
					on:keypress={() => setOpen()}
					class="rounded-lg bg-none p-2 m-1 bg-white text-black text-xl z-50 absolute right-0 top-0 drawer-button"
				>
					<Icon src={X} solid size="54" color="white" class="text-bold  " />
				</button>
			</div>
		{:else}
			<div class="drawer-message container flex-col justify-center align-center  w-full relative">
				<h1
					in:slide={{ delay: duration, duration: duration }}
					out:slide={{delay:duration}}
					class=" w-full drawer-header justify-center align-center
		 text-center flex font-semibold text-[60px]  leading-11"
				>
					Card Drawer
				</h1>
				<button
					in:slide={{ delay: duration, duration}}
					out:slide={{delay:duration}}
					use:springPress
					on:click={() => setOpen()}
					on:keypress={() => setOpen()}
					class=" icons rounded-lg p-2 m-1 bg-white text-black absolute right-0 text-xl z-50 drawer-button"
				>
					<Icon src={Archive} solid size="54" color="white" class="text-bold  " />
				</button>
			</div>
		{/if}
	</div>
</div>


<style lang="postcss">
	.dashboard {
		box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
		background: #01133079;
		width: 100%;
		-webkit-backdrop-filter: blur(40px) brightness(150%) saturate(10%);
		backdrop-filter: blur(40px) brightness(150%) saturate(200%);
		overflow: hidden;
	} 
	.square {
		width: 90%;
		aspect-ratio: 1/1;
		background-color: white;
	}
	.drawer-header {
		color: white;
	}

	.drawer-button {
		text-decoration: none;
		background: none;
	}
	.icons {
		color: rgba(255, 255, 255, 0.795) 0%;
	}
	.card-container {
		overflow: scroll !important;
	}
</style>
