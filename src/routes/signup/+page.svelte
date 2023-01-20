<script lang="ts">
  import { set_href } from "$lib/auth/client";
  import ResultText from "$lib/components/resultText.svelte";
  import Label from "$lib/components/label.svelte";
  import { getActionErrorMsg } from "$lib/utils/errors";
  import axios from "axios";
  import { getProps } from "$lib/utils";
  import { enhance } from "$app/forms";
  import { fade, slide } from "svelte/transition";
  import springPress from "$lib/animationActions";
  import PageSlide from "$lib/components/PageSlide.svelte";
  export let form: { message?: string };
  let duration = 100;
  console.log(form?.message);

  let email: string;
  let password: string;
  let { err, loading, suc } = getProps();

  const signup = async () => {
    loading = true;
    err = suc = "";

    try {
      await axios.postForm("", {
        email,
        password,
      });

      email = password = "";
      suc = "Sign up successful";
      set_href();
    } catch (error) {
      console.log(error);
      err = getActionErrorMsg(error);
    }
    loading = false;
  };

  $: if (email || password) err = "";
</script>

<PageSlide>
  <center>
    <form
      method="POST"
      class="flex-col justify-center align-center h-auto"
      use:enhance={({ data, cancel }) => {
        form = {};
        const email = data.get("email")?.toString() || "";
        const password = data.get("password")?.toString() || "";
        console.log(form);
        if (!email || !password) {
          form.message = "Invalid input";
          cancel();
        }
      }}
    >
      <h1 class="font-bold text-3xl text-center my-2" style="color:white;">
        Create an account
      </h1>
      <div class="form-control flex-col justify-center w-full max-w-xs">
        <label for="email" class="label">
          <span class="label-text">Email</span>
          <span class="label-text-alt" />
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          class="input input-bordered w-full max-w-xs"
        />
        <label for="email" class="label">
          <span class="label-text-alt" />
          <span class="label-text-alt" />
        </label>
        <div class="form-control w-full max-w-xs">
          <label for="password" class="label">
            <span class="label-text">Password</span>
            <span class="label-text-alt" />
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder=""
            class="input input-bordered w-full max-w-xs"
          />
          <label for="password" class="label">
            <span class="label-text-alt" />
            <span class="label-text-alt" />
          </label>
        </div>
        <div class="container w-full h-20 my-2">
          {#if form?.message}
            <div
              transition:slide={{ duration: 200 }}
              class="alert content-start w-full alert-error shadow-lg "
              style="align-items:flex-start; width: 320px;"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="stroke-current flex-shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  ><path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  /></svg
                >
                <span class="flex content-start text-left">
                  {form.message || " "}
                </span>
              </div>
            </div>
          {/if}
        </div>
        <div class="flex my-2 w-[320px] justify-around">
          <button
            use:springPress
            class="btn btn-primary flex  mx-1 flex-1"
            type="submit">Sign Up</button
          >
          <a
            use:springPress
            href="/signin"
            class="btn btn-accent flex  mx-1 flex-1"
            >Sign In
          </a>
        </div>
      </div>
    </form>
  </center>
</PageSlide>

<style lang="postcss">
  span {
    color: white;
  }
</style>
