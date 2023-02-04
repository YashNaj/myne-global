<script lang="ts">
	import { enhance } from '$app/forms';
  import { auth } from "$lib/auth/lucia";
  import { fail, redirect } from "@sveltejs/kit";
  import type { PageServerLoad, Actions } from "./$types";
  import { LuciaError } from "lucia-auth";
  export let form = {message?: ''}
  // let category = "Category";
  // let subCategory = "Subcategory";
  // let brand = "Brand";
  // let size = "Size";
  // let purchasedFrom = "Purchased from";
  // let purchasedValue = "Purchased value";
  // let description = "Keep the description to a few words";
  // let iconColor = "black";
  const addCardFields = ["category", "subCategory", "brand", "size", "purchasedFrom", "purchasedValue", "description"]
</script>

<div class = 'card '> 
  <form
    method='POST'
     use:enhance
  class = 'flex flex-col'>
    {#each addCardFields as addCardField}
    <input name = {addCardField} id = {addCardField} placeholder = {addCardField}
    class = 'input-md '/> 
    {/each}
  </form>
</div>

<style lang="postcss">
</style>
