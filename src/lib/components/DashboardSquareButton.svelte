<script lang="ts">
  import postcss from "postcss";
  import { Icon } from "svelte-hero-icons";
  import { slide } from "svelte/transition";
  export let title = "";
  export let link = "";
  export let icon = "";
  export let background = "";
</script>

<div class="wave btn  normal-case t h-[100px] w-[175px] relative shadow-xlg">
  <a href="/{link}">
    <Icon
      src={icon}
      color="#002d72"
      size="30px"
      class={"opacity-10 absolute  bottom-[.25rem] right-[.5rem] z-0"}
    />

    <p class="flex w-full justify-start text-left text-2xl pt-7 z-1">
      {title}
    </p>
  </a>
</div>

<style lang="postcss">
  .wave {
    background-image: url("/src/lib/images/button-wave.svg");
    background-size: cover;
    background-repeat: no-repeat;
  }
</style>
