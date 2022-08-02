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
      <div>
        <h2 class="font-heading text-4xl leading-snug text-h mb-2">
          Welcome back!
        </h2>
        <p class="font-body text-t leading-normal">
          Let’s be a bit more productive today, eh?
        </p>
      </div>
    </div>
  </div>
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
