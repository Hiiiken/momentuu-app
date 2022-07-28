<template>
<div class="md:flex h-screen">
  <div class="bg-acc-1 p-14 md:w-1/2">
    <onboarding-header class="lg:mb-32 md:mb-24 sm:mb-16" />
    <onboarding-slider :image="slideImage" :title="slideTitle" :desc="slideDesc" />
  </div>
  <div class="bg-white p-14 md:w-1/2 relative">
    <password-reset-form />
  </div>
  
</div>
</template>

<script lang="ts">
import OnboardingHeader from '@/components/OnboardingHeader.vue'
import OnboardingSlider from '@/components/OnboardingSlider.vue'
import PasswordResetForm from '@/components/PasswordResetForm.vue'

export default {
  name: 'PasswordReset',
  components: {
    OnboardingHeader, OnboardingSlider, PasswordResetForm
  },  
  setup() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    let slideImage = require('@/assets/images/' + 'slide-3.png');
    let slideTitle = 'See your progress';
    let slideDesc = 'A quick overview of your activity and habit development during different periods of time in a simple reports page';

    return {
      slideImage,
      slideTitle,
      slideDesc,
    }
  }
}
</script>
