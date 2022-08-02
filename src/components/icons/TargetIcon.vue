<template>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 19.7143C16.2605 19.7143 19.7143 16.2605 19.7143 12C19.7143 7.73952 16.2605 4.28572 12 4.28572C7.73951 4.28572 4.28571 7.73952 4.28571 12C4.28571 16.2605 7.73951 19.7143 12 19.7143Z"
      :stroke="color"
      stroke-width="1.71429"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 12.8572C12.4734 12.8572 12.8571 12.4734 12.8571 12C12.8571 11.5266 12.4734 11.1429 12 11.1429C11.5266 11.1429 11.1428 11.5266 11.1428 12C11.1428 12.4734 11.5266 12.8572 12 12.8572Z"
      :stroke="color"
      stroke-width="1.71429"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 4.28572V0.857147"
      :stroke="color"
      stroke-width="1.71429"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 23.1429V19.7143"
      :stroke="color"
      stroke-width="1.71429"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M19.7142 12H23.1428"
      :stroke="color"
      stroke-width="1.71429"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M0.857117 12H4.28569"
      :stroke="color"
      stroke-width="1.71429"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "TargetIcon",
  props: ["color"],
});
</script>
