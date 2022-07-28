<template>
  <div class="text-center w-full absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] xl:max-w-[500px] sm:max-w-[350px]">
    <h3 class="text-heading text-2xl text-h pb-4 text-left">
      Forgot password?
    </h3>
    <p class="pb-8 text-left text-body text-t">
      Enter the email address you used when you joined and 
      we’ll send you instructions to reset your password.
    </p>
    <form @submit.prevent="handleSubmit()" class="text-left">
      <div class="input-group mb-8">
        <label class="inline-block mb-2 text-body text-h">Email</label>
        <input required type="text" name="email" placeholder="Your email" class="w-full border border-lg-1 rounded px-6 py-4 text-t text-body placeholder:text-lt focus:outline-none focus:border-s">
      </div>
      <button type="submit" class="bg-p rounded px-6 py-4 w-full text-white text-btn flex justify-center hover:bg-s hover:text-white hover:border-s ease-in-out duration-300">
        Send reset instructions
      </button>
    </form>
  </div>
</template>

<script lang="ts">
// import { reactive } from 'vue';
// import { useRouter } from 'vue-router'

export default {
  name: 'PasswordResetForm',
  setup() {
    // const router = useRouter();

    

    return {
    }
  }
}
</script>
