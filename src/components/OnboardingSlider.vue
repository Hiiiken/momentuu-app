<template>
  <div class="text-center">
    <img :src="image" :alt="image" class="w-[620px] m-auto mb-5">
    <h3 class="text-heading text-2xl text-h pb-3 w-[620px] max-w-full m-auto">
      {{ title }}
    </h3>
    <p class="text-body text-t w-[500px] max-w-full m-auto leading-normal">
      {{ desc }}
    </p>
  </div>
</template>

<script lang="ts">

export default {
  name: 'OnboardingSlider',
  props: ['image', 'title', 'desc', ],
}
</script>