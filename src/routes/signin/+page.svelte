<script lang="ts">
  import { enhance } from "$app/forms";
  import Label from "$lib/components/label.svelte";
  import { getProps } from "$lib/utils";
  import Alert from "$lib/components/Alert.svelte";
	export let form: { message?: string };
  let { err, loading, suc } = getProps();
  
</script>
<div class ='flex-col flex justify-center align-center'>
  <div class = 'flex-col flex justify-center flex-wrap content-center'>
    <form
    method="POST"
    class=  'flex flex-col justify-center flex-wrap content-center'
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
  <div class="form-control flex w-full text-primary">
    <label for='email' class="input-group">
      <span class = 'bg-primary flex-1'>Email</span>
      <input type="email" name = 'email'  placeholder="info@site.com" class="text-primary input input-bordered" />
    </label>
  </div>
  <div class="form-control flex my-3">
    <label class="input-group">
      <span class = 'bg-primary flex-1'>Password</span>
      <input type="password" id = 'password' name = 'password' placeholder="password" class="input input-bordered text-primary" />
    </label>
  </div>
      <input type="submit" value="Sign In" class="btn btn-secondary my-4 w-full" />
      <a  class ='btn btn-primary text-secondary flex w-full my-4' href="/signup">Register</a>
    </form>
  </div>
        <div class="flex-col h-20 w-full px-4 justify center content-center">
      {#if form?.message}
        <div>
          <Alert message={form.message} />
        </div>
      {/if}
    </div>

    <p class="my-3 text-secondary flex w-full justify-center">
      <a class="link" href="/forgot-password">Forgot Password?</a>
    </p>
</div>
<style lang="postcss">
  :global(label){
    color:white;
  }
</style>