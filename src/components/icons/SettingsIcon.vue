<template>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.07693 7.15386C6.22398 7.15386 7.15386 6.22398 7.15386 5.07693C7.15386 3.92987 6.22398 3 5.07693 3C3.92987 3 3 3.92987 3 5.07693C3 6.22398 3.92987 7.15386 5.07693 7.15386Z"
      :stroke="color"
      stroke-width="1.71429"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7.15381 5.07697H21"
      :stroke="color"
      stroke-width="1.71429"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 14.0769C13.147 14.0769 14.0769 13.147 14.0769 12C14.0769 10.8529 13.147 9.92303 12 9.92303C10.8529 9.92303 9.92303 10.8529 9.92303 12C9.92303 13.147 10.8529 14.0769 12 14.0769Z"
      :stroke="color"
      stroke-width="1.71429"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M2.99994 12H9.92303"
      :stroke="color"
      stroke-width="1.71429"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14.0769 12H21"
      :stroke="color"
      stroke-width="1.71429"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18.9231 21C20.0702 21 21 20.0702 21 18.9231C21 17.776 20.0702 16.8462 18.9231 16.8462C17.7761 16.8462 16.8462 17.776 16.8462 18.9231C16.8462 20.0702 17.7761 21 18.9231 21Z"
      :stroke="color"
      stroke-width="1.71429"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16.8461 18.923H2.99994"
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
  name: "SettingsIcon",
  props: ["color"],
});
</script>
