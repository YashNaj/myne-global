<script lang="ts">
  import { set_href } from "$lib/auth/client";
  import ResultText from "$lib/components/resultText.svelte";
  import Label from "$lib/components/label.svelte";
  import { getActionErrorMsg } from "$lib/utils/errors";
  import axios from "axios";
  import { getProps } from "$lib/utils";
  import { enhance } from "$app/forms";
  import Alert from "$lib/components/Alert.svelte";
	export let form: { message?: string };
  let { err, loading, suc } = getProps();
</script>

<center>
 	<form
  method="POST"
  use:enhance={({ data, cancel }) => {
    form = {};
    const email = data.get('email')?.toString() || '';
    const password = data.get('password')?.toString() || '';
    if (!email || !password) {
      form.message = 'Invalid input';
      cancel();
    }
  }}
>
    <Label lbl="Email">
      <input
        class="input input w-full input-sm"
        class:input-err={err}
        class:input-success={suc}
        type="email"
        autocomplete="email"
      />
    </Label>
    <Label lbl="Password">
      <input
        class="input input w-full input-sm"
        class:input-err={err}
        class:input-success={suc}
        type="password"
        autocomplete="new-password"
      />
    </Label>

    <button
      class="my-4 btn btn-primary"
      type="submit"
    >
      Signup
    </button>
    <a class="btn btn-secondary" href="/auth/signin">Sign In</a>

    <div class="flex-col h-20 w-full justify center content-center">
      {#if form?.message}
        <div>
          <Alert message={form.message} />
        </div>
      {/if}
    </div>
    <p class="my-3">
      <a class="link" href="/forgot-password">Forgot Password?</a>
    </p>
  </form>
</center>
