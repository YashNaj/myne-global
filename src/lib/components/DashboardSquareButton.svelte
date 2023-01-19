<script lang="ts">
	import springPress, { horizontalSlide } from '$lib/animationActions';
	import postcss from 'postcss';
	import { Icon } from 'svelte-hero-icons';
	import { slide } from 'svelte/transition';
	export let title = '';
	export let link = '';
	export let icon = '';
	export let background = '';
</script>

<a
	use:springPress
	in:slide={{ duration: 200, delay: 200 }}
	out:slide={{ duration: 200 }}
	href="/api/{link}"
	class="square p-5 rounded-[1.4rem] w-full relative"
	style="background: {background};}"
>
	<h1 transition:slide={{ duration: 200, delay: 200 }} class="h-full w-full leading-10">
		{title}
	</h1>
	<div transition:slide={{ duration: 200, delay: 200 }} class="h-auto w-auto">
		<Icon
			src={icon}
			color="white"
			size="110px"
			class={'opacity-20 absolute  bottom-[1rem] right-[1rem] z-0'}
		/>
	</div>
</a>

<style lang="postcss">
	.square {
		width: 100%;
		aspect-ratio: 1/1;
		box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;	}
	h1 {
		font-size: 40px;
		font-weight: 600;
	}
</style>
