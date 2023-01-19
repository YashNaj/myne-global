<script lang="ts">
	import { signOut, getUser } from '@lucia-auth/sveltekit/client';
	import { invalidateAll } from '$app/navigation';
	import UserHeader from '$lib/components/UserHeader.svelte';
	import MobileNav from '$lib/components/MobileNav.svelte';
	import Dashboard from '$lib/components/Dashboard.svelte';
	import DashboardFunctions from '$lib/components/DashboardFunctions.svelte';
	import { fade, slide } from 'svelte/transition';
	import { horizontalSlide } from '$lib/animationActions';
	export const user = getUser();
	const duration = 200;
	console.log(user);
</script>


<div
	in:slide={{ delay: duration, duration }}
	out:slide={{ delay: duration }}
	class="flex-col h-full justify-center align-center"
>
	<div class="w-full h-auto flex-col align-center">
		<UserHeader {user} />
		<Dashboard {user} />
		<DashboardFunctions />
		<button
			in:slide={{ duration, delay: duration }}
			out:slide={{ delay: duration }}
			class=" bottom-0 right-20 bg-black p-2 h-auto-lg w-full h-full"
			style = 'background-color: #0010101' 
			on:click={async () => {
				await signOut();
				invalidateAll();
			}}>Sign out</button
		>
	</div>
</div>
<style lang='postcss'>
	button{
		background:transparent;
		-webkit-backdrop-filter: blur(40px) saturate(10%) brightness(10%);
		backdrop-filter: blur(40px) saturate(10%) brightness(10%);

	}

</style>