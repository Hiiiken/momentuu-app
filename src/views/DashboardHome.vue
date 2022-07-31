<template>
  <h1>You reached the dashboard! Welcome!</h1>
</template>

<script lang="ts">
// import axios from 'axios';
import { defineComponent } from "@vue/runtime-core";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "DashboardHome",
  setup() {
    const router = useRouter();

    if (!localStorage.getItem("my-token")) {
      router.push("/");
      return;
    }

    return {};
  },
});
</script>
