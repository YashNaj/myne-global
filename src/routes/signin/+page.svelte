<script lang="ts">
  import { set_href } from "$lib/auth/client";
  import ResultText from "$lib/components/resultText.svelte";
  import Label from "$lib/components/label.svelte";
  import { getActionErrorMsg } from "$lib/utils/errors";
  import axios from "axios";
  import { getProps } from "$lib/utils";
  import type { D } from "$lib/interfaces";
  import { redirect, type ActionResult } from "@sveltejs/kit";
  import { enhance } from "$app/forms";
  import { fade, slide } from "svelte/transition";
  import springPress from "$lib/animationActions";
  let duration = 200;
  let email: string;
  let password: string;
  let { err, loading, suc } = getProps();
	export let form: { message?: string };
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

	<h1 class="text-3xl font-bold text-center my-2">Sign in</h1>
	<form
		method="POST"
    class = 'flex-col w-full h-full justify-center justify '
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
		<label for="email" class="rounded w-full">Email</label><br />
		<input id="email" name="email w-full" class="rounded p-2" /><br />
		<label for="password">Password</label><br />
		<input type="password" id="password" name="password" class="rounded p-2" /><br />
		<div class="flex w-full h-10 my-2">
			{#if form?.message}
				<div
					class="flex rounded w-full error"
					out:fade={{ duration: 100, delay: duration }}
					in:slide={{ duration: 100}}
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
     type="submit">Sign In</button>
     <a use:springPress 
     href = '/signup'
     class="btn btn-accent"
      >Sign Up </a>
  </form>
