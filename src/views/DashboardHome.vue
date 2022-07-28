<template>
  <h1>You reached the dashboard!</h1>
  <!-- <p>Welcome {{ user }}</p> -->
</template>

<script lang="ts">
// import axios from 'axios';
import { useRouter } from 'vue-router'

export default {
  name: 'DashboardHome',
  setup() {
    const router = useRouter();

    if(!localStorage.getItem('my-token')) {
      router.push('/');
      return;
    }

    return {

    }
  },
// created() {
// This is how to get the logged in user info to display it on the page
//   // axios
//   //   .get('https://reqres.in/api/users/2', {
//   //     headers: {
//   //       Autorization: 'Bearer ' + localStorage.getItem('my-token')
//   //     }
//   //   })
//   //   .then(res => {
//   //     this.user = res.data.data.first_name;
//   //   })
// }
}
</script>

<style>
h1 {
  color: crimson;
  font-size: 32px;
}
</style>