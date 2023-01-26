<script>
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";

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
</script>

<div class=" w-full px-2 h-[80vh] relative rounded-lg">
  <div class="card-form h-full w-full rounded-g">
    <div
      class="card-list w-full flex justify-center pt-10 content-center relative h-80"
    >
      <div class="card-item bg-white rounded-lg shadow-lg w-72 h-72 z-2 ">
      </div>
    </div>
    <form class = 'bg-black h-80 p-4 flex flex-col justify-center content-center flex-wrap rounded-lg'>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Your Email</span>
        </label>
        <label class="input-group">
          <span>Email</span>
          <input type="text" placeholder="info@site.com" class="input input-bordered" />
        </label>
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Your Email</span>
        </label>
        <label class="input-group">
          <span>Email</span>
          <input type="text" placeholder="info@site.com" class="input input-bordered" />
        </label>
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Your Email</span>
        </label>
        <label class="input-group">
          <span>Email</span>
          <input type="text" placeholder="info@site.com" class="input input-bordered" />
        </label>
      </div>
      
    </form>
  </div>
</div>
