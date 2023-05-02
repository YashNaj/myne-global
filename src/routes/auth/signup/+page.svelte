<script lang="ts">
  import { page } from "$app/stores";
  import { enhance } from "$app/forms";
  import Alert from "$lib/components/Alert.svelte";
  import type { PageData, Snapshot } from "./$types";
  import { superForm } from "sveltekit-superforms/client";
  import SuperDebug from "sveltekit-superforms/client/SuperDebug.svelte";
  export let data: PageData;
  export let url = $page.url.origin;
  let firstName: string = "";
  let lastName: string = "";
  let birthday: string = "";
  let country: string = "";
  let postalZip: string = "";
  let email: string = "";
  let city: string = "";
  let state: string = "";
  let password: string = "";
  let confirmPassword: string = "";
  let phone: string = "";
  let address: string = "";
  let addressTwo: string = "";
  const { form, errors, constraints, capture, restore } = superForm(data.form);
  export const snapshot = { capture, restore };

  export let formData = {
    firstName,
    lastName,
    birthday,
    city,
    address,
    addressTwo,
    country,
    postalZip,
    email,
    password,
    confirmPassword,
    phone,
  };
  $: formData = formData = {
    firstName,
    lastName,
    birthday,
    address,
    addressTwo,
    city,
    country,
    postalZip,
    email,
    password,
    confirmPassword,
    phone,
  };
  console.log(url);
</script>

<SuperDebug data={$form} />

<form
  class="flex flex-col justify-center flex-wrap content-center text-primary p-4 overflow-y-auto"
  method="POST"
  use:enhance
>
  <h1 class="text-white text-center flex font-semibold text-2xl">Create an account.</h1>
  <div class="container overflow-y-auto w-full h-80">
    <input
      class="input input-md bg-neutral flex-2 text-primary mt-3 shadow-lg w-full"
      id="firstName"
      name="firstName"
      placeholder="First Name"
      required
      bind:value={$form.firstName}
    />
    <input
      class="input input-md bg-neutral flex-2 text-primary mt-3 shadow-lg w-full"
      id="lastName"
      name="lastName"
      placeholder="Last Name "
      required
      bind:value={$form.lastName}
    />
    <input
      class="input input-md bg-neutral flex-2 text-primary mt-3 shadow-lg w-full"
      type="date"
      id="birthday"
      name="birthday"
      placeholder="Birthday"
      required
      bind:value={$form.birthday}
    />
    <input
      class="input input-md bg-neutral flex-2 text-primary mt-3 shadow-lg w-full"
      id="phone"
      name="phone"
      placeholder="+(1) (999)-999-9999"
      type="tel"
      bind:value={$form.phone}
      required
    />

    <input
      class="input input-md bg-neutral flex-2 text-primary mt-3 shadow-lg w-full"
      id="address"
      name="address"
      placeholder="Address"
      bind:value={$form.address}
      required
    />

    <input
      class="input input-md bg-neutral flex-2 text-primary mt-3 shadow-lg w-full"
      id="addressTwo"
      name="addressTwo"
      placeholder="Address 2"
      bind:value={$form.addressTwo}
      
    />
    <input
      class="input input-md bg-neutral flex-2 text-primary mt-3 shadow-lg w-full"
      id="city"
      name="city"
      placeholder="City"
      bind:value={$form.city}
      required
    />

    <input
      class="input input-md bg-neutral flex-2 text-primary mt-3 shadow-lg w-full"
      id="state"
      name="state"
      placeholder="State"
      bind:value={$form.state}
      required
    />
    <input
      class="input input-md bg-neutral flex-2 text-primary mt-3 shadow-lg w-full"
      id="country"
      name="country"
      placeholder="Country"
      bind:value={$form.country}
      required
    />
    <input
      class="input input-md bg-neutral flex-2 text-primary mt-3 shadow-lg w-full"
      id="postalZip"
      name="postalZip"
      placeholder="ZIP/Postal Code"
      bind:value={$form.postalZip}
      required
    />
    <input
      class="input input-md bg-neutral flex-2 text-primary mt-3 shadow-lg w-full"
      id="email"
      name="email"
      placeholder="Email "
      bind:value={$form.email}
      required
    />

    <input
      class="input input-md bg-neutral flex-2 text-primary mt-3 shadow-lg w-full"
      type="password"
      id="password"
      name="password"
      placeholder="Password"
      bind:value={$form.password}
      required
    />
    <input
      class="input input-md bg-neutral flex-2 text-primary mt-3 shadow-lg w-full"
      type="password"
      id="confirmPassword"
      name="confirmPassword"
      placeholder="Confirm Password"
      bind:value={$form.confirmPassword}
      required
    />
  </div>

  <input type="submit" value="Register" class="btn mt-3 normal-case btn-primary text-secondary flex-1 w-full" />
  <h1 class="text-center my-2 text-white">Have An Account?</h1>

  <a class="btn normal-case btn-neutral text-primary flex-1 w-full" href="/auth/signin">Sign In</a>
</form>

<div class="flex flex-col content-center flex-wrap justify-center">
  <div class="flex-col justify-between h-20 w-full justify center content-center">
    {#if $errors}
      <div>
        <Alert message={$errors.firstName} />
      </div>
    {/if}
  </div>
</div>
