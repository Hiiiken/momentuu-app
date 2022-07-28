<template>
<div class="md:flex h-screen">
  <div class="bg-acc-1 p-14 md:w-1/2">
    <onboarding-header class="lg:mb-32 md:mb-24 sm:mb-16" />
    <onboarding-slider :image="slideImage" :title="slideTitle" :desc="slideDesc" />
  </div>
  <div class="bg-white p-14 md:w-1/2 relative">
    <register-form />
  </div>
  
</div>
</template>

<script lang="ts">
import OnboardingHeader from '@/components/OnboardingHeader.vue'
import OnboardingSlider from '@/components/OnboardingSlider.vue'
import RegisterForm from '@/components/RegisterForm.vue'

export default {
  name: 'RegisterUser',
  components: {
    OnboardingHeader, OnboardingSlider, RegisterForm
  },

  setup() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    let slideImage = require('@/assets/images/' + 'slide-1.png');
    let slideTitle = 'Focus on what matters most';
    let slideDesc = 'Use Pomodoro technique to focus on your most important tasks each day, and continually improve the way you work or study.';

    return {
      slideImage,
      slideTitle,
      slideDesc,
    }
  }
}
</script>
