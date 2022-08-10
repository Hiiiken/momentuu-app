<template>
  <label v-if="label" class="text-body text-h block mb-2">{{ label }}</label>
  <input
    :type="type"
    class="block w-full bg-white px-6 py-4 rounded text-t text-body border border-lg-1 focus:border-h outline-none"
    :placeholder="placeHolder"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseInput",
  props: {
    label: {
      type: String,
    },
    placeHolder: {
      type: String,
    },
    type: {
      type: String,
      required: true,
    },
  },
});
</script>
