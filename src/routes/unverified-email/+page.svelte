<script>
  import { invalidateAll } from "$app/navigation";


  import { signOut } from "@lucia-auth/sveltekit/client";
  import { redirect } from "@sveltejs/kit";
  import { slide } from "svelte/transition";
  let duration = 200;
</script>
<h2 class="text-xl">Please verify your email using the link we sent you</h2>
<button
in:slide={{ duration, delay: duration }}
out:slide={{ delay: duration }}
class=" btn btn-primary"
style = 'background-color: #0010101' 
on:click={async () => {
    await signOut();
    invalidateAll();
    console.log('pressed')
}}>Sign out</button
>