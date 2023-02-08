<script lang="ts">
    export let manufacture= ''
    export let reference_ = ''
    export let model = ''
    export let caseSerialNumber = ''
</script>

<div class="stats shadow">
  <div class="stat">
    <div class="stat-title">{manufacture}</div>
    <div class="stat-title">{caseSerialNumber}</div>
    <div class="stat-value">{model}</div>

    <div class="stat-desc">{reference_}</div>
  </div>
</div>
