<script>
    import {
      Dialog,
      DialogOverlay,
      DialogTitle,
      DialogDescription,
    } from "@rgossiaux/svelte-headlessui";
    import { fade } from 'svelte/transition'
    let isOpen = false;
  </script>
        {#if isOpen}

    <div transition:fade>

  <Dialog class = ' left-0 top-100' open={isOpen} on:close={() => (isOpen = false)} static>
    <DialogOverlay />
  
    <DialogTitle>Deactivate account</DialogTitle>
    <DialogDescription>
      This will permanently deactivate your account
    </DialogDescription>
  
    <p>
      Are you sure you want to deactivate your account? All of your data will be
      permanently removed. This action cannot be undone.
    </p>
  
    <button on:click={() => (isOpen = false)}>Deactivate</button>
    <button on:click={() => (isOpen = false)}>Cancel</button>
  </Dialog>
</div>{/if}
