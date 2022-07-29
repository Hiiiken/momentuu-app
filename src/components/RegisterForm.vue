<template>
  <div class="text-center md:absolute md:top-1/2 md:left-1/2 md:translate-x-[-50%] md:translate-y-[-50%] md:w-[420px] md:max-w-full">
    <h3 class="text-heading text-2xl text-h pb-8">
      Sign up to Momentuu
    </h3>
    <button type="button" class="border border-lt rounded px-6 py-4 w-full text-t text-btn flex justify-center hover:bg-lt hover:text-white hover:border-lt ease-in-out duration-300">
      <img src="@/assets/images/icon-google.png" alt="google icon" class="mr-2">
      Sign up with Google
    </button>
    <!-- Or divider -->
    <div class="flex items-center my-8">
      <span class="w-full h-[1px] bg-slate-500 text-black block bg-lg-1"></span>
      <span class="mx-2 text-body text-lt">Or</span>
      <span class="w-full h-[1px] bg-slate-500 text-black block bg-lg-1"></span>
    </div>
    <form @submit.prevent="handleSubmit" class="text-left">
      <div class="input-group mb-8">
        <label class="inline-block mb-2 text-body text-h">Name</label>
        <input :class="{'border-red-400': data.isError && !data.name}" v-model="data.name" type="text" name="name" placeholder="Your name" class="w-full border border-lg-1 rounded px-6 py-4 text-t text-body placeholder:text-lt focus:outline-none focus:border-s">
        <p v-if="data.isError && !data.name" :class="'mt-4 text-red-400 font-body'">This field is required</p>
      </div>
      <div class="input-group mb-8">
        <label class="inline-block mb-2 text-body text-h">Email</label>
        <input :class="{'border-red-400': data.isError && !data.email}" v-model="data.email" type="text" name="email" placeholder="Your email" class="w-full border border-lg-1 rounded px-6 py-4 text-t text-body placeholder:text-lt focus:outline-none focus:border-s">
        <p v-if="data.isError && !data.email" :class="'mt-4 text-red-400 font-body'">This field is required</p>
        <p v-if="data.isError && data.emailError" :class="'mt-4 text-red-400 font-body'">{{ data.emailError }}</p>
      </div>
      <div class="input-group mb-8">
        <label class="inline-block mb-2 text-body text-h">Password</label>
        <input :class="{'border-red-400': data.isError && !data.password}" v-model="data.password" type="password" name="password" placeholder="6+ characters" class="w-full border border-lg-1 rounded px-6 py-4 text-t text-body placeholder:text-lt focus:outline-none focus:border-s">
        <p v-if="data.isError && !data.password" :class="'mt-4 text-red-400 font-body'">This field is required</p>
        <p v-if="data.isError && data.passwordError" :class="'mt-4 text-red-400 font-body'">{{ data.passwordError }}</p>
      </div>
      <div class="input-group mb-8 flex items-center">
        <input v-model="data.conditions" type="checkbox" id="conditions" name="conditions" class="mr-2 w-4 h-4 accent-s">
        <label :class="{'text-p': !data.conditions && data.isError}" for="conditions" class="inline-block text-body text-h">Agree to our terms & condition</label>
      </div>
      <button type="submit" class="bg-p rounded px-6 py-4 w-full text-white text-btn flex justify-center hover:bg-s hover:text-white hover:border-s ease-in-out duration-300">Create account</button>
    </form>
  </div>
  <p class="md:absolute md:bottom-10 md:left-1/2 md:translate-x-[-50%] text-center mt-8 text-t">
    Already a member?
    <router-link to="/" class="text-body text-s mb-8 hover:text-p">Sign in</router-link>
  </p>
</template>

<script>
import axios from 'axios';
import { reactive } from 'vue';
import { useRouter } from 'vue-router'

export default {
  name: 'RegisterForm',
  setup() {
    const router = useRouter();

    const data = reactive({
      name: '',
      email: '',
      password: '',
      conditions: false,
      isError: false,
      emailError: '',
      passwordError: ''
    });

    const isValidEmail = (email) => {
      return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)
    }

    const isValidPassword = (password) => {
      return password.length > 6
    }

    const handleSubmit = () => {
      data.isError = false;
      data.emailError = '';
      data.passwordError = '';

      if(!data.name || !data.email || !data.password || !data.conditions) {
        data.isError = true;
        return;
      }

      if(!isValidEmail(data.email) && !isValidPassword(data.password)) {
        data.isError = true;
        data.emailError = 'Email is invalid';
        data.passwordError = 'Password must be more that 6 characters';
        return;
      } else if (!isValidEmail(data.email) && isValidPassword(data.password)) {
        data.isError = true;
        data.emailError = 'Email is invalid';
      } else if (isValidEmail(data.email) && !isValidPassword(data.password)) {
        data.isError = true;
        data.passwordError = 'Password must be more that 6 characters';
      }

      axios
        .post('https://reqres.in/api/register', {
          name: data.name,
          email: data.email,
          password: data.password,
          conditions: data.conditions
        })
        .then(res => {
          console.log(res);
          router.push('/');
        })
        .catch(err => {
          console.log(err);
        });
    }

    return {
      data,
      handleSubmit,
    }
  }
}
</script>
