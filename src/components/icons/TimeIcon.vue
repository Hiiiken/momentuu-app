<template>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22C16.6732 22 20.4615 18.2116 20.4615 13.5385C20.4615 8.8653 16.6732 5.07695 12 5.07695C7.32686 5.07695 3.53851 8.8653 3.53851 13.5385C3.53851 18.2116 7.32686 22 12 22Z"
      :stroke="color"
      stroke-width="1.71429"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.69238 2H14.3078"
      :stroke="color"
      stroke-width="1.71429"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 2V5.07692"
      :stroke="color"
      stroke-width="1.71429"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.69238 10.4616L12.0001 13.5385H15.8462"
      :stroke="color"
      stroke-width="1.71429"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M19.6923 4.30762L21.2308 5.84608"
      :stroke="color"
      stroke-width="1.71429"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4.30774 4.30762L2.76929 5.84608"
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
  name: "TimeIcon",
  props: ["color"],
});
</script>
