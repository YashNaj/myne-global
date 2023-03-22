<script lang="ts">
  import { Chasing } from "svelte-loading-spinners";
  import { writable } from "svelte/store";

  let toggle = false;
  export let size = "";
  export let animationStyle = writable("spin");
  import logo from "$lib/images/white_icon.png";
  import { scale } from "svelte/transition";
</script>

<div class="spinner container flex justify-center content-center flex-wrap h-full w-full" >
  <div class="flex flex-col justify-center content-center flex-wrap w-32 h-32 rounded-full">
    <img alt="myne-logo" src={logo} class="w-full h-full max-w-full animate-spin" />
  </div>
</div>

<style lang="postcss">
  .estimate {
    border-radius: 100%;
  }
</style>
