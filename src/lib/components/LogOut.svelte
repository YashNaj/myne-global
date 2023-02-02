<script lang="ts">
	import { enhance } from "$app/forms";
</script>

<form use:enhance method="POST" action='/signout'>
	<input type="submit" class="button" value="Sign out" />
</form>
