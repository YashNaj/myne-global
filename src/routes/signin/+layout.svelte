<script>
  import MobileNav from "$lib/components/MobileNav.svelte";
  import Nav from "$lib/components/Nav.svelte";

</script>

<div class = 'container flex-col justify-center align-center'>
    <header>
        <Nav/>
    </header>
    <slot/>
</div>
<style land='postcss'>
  label{
    color: white;
  }
</style>