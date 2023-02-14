<script lang="ts">
  import {
    Dialog,
    DialogOverlay,
    DialogTitle,
    DialogDescription,
  } from "@rgossiaux/svelte-headlessui";
  import logo from "$lib/images/blue_icon.png";
  import { redirect } from "@sveltejs/kit";
  export let yes = true;
  export let success: boolean | null | undefined;
</script>

<!-- Put this part before </body> tag -->
<input
  bind:checked={yes}
  type="checkbox"
  id="my-modal-4"
  class="modal-toggle"
/>
<label
  on:click={() => {
    yes = !yes;
  }}
  on:keydown={() => {
    yes = !yes;
  }}
  for="my-modal-4"
  class="modal cursor-pointer text-primary"
>
  <label class="modal-box relative" for="">
    <h3 class="text-lg font-bold">Success!</h3>
    <p class="py-4">Your card has been added to your profile!</p>
  </label>
</label>
