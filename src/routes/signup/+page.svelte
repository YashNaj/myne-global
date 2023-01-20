<script lang="ts">
  import { set_href } from "$lib/auth/client";
  import ResultText from "$lib/components/resultText.svelte";
  import Label from "$lib/components/label.svelte";
  import { getActionErrorMsg } from "$lib/utils/errors";
  import axios from "axios";
  import { getProps } from "$lib/utils";
  import { enhance } from '$app/forms';
	import { fade, slide } from 'svelte/transition';
	import  springPress  from  '$lib/animationActions';
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

<!-- <form on:submit|preventDefault={signup}>
  <Label lbl="Email">
    <input
      class="input input-sm"
      class:input-err={err}
      class:input-success={suc}
      type="email"
      autocomplete="email"
      bind:value={email}
    />
  </Label>
  <Label lbl="Password">
    <input
      class="input input-sm"
      class:input-err={err}
      class:input-success={suc}
      type="password"
      autocomplete="new-password"
      bind:value={password}
    />
  </Label>

  <button
    class="my-4 btn btn-primary"
    class:loading
    type="submit"
    disabled={!email || !password || loading}
  >
    Signup
  </button>

  <ResultText {err} />

  <p class="my-3">
    <a class="link" href="/forgot-password">Forgot Password?</a>
  </p>
</form> -->
	<PageSlide>
		<h1 class="font-bold text-3xl text-center my-2">Create an account</h1>
	<form
    method ='POST'
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
		<label for="email" class="rounded">Email</label><br />
		<input id="email" name="email" class="rounded p-2" /><br />
		<label for="password">Password</label><br />
		<input type="password" class="rounded p-2 " id="password" name="password" /><br />
		<div class="flex w-full h-10 my-2">
			{#if form?.message}
				<div
					class="flex rounded w-full error"
					out:fade={{ duration: 100, delay: duration }}
					in:slide={{ duration: 100 }}
				>
					<span class="error-tag h-full w-5 bg-black rounded " />
					<p class="error w-full h-10 flex bg-white rounded  p-2">
						{form.message || ' '}
					</p>
				</div>
			{/if}
		</div>
		<button use:springPress 
		class="btn btn-primary"
		 type="submit">Sign up</button>
		 <a use:springPress 
		 href = '/signin'
		 class="btn btn-accent"
		  >Sign in</a>
	  </form>
	</PageSlide>
	
	


