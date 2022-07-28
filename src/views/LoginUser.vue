<template>
<div class="md:flex h-screen">
  <div class="bg-acc-1 p-14 md:w-1/2">
    <onboarding-header class="lg:mb-32 md:mb-24 sm:mb-16" />
    <onboarding-slider :image="slideImage" :title="slideTitle" :desc="slideDesc" />
  </div>
  <div class="bg-white p-14 md:w-1/2 relative">
    <login-form />
  </div>
</div>
</template>

<script>
import OnboardingHeader from '@/components/OnboardingHeader.vue'
import OnboardingSlider from '@/components/OnboardingSlider.vue'
import LoginForm from '@/components/LoginForm.vue'

export default {
  name: 'LoginUser',
  components: {
    OnboardingHeader, OnboardingSlider, LoginForm
  },

  setup() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    let slideImage = require('@/assets/images/' + 'slide-2.png');
    let slideTitle = 'Build daily habits';
    let slideDesc = 'A simple habit tracker to help you stay consistent and visualize your progress and master your habits.';

    return {
      slideImage,
      slideTitle,
      slideDesc,
    }
  }
}
</script>

<style lang="scss">

</style>