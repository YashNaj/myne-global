<script lang="ts">
  import { set_href } from "$lib/auth/client";
  import ResultText from "$lib/components/resultText.svelte";
  import Label from "$lib/components/label.svelte";
  import { getActionErrorMsg } from "$lib/utils/errors";
  import axios from "axios";
  import { getProps } from "$lib/utils";
  import type { D } from "$lib/interfaces";
  import type { ActionResult } from "@sveltejs/kit";
  import Alert from "$lib/components/Alert.svelte";
  import { slide } from "svelte/transition";

  let email: string;
  let password: string;
  let { err, loading, suc } = getProps();

  const signin = async () => {
    loading = true;
    err = suc = "";

    try {
      const { data }: D<ActionResult> = await axios.postForm("", {
        email,
        password,
      });

      email = password = "";
      suc = "Sign in successful";
      if (data.type === "redirect") set_href(data.location);
    } catch (error) {
      console.log(error);
      err = getActionErrorMsg(error);
    }
    loading = false;
  };

  $: if (email || password) err = suc = "";
</script>

<center>
  <form on:submit|preventDefault={signin}>
    <Label lbl="Email">
      <input
        class="input w-full input-sm"
        class:input-error={err}
        class:input-success={suc}
        type="email"
        autocomplete="email"
        bind:value={email}
      />
    </Label>
    <Label lbl="Password">
      <input
        class="input w-full input-sm"
        class:input-error={err}
        class:input-success={suc}
        type="password"
        autocomplete="current-password"
        bind:value={password}
      />
    </Label>
    <a class="btn btn-secondary" href="/signup">Sign Up</a>

    <button
      class="my-4 btn btn-primary text-secondary"
      class:loading
      type="submit"
      disabled={!email || !password || loading}
    >
      Sign in
    </button>
    <div class="flex-col h-20 w-full justify center content-center">
      {#if err}
        <div>
          <Alert message={err} />
        </div>
      {/if}
    </div>

    <p class="my-3 text-secondary">
      <a class="link" href="/forgot-password">Forgot Password?</a>
    </p>
  </form>
</center>
