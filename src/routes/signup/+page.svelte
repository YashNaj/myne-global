<script lang="ts">
  import { enhance } from "$app/forms";
  import Alert from "$lib/components/Alert.svelte";
  export let form: { message?: string };
</script>
<div class ='flex-col flex justify-center align-center flex-wrap'>
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
  <div class="form-control flex w-full">
    <label for='email' class="label">
      <span class="flex-1 label-text">Your Email</span>
    </label>
    <label class="input-group">
      <span class = 'bg-primary flex-1'>Email</span>
      <input type="email" name = 'email'  placeholder="info@site.com" class="input input-bordered" />
    </label>
  </div>

  <div class="form-control flex">
    <label class="label" for='password'>
      <span class="label-text">Your Email</span>
    </label>
    <label class="input-group">
      <span class = 'bg-primary flex-1'>Password</span>
      <input type="password" id = 'password' name = 'password' placeholder="password" class="input input-bordered" />
    </label>
  </div>
  
      <!-- <label for="email" class ="label font-semibold">Email</label><br />
      <input id="email" name="email" class = 'input input-md w-full'/><br />
      <label for="password" class ="label font-semibold" >Password</label><br />
      <input type="password" id="password" name="password" class ='input input-md w-full' /><br /> -->
      <input type="submit" value="Register" class ='btn btn-primary text-secondary my-4 flex w-full'/>
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