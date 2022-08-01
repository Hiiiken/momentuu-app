<template>
  <div class="bg-acc-1 p-[56px]">
    <a href="/">
      <img src="@/assets/images/logo.png" alt="logo" />
    </a>
    <ul>
      <li>
        <time-icon color="purple" />
        <a href="#">Pomodoro & Todos</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TimeIcon from "@/components/icons/TimeIcon.vue";

export default defineComponent({
  name: "TheSidebar",
  components: {
    TimeIcon,
  },
});
</script>
