<script lang="ts">
  // register Swiper custom elements
  import { register } from "swiper/element/bundle";
  register();
  import Footer2 from "$lib/components/Footer2.svelte";
  import "./app.css";
</script>

<slot />
<Footer2 />
