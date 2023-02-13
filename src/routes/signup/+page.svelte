<script lang="ts">
  import { page } from "$app/stores";
  import { enhance } from "$app/forms";
  import Alert from "$lib/components/Alert.svelte";
  import Nav from "$lib/components/Nav.svelte";
  import type { Snapshot } from "./$types";
  export let form: { message?: string };
  export let url = $page.url.origin;
  let firstName: string     = ''
  let lastName: string = ''
  let birthday: string = ''
  let country: string = ''
  let postalZip: string = ''
  let email: string = ''
  let password: string = ''
  let phone: string = ''

  export let formData = {
    firstName,
    lastName,
    birthday,
    country,
    postalZip,
    email,
    password,
    phone,
  };
  $: formData = formData = {
    firstName,
    lastName,
    birthday,
    country,
    postalZip,
    email,
    password,
    phone,
  };
  export const snapshot: Snapshot = {
    capture: () => formData,
    restore: (value) => formData,
  };
  console.log(url);
</script>

<div class="w-full h-full flex justify-center my-2 content-center flex-wrap ">
  <div class="flex flex-col">
    <form
      class="flex text-black flex-col justify-between content-center  bg-white h-[40rem] w-[40rem] p-6 rounded-3xl"
      method="POST"
      use:enhance
    >
      <Nav />
      <h1
        class="text-center flex font-bold text-primary text-[2rem] justify-center"
      >
        Create an account
      </h1>
      <div class="text-black">
        <div class="flex justify-center my-2">
          <div class="flex  justify-between">
            <label class="label hidden  text-black" for="firstName"
              >First Name</label
            ><br />
            <input
              class="input input-md rouned-lg"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              bind:value={firstName}
            />
          </div>
          <div class="flex justify-between">
            <label
              class=" hidden after: overflow-x-hidden label text-black"
              for="lastName">Last Name</label
            ><br />
            <input
              class="input input-md rouned-lg"
              id="lastName"
              name="lastName"
              placeholder="Last Name "
              bind:value={lastName}
            />
          </div>
        </div>
        <div class="flex justify-center">
          <div class="flex my-2">
            <label
              class="  rouned-lg flex-1  mx-1 text-primary font-bold mr-1"
              placeholder="Date of Birth"
              for="birthday"
            >
              Date of Birth
            </label>
            <input
              class="input input-md flex-1 rouned-lg mx-1"
              type="date"
              id="birthday"
              name="birthday"
              placeholder="Date of Birth"
              bind:value={birthday}

            />
          </div>
        </div>

        <div class="flex justify-center my-2">
          <div class="flex  justify-between">
            <label class=" hidden label  text-black" for="country"
              >Country</label
            >
            <input
              class="input input-md rouned-lg"
              id="country"
              name="country"
              placeholder="Country"
              bind:value={country}

            />
          </div>
          <div class="flex  justify-between">
            <label class=" hidden label  text-black" for="postalZip"
              >Postal/ZIP</label
            >
            <input
              class="input input-md rouned-lg"
              id="postalZip"
              name="postalZip"
              placeholder="ZIP/Postal Code"
              bind:value={postalZip}

            />
          </div>
        </div>

        <div class="flex justify-center my-2">
          <div class="flex  justify-between">
            <label class="label  text-black hidden" for="label email"
              >Email</label
            ><br />
            <input
              class="input input-md rouned-lg"
              id="email"
              name="email"
              placeholder="Email "
              bind:value={email}

            />
          </div>

          <div class="flex justify-between">
            <label class="label hidden  text-black" for="password"
              >Password</label
            ><br />
            <input
              class="input input-md rouned-lg"
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              bind:value={password}

            />
          </div>
        </div>
      </div>
      <div class="flex justify-center my-2">
        <div class="flex  justify-between">
          <label class="label  text-black hidden" for="label email"
            >Phone Number</label
          ><br />
          <input
            class="input w-= input-md rouned-lg"
            id="phone"
            name="phone"
            placeholder="+(1) (999)-999-9999"
            type="tel"
            bind:value={phone}

          />
        </div>
      </div>

      <input class="btn btn-primary rouned-lg" type="submit" value="Register" />
    </form>
    <div class="flex  flex-col content-center flex-wrap justify-center">
      <h1 class="text-center my-2">Have An Account?</h1>
      <div class="flex w-full justify-center">
        <a class="btn btn-secondary text-primary w-full my-2" href="/signin"
          >Sign in</a
        >
      </div>
      <div
        class="flex-col justify-between h-20 w-full justify center content-center"
      >
        {#if form?.message}
          <div>
            <Alert message={form.message} />
          </div>
        {/if}
      </div>
    </div>
    <div />
  </div>
</div>

<style lang="postcss">
  :global(label) {
    color: white;
  }
  .form-box {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    background: rgb(231, 240, 255);
  }
  form {
  }
</style>
