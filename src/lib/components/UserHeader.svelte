<script>
	import { horizontalSlide } from '$lib/animationActions';
	import { slide } from 'svelte/transition'
	export let user;
</script>

<div transition:slide={{delay:100, duration: 100}} class="container ">
	<div 
	class="user-header flex rounded-lg h-20 m-2 w-100 justify-start p-2 align-center relative">
		<div class="circle" />
		<h1 class="flex-col justify-end align-end h-100 text-2xl mx-2">

			<span class="font-bold"> Welcome! </span>&nbsp;
            {$user?.userId} 

		</h1>
        <a href = '/profile/settings'
        class = 'flex text-xs absolute right-0 bottom-0 my-1 mx-1 italic'>
            Take a peak at your profile defaults
        </a>
	</div>
</div>

<style>
	.user-header {
		box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
		background: #01133079;
		backdrop-filter: blur(40px) brightness(150%) saturate(200%);
		-webkit-backdrop-filter: blur(40px) brightness(150%) saturate(10%);


	}
	.circle {
		background-color: rgba(255, 255, 255, 0.699);
		width: 3.5rem;
		height: 3.5rem;
		border-radius: 100%;
	}
</style>
