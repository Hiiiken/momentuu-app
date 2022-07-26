<template>
  <h1>You reached the dashboard!</h1>
  <p>Welcome {{ user }}</p>
</template>

<script>
import axios from 'axios';

export default {
  name: 'DashboardHome',
  data() {
    return {
      user: ''
    }
  },
  created() {
    axios
      .get('https://reqres.in/api/users/2', {
        headers: {
          Autorization: 'Bearer ' + localStorage.getItem('my-token')
        }
      })
      .then(res => {
        this.user = res.data.data.first_name;
      })
  }
}
</script>

<style>
h1 {
  color: crimson;
  font-size: 32px;
}
</style>