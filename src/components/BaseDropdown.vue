<template>
  <label v-if="label" class="text-body text-h block mb-2">{{ label }}</label>
  <select
    class="bg-lg-2 px-6 py-4 rounded text-lt text-body"
    @change="(event) => onChange((event.target as HTMLSelectElement).value)"
  >
    <option selected disabled>{{ defaultValue }}</option>
    <option v-for="option in options.labels" :key="option" :value="option">
      {{ option }}
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
      // console.log(myvalue);
      emit("onChange", myvalue);
    };

    return {
      onChange,
    };
  },
});
</script>
