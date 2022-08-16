<template>
  <label v-if="label" class="text-body text-h block mb-2">{{ label }}</label>
  <select
    class="block w-full bg-lg-2 px-6 py-4 rounded text-t text-body outline outline-lg-2 outline-1 focus:outline-h hover:outline-h duration-300"
    @change="(event) => onChange((event.target as HTMLSelectElement).value)"
  >
    <option selected disabled>{{ defaultValue }}</option>
    <option v-for="option in options" :key="option.id" :value="option.name">
      {{ option.name }}
    </option>
  </select>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "BaseDropdown",
  props: {
    label: {
      type: String,
      default: "",
    },
    defaultValue: {
      type: String,
      default: "Select an option",
      required: false,
    },
    options: {
      type: Object,
      required: true,
    },
  },
  emits: ["onChange"],

  setup(props, { emit }) {
    const onChange = (myvalue: string | number) => {
      emit("onChange", myvalue);
    };

    return {
      onChange,
    };
  },
});
</script>
