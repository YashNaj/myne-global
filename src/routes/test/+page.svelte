<script lang='ts'>
	import UploadWidget from './../../lib/components/UploadWidget.svelte';
  import AddCard from "$lib/components/AddCard.svelte";
  import ComboBox from "$lib/components/ComboBox.svelte";
  import { myneMasterBrandsAndBreeds } from "../..";
  import Spinner from '$lib/components/Spinner.svelte';
  let brands: [] | undefined | null | string[] = myneMasterBrandsAndBreeds[0].brands
  import logo from '$lib/images/white_icon.png'
  console.log(brands)
  const picture = logo ; 
</script>
<!-- <UploadWidget/> -->
<Spinner images={picture}/> 
