<template>
  <user-nav />
  <the-sidebar />
</template>

<script lang="ts">
// import axios from 'axios';
import { defineComponent } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import UserNav from "@/components/UserNav.vue";
import TheSidebar from "@/components/TheSidebar.vue";

export default defineComponent({
  name: "DashboardHome",
  components: {
    UserNav,
    TheSidebar,
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
