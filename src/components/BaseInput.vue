<template>
  <label v-if="label" class="text-body text-h block mb-2">{{ label }}</label>
  <input
    type="text"
    class="block w-full bg-white px-6 py-4 rounded text-lt text-body border border-lg-1 focus:border-p"
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
  },
});
</script>
