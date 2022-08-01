<template>
  <div class="absolute top-[56px] right-[50px]">
    <div
      class="cursor-pointer bg-p inline-block w-12 h-12 rounded-full text-center pt-3 text-heading absolute right-0 text-white leading-7"
      @click="handleClick"
    >
      <p>H</p>
    </div>
    <ul
      v-if="data.hideDropdown"
      class="bg-h text-white w-[250px] p-4 rounded mt-14 block ease-in-out duration-600 hover:bg-s"
    >
      <li class="cursor-pointer"><a @click="Logout">Logout</a></li>
    </ul>
  </div>
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
    };

    return {
      Logout,
      handleClick,
      data,
    };
  },
});
</script>
