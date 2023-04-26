<script lang="ts">
  import LandingRegister from "$lib/components/LandingRegister.svelte";
  import LandingDashboard from "$lib/components/LandingDashboard.svelte";
  import LandingChild from "$lib/components/LandingChild.svelte";
  import LandingReports from "$lib/components/LandingReports.svelte";
  import LandingStolen from "$lib/components/LandingStolen.svelte";
  import LandingIntro from "$lib/components/LandingIntro.svelte";
  import LandingGuides from "$lib/components/LandingGuides.svelte";
</script>

<div class="w-full h-full flex flex-col overflow-x-hidden [user-select:none] z-50 pb-20">
  <LandingIntro />
  <LandingRegister />
  <LandingDashboard />
  <LandingStolen />
  <LandingReports />
  <LandingChild />
  <LandingGuides />
</div>
