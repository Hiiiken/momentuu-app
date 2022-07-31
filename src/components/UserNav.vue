<template>
  <div
    class="user-profile bg-p inline-block w-12 h-12 rounded-full text-center pt-3 text-heading"
  >
    <p>H</p>
  </div>
  <ul>
    <li><a @click="Logout">Logout</a></li>
  </ul>
</template>

<script lang="ts">
import router from "@/router";
import { defineComponent } from "vue";

export default defineComponent({
  name: "UserNav",

  setup() {
    const Logout = () => {
      localStorage.removeItem("my-token");
      router.push("/");
    };

    return {
      Logout,
    };
  },
});
</script>

<style scoped></style>
