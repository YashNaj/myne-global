<script lang="ts">
  import Alert from "$lib/components/Alert.svelte";
  import type { PageData } from "./$types";
  import { z } from "zod";
  import { validator } from '@felte/validator-zod';
  export let data: PageData;
  export let signingIn = false;
  import { superForm } from 'sveltekit-superforms/client';
  import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';

  let email = "";
  const { form, errors, constraints , capture, restore } = superForm(data.form);
  export const snapshot = { capture, restore };

</script>

<h1 class="text-white flex pl-4 font-semibold text-2xl">Sign into your Myne Account.</h1>
<SuperDebug data={$form} />

<form
  method="POST"
  class="flex flex-col justify-center flex-wrap content-center text-primary p-4"
>
  <div class="flex flex-col">
    <input
      type="email"
      name="email"
      placeholder="Email"
      data-invalid={$errors.email}
      bind:value={$form.email}
      {...$constraints.email}
      class="text-primary bg-neutral marker:flex-2 input input-md shadow-lg"
      
    />
    <input
      type="password"
      id="password"
      name="password"
      placeholder="Password"
      data-invalid={$errors.password}
      bind:value={$form.password}
      {...$constraints.password}
      class="input input-md bg-neutral flex-2 text-primary mt-3 shadow-sm"
    />
  </div>

  <div class="w-full flex flex-col justify-center content-center flex-wrap my-2 self-end">
    <input type="submit" value="Sign In" class="btn mt-3 normal-case btn-primary text-secondary flex-1 w-full" />
  </div>
  <a class="btn normal-case btn-neutral text-primary flex-1 w-full" href="/auth/signup">Register</a>
</form>

<div class="flex-col h-20 w-full justify center content-center">
  <p class="my-3 text-secondary flex w-full justify-center">
    <a class="linka text-white" href="/forgot -password">Forgot Password?</a>
  </p>
</div>

