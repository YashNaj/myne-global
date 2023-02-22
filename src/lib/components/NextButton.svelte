<script lang='ts'>

    export let pageCount: number = 0; 
    $: console.log("🚀 ~ file: NextButton.svelte:4 ~ pageCount:", pageCount)
  </script>
<button
type="button"
id="next"
on:click={()=> pageCount = ++pageCount}
class="next btn btn-primary normal-case shadow-lg flex-1"
>
Next
</button>