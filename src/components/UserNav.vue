<template>
  <div
    class="bg-p inline-block w-12 h-12 rounded-full text-center pt-3 text-heading"
    @click="handleClick"
  >
    <p>H</p>
  </div>
  <ul
    v-if="data.hideDropdown"
    class="profile-dropdown bg-lg-1 max-w-[300px] p-4 rounded mt-2 block"
  >
    <li><a @click="Logout">Logout</a></li>
  </ul>
</template>

<script lang="ts">
import router from "@/router";
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "UserNav",

  setup() {
    const Logout = () => {
      localStorage.removeItem("my-token");
      router.push("/");
    };

    let data = reactive({
      hideDropdown: false,
    });

    const handleClick = () => {
      data.hideDropdown = !data.hideDropdown;
      console.log(data.hideDropdown);
    };

    return {
      Logout,
      handleClick,
      data,
    };
  },
});
</script>
