<script lang="ts">
	import { fade, slide } from 'svelte/transition';
	import springPress from '$lib/animationActions';
  	import { page } from "$app/stores";

  	let data: any[] = [];
	console.log(data)
</script>


<div
	in:fade={{ duration: 200, delay: 0 }}
	out:slide={{ duration: 200 }}
	class=" myne_sign-container container flex-col justify-center"
>
	<div class="flex-col justify-center content-center m-2 w-100">
		<h1 class="text-center text-3xl font-bold  ">Welcome to Myne</h1>
		<div class="flex-col m-1 p-1 .w-screen .h-screen">
			<a
				use:springPress
				href="/signup"
				class="tropical-blue flex p-2 my-3 content-center justify-center w-full rounded font-bold"
			>
				Sign Up
			</a>

			<a
				use:springPress
				href="/signin"
				class="fruity-purple flex p-2 my-3 content-center justify-center w-full rounded font-bold"
			>
				Sign In
			</a>
		</div>
	</div>
</div>

<style lang='postcss'>
	.myne_sign-container{
		background: var(--myne-bluie)
	}
	a {
		background-color: white;
		color: var(--myne-blue);
		box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
			rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
			rgba(0, 0, 0, 0.09) 0px 32px 16px;
		transition: transform 0.2s ease-in-out;
	}
</style>