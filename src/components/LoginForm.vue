<template>
<div class="text-center w-[500px] max-w-full m-auto">
  <h3 class="text-heading text-2xl text-h pb-8">
    Sign in to Momentuu
  </h3>
  <button type="button" class="border border-lt rounded px-6 py-4 w-full text-t text-btn flex justify-center hover:bg-s hover:text-white hover:border-s ease-in-out duration-300">
    <img src="@/assets/images/icon-google.png" alt="google icon" class="mr-2">
    Sign in with Google
  </button>
</div>
</template>

<script lang="ts">
export default {
  name: 'LoginForm'
}
</script>
