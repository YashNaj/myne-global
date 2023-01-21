<script lang="ts">
  import Label from "$lib/components/label.svelte";
  import { getProps } from "$lib/utils";
  import { enhance } from "$app/forms";
  import Alert from "$lib/components/Alert.svelte";
  export let form: { message?: string };
  let { err, loading, suc } = getProps();
</script>
<div class ='flex-col flex justify-center align-center'>
  <div>
    <form
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
      <label for="email" class ="label font-semibold">Email</label><br />
      <input id="email" name="email" class ='input input-sm w-full'/><br />
      <label for="password" class ="label font-semibold" >Password</label><br />
      <input type="password" id="password" name="password" class ='input input-sm w-full' /><br />
      <input type="submit" value="Sign Up" class ='btn btn-primary text-secondary my-4 flex w-full'/>
      <a class="btn btn-secondary flex w-full my-4" href="/signin">Sign In</a>
    </form>
  </div>
        <div class="flex-col h-20 w-full justify center content-center">
      {#if form?.message}
        <div>
          <Alert message={form.message} />
        </div>
      {/if}
    </div>
</div>
<style lang="postcss">
  :global(label){
    color:white;
  }
</style>