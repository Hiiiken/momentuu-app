<template>
  <div class="text-center md:absolute md:top-1/2 md:left-1/2 md:translate-x-[-50%] md:translate-y-[-50%] md:w-[420px] md:max-w-full">
    <h3 class="text-heading text-2xl text-h pb-8">
      Sign in to Momentuu
    </h3>
    <button type="button" class="border border-lt rounded px-6 py-4 w-full text-t text-btn flex justify-center hover:bg-lt hover:text-white hover:border-lt ease-in-out duration-300">
      <img src="@/assets/images/icon-google.png" alt="google icon" class="mr-2">
      Sign in with Google
    </button>
    <!-- Or divider -->
    <div class="flex items-center my-8">
      <span class="w-full h-[1px] bg-slate-500 text-black block bg-lg-1"></span>
      <span class="mx-2 text-body text-lt">Or</span>
      <span class="w-full h-[1px] bg-slate-500 text-black block bg-lg-1"></span>
    </div>
    <!-- Error messages box -->
    <ul v-if="data.errors.length" class="list-disc bg-red-50 rounded border border-red-200 p-4 mb-8 text-red-400 font-body text-left">
      <li v-for="error in data.errors" :key="error" class="ml-4">{{ error }}</li>
    </ul>
    <form @submit.prevent="handleSubmit()" class="text-left">
      <div class="input-group mb-8">
        <label class="inline-block mb-2 text-body text-h">Email</label>
        <input :class="{'border-red-400': data.isError && !data.email || data.emailError}" v-model="data.email" type="text" name="email" placeholder="Your email" class="w-full border border-lg-1 rounded px-6 py-4 text-t text-body placeholder:text-lt focus:outline-none focus:border-s">
      </div>
      <div class="input-group mb-8">
        <label class="inline-block mb-2 text-body text-h">Password</label>
        <input :class="{'border-red-400': data.isError && !data.password || data.passwordError}" v-model="data.password" type="password" name="password" placeholder="6+ characters" class="w-full border border-lg-1 rounded px-6 py-4 text-t text-body placeholder:text-lt focus:outline-none focus:border-s">
      </div>
      
      <router-link to="/password-reset" class="text-body text-s block mb-8 hover:text-p">Forgot password?</router-link>
      <button type="submit" class="bg-p rounded px-6 py-4 w-full text-white text-btn flex justify-center hover:bg-s hover:text-white hover:border-s ease-in-out duration-300">Sing in</button>
    </form>
  </div>
  <p class="md:absolute md:bottom-10 md:left-1/2 md:translate-x-[-50%] text-center mt-8 text-t">
    Not a member?
    <router-link to="/register" class="text-body text-s mb-8 hover:text-p">Sign up now</router-link>
  </p>
</template>

<script>
import axios from 'axios';
import { reactive } from 'vue';
import { useRouter } from 'vue-router'

export default {
  name: 'LoginForm',
  setup() {
    const router = useRouter();

    const data = reactive({
      email: '',
      password: '',
      isError: false,
      emailError: '',
      passwordError: '',
      errors: []
    });

    const isEmailValid = (email) => {
      return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
    }

    const isPasswordValid = (password) => {
      return password.length > 6;
    }

    const handleSubmit = () => {
      data.isError = false;
      data.emailError = '';
      data.passwordError = '';
      data.errors = [];

      if(!data.email || !data.password) {
        data.isError = true;
        data.errors.push('All fields are required');
        return;
      }

      if(!isEmailValid(data.email) && !isPasswordValid(data.password)) {
        data.isError = true;
        data.emailError = 'Email is invalid';
        data.passwordError = 'Password must be more that 6 characters';
        data.errors.push(data.emailError);
        data.errors.push(data.passwordError);
        return;
      } else if(!isEmailValid(data.email)) {
        data.isError = true;
        data.emailError = 'Email is invalid';
        data.errors.push(data.emailError);
        return;
      } else if(!isPasswordValid(data.password)) {
        data.isError = true;
        data.passwordError = 'Password must be more that 6 characters';
        data.errors.push(data.passwordError);
        return;
      }

      axios
        .post('https://reqres.in/api/login', {
          email: data.email,
          password: data.password
        })
        .then(res => {
          console.log(res);
          localStorage.setItem('my-token', res.data.token);
          router.push('/dashboard-home');
        })
        .catch(err => {
          console.log(err);
          localStorage.removeItem('my-token');
          if(err.response.status == 400) {
            data.errors.push('User not found');
          }
        });
    }

    return {
      data,
      handleSubmit
    }
  }
}
</script>
