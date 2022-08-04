<template>
  <user-nav />
  <div class="flex">
    <div
      class="w-full lg:max-w-[320px] max-w-[80px] fixed ease-in-out duration-100"
    >
      <the-sidebar class="h-screen" />
    </div>
    <div
      class="bg-white w-full min-h-screen lg:p-[56px] p-[40px] pt-[56px] lg:pl-[376px] pl-[120px] ease-in-out duration-100"
    >
      <div class="mb-10">
        <h2 class="font-heading text-4xl leading-snug text-h mb-2">
          Welcome back!
        </h2>
        <p class="font-body text-t leading-normal">
          Let’s be a bit more productive today, eh?
        </p>
      </div>
      <div class="flex items-center">
        <base-dropdown
          :options="data"
          defaultValue="Select something"
          @onChange="selectedValue"
        />
        <button
          class="flex items-center ml-6 text-btn text-s ease-in-out duration-300 hover:text-p"
        >
          <time-icon color="#152E58" class="icon mr-2" />
          New label
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// import axios from 'axios';
import { defineComponent, reactive } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import UserNav from "@/components/UserNav.vue";
import TheSidebar from "@/components/TheSidebar.vue";
import BaseDropdown from "@/components/BaseDropdown.vue";
import TimeIcon from "@/components/icons/TimeIcon.vue";

export default defineComponent({
  name: "DashboardHome",
  components: {
    UserNav,
    TheSidebar,
    BaseDropdown,
    TimeIcon,
  },
  setup() {
    const router = useRouter();

    if (!localStorage.getItem("my-token")) {
      router.push("/");
      return;
    }

    let data = reactive({
      labels: ["Coding", "Design", "Reading"],
    });

    const selectedValue = (myvalue: string | number) => {
      console.log(myvalue);
    };

    return {
      data,
      selectedValue,
    };
  },
});
</script>

<style scoped></style>
