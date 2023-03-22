<script lang="ts">
  import type { User } from "lucia-auth";
  import { Icon, User } from "svelte-hero-icons";
  import { scale } from "svelte/transition";
  export let selected = false;

  export let user;
  $: user = user;
  $: console.log(user);
</script>

<div
  class="user-badge flex flex-col  rounded-lg justify-center  conent-center flex-wrap text-white"
  in:scale|local={{ delay: 50, duration: 50 }}
>
  <div class="avatar  placeholder flex justify-center  ">
    <div
      class="bg-neutral-focus {selected
        ? 'border-4 border-green-600 transition-colors'
        : ''}  text-neutral-content rounded-full w-24"
    >
      <span class="text-3xl">MG</span>
    </div>
  </div>
  <div class="w-full h-fit flex p-1 justify-center ">
    <h1 class="w-full h-fit p-1 justify-center flex content-center flex-nowrap">
      MyneID :{user.id}
    </h1>
  </div>
</div>
