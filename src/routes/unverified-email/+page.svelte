<script>
  import { invalidateAll } from "$app/navigation";
import { signOut } from "@lucia-auth/sveltekit/client";


</script>
<div>
    <h2 class="text-xl">Please verify your email using the link we sent you</h2>
    <button on:click={async function(){
      await signOut()
        invalidateAll()
    }} class = 'btn btn-secondary text-primary flex w-100'> 
    Log Out
    </button>
</div>
