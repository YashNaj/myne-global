<script lang="ts">
  import { string } from "zod";
import InfoTooltip from "./infoTooltip.svelte";

  export let lbl: string;
  export let alt: string | null = null;
  /** Pass in any classes to the label */
  export let cls = "";
  export let isEmail:boolean = true; 
  if (lbl != 'Email'){
    isEmail = !isEmail; 
  }
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<div class="flex flex-col gap-1 justify-center w-full">
  <label for = {isEmail ? 'email' : 'password'} class="{cls} label font-semibold">
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