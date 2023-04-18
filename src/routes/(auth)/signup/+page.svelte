<script lang="ts">
  import { page } from "$app/stores";
  import { enhance } from "$app/forms";
  import Alert from "$lib/components/Alert.svelte";
  import type { PageData, Snapshot } from "./$types";
  export let form: { message?: string };
  let data: PageData;
  export let url = $page.url.origin;
  let firstName: string = "";
  let lastName: string = "";
  let birthday: string = "";
  let country: string = "";
  let postalZip: string = "";
  let email: string = "";
  let password: string = "";
  let phone: string = "";
  export let formData = {
    firstName,
    lastName,
    birthday,
    country,
    postalZip,
    email,
    password,
    phone,
  };
  $: formData = formData = {
    firstName,
    lastName,
    birthday,
    country,
    postalZip,
    email,
    password,
    phone,
  };
  export const snapshot: Snapshot = {
    capture: () => formData,
    restore: (value) => formData,
  };
  console.log(url);
</script>

<form class="flex flex-col justify-center flex-wrap content-center text-primary p-4" method="POST" use:enhance>
  <h1 class="text-white flex pl-4 font-semibold text-2xl">Create an account.</h1>

  <swiper-container
    class="mySwiper justify-center flex-wrap content-center text-primary relative lg:hidden"
    scrollbar="true"
    slidesPerView="1"
  >
    <swiper-slide class="p-2">
      <input
        class="input input-md bg-neutral flex-2 text-primary mt-3 shadow-lg w-full"
        id="firstName"
        name="firstName"
        placeholder="First Name"
        required
        bind:value={firstName}
      />
      <input
        class="input input-md bg-neutral flex-2 text-primary mt-3 shadow-lg w-full"
        id="lastName"
        name="lastName"
        placeholder="Last Name "
        required
        bind:value={lastName}
      />
      <input
        class="input input-md bg-neutral flex-2 text-primary mt-3 shadow-lg w-full"
        type="date"
        id="birthday"
        name="birthday"
        placeholder="Date of Birth"
        required
        bind:value={birthday}
      />
      <input
        class="input input-md bg-neutral flex-2 text-primary mt-3 shadow-lg w-full"
        id="country"
        name="country"
        placeholder="Country"
        bind:value={country}
        required
      /></swiper-slide
    >
    <swiper-slide class="p-2">
      <input
        class="input input-md bg-neutral flex-2 text-primary mt-3 shadow-lg w-full"
        id="email"
        name="email"
        placeholder="Email "
        bind:value={email}
        required
      />
      <input
        class="input input-md bg-neutral flex-2 text-primary mt-3 shadow-lg w-full"
        type="password"
        id="password"
        name="password"
        placeholder="Password"
        bind:value={password}
        required
      /></swiper-slide
    >
    <swiper-slide class="p-2">
      <input
        class="input input-md bg-neutral flex-2 text-primary mt-3 shadow-lg w-full"
        id="phone"
        name="phone"
        placeholder="+(1) (999)-999-9999"
        type="tel"
        bind:value={phone}
        required
      />
      <input
        class="input input-md bg-neutral flex-2 text-primary mt-3 shadow-lg w-full"
        id="postalZip"
        name="postalZip"
        placeholder="ZIP/Postal Code"
        bind:value={postalZip}
        required
      />
    </swiper-slide>
  </swiper-container>
  <input type="submit" value="Register" class="btn mt-3 normal-case btn-primary text-secondary flex-1 w-full" />
  <h1 class="text-center my-2">Have An Account?</h1>

  <a class="btn normal-case btn-neutral text-primary flex-1 w-full" href="/signin">Sign In</a>
</form>

<div class="flex flex-col content-center flex-wrap justify-center">
  <div class="flex-col justify-between h-20 w-full justify center content-center">
    {#if form?.message}
      <div>
        <Alert message={form.message} />
      </div>
    {/if}
  </div>
</div>

<style lang="postcss">
  :global(label) {
    color: white;
  }
  form {
  }

  swiper-container {
    width: 100%;
    height: 110%;
    display: flex;
    justify-content: center;
  }

  swiper-slide {
    text-align: center;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
