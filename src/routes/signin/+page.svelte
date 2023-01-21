<script lang="ts">
  import { enhance } from "$app/forms";
  import Label from "$lib/components/label.svelte";
  import { getProps } from "$lib/utils";
  import Alert from "$lib/components/Alert.svelte";
	export let form: { message?: string };
  let email: string;
  let password: string;
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
  }}>
    <Label lbl="Email">
      <input
        class="input w-full input-sm"
        class:input-error={err}
        class:input-success={suc}
        type="email"
        autocomplete="email"
      />
    </Label>
    <Label lbl="Password">
      <input
        class="input w-full input-sm"
        class:input-error={err}
        class:input-success={suc}
        type="password"
        autocomplete="current-password"
      />
    </Label>
    <a class="btn btn-secondary" href="/signup">Sign Up</a>

    <button
      class="my-4 btn btn-primary text-secondary"
      type="submit"
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
