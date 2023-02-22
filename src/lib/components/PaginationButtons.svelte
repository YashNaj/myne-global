<script lang='ts'>
    import CardFlippable from "$lib/components/CardFlippable.svelte";
    let pageCount = 0
    $: console.log(pageCount)
  </script>
     <div class="pagination-btns flex w-full self-end">
        {#if pageCount > 0}
          <button
            type="button"
            on:click={()=> pageCount = --pageCount}
            id = 'previous'
            class="btn btn-secondary normal-case shadow-lg flex-1 previous"
          >
            Back</button
          >
        {/if}
        {#if pageCount === 0 || pageCount < 5}
          <button
            type="button"
            on:click={()=> pageCount = ++pageCount}
            id = 'next'
            class="btn btn-primary normal-case shadow-lg flex-1 next"
          >
            Next
          </button>
        {/if}

        {#if pageCount === 5}
          <input
            type="submit"
            class="previous btn btn-success normal-case shadow-sm flex-1"
            value="Submit"
            on:click={() => {
            }}
          />
        {/if}
      </div>