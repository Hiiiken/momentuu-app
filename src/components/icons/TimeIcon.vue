<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 14 14"
    height="24"
    width="24"
  >
    <g>
      <circle
        cx="7"
        cy="8"
        r="5.5"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></circle>
      <line
        x1="5.5"
        y1="0.5"
        x2="8.5"
        y2="0.5"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></line>
      <line
        x1="7"
        y1="0.5"
        x2="7"
        y2="2.5"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></line>
      <polyline
        points="5.5 6 7 8 9.5 8"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></polyline>
      <line
        x1="12"
        y1="2"
        x2="13"
        y2="3"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></line>
      <line
        x1="2"
        y1="2"
        x2="1"
        y2="3"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></line>
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "TimeIcon",
  props: ["color"],
});
</script>
