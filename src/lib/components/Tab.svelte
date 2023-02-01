<script lang='ts'>
	export let label, icon, isActive;
</script>

<li class:active={isActive}>
	<span on:click>
		{label}
		{#if icon}
			{icon}
		{/if}
	</span>
</li>

<style>
	span {
		height: auto;
		display: flex;
		border-top: 2px solid transparent;
		padding: 1rem;
		cursor: pointer;
		flex-flow: column nowrap;
		justify-content: space-around;
		cursor: pointer;
		text-align: center;
	}

	span:hover {
		color: red;
	}

	li.active > span {
		color: red;
		border-color: red;
	}
</style>