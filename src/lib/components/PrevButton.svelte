<script lang='ts'>

  export let pageCount:number = 0;
  $: console.log("🚀 ~ file: PrevButton.svelte:4 ~ pageCount:", pageCount)
</script>


<button
type="button"
id = 'previous'
on:click={()=> pageCount = --pageCount}
class="previous btn btn-secondary normal-case shadow-lg flex-1"
>
Back</button
>