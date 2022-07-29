<template>
  <div class="text-center md:absolute md:top-1/2 md:left-1/2 md:translate-x-[-50%] md:translate-y-[-50%] md:w-[420px] md:max-w-full">
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
        <input :class="{ 'border-red-400 placeholder:text-red-400': data.isError }" v-model="data.email" type="email" name="email" placeholder="Your email" class="w-full border border-lg-1 rounded px-6 py-4 text-t text-body placeholder:text-lt focus:outline-none focus:border-s">
        <p v-if="data.isError" :class="'mt-4 text-red-400 font-body'">Please enter the email you registered with</p>
        <p v-if="data.isSuccess" :class="'bg-green-50 rounded border border-green-200 p-4 mt-4 text-green-500 font-body'">
          If you used this email when you created your account, 
          instructions to reset your password will be sent to you. 
          Please check your email.
          <a href="/" class="text-body text-s block pt-2 hover:text-p">Go to login page</a>
        </p>
      </div>
      <button type="submit" class="bg-p rounded px-6 py-4 w-full text-white text-btn flex justify-center hover:bg-s hover:text-white hover:border-s ease-in-out duration-300">
        Send reset instructions
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { reactive } from 'vue';

export default {
  name: 'PasswordResetForm',
  setup() {
    let data = reactive({
      email: '',
      isError: false,
      isSuccess: false
    });

    let handleSubmit = () => {
      if(!data.email) {
        data.isError = true;
        data.isSuccess = false;
        return;
      }

      axios
        .post('https://reqres.in/api/users/2', {
          email: data.email,
        })
        .then(res => {
          console.log(res);
          data.email = '';
          data.isError = false;
          data.isSuccess = true;
        })
        .catch(err => {
          console.log(err);
          data.email = '';
        });

      
    }

    return {
      data,
      handleSubmit,
    }
  }
}
</script>
