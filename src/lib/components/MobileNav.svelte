<script lang="ts">
  import springPress from "$lib/animationActions";
  import logo from "$lib/images/white_myne_logo.png";
  import { Icon, Menu } from "svelte-hero-icons";
  import { slide } from "svelte/transition";
  import Drawer from "./Drawer.svelte";
  const duration = 200;
</script>

<nav
  transition:slide={{ delay: duration, duration }}
  class="flex w-screen h-16 content-center justify-between"
> <div>
  <img alt="Myne Logo" class="h-full p-1" src={logo} />
</div>
<div>
  <Drawer/>
</div>
</nav>
<div class="spacer container h-16">&nbsp;</div>

<style lang="postcss">
  nav {
    background: var(--myne-blue);
    position: fixed;
    top: 0;
    z-index: 99;
    height: 10re,;
  }
  .spacer {
    width: 100%;
  }

  img {
    max-width: 100%;
  }
  div {
    flex: 1;
  }
</style>
