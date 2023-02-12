<script lang='ts'>
  import AddCard from "$lib/components/AddCard.svelte";
import ComboBox from "$lib/components/ComboBox.svelte";
  import { myneMasterBrandsAndBreeds } from "../..";
  let brands: []  = myneMasterBrandsAndBreeds[0].brands
  console.log(brands)

</script>
<AddCard/>
<!-- <ComboBox/> -->