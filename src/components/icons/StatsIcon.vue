<template>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.84216 9.26649H3V21H21"
      :stroke="color"
      stroke-width="1.71429"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15.519 3H8.84222V21H15.519V3Z"
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
  name: "StatsIcon",
  props: ["color"],
});
</script>
