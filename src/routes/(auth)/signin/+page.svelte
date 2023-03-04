<script lang="ts">
  import { enhance } from "$app/forms";
  import Alert from "$lib/components/Alert.svelte";
  import Nav from "$lib/components/Nav.svelte";
  import PageContainer from "$lib/components/PageContainer.svelte";
  import Spinner from "$lib/components/Spinner.svelte";
  import { slide } from "svelte/transition";
  import type { PageData } from "./$types";
  export let data: PageData
  let signingIn = false; 
  export let form = { message: "" };
  console.log("🚀 ~ file: +page.svelte:8 ~ signingIn:", signingIn)
  let email = "";
</script>

{#if signingIn}
  <PageContainer>
    <Spinner />
  </PageContainer>
{/if}
<h1 class="text-primary flex pl-4 font-bold text-2xl">
  Sign into your Myne Account.
</h1>
<form
  method="POST"
  class="flex flex-col justify-center flex-wrap content-center text-primary p-4"
  use:enhance={({ data, cancel }) => {
    form = { message: "" };
    const email = data.get("email")?.toString() || "";
    const password = data.get("password")?.toString() || "";
    if (!email || !password) {
      form.message = "Invalid input";
      cancel();
    }
  }}
>
  <div class="flex flex-col ">
    <input
      type="email"
      name="email"
      placeholder="Email"
      class="text-primary  bg-neutral marker:flex-2 input input-md shadow-lg"
      bind:value={email}
    />
    {#if email != ""}
      <input
        transition:slide
        type="password"
        id="password"
        name="password"
        placeholder="Password"
        class="input input-md bg-neutral flex-2 text-primary mt-3 shadow-sm"
      />
    {/if}
  </div>

  <div
    class="w-full flex flex-col justify-center content-center flex-wrap my-2 self-end"
  >
    <input
      type="submit"
      value="Sign In"
      class="btn mt-3  normal-case btn-primary text-secondary  flex-1 w-full"
    />
  </div>
  <a
    class="btn  normal-case btn-neutral text-primary  flex-1 w-full"
    href="/signup">Register</a
  >
</form>

<div class="flex-col h-20 w-full justify center content-center">
  {#if form?.message}
    <div>
      <Alert message={form.message} />
    </div>
  {/if}
  <p class="my-3 text-secondary flex w-full justify-center">
    <a class="linka text-primary" href="/forgot -password">Forgot Password?</a>
  </p>
</div>

<style lang="postcss">
  :global(label) {
    color: white;
  }
  .form-box {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    background: rgb(231, 240, 255);
  }
  input {
  }
</style>
