<script>
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  import {Icon, Photograph} from 'svelte-hero-icons'
  let category = "";
  let subCategory = "";
  let brand = "";
  let size = "";
  let purchasedFrom = "";
  let purchasedValue = "";
  let description = "";

  let focusElementStyle = null;
  let isInputFocused = false;
  let refs = {};
  onMount(function () {
    document.getElementById("cardNumber").focus();
  });

  function focusInput(e) {
    isInputFocused = true;
    let targetRef = e.target.dataset.ref;
    let target = refs[targetRef];
    focusElementStyle = `opacity: 1;width: ${target.offsetWidth}px;height: ${target.offsetHeight}px;transform: translateX(${target.offsetLeft}px) translateY(${target.offsetTop}px)`;
  }

  function blurInput() {
    setTimeout(() => {
      if (!isInputFocused) {
        focusElementStyle = null;
      }
    }, 300);
    isInputFocused = false;
  }
  let iconColor = 'black' 
</script>

<div class=" w-full px-2 h-[80vh] relative rounded-lg">
  

    <div
      class="card-list w-full flex justify-center pt-10 content-center relative h-80"
    >
      <div
        in:fly={{ duration: 200 }}
        out:fly={{ delay: 200 }}
        class="card-item bg-white rounded-lg shadow-lg w-72 h-80 z-2 "
      >
        <div class="w-full h-[50%] bg-error rounded-t-lg">
          <div class="w-full h-full  p-3">
            <div class="upload-pictures w-full h-full rounded-md shadow-md">
              <Icon src = {Photograph} color = {iconColor} class = 'opacity-20'/> 
            </div>
          </div>
        </div>
      </div>
    </div>
    <form
      class="h-80 p-4 bg-white flex flex-col justify-center content-center flex-wrap rounded-lg"
    >
      <div class="form-control">
        <label class="label">
          <span class="label-text">Your Email</span>
        </label>
        <label class="input-group">
          <span>Email</span>
          <input
            type="text"
            placeholder="info@site.com"
            class="input input-bordered"
          />
        </label>
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Your Email</span>
        </label>
        <label class="input-group">
          <span>Email</span>
          <input
            type="text"
            placeholder="info@site.com"
            class="input input-bordered"
          />
        </label>
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Your Email</span>
        </label>
        <label class="input-group">
          <span>Email</span>
          <input
            type="text"
            placeholder="info@site.com"
            class="input input-bordered"
          />
        </label>
      </div>
    </form>
  </div>

<style lang="postcss">
  .upload-pictures {
    background: rgba(44, 41, 41, 0.514);
  }
</style>
