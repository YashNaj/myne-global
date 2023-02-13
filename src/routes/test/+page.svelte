<script lang='ts'>
	import UploadWidget from './../../lib/components/UploadWidget.svelte';
  import AddCard from "$lib/components/AddCard.svelte";
import ComboBox from "$lib/components/ComboBox.svelte";
  import { myneMasterBrandsAndBreeds } from "../..";
  let brands: []  = myneMasterBrandsAndBreeds[0].brands
  console.log(brands)

</script>
<UploadWidget/>