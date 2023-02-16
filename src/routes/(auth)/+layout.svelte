<script lang="ts">
  import Alert from "$lib/components/Alert.svelte";
  import logo from "$lib/images/blue_myne_logo.png";
  import whiteLogo from "$lib/images/white_myne_logo.png";

  export let form = { message: "" };
  import { register } from "swiper/element/bundle";
  // register Swiper custom elements
  register();
</script>

<div
  class="auth-container bg-primary w-screen h-screen flex-col flex flex-wrap justify-start content-center overflow-hidden pt-4 lg:hidden"
>
  <div class="auth-box rounded-xl shadow-lg w-[80%] h-[90%] card bg-primary ">
    <img class="max-w-full p-3 w-32" src={logo} alt="myne-logo" />
    <h1 />
    <slot />
  </div>
</div>

<div
  class="auth-container bg-none desktop-background w-screen h-screen flex-col flex-wrap justify-start content-center overflow-hidden pt-4 hidden lg:flex"
>
<div class = 'absolute bottom-[20rem] font-bold text-3xl text-black'>
  SOMETHING COOL CAN GO IN THIS WHITESPACE 
</div>
  <div class="desktop-background h-full w-full z-0 absolute top-0 " />
  <div class="flex w-full h-full relative justify-between">
    <div>
      <img
        class="max-w-full w-[40rem] p-3 top-0 w"
        src={whiteLogo}
        alt="myne-logo"
      />
    </div>
    <div class = 'w-full flex justify-center content-center flex-wrap relative'>
      <div
        class="auth-box rounded-xl shadow-lg w-[40%] h-[50%] card bg-primary p-4 absolute bottom-[20rem] right-[5rem] "
      >
        <slot />
      </div>
    </div>
  </div>
</div>

{#if form?.message}
  <div>
    <Alert message={form.message} />
  </div>
{/if}

<style lang="postcss">
  .auth-container{
    background-color: 	hsl(216, 100%, 90%);

  }
  .auth-box {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
    background: rgb(231, 240, 255);
  }
  .desktop-background {
    background-image: url("$lib/images/desktopAuthWave.svg");
    background-size: cover;
    background-repeat: no-repeat;
  }
</style>
