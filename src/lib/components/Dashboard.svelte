<script lang="ts">
  import { invalidateAll } from "$app/navigation";
  import springPress, { horizontalSlide } from "$lib/animationActions";
  import { spring } from "svelte/motion";
  import { quintOut } from "svelte/easing";
  import Listbox from "../../lib/components/Listbox.svelte";
  import { blur, slide } from "svelte/transition";
  let isOpen = false;
  let heightScale = 20;
  let drawerHeight = spring(heightScale, {
    stiffness: 0.15,
    damping: 0.5,
  });

  function setOpen() {
    isOpen = !isOpen;
    if (isOpen) {
      drawerHeight.set(75);
    } else {
      drawerHeight.set(20);
    }
    console.log(isOpen);
    console.log($drawerHeight);
  }
  let duration = 200;
</script>

<div
  in:slide={{ delay: duration, duration, easing: quintOut }}
  out:slide={{ delay: duration }}
>
  <div
    in:blur={{ delay: duration, duration }}
    out:blur={{ delay: duration }}
    class="dashboard  card rounded-lg  text-white shadow-lg flex-col p-2   content-center  relative"
    style="height: {$drawerHeight}vh"
  >
    {#if isOpen}
      <div transition:slide={{duration:200, delay: 200}} class=" flex-col h-full w-full">
        <div
          in:slide={{ duration }}
          out:slide={{ delay: duration }}
          class="relative px-4 fixed  h-20 w-full flex align-center justify center z-1"
        >
          <Listbox />
        </div>
        <div
          class="card-container place-items-center grid gap-2 grid-cols-2 grid-rows-auto w-full h-auto"
        >
          <div
            transition:blur={{ delay: 300, duration: 350 }}
            class=" square rounded-lg"
          />
          <div
            transition:blur={{ delay: 300, duration: 350 }}
            class=" square rounded-lg  "
          />
          <div
            transition:blur={{ delay: 300, duration: 350 }}
            class=" square rounded-lg"
          />
          <div
            transition:blur={{ delay: 300, duration: 350 }}
            class=" square rounded-lg  "
          />
          <div
            transition:blur={{ delay: 300, duration: 350 }}
            class=" square rounded-lg"
          />
          <div
            transition:blur={{ delay: 300, duration: 350 }}
            class=" square rounded-lg  "
          />
          <div
            transition:blur={{ delay: 300, duration: 350 }}
            class=" square rounded-lg"
          />
          <div
            transition:blur={{ delay: 300, duration: 350 }}
            class=" square rounded-lg  "
          />
          <div
            transition:blur={{ delay: 300, duration: 350 }}
            class=" square rounded-lg"
          />
          <div
            transition:blur={{ delay: 300, duration: 350 }}
            class=" square rounded-lg  "
          />
          <div
            transition:blur={{ delay: 300, duration: 350 }}
            class=" square rounded-lg"
          />
          <div
            transition:blur={{ delay: 300, duration: 350 }}
            class=" square rounded-lg  "
          />
        </div>
        <button
          in:slide|local={{ delay: duration, duration }}
          out:slide|local={{ delay: duration }}
          on:click={() => {
			setOpen()
		} }
          on:keypress={() => setOpen()}
          class="rounded-lg bg-none p-2 m-1 text-black text-xl z-50 absolute right-0 top-0 drawer-button"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_328_1214)">
              <rect width="32" height="32" fill="none" />
              <rect
                width="4.05633"
                height="16.2253"
                rx="2.02817"
                transform="matrix(0.694203 0.71978 -0.694203 0.71978 29.1841 0)"
                fill="#D9D9D9"
              />
              <rect
                width="4.05633"
                height="16.2253"
                rx="2.02817"
                transform="matrix(-0.694203 0.71978 0.694203 0.71978 2.81592 0)"
                fill="#D9D9D9"
              />
              <path
                d="M13.9381 17.475C13.9381 16.3754 14.8296 15.4839 15.9292 15.4839V15.4839C17.0289 15.4839 17.9204 16.3754 17.9204 17.475V30.0089C17.9204 31.1085 17.0289 32 15.9292 32V32C14.8296 32 13.9381 31.1086 13.9381 30.0089L13.9381 17.475Z"
                fill="#D9D9D9"
              />
              <ellipse
                cx="15.9292"
                cy="14.4516"
                rx="5.97346"
                ry="6.19355"
                fill="#D9D9D9"
              />
              <ellipse
                cx="15.9292"
                cy="14.4516"
                rx="3.98231"
                ry="4.12903"
                fill="#6F6B6B"
              />
              <rect
                x="13.9381"
                y="26.8387"
                width="3.98231"
                height="2.06452"
                fill="#6F6B6B"
              />
              <rect
                width="4.05633"
                height="2.02817"
                transform="matrix(0.694203 0.71978 -0.694203 0.71978 23.3107 6.19357)"
                fill="#6F6B6B"
              />
              <rect
                width="4.05633"
                height="2.02817"
                transform="matrix(-0.694203 0.71978 -0.694203 -0.71978 10.1974 7.65335)"
                fill="#6F6B6B"
              />
            </g>
            <defs>
              <clipPath id="clip0_328_1214">
                <rect width="32" height="32" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    {:else}
      <div
        class="drawer-message container flex-col justify-center align-center  w-full relative"
      >
        <h1
          in:slide={{ delay: duration, duration: duration }}
          out:slide={{ delay: duration }}
          class=" w-full drawer-header justify-center align-center
		 text-center flex font-semibold text-[60px]  leading-11"
        >
        Card Vault
        </h1>
        <button
          in:slide={{ delay: duration, duration }}
          out:slide={{ delay: duration }}
          use:springPress
          on:click={() => setOpen()}
          on:keypress={() => setOpen()}
          class="btn btn-ghost p-2 m-1 text-black absolute right-0 text-xl z-50 drawer-button"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_328_1214)">
              <rect width="32" height="32" fill="none" />
              <rect
                width="4.05633"
                height="16.2253"
                rx="2.02817"
                transform="matrix(0.694203 0.71978 -0.694203 0.71978 29.1841 0)"
                fill="#D9D9D9"
              />
              <rect
                width="4.05633"
                height="16.2253"
                rx="2.02817"
                transform="matrix(-0.694203 0.71978 0.694203 0.71978 2.81592 0)"
                fill="#D9D9D9"
              />
              <path
                d="M13.9381 17.475C13.9381 16.3754 14.8296 15.4839 15.9292 15.4839V15.4839C17.0289 15.4839 17.9204 16.3754 17.9204 17.475V30.0089C17.9204 31.1085 17.0289 32 15.9292 32V32C14.8296 32 13.9381 31.1086 13.9381 30.0089L13.9381 17.475Z"
                fill="#D9D9D9"
              />
              <ellipse
                cx="15.9292"
                cy="14.4516"
                rx="5.97346"
                ry="6.19355"
                fill="#D9D9D9"
              />
              <ellipse
                cx="15.9292"
                cy="14.4516"
                rx="3.98231"
                ry="4.12903"
                fill="#6F6B6B"
              />
              <rect
                x="13.9381"
                y="26.8387"
                width="3.98231"
                height="2.06452"
                fill="#6F6B6B"
              />
              <rect
                width="4.05633"
                height="2.02817"
                transform="matrix(0.694203 0.71978 -0.694203 0.71978 23.3107 6.19357)"
                fill="#6F6B6B"
              />
              <rect
                width="4.05633"
                height="2.02817"
                transform="matrix(-0.694203 0.71978 -0.694203 -0.71978 10.1974 7.65335)"
                fill="#6F6B6B"
              />
            </g>
            <defs>
              <clipPath id="clip0_328_1214">
                <rect width="32" height="32" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    {/if}
  </div>
</div>

<style lang="postcss">
  .square {
    width: 90%;
    aspect-ratio: 1/1;
    background-color: white;
  }
  .dashboard{
	background-color: #5d6169;
  }
  .drawer-button {
    text-decoration: none;
    background: none;
  }
  .icons {
    color: rgba(255, 255, 255, 0.795) 0%;
  }
  .card-container {
    overflow: scroll !important;
  }
</style>
