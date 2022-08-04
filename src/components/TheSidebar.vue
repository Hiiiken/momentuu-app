<template>
  <div
    class="bg-acc-1 lg:p-[56px] pt-[56px] px-[24px] relative ease-in-out duration-100"
  >
    <a href="/" class="block mb-[72px]">
      <img
        src="@/assets/images/logo.png"
        alt="logo"
        class="lg:block hidden ease-in-out duration-100"
      />
      <img
        src="@/assets/images/logo-icon.png"
        alt="logo"
        class="lg:hidden ease-in-out duration-100"
      />
    </a>
    <ul class="lg:text-left text-center">
      <li class="lg:block inline-block mb-6">
        <a
          href="#"
          class="text-btn text-h flex items-center ease-in-out duration-300 hover:text-p"
        >
          <time-icon :color="'#1E1E1E'" class="icon lg:mr-2" />
          <span class="lg:block hidden">Pomodoro & Todos</span>
        </a>
      </li>
      <li class="lg:block inline-block mb-6">
        <a
          href="#"
          class="text-btn text-h flex items-center ease-in-out duration-300 hover:text-p"
        >
          <target-icon :color="'#1E1E1E'" class="icon lg:mr-2" />
          <span class="lg:block hidden">Habit Tracker</span>
        </a>
      </li>
      <li class="lg:block inline-block mb-6">
        <a
          href="#"
          class="text-btn text-h flex items-center ease-in-out duration-300 hover:text-p"
        >
          <stats-icon :color="'#1E1E1E'" class="icon lg:mr-2" />
          <span class="lg:block hidden">Stats</span>
        </a>
      </li>
      <li class="lg:block inline-block mb-6">
        <a
          href="#"
          class="text-btn text-h flex items-center ease-in-out duration-300 hover:text-p"
        >
          <settings-icon :color="'#1E1E1E'" class="icon lg:mr-2" />
          <span class="lg:block hidden">Habit Tracker</span>
        </a>
      </li>
    </ul>
    <p
      class="text-body-sm text-lt absolute bottom-[40px] lg:left-[56px] left-[28px]"
    >
      <span class="lg:inline-block hidden">Designed & developed by </span>
      <a
        href="https://github.com/Hiiiken"
        target="_blank"
        class="hover:text-p ease-in-out duration-300"
      >
        <span class="lg:inline-block hidden">: Hiken</span>
        <hiken-icon :color="'#1E1E1E'" class="icon block lg:hidden"
      /></a>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TimeIcon from "@/components/icons/TimeIcon.vue";
import TargetIcon from "@/components/icons/TargetIcon.vue";
import StatsIcon from "@/components/icons/StatsIcon.vue";
import SettingsIcon from "@/components/icons/SettingsIcon.vue";
import HikenIcon from "@/components/icons/HikenIcon.vue";

export default defineComponent({
  name: "TheSidebar",
  components: {
    TimeIcon,
    TargetIcon,
    StatsIcon,
    SettingsIcon,
    HikenIcon,
  },
});
</script>

<style>
a:hover .icon path,
button:hover .icon path {
  stroke: #e37871;
  transition: all ease-in-out 300ms;
}
</style>
