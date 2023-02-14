<script lang='ts'>
    import {
      Dialog,
      DialogOverlay,
      DialogTitle,
      DialogDescription,
    } from "@rgossiaux/svelte-headlessui";
    import logo from "$lib/images/blue_icon.png"
    let isOpen = true;
  </script>
  
  <!-- Pass `isOpen` to the `open` prop and use the `on:close` handler to set it back to false when the user clicks outside of the dialog or presses the escape key. -->
  <Dialog class = {'w-[200px] h-[100px] bg-secondary text-primary card absolute top-[50%]'} open={isOpen} on:close={() => (isOpen = false)}>

    <DialogOverlay/>
  
    <DialogTitle><img alt = 'myne-logo' class = 'inline-block max-w-3' src = {logo} /> Myne Global</DialogTitle>
    <DialogDescription>
      Add Card 
    </DialogDescription>
  
    <p>
        You've succesfully added a card! 
    </p>
  
    <!-- You can render additional buttons to dismiss your dialog by setting `isOpen` to `false`. -->
    <button class = {'btn btn-success'} on:click={() => (isOpen = false)}>Got it! </button>
  </Dialog>
  