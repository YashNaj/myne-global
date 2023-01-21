<script lang="ts">
  import InfoTooltip from "./infoTooltip.svelte";

  export let lbl: string;
  export let alt: string | null = null;
  /** Pass in any classes to the label */
  export let cls = "";
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<div class="flex flex-col gap-1 justify-center w-full">
  <label class="{cls} label font-semibold">
    <span class="label-text text-secondary">{lbl}</span>
    {#if alt !== null}
      <span class="label-text-alt">
        <InfoTooltip tip={alt} />
      </span>
    {/if}
  </label>

  <div class = 'flex justify-center ' >
    <slot />
  </div>
</div>