<script lang="ts">
	import springPress from '$lib/animationActions';
	import logo from '$lib/images/white_myne_logo.png';
	import { Icon, Menu } from 'svelte-hero-icons';
	import { slide } from 'svelte/transition';
	const duration = 200;
</script>

<nav
	transition:slide={{ delay: duration, duration }}
	class="flex w-screen h-16 content-center justify-between"
>
	<div class="container">
		<img alt="Myne Logo" class="h-full p-1" src={logo} />
	</div>
	<div class="container flex w-full h-full justify-end content-end relative">
		<button
			use:springPress
			class="flex  justify-center  mx-2 h-full
                    content-center absolute bottom-0"
		>
			<Icon
				src={Menu}
				solid
				size="34"
				color="white"
				class={'text-bold flex-col absolute right-0 bottom-[1rem]'}
			/>
		</button>
	</div>
</nav>
<div class="spacer container h-16">&nbsp;</div>

<style lang="postcss">
	nav {
		background: var(--myne-blue);
		position: fixed;
		top: 0;
		z-index: 99;
	}
	.spacer {
		width: 100%;
	}

	img {
		max-width: 100%;
	}
	div {
		flex: 1;
	}
</style>
