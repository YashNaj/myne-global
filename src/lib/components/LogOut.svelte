<script lang="ts">
  import { enhance } from "$app/forms";
</script>

<form use:enhance method="POST" action="/signout">
  <input type="button" class="normal-case" value="Sign out" />
</form>
