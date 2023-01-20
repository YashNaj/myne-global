<script lang="ts">
  import { set_href } from "$lib/auth/client";
  import ResultText from "$lib/components/resultText.svelte";
  import Label from "$lib/components/label.svelte";
  import { getActionErrorMsg } from "$lib/utils/errors";
  import axios from "axios";
  import { getProps } from "$lib/utils";
  import type { D } from "$lib/interfaces";
  import { enhance } from "$app/forms";
  import { fade, slide } from "svelte/transition";
  import springPress from "$lib/animationActions";
  import PageSlide from "$lib/components/PageSlide.svelte";
  let duration = 200;
  let email: string;
  let password: string;
  export let form: { message?: string };
</script>

<PageSlide>
  <center>
    <form
      class="w-full h-[100%] justify-center content-center flex-col h-auto"
      method="POST"
      use:enhance={({ data, cancel }) => {
        form = {};
        const email = data.get("email")?.toString() || "";
        const password = data.get("password")?.toString() || "";
        if (!email || !password) {
          form.message = "Invalid input";
          cancel();
        }
      }}
    >
      <!-- <label for="email" class="rounded w-full">Email</label><br />
      <input id="email" name="email w-full" class="rounded p-2" /><br />
      <label for="password">Password</label><br />
      <input type="password" id="password" name="password" class="" /> -->
      <h1 class="text-3xl font-bold text-center my-2 " style = 'color:white;' >Sign in</h1>

      <div class="form-control w-full max-w-xs">
        <label for="email" class="label">
          <span class="label-text">Email</span>
          <span class="label-text-alt" />
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          class="flex input input-bordered w-full max-w-xs"
        />
        <label for="email" class="label">
          <span class="label-text-alt" />
          <span class="label-text-alt" />
        </label>
      </div>
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
          class="flex input input-bordered w-full max-w-xs"
        />
        <label for="password" class="label">
          <span class="label-text-alt" />
          <span class="label-text-alt" />
        </label>
      </div>

      <div class="flex-col justify-center content-center  w-full h-20 my-2">
        {#if form?.message}
          <div
            class="flex-col rounded w-full error"
            out:fade={{ duration: 200, delay: duration }}
            in:slide={{ duration: 200 }}
          >
            <div class="alert flex alert-error shadow-lg content-start " style = 'align-items:flex-start; width: 320px;'>
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
                <span class="text-left">
                  {form.message || " "}
                </span>
              </div>
            </div>
          </div>
        {/if}
      </div>
      <div />
      <div class="flex my-2 w-[320px] justify-around">
        <a use:springPress href="/signup" class="btn btn-accent mx-1 flex flex-1"
        >Sign Up
      </a>
        <button
          use:springPress
          class="btn btn-primary flex mx-1 flex-1"
          type="submit">Sign In</button
        >
     
      </div>
    </form>
  </center>
</PageSlide>
