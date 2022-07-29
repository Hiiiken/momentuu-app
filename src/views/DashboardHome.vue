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
}
</script>