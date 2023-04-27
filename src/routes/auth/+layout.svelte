<script lang="ts">
  import type { LayoutData } from "./$types";
  import { page } from "$app/stores";
  import Alert from "$lib/components/Alert.svelte";
  import logo from "$lib/images/blue_myne_logo.png";
  import whiteLogo from "$lib/images/white_myne_logo.png";
  export let form = { message: "", signingIn: false };
  import { register } from "swiper/element/bundle";
  import { cubicIn, cubicOut } from "svelte/easing";
  import { fly } from "svelte/transition";
  export let data: LayoutData;
  $: pathname = data.pathname;
  console.log(data.pathname);
  register();
  const duration = 300;
  const delay = duration + 100;
  const y = 10;

  const transitionIn = { easing: cubicOut, y, duration, delay };
  const transitionOut = { easing: cubicIn, y: -y, duration };
</script>

<div
  class="auth-container bg-[rgb(231, 240, 255)] w-full h-screen flex-col flex flex-wrap justify-start content-center overflow-hidden lg:hidden overflow-x-hidden overflow-y-hidden"
>
  <div class="auth-box rounded-none shadow-xl w-full h-full card bg-primary">
    <div class="h-10 w-full" />
    <div >
      <slot />
    </div>
  </div>
</div>

<div
  class="auth-container bg-[rgb(231, 240, 255)] w-full h-screen flex-col flex-wrap justify-start content-center overflow-hidden pt-4 hidden lg:flex"
>
  <div class="absolute bottom-[20rem] font-bold text-3xl text-black" />
  <div class="h-full w-full z-0 absolute top-0 bg-[url('$lib/images/desktopAuthWave.svg')] bg-cover bg-no-repeat" />
  <div class="flex w-full h-full relative justify-between">
    <div>
      <img class="max-w-full w-[40rem] p-3 top-0 w" src={whiteLogo} alt="myne-logo" />
    </div>
    <div class="w-full flex justify-center content-center flex-wrap relative">
      <div
        class="auth-box shadow-lg bg-primary/50 backdrop-blur-[300px] w-[40%] lg:h-[80%] h-[50%] card bg-primary p-4 absolute lg:bottom-[5rem] bottom-[20rem] right-[5rem]"
      >
        <div>
          <slot />
        </div>
      </div>
    </div>
  </div>
</div>

{#if form?.message}
  <div>
    <Alert message={form.message} />
  </div>
{/if}
