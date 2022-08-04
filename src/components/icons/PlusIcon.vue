<template>
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 23.1429C18.154 23.1429 23.1429 18.154 23.1429 12C23.1429 5.84597 18.154 0.857147 12 0.857147C5.84597 0.857147 0.857143 5.84597 0.857143 12C0.857143 18.154 5.84597 23.1429 12 23.1429Z"
      :stroke="color"
      stroke-width="1.71429"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 6.85718V17.1429"
      :stroke="color"
      stroke-width="1.71429"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.85714 12.0001H17.1429"
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
  name: "PlusIcon",
  props: ["color"],
});
</script>
