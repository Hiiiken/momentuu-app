<template>
  <div class="bg-acc-1 p-[56px] relative">
    <a href="/" class="block mb-[72px]">
      <img src="@/assets/images/logo.png" alt="logo" />
    </a>
    <ul>
      <li class="block mb-6">
        <a
          href="#"
          class="group text-btn text-h flex items-center ease-in-out duration-300 hover:text-p"
        >
          <time-icon :color="'#1E1E1E'" class="icon mr-2" />
          Pomodoro & Todos
        </a>
      </li>
      <li class="block mb-6">
        <a
          href="#"
          class="group text-btn text-h flex items-center ease-in-out duration-300 hover:text-p"
        >
          <target-icon :color="'#1E1E1E'" class="icon mr-2" />
          Habit Tracker
        </a>
      </li>
      <li class="block mb-6">
        <a
          href="#"
          class="group text-btn text-h flex items-center ease-in-out duration-300 hover:text-p"
        >
          <stats-icon :color="'#1E1E1E'" class="icon mr-2" />
          Stats
        </a>
      </li>
      <li class="block mb-6">
        <a
          href="#"
          class="group text-btn text-h flex items-center ease-in-out duration-300 hover:text-p"
        >
          <settings-icon :color="'#1E1E1E'" class="icon mr-2" />
          Habit Tracker
        </a>
      </li>
    </ul>
    <p class="text-body-sm text-lt absolute bottom-[40px] left-[56px]">
      Designed & developed by
      <a
        href="https://github.com/Hiiiken"
        target="_blank"
        class="hover:text-p ease-in-out duration-300"
        >Hiken</a
      >.
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TimeIcon from "@/components/icons/TimeIcon.vue";
import TargetIcon from "@/components/icons/TargetIcon.vue";
import StatsIcon from "@/components/icons/StatsIcon.vue";
import SettingsIcon from "@/components/icons/SettingsIcon.vue";

export default defineComponent({
  name: "TheSidebar",
  components: {
    TimeIcon,
    TargetIcon,
    StatsIcon,
    SettingsIcon,
  },
});
</script>

<style>
a:hover .icon path {
  stroke: #e37871;
  transition: all ease-in-out 300ms;
}
</style>
