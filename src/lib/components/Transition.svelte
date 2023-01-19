<script>
    import { Transition } from "@rgossiaux/svelte-headlessui";
    let show = false;
  </script>
  
  <button on:click={() => (show = !show)}> Toggle </button>
  <Transition
    {show}
    enter="transition-opacity duration-75"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave="transition-opacity duration-150"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
  >
    I will fade in and out
  </Transition>
  