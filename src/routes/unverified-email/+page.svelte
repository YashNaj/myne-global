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
class=" bottom-0 right-20 bg-black p-2 h-auto-lg w-full h-full"
style = 'background-color: #0010101' 
on:click={async () => {
    await signOut();
    invalidateAll();
    redirect(302, '/signin');
    console.log('pressed')
}}>Sign out</button
>