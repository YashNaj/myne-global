<script lang='ts'>
		import Tab from "./Tab.svelte";

    export let id = '';
    export let items = [];
    export let activeTab = 0;
</script>

<ul {id}>
    {#if Array.isArray(items)}
        {#each items as { label, icon }, i}
            <Tab
								 {label} {icon}
								 isActive={activeTab === i}
								 on:click={() => activeTab = i}
						/>
        {/each}
    {/if}
</ul>

<style>
    ul {
        display: flex;
        padding-left: 0;
        margin-bottom: 0;
        list-style: none;
        justify-content: space-between;
        width: 100%;
        margin-top: 100px;
    }
</style>