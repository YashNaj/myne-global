<script lang="ts">
  import { enhance } from "$app/forms";
  import Label from "$lib/components/label.svelte";
  import { getProps } from "$lib/utils";
  import Alert from "$lib/components/Alert.svelte";
  import Nav from "$lib/components/Nav.svelte";
  import { slide } from "svelte/transition";
  import { dataset_dev } from "svelte/internal";
  export let form: { message?: string };
  let { err, loading, suc } = getProps();
  let extension = " ";
  let email = ''
</script>

<div class=" flex justify-start md:justify-center  content-center flex-wrap h-[100vh] pb-64 md:pb-32 px-4">
  <div class="form-box  flex flex-col justify-start md:justify-center content-center flex-wrap  card w-[12rem] md:w-[20rem] h-auto p-5 b rounded-3xl">
    <Nav/>
      <form
        method="POST"
        class="flex flex-col justify-center flex-wrap content-center text-primary"
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
      <div class="flex flex-col ">
          <label for="email" class="input-group flex">
            <span class="bg-primary flex-1">Email</span>
            <input
              type="email"
              name="email"
              placeholder="info@site.com"
              class="text-primary  bg-neutral flex-2 input-sm shadow-sm"
              bind:value={email }
            />
          </label>
            {#if email != ''}
            <div transition:slide> 

            <label class="input-group flex " for = 'password'>
              <span class="bg-primary flex-1">Password</span>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="password"
                class="input input-sm bg-neutral flex-2 text-primary shadow-sm"
              />
              
            </label>
          </div>

            {/if}
     

    
      </div>

        <div class = 'w-full flex my-2'>
          <input
          type="submit"
          value="Sign In"
          class="btn  btn-primary text-secondary order-last flex-1 w-[50%]"
        />
        <a
          class="btn  btn-neutral text-primary  flex-1 w-[50%]"
          href="/signup">Register</a
        >
        </div>
 
      </form>
      <div class="flex-col h-20 w-full justify center content-center">
        {#if form?.message}
          <div>
            <Alert message={form.message} />
          </div>
        {/if}
        <p class="my-3 text-secondary flex w-full justify-center">
          <a class="link" href="/forgot-password">Forgot Password?</a>
        </p>
      </div>
    </div>
</div>

<style lang="postcss">
  :global(label) {
    color: white;
  }
  .form-box{
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset; 
    background: rgb(231,240,255);
;   }
      form{
    
  }
</style>
