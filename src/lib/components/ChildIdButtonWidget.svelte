<script lang="ts">
  import {
    Icon,
    DocumentText,
    ShieldExclamation,
    SwitchHorizontal,
    Star,
  } from "svelte-hero-icons";
</script>

<div class="button-container w-full h-full grid grid-cols-2 place-items-center">
  <button class="btn btn-error z-2 w-[90%] flex-nowrap ">
    <Icon
      src={ShieldExclamation}
      color = "black"
      class="opacity-40"
      size="30px"
    />
    <label class=" text-xs w-full justify-center text-red" for="button">
      MISSING
    </label>
  </button>

  <button class="btn flex-nowrap flex-none btn-info z-2 w-[90%]">
    <Icon src={DocumentText} color="white" class="opacity-90" size="30px" />
    <label class="flex text-xs w-full justify-center text-white" for="button">
      Document
    </label>
  </button>
</div>
