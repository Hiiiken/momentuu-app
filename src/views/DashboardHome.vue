<template>
  <h1>You reached the dashboard! Welcome!</h1>
  <user-nav />
</template>

<script lang="ts">
// import axios from 'axios';
import { defineComponent } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import UserNav from "@/components/UserNav.vue";

export default defineComponent({
  name: "DashboardHome",
  components: {
    UserNav,
  },
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
