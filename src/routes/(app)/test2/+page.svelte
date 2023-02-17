<script lang="ts">
  import CardCell from "$lib/components/CardCell.svelte";
  import { draw } from "svelte/transition";
  import type { PageData } from "./$types";
  let description = "";
  let value = "test";
  let label = "test";
  let toggle = false; 
  export let data: PageData;
</script>

<input class="input input-md" bind:value={description} />
<a href="/test" class="btn btn-error normal-case"> test 1</a>

<div class=" w-full h-full flex justify-center">
  <swiper-container class="mySwiper" navigation="true">
    <swiper-slide>
        <div class="card-fields_back back-card_general-3">
        <div class="w-full h-full back-card_card-fields-2">
          <div class="card-fields-2-1">
            <CardCell {value} {label} justifyCell="justify-start" />
          </div>
          <div class="card-fields-2-2">
            <CardCell {value} {label} justifyCell="justify-end" />
          </div>
          <div class="card-fields-2-3">
            <CardCell {value} {label} justifyCell="justify-start" />
          </div>
          <div class="card-fields-2-4">
            <CardCell {value} {label} justifyCell="justify-end" />
          </div>
          <div class="card-fields-2-5">
            <CardCell {value} {label} justifyCell="justify-start" />
          </div>
          <div class="card-fields-2-6">
            <CardCell {value} {label} justifyCell="justify-end" />
          </div>
        </div>
      </div></swiper-slide>

    <swiper-slide>
        <div class="card-fields_back back-card_general-3">
        <div class="w-full h-full back-card_card-fields-2">
          <div class="card-fields-2-1">
            <CardCell {value} {label} justifyCell="justify-start" />
          </div>
          <div class="card-fields-2-2">
            <CardCell {value} {label} justifyCell="justify-end" />
          </div>
          <div class="card-fields-2-3">
            <CardCell {value} {label} justifyCell="justify-start" />
          </div>
          <div class="card-fields-2-4">
            <CardCell {value} {label} justifyCell="justify-end" />
          </div>
          <div class="card-fields-2-5">
            <CardCell {value} {label} justifyCell="justify-start" />
          </div>
          <div class="card-fields-2-6">
            <CardCell {value} {label} justifyCell="justify-end" />
          </div>
        </div>
      </div></swiper-slide>

  </swiper-container>

</div>

<style lang="postcss">
  swiper-container {
    width: 100%;
    height: 100%;
  }

  swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .front-parent {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }

  .front-top {
    grid-area: 1 / 1 / 2 / 2;
  }
  .front-bottom {
    grid-area: 2 / 1 / 3 / 2;
  }

  .front-fields-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }

  .front-field-1 {
    grid-area: 1 / 1 / 2 / 2;
  }
  .front-field-2 {
    grid-area: 1 / 2 / 2 / 3;
  }
  .front-field-3 {
    grid-area: 2 / 1 / 3 / 2;
  }
  .front-field-4 {
    grid-area: 2 / 2 / 3 / 3;
  }
  .front-field-5 {
    grid-area: 3 / 1 / 4 / 2;
  }
  .front-field-6 {
    grid-area: 3 / 2 / 4 / 3;
  }
  .front-field-7 {
    grid-area: 4 / 1 / 5 / 2;
  }
  .front-field-8 {
    grid-area: 4 / 2 / 5 / 3;
  }

  .back-card_general-grid {
    display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(3, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
  }

  .back-card_general-1 {
    grid-area: 1 / 1 / 2 / 2;
  }
  .back-card_general-2 {
    grid-area: 2 / 1 / 3 / 2;
  }
  .back-card_general-3 {
    grid-area: 3 / 1 / 4 / 2;
  }
  .back-card_general-4 {
    grid-area: 4 / 1 / 5 / 2;
  }
  .back-card_card-fields-1 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }

  .fields-1-1 {
    grid-area: 1 / 1 / 2 / 2;
  }
  .fields-1-2 {
    grid-area: 1 / 2 / 2 / 3;
  }
  .fields-1-3 {
    grid-area: 2 / 1 / 3 / 2;
  }
  .fields-1-4 {
    grid-area: 2 / 2 / 3 / 3;
  }
  .fields-1-5 {
    grid-area: 3 / 1 / 4 / 2;
  }
  .fields-1-6 {
    grid-area: 3 / 2 / 4 / 3;
  }
  .back-card_card-fields-2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }

  .fields-2-1 {
    grid-area: 1 / 1 / 2 / 2;
  }
  .fields-2-2 {
    grid-area: 1 / 2 / 2 / 3;
  }
  .fields-2-3 {
    grid-area: 2 / 1 / 3 / 2;
  }
  .fields-2-4 {
    grid-area: 2 / 2 / 3 / 3;
  }
  .fields-2-5 {
    grid-area: 3 / 1 / 4 / 2;
  }
  .fields-2-6 {
    grid-area: 3 / 2 / 4 / 3;
  }
</style>
