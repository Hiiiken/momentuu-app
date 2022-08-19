<template>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.53845 2L4.69228 5.84617L8.53845 9.69233"
      :stroke="color"
      stroke-width="1.71429"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3.92305 13.9231C3.92305 15.5206 4.39675 17.0822 5.28426 18.4105C6.17177 19.7387 7.43322 20.7739 8.90909 21.3853C10.385 21.9966 12.009 22.1565 13.5757 21.8449C15.1425 21.5332 16.5817 20.764 17.7113 19.6344C18.8409 18.5048 19.6101 17.0657 19.9218 15.4989C20.2334 13.9321 20.0735 12.3081 19.4621 10.8322C18.8508 9.35636 17.8156 8.09491 16.4873 7.2074C15.1591 6.3199 13.5975 5.84619 12 5.84619H4.69228"
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
  name: "ResetIcon",
  props: ["color"],
});
</script>
