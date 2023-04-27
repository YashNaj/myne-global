<script lang="ts">
  import { enhance } from "$app/forms";
</script>

<form use:enhance method="POST" action="/app/signout" >
  <button type="submit" class=" cursor-pointer btn btn-primary normal-case" value="Sign out">
    Sign out
  </button>
</form>
