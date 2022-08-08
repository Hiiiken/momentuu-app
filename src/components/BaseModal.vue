<template>
  <div class="modal-overlay bg-black/40 fixed top-0 left-0 w-full h-full z-20">
    <div
      class="modal-content-container bg-white w-[600px] max-w-full absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] p-[40px] rounded-2xl max-h-[90%] overflow-y-auto"
    >
      <button class="fixed top-6 right-6">
        <close-icon
          @click="$emit('close')"
          color="#9AA5B8"
          class="icon icon-close"
        />
      </button>
      <h3 v-if="title" class="text-heading text-h text-2xl mb-4">
        {{ title }}
      </h3>
      <p v-if="text" class="text-body text-t">
        {{ text }}
      </p>
      <button
        v-if="buttonOk"
        class="bg-p py-4 px-6 rounded text-white text-btn ease-in-out duration-300 hover:bg-s inline-block mt-8 mr-4"
      >
        {{ buttonOk }}
      </button>
      <button
        v-if="buttonNo"
        @click="$emit('close')"
        class="bg-transparent border border-lt py-4 px-6 rounded text-t text-btn ease-in-out duration-300 hover:bg-s hover:border-s hover:text-white inline-block mt-8"
      >
        {{ buttonNo }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CloseIcon from "@/components/icons/CloseIcon.vue";

export default defineComponent({
  name: "BaseModal",
  components: { CloseIcon },
  props: {
    title: {
      type: String,
      default: "Modal title",
      required: true,
    },
    text: {
      type: String,
      default: "Modal paragraph",
    },
    buttonOk: {
      type: String,
    },
    buttonNo: {
      type: String,
    },
  },

  // setup() {
  //   const closeModal = () => {
  //     console.log("Close");
  //   };

  //   return {
  //     closeModal,
  //   };
  // },
});
</script>

<style>
button:hover .icon.icon-close path {
  stroke: #1e1e1e;
  transition: all ease-in-out 300ms;
}
</style>
